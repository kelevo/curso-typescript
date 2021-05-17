module.exports = {
    // Modo de ejecucion webpack por defecto
    mode: 'production',
    // Punto de entrada
    entry: './src/main.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    // Extensiones que soportamos
    resolve: {
        extensions: ['.ts', '.js'],
    },
    // Nombre de arhcivo resultante
    output: {
        filename: 'bundle.js',
    },
}