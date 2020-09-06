//Path base para saber los directorios de la aplicación
const path = require('path');
//Plugin para mover un html con ciertas configuraciones
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //Punto de entrada de la aplicacion, archivo principal
    entry: './src/index.js',
    //donde se guarda antes de enviar a compilar y se envia a prod
    output: {
        //Nombre de la carpeta
        path: path.resolve(__dirname, 'dist'),
        //Nombre del archivo compilado
        filename: "bundle.js"
    },
    //Extensiones que necesita webpack entender
    resolve: {
        //Extensiones que se van a necesitar
        extensions: ['*', '.mjs', '.js', '.svelte']
    },
    //Configuraciones y reglas del proyecto
    module: {
        //Reglas
        rules: [
            {
                //Expresion regular para detectar los archivos JS
                test: /\.js?$/,
                //archivos excluidos
                exclude: /node_modules/,
                //loader de archivos
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.svelte$/,
                exclude: /node_modules/,
                use: {
                    loader: 'svelte-loader'
                }
            }
        ]
    },
    //plugins
    plugins: [
        new htmlWebpackPlugin({
            inject: true,
            template: "./public/index.html",
            filename: "index.html"
        })
    ]
}

