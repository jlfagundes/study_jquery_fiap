/* Exemplo 1
// $(document).ready(function() {
//     //Implementa o evento de click no elemento cujo id é "botao".
//     $("#botao1").click(function() {
//       //Aplica a folha de estilo "vermelho" em todos os elementos <p>
//       $("p").addClass("vermelho");
//     });
//   });
*/

// Exemplo 2
$(document).ready(function(){
    //Implementa o evento de click no elemento cujo
    //id é "botao".
    $("#botao").click(function() {
      //Aplica a folha de estilo "azul" em todas as
      // divs que contiverem a palavra "azul"
      $("div:contains('azul')").addClass("azul");
      //Aplica a folha de estilo "naoAzul" em todas as
      // divs que NÃO contiverem a palavra "azul"
      $("div:not(:contains('azul'))").addClass("naoAzul");
    });
  });