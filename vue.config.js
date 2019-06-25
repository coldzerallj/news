module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://m.chinanews.com/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}