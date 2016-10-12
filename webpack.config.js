var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
   entry: {
	   main:'./src/main.js',
	   main2:'./src/main2.js',
	   vendor:['jquery', 'bootstrap','bootstrap/dist/css/bootstrap.css'],

	   /* <script src="vendor.js"></script>網頁中這樣即可匯入*/
	},
   output: {
      path:"src",
      filename: '[name].min.js'
   },
   module: {
     loaders: [
       { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel?presets[]=es2015' },
       { test: /\.css$/, loader: 'style-loader!css-loader' },
       { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
       { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
       { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
       { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
     ]
   },
   resolve: {
     // 設定後只需要寫 require('file') 而不用寫成 require('file.jsx')
     extensions: ['', '.js', 'jsx', '.json'] 
   },
   plugins: [
     new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js'),
     new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'root.jQuery': 'jquery'
    }),
     new ExtractTextPlugin('app.bundle.css'),
	 new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
   ]
};