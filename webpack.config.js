const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    // 项目环境
    mode:"development",
    // 入口文件
    entry:"./src/index.ts",
    // 配置打包后输出的位置
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename:"bundle.js"
    },
    // 配置导入文件忽略的后缀名
    resolve:{
        extensions:[".ts",".js",".cjs",".json"]
    },
    module:{
        rules:[
            {
                test:/.ts$/,
                use:["ts-loader"]
            }
        ]
    },
    plugins:[
        // 配置html模板
        new HtmlWebpackPlugin({
            template:"./index.html"
        })
    ]
}