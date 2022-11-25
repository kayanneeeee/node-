var http = require('http');
http.createServer(function (req, res){
    
    res.writeHead(200, {'Content-Type':'text/html'}); //para os comandos html funcionar
    res.write('<h2>Braasil 2 x 0 servia<h2><br>');
    
    res.write(Date().substring(16,24)+'<br>'); //substring para filtrar uma parte dos dados da data
    res.end('bom dia');

}).listen(3000);

