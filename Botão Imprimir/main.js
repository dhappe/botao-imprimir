function pdf(){
    var pegar_dados = document.getElementById('dados').innerHTML;
    var janela = window.open('','','width=600,heigth=600');
    janela.document.write('<hmtl><head>');
    janela.document.write('<title>PDF</title></head>');
    janela.document.write('<body>');
    janela.document.write(pegar_dados);
    janela.document.write('</body></html>');
    janela.document.close();
    janela.print();
}