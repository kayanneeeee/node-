var http = require('http');
var dia = require('./bliblioteca'); //para importar, ligar um arquivo no outro 
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type':'text/html'}); //para os comandos html funcionar
    res.write('<h2>Braasil 2 x 0 servia<h2><br>');
    res.write( '<p style= color:blue>'+Date().substring(16,24)+'<br>'); //substring para filtrar uma parte dos dados da data
    res.write(dia.diaDaSemana()+'</p><br>')    //chamar a variavel
    res.end('bom dia');


}).listen(3000);

