const CopyWebpackPlugin = require( "copy-webpack-plugin" ),
      MiniCssExtractPlugin = require( "mini-css-extract-plugin" ),
      OptimizeCssAssetsPlugin = require( "optimize-css-assets-webpack-plugin" ),
      TerserPlugin = require( "terser-webpack-plugin" ),
      Path = require( "path" );

function main_module( env ) {
    let data = {
        entry: "javascript/tag-examples.js",
        context: Path.resolve( __dirname, "src/main" ),
        resolve: { preferRelative: true },
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
        output: { filename: "tag-examples.js", path: Path.resolve( __dirname, `build/${env.name}` ) },
        plugins: [
            new CopyWebpackPlugin( { patterns: [{ from: "html", to: "" }, { from: "resources", to: "" }] } ),
            new MiniCssExtractPlugin( { filename: "tag-examples.css" } )
        ]
    };

    if ( "prd" === env.name ) {
        return {
            ...data,
            mode: "production",
            optimization: { minimizer: [new TerserPlugin( { extractComments: false } ), new OptimizeCssAssetsPlugin()] }
        };
    } else if ( "dev" === env.name ) {
        return {
            ...data,
            mode: "development"
        };
    } else {
        console.log( `Unknown environment ${env.name}, please use one of: dev or prd` );
        return {};
    }
}

let moduleFunctions = [main_module];
module.exports = env => moduleFunctions.map( moduleFunction => moduleFunction( env ) );