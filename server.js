var webpack =  require('webpack');
var WebpackDevServer =  require('webpack-dev-server');
var config =  require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    headers: {"Access-Control-Allow-Origin": "*"},
    inline: true,
    historyApiFallback: true,
}).listen(3000, '0.0.0.0', function(err, result){
    if(err){
        console.log(err);
    }

    console.log('listening @ 0.0.0.0:3000');
})