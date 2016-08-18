'use strict';

const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');

const SRC_DIR = path.resolve(__dirname, 'src/client/app');

const config = {
	entry: SRC_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: SRC_DIR,
				loader: 'babel'
			}
		]
	}
};

module.exports = config;
