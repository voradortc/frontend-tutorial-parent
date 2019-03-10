const CopyWebpackPlugin = require( "copy-webpack-plugin" ),
      ExtractTextWebpackPlugin = require( "extract-text-webpack-plugin" ),
      Path = require( "path" );

module.exports = {
    entry: "./src/main/javascript/tag-examples.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{ loader: "babel-loader", options: { presets: ["react"] } }]
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                use: ExtractTextWebpackPlugin.extract( { use: [
                        {
                            loader: "css-loader",
                            options: { importLoaders: 1, modules: true, url: false, minimize: false, localIdentName: "[local]" }
                        },
                        { loader: "sass-loader" }
                    ] } )
            }
        ]
    },
    output: {
        filename: "tag-examples.js",
        path: Path.resolve( __dirname, "target" )
    },
    plugins: [
        new CopyWebpackPlugin( [
            { from: "src/main/html/", to: "" },
            { from: "src/main/resources/", to: "" }
        ] ),
        new ExtractTextWebpackPlugin( "tag-examples.css" )
    ]
};