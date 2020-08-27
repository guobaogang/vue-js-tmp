const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        filename: "bundle.[chunkhash].js",
        path: path.join(__dirname, "dist"),
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js",
            "@": path.resolve('src')
        },
        extensions: [".vue", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                use: ["vue-loader"],
            },
            {
                test: /\.(js|vue)$/,
                loader: "eslint-loader",
                enforce: "pre",
                //指定检查的目录
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.(less|css)$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(scss|sass)$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(woff|svg|eot|ttf|png)\??.*$/,
                loader: 'url-loader'
            }        
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "htmlTmp/index.html",
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"), // dist目录开启服务器
        compress: true, // 是否使用gzip压缩
        port: 9000, // 端口号
        open: true, // 自动打开网页
        inline: false,
        proxy: {
            "/api/*": {
                "target": "http://localhost:3000",
                "pathRewrite": {
                    "^/api/*": "/posts/"
                },
                "method": "GET"
            }
        }
    },
};
