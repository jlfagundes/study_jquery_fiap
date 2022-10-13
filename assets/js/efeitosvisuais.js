$(document).ready(function() {
    //quadrado começa invisível
    // $("#quadrado").hide();
    $("#quadrado").show();
    //quando o mouse passar pelo alvo, mostra quadrado
    $("#alvo").mouseover(function(){
        //   $("#quadrado").show();
        // $('#quadrado').slideDown();
        // $('#quadrado').slideToggle('fast') // tem 3 parametros, velocidade, se é linear, função quando acabar
        $('#quadrado').animate({
            width: '500px',
            heigth: '200px',
        }); // altera algumas propriedades css não todas
    });
    //quando o mouse sair do alvo, some com o quadrado
    $("#alvo").mouseout(function(){
        //   $("#quadrado").hide();
        // $('#quadrado').slideUp();
        // $('#quadrado').slideToggle('slow')
        $('#quadrado').animate({
            width: '200px',
            heigth: '200px',
        });
    });
});