const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const PROJECT_ROOT = path.resolve(__dirname, '../');
module.exports = {
    // Uncomment next line for debugging only
    // devtool: "eval-source-map",
    entry: {
        index: path.resolve(__dirname, '../src/index.tsx'),
        framework: ['react', 'react-dom'],
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts|jsx|js)$/,
                exclude: /node_modules/,
                options: { cacheDirectory: true },
                loader: 'babel-loader',
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        limit: 8192,
                    },
                },
            },
            {
                test: /\.(eot|ttf|svg|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'font/',
                    },
                },
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    context: path.resolve(PROJECT_ROOT, './public'),
                    from: '*',
                    to: path.resolve(PROJECT_ROOT, './dist'),
                    toType: 'dir',
                },
            ],
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                configFile: path.resolve(PROJECT_ROOT, './tsconfig.json'),
            },
        }),
        new HardSourceWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.png', '.svg'],
        alias: {
            Src: path.resolve(PROJECT_ROOT, './src'),
            Components: path.resolve(PROJECT_ROOT, './src/components'),
            Configs: path.resolve(PROJECT_ROOT, './src/configs'),
            Libs: path.resolve(PROJECT_ROOT, './src/libs'),
            Models: path.resolve(PROJECT_ROOT, './src/models'),
            Pages: path.resolve(PROJECT_ROOT, './src/pages'),
            Routes: path.resolve(PROJECT_ROOT, './src/routes'),
            Services: path.resolve(PROJECT_ROOT, './src/services'),
            Utils: path.resolve(PROJECT_ROOT, './src/utils'),
        },
    },
    externals: [],
};
