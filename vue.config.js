module.exports = {
    publicPath: '/testing-vue/',
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [/*'css-loader',*/ 'postcss-loader', 'sass-loader']
                }
            ]
        }
    },
};