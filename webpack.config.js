var config = {
   entry: './main.js',
   debug:true,
   devtool: 'source-map',
   output: {
      path:'./dist',
      filename: 'index.js'
   },   
   devServer: {
      inline: false,
      port: 8095,
      historyApiFallback: {
      index: './dist/index.html'
    }
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',            				
            query: {
               presets: ['es2015', 'react','stage-0']
            }
         },
         {
              test: /\.css$/,
              loaders: ["style", "css"]
          }
      ]
   }
}

module.exports = config;