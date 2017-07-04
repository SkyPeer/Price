const webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        app: './client/app/index.ts',
        libs: './client/app/libs.ts',
        angular: './client/app/angular.ts',
        //styles: './client/app/styles.ts'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './client/build')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [{
                    loader: 'awesome-typescript-loader',
                    options: {
                        transpileOnly: true
                    }
                }, 'angular2-template-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname,'client/app'),
                loaders: ['raw-loader', 'sass-loader'],
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname,'client/styles'),
                loaders: ['style-loader', 'css-loader','sass-loader'],
            },
            {
                test: /\.woff$/,
                loader: 'base64-font-loader',

            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: false
                }
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.join(__dirname,'client/app')
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            minChunks: 2,
            chunks: [
                'app',
                'libs',
                'angular'
            ]
        })
    ],
    resolve: {
        extensions: ['.ts', '.scss', '.html', '.js', '.css', '.woff']
    },
    devtool: 'source-map',
};