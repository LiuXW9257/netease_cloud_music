## 网易云音乐

### 0. 技术栈

- React 18
- TS
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
   
   const resolve = dir => path.resolve(__dirname, dir)
   
   module.exports = {
     webpack: {
       alias: {
         '@': resolve('src')
       }
     }
   }
   ```

   > 能找到，但是**没提示**，并且 ts 会报错（因为ts不知道`@`是哪个路径，所以还需要再ts配置中`@`对应的路径）

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

   4. 修改启动方式为 `craco`  `package.json`

   ![image-20230506172528500](assets/image-20230506172528500.png)

   
