/// <reference types="react-scripts" />

// interface 定义多次属性会合并，进行扩展
declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL
  }
}
