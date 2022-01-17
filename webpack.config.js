const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    watchOptions: {
        poll: 1000,
    },
    mode: "development",
    entry: {
        index: "./src/index.js",
    },
    devtool: "source-map",
    devServer: {
        static: "./dist",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            title: "To-Do List",
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "images/[name].[ext]",
                            publicPath: "assets",
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
};
