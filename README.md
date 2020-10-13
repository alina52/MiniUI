<h4 align="center">
  mini-ui
</h4>

##  定制主题

1. mini-ui使用less作为样式开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。
```
@primary-color: #31c27c;  
@warning-color: #fca130;    
@error-color: #f93e3e;      
@success-color: #35C613;    
@info-color: #61affe;       
@default-color: #d9d9d9;    
@border-color: #e8e8e8;     
@border-radius: 4px;        
@font-size: 14px;           
@font-size-small: 12px;   
@font-size-large: 16px;    
@bg-color: #FAFAFA;       
@font-color: rgba(0, 0, 0, .65);    
@disabled-font-color: fade(@font-color, 30%);

```
2. 主题定制使用 less 提供的 modifyVars 的方式进行覆盖变量。使用webpack中配置less-loader的options。注意javascriptEnabled要打开。

```
// webpack.config.js
module.exports = {
  rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
+     options: {
+       modifyVars: {
+         'primary-color': '#1DA57A',
+         'info-color': '#1DA57A',
+         'font-size': '12px',
+         // or
+         'hack': `true; @import "your-less-file-path.less";`, // 或者引用本地样式文件覆盖
+       },
+       javascriptEnabled: true,
+     },
    }],
  }],
}

注意,定制主题后，less-loader 的处理范围不能过滤掉 node_modules 下的 mini-ui 包。
```

## 参考轮子

- [ant-design](https://github.com/ant-design/ant-design)

