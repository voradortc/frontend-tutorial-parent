const CopyWebpackPlugin = require( "copy-webpack-plugin" ),
      MiniCssExtractPlugin = require( "mini-css-extract-plugin" ),
      Path = require( "path" );

module.exports = {
    entry: "./src/main/javascript/tag-examples.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{ loader: "babel-loader", options: { presets: ["@babel/preset-react"] } }]
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader", options: { url: false, modules: true } },
                    { loader: "sass-loader" }
                ]
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
        new MiniCssExtractPlugin( { filename: "tag-examples.css" } )
    ]
};