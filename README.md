## 网易云音乐

### 0. 技术栈

- React 18
- TS
- webpack
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

4. 项目集成`prettier+eslint`

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
      
      
