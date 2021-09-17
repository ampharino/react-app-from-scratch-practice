const path = require('path');

const PATH_SORUCE = path.join(__dirname, './src');
const PATH_DIST = path.join(__dirname, './dist');

module.exports = (env) => {
    const environment = env.environment;
    return {
        mode: environment,
        entry: [path.join(PATH_SORUCE, './index.js')],
        output: {
            path: PATH_DIST,
            filename: 'js/[name].[contenthash].js',
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        debug: true,
                                        useBuiltIns: 'usage',
                                        corejs: 3,
                                    },
                                ],
                            ],
                        },
                    },
                },
            ],
        },
    };
};
