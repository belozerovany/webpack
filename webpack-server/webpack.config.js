//плагины которые мы установили локально
const path                = require('path');
const webpack             = require('webpack');
const htmlPlugin          = require('html-webpack-plugin');//чтобы исходный html файл попал в конечную папку,позволяет автоматически встраивать в html созданные вебпаком бандлы
const textPlugin          = require('extract-text-webpack-plugin');//выносит все файлы стилей в отдельный файл
const args                = require('yargs').argv;

let styleLoader =['style-loader','css-loader','sass-loader']; //массив загрузчиков, вынесли в переменную
const plugins = [                                              //массив плагинов, вынесли их отдельно в переменную, а ниже указали сму переменную plugins
	new htmlPlugin(),
	new webpack.optimize.CommonsChunkPlugin( { name: 'vendor' } ),//CommonsChunkPlugin анализирует содержимое модулей(файлов), и если модули содержат общий код, плагин выносит его в отдельный модуль (файл).
	new textPlugin({
		filename:'main.css'
	}),
	new webpack.HotModuleReplacementPlugin()
]
if(args.env && args.env.style){
	plugins.push(
		new textPlugin({
			filename:'main.css'
		})
	);
	styleLoader = textPlugin.extract({
		fallback:"style-loader",
		use:['css-loader','sass-loader']        //Для обработки стилей и интеграцию их в html страницу установим два дополнительных загрузчика
	})
}
module.exports = {
    
    entry:{                                          //показываем webpack какие файлы мы запускаем
        main: './app.js',
       vendor: ['jquery']                              // указали явно файл модуля, чтобы он находился в отдельном файле elementBuilder.js'
    },
                                                   
    context: path.resolve(__dirname, 'src'),          //показываем webpack из какой директории(папки) мы ищем файлы

    output: {                                        //показываем webpack из какой директории(папки) мы ищем файлы
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {                                       //Загрузчик модифицируют файл в модуль, перед тем, как тот попадёт в граф зависимостей и поэтому всегда используем поле module
        rules: [                                    //определяет список правил для загрузчиков.            
            {
                test:/\.js$/,                       //указали, какие файлы нужно подвергать трансформации (в данном случае - с расширением js);                
                exclude: path.resolve(__dirname,'node_modules'),//указали, какие файлы или папки исключить; можно просто прописать и таким вариантом /node_modules/
                use:{                                //поле, содержащее название загрузчика и дополнительные настройки
                    loader:'babel-loader',
                    options: { presets:['env'] }
                }
            },
	        {
		        test: /\.s?css$/,
		        use: styleLoader
	        }   
        ]
    },

	devServer: {
        contentBase:path.resolve(__dirname, 'dist'),
        publicPath:'/',
        port:9000,
		hot:!(args.env && args.env.style)
    },

	plugins,
};