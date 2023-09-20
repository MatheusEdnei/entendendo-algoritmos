## Recursão

- Recursão é quando uma função chama a si mesma: a recursão é usada para tornar a resposta mais clara. Não há nenhum benefício quanto ao desempenho ao utilizar a recursão. Na verdade, os loops algumas vezes são melhor para o desempenho de um programa.
- Toda função recursiva tem dois casos: o caso-base (ou caso de parada) e o caso recursivo: o caso recursivo é quando a função chama a si mesma. O caso-base é quando a função não chama a si mesma novamente, de forma que o programa não se torna um loop infinito.
- O computador usa uma pilha interna denominada de pilha de chamada. Essa pilha é usada para guardar variáveis de múltiplas funções. 
- Quando você chama uma função a partir de outra, a chamada de função fica pausada em um estado parcialmente completo.
- Uma pilha tem duas operações: push (inserir) e pop (remover)
- Todas as chamadas de função vão para a pilha de chamada.
- A pilha de chamada pode ficar muito grande e ocupar muita memória. Para situações em que o computador está salvando muitas informações na pilha temos duas soluções: reescrever o código utilizando loops ou usar tail recursion (recursão de cauda).

## Exercícios

3.1 Suponmha que eu força uma pilha de chamada como está:
Quais informações você pode retirar baseando-se apenas nesta pilha de chamada?

*R.: a função sauda é chamada primeiro, com nome = maggie</br> Então a função sauda chama sauda2, com nome = maggie </br> Neste ponto, a função sauda está em um estado incompleto e suspenso</br> A atuação função de chamada é a função sauda 2 </br> Após esta função de chamada ser finalizada, a função sauda será retomada.*

3.2 Suponha que você acidentalmente escreva uma função recursiva que fique executando infinitamente. Como você viu, seu computador aloca memória na pilha para cada chamada de função. O que acontece com a pilha quando a função recursiva fica executando infinitamente?

*R.: A pilha cresce eternamente. Cada programa tem uma limitada quantidade de espaço na pilha de chamada. Quando o seu programa fica sem espaço (o que eventualmente acontece), ele é finalizado com um erro de overflow (estouro) da pilha.*

