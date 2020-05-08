module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/testing-vue/' : '',
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