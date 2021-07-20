const CopyWebpackPlugin = require( "copy-webpack-plugin" ),
      MiniCssExtractPlugin = require( "mini-css-extract-plugin" ),
      OptimizeCssAssetsPlugin = require( "optimize-css-assets-webpack-plugin" ),
      TerserPlugin = require( "terser-webpack-plugin" ),
      Path = require( "path" );

module.exports = {
    entry: "./src/main/javascript/tag-examples.js",
    mode: "production",
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
    output: { filename: "tag-examples.js", path: Path.resolve( __dirname, "build/prd" ) },
    plugins: [
        new CopyWebpackPlugin( { patterns: [{ from: "src/main/html/", to: "" }, { from: "src/main/resources/", to: "" }] } ),
        new MiniCssExtractPlugin( { filename: "tag-examples.css" } )
    ],
    optimization: { minimizer: [new TerserPlugin( { extractComments: false } ), new OptimizeCssAssetsPlugin()] }
};