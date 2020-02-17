var path= require('path');

module.exports = {
entry: './src/index.jsx',
output:{
path : path.resolve(__dirname,'public'),
filename: 'bundle.js'
},
module: {
loaders: [
{
 test:/\.jsx?$/,
 loaders:'babel-loader',
 exclude: /(node_modules|dispatcher)/,
 query: {
    presets: ['es2015','react']
}
}
}
}
}