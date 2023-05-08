## 网易云音乐笔记

### 0. 技术栈

- React 18
- TS
- webpack
- Redux RTK
- antd

### 1. 创建项目

```bash
create-react-app netease_cloud_music --template typescript
```

### 2. 项目初始化

1. 配置图标

2. 配置网页 `title`

3. **配置目录别名**

   1. 安装 craco: `create-react-app config`

   ```bash
   npm i @craco/craco@alpha -D
   ```

   2. 创建配置文件`craco.config.js`

   ```js
   const path = require('path')

   const resolve = (dir) => path.resolve(__dirname, dir)

   module.exports = {
     webpack: {
       alias: {
         '@': resolve('src')
       }
     }
   }
   ```

   > 能找到，但是**没提示**，并且 ts 会报错（因为 ts 不知道`@`是哪个路径，所以还需要再 ts 配置中`@`对应的路径）

   3. 修改`tscoonfig.json`

   ```json
   "baseUrl": ".",
     "paths": {
       "@/*": [
         "src/*"
       ]
     }
   ```

   ![image-20230506172407746](assets/image-20230506172407746.png)

   > 先指明`baseUrl`，然后**配置路径别名**

   4. 修改启动方式为 `craco` `package.json`

   ![image-20230506172528500](assets/image-20230506172528500.png)

4. 项目集成`prettier + eslint`

   1. 创建`.editorconfig`

      ```bash
      # http://editorconfig.org

      root = true

      [*] # 表示所有文件适用
      charset = utf-8 # 设置文件字符集
      indent_style = space # 缩进风格(tab | space)
      indent_size = 2 # 缩进大小
      end_of_line = lf # 控制换行类型(lf | cr | crlf)
      trim_trailing_whitespace = true # 去除行尾的任意空白符
      insert_final_newline = true # 始终在文件末尾插入一个新行

      [*.md] # 表示仅对 md 文件使用一下规则
      max_line_length = off
      trim_trailing_whitespace = false
      ```

   2. 配置`prettier`

      1. 安装

      ```bash
      npm i prettier  -D
      ```

      2. 创建`.prettierrc`

      ```bash
      {
        "useTabs": false,
        "tabWidth": 2,
        "printWidth": 80,
        "singleQuote": true,
        "trailingComma": "none",
        "semi": false
      }
      ```

      2. 创建`.prettierignore`

      ```bash
      /build/*
      .local
      .output.js
      /node_modules/**

      **/*.svg
      **/*.sh

      /public/*
      ```

      3. 添加所有文件格式化指令

      ```json
      "prettier": "prettier --write ."
      ```

      ![image-20230507135432045](assets/image-20230507135432045.png)

      > 用于整体格式化所有代码

      ```bash
      npm run prettier
      ```

   3. 集成`eslint`

      1. 安装

      ```bash
      npx eslint --init
      ```

      ![image-20230507144052453](assets/image-20230507144052453.png)

      ![image-20230507144058148](assets/image-20230507144058148.png)

      会自动生成`.eslintrc.js`

      ```js
      module.exports = {
        env: {
          browser: true,
          es2021: true,
          node: true
        },
        extends: [
          'eslint:recommended',
          'plugin:react/recommended',
          'plugin:@typescript-eslint/recommended',
          'plugin:prettier/recommended'
        ],
        overrides: [],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module'
        },
        plugins: ['react', '@typescript-eslint'],
        rules: {
          '@typescript-eslint/no-var-requires': 'off'
        }
      }
      ```

      ```
      // commonjs规范
      // 避免 module.exports报错
      env: {
        node: true
      },


      // 避免 requires 报错
      rules: {
      	'@typescript-eslint/no-var-requires': 'off'
      }
      ```
    
      2. `eslint` 结合 `prettier`
    
      > 是`eslint`检查时 按照`prettier`规范
    
      ```
      npm i eslint-plugin-prettier eslint-config-prettier -D
      ```
    
      ```js
      // eslint 结合 prettier
      extends: [
        'plugin:prettier/recommended'
      ],
      ```
    
      > prittier**书写**代码时检查规范
      >
      > eslint **编译**代码时检查规范

### 3. 项目结构搭建

![image-20230507150630107](assets/image-20230507150630107.png)

### 4. css 样式重置

1. 安装

```bash
npm i normalize.css
```

2. 通过`craco`配置`less`

```bash
npm i craco-less@2.1.0-alpha.0
```

`craco.config.js`添加配置

```js
const CracoLessPlugin = require('craco-less')
module.exports = {
  plugins: [{ plugin: CracoLessPlugin }]
}
```

> 只有配置了`less` `react`项目才能识别`.less`文件

3. 创建**重置**、**初始化**css 样式、**样式导出**文件

![image-20230507153841142](assets/image-20230507153841142.png)

4. index.tsx 中引入

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import 'normalize.css'
import './assets/css/index.less'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

### 5. 路由配置

1. 安装 react-router

```bash
npm i react-router-dom
```

2. 创建路由文件`router/index.tsx`

```tsx
import React from 'react'
import { RouteObject } from 'react-router-dom'
import Home from '@/views/home'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  }
]

export default routes
```

> - tsx 文件 因为需要识别组件，所以也需要导入 react
> - routes 数组需要类型，这样也能有属性名提示

3. 使用路由表

`App.tsx`

```tsx
import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  const outlet = useRoutes(routes)

  return <div>{outlet}</div>
}

export default App
```

4. 选择路由模式

`index.tsx`

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from '@/App'
import 'normalize.css'
import './assets/css/index.less'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
```

> 使用路由表`useRoutes`，需要将整个项目包裹在`<Router>`中，所以，我们需要使用`<HashRouter>/<BrowserRouter>`

#### 1. 一级路由配置

1. 配置用户代码片段

```tsx
import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Template: React.FC<IProps> = () => {
  return <div>Template</div>
}

export default memo(Template)

```

> https://snippet-generator.app/
>
> - `React.FC`：React 函数式组件类型
> - 通过传入类型的形式，确定参数类型`IProps`
> - React 更新后，需要自己添加传入的可选属性：`children`，老版本自动添加为可选，*通过交叉类型实现*
> - 最后通过`memo` `HOC`导出

2. 路由重定向

```tsx
{
  path: '/',
  element: <Navigate to="/discover" />
},
```

> `<Navigate />`

#### 2. 路由懒加载

> 路由组件分包处理（`import()`）
>
> - 因为`webpack`默认会将它所有直接`import`导入的组件打包到一个文件中，如果使用`import()`函数，则会进行分包处理（*模块化*）
> - 这种操作在`vue/react`路由组件中成为**懒加载**

```tsx
import React, { Suspense, lazy } from 'react'
import Loading from '@/base-ui/loading'

const Discover = lazy(() => import('@/views/discover'))

const lazyLoad = (RC: React.FC) => {
  return (
    <Suspense fallback={<Loading />}>
      <RC />
    </Suspense>
  )
}

const routes: RouteObject[] = [
  {
    path: '/discover',
    element: lazyLoad(Discover)
  },
]
```

#### 3. discover 二级路由

1. **路由表**配置中的问题

   - 一级路由`discover`正常加载组件，而不是直接跳转，在其子路由中设置相同路由地址，该地址进行跳转，如下，这样才能正常展示一级路由的**导航栏**。

   ```tsx
   const routes: RouteObject[] = [
     {
       path: '/',
       element: <Navigate to="/discover" />
     },
     {
       path: '/discover',
       element: lazyLoad(Discover),
       children: [
         {
           path: '/discover',
           element: <Navigate to="/discover/recommend" />
         },
         {
           path: '/discover/recommend',
           element: lazyLoad(Recommend)
         },
       ]
     },
     {
       path: '/mine',
       element: lazyLoad(Mine)
     },
   ]
   ```

2. 二级路由需要占位组件`<Outlet />`

> - 相当于`vue`中的`router-view`
>
> - 用于控制二级路由加载的**内容显示**的**位置**

3. 切换路由`discover`导航栏闪烁问题

   直接使用`<Suspense>`包裹一级路由，并且二级路由使用懒加载的形式（但二级路由没有使用`<Suspense>`包裹）导致，因为这样会在二级路由没有加载出来时整个一级路由的内容也都没有返回值

   > 解决办法：
   >
   > - 和我们的方法一样，定义`lazyLoad()`方法，给每个懒加载组件包裹`<Suspense>`
   > - 二级路由不使用懒加载的形式（`可行性不大`）



### 6. Redux 配置

1. 安装

```bash
npm i @reduxjs/toolkit react-redux
```

2. 创建`store`

```ts
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {}
})

export default store

```

> `configureStore`

3. 创建仓库片段

```ts
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 99,
    name: 'tom'
  },
  reducers: {}
})

export default counterSlice.reducer

```

> `createSlice`
>
> - ts中`createSlice`的配置对象型参数中`name`、`inittialState`、`reducers`三个属性为必须属性`extraReducers`为可选属性

#### TS中的类型推导

**思路**： 

1. 根据`store.getState()`方法的返回值可以得到需要使用的`state`的类型
2. `TS`中通过`ReturnType<typeof fn>`可以获得一个函数的返回值类型

```ts
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
```



3. 重写`useSelector` `hooks`，将返回值类型通过构造签名的形式传递给`useAppSelector`

**解释**：

```ts
export interface TypedUseSelectorHook<TState> {
    <TSelected>(selector: (state: TState) => TSelected, equalityFn?: EqualityFn<NoInfer<TSelected>>): TSelected;
}
```

1. `react-redux`定义了一个函数签名`TypedUseSelectorHook`，该函数签名满足`useSelector`的函数形式
2. 通过该函数签名可以自定义和`useSelector`参数和返回值类型相同的函数，并且改函数签名接受一个**泛型**，用于给`state`指定类型
3. 直接将`useSelector`赋值给自定义的函数（因为两个满足相同的函数签名，所以TS不会报错），使得自定义函数拥有`useSelector`的特性
4. 将通过`store.getState`获得的类型作为函数签名接受的**泛型**，用于执行`state`类型

![image-20230508143121698](assets/image-20230508143121698.png)

![image-20230508143041737](assets/image-20230508143041737.png)
