const path          = require('path'),
webpack             = require('webpack');
htmlPlugin          = require('html-webpack-plugin')

module.exports = {
    entry:{
        main: './app.js',
       vendor: ['jquery']
    },
    context: path.resolve(__dirname, 'src'),
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: path.resolve(__dirname,'node_modules'),
                use:{
                    loader:'babel-loader',
                    options: { presets:['env'] }
                }
            }
        ]
    },

    plugins:[ 
        new htmlPlugin(),
        new webpack.optimize.CommonsChunkPlugin( { name: 'vendor' } )
    ]
};