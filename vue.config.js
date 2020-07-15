module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:3003/",
                pathRewrite: { // 重写路径
                    "^/api": ""
                },
                changeOrigin: true // 允许跨域
            },
            "/iwen_api": {
                target: "http://iwenwiki.com:3001/",
                pathRewrite: { // 重写路径
                    "^/iwen_api": ""
                },
                changeOrigin: true // 允许跨域
            },
        }
    }
}