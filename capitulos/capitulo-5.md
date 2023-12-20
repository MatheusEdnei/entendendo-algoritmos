## Funções Hash

Uma função hash é uma função na qual você insere uma string e, depois disso, a função te retornará um número. A função hash "mapeia strings para números". A função hash possui alguns padrões:

- A função deve retornar sempre o mesmo número para a mesma entrada de string
- A função deve mapear diferentes strings para diferentes números.
- A função hash deve ter conhecimento sobre o tamanho do array e deve retornar apenas índices válidos.

Se colocarmos uma função hash em conjunto com um array teremos uma estrutura de dados chamada tabela hash.

## Tabela Hash

A tabela hash é uma estrutura de dados que usa uma função hash, de maneira inteligente, para indicar onde armazenar os elementos. 
Uma tabela hash contém chaves e valores e mapeia essas chaves para esses valores.

## Aplicação da tabela hash

- Pesquisas em geral que relacione dois itens
- Tradução de nomes de websites para endereços IP's (resolução de DNS)
- Listas telefônicas
- Evitar duplicações
- Realização de caching, mapeando URL's para dados

## Colisões

Uma tabela hash nem sempre mapeia diferentes chaves para diferentes espaços no array. </br>
Quando duas chaves são indicadas para o mesmo espaço, temos o que chamamos de colisão. </br>
Para resolver as colisões, temos várias alternativas, sendo a mais simples a criação de uma lista encadeada no espaço da colisão. No entanto, se essa lista se torna muito longa ela diminuira o tempo de execução da tabela hash. </br>
Desse modo, temos que a função hash é muito importante, visto que uma boa função hash cria poucas colisões. Além disso é preciso ter um bom fator de carga. </br>

fator de carga = (número de itens na tabela hash) / (número total de espaços)

Um fator de carga maior que 1 indica que você tem mais itens do que espaços em seu array, desse modo é necessário adicionar mais espaços em sua tabal hash. Isso se chama redimensionamento.

## Desempenho

Em termos de procura, inserção e remoção a tabela hash possui caso médio de O(1) e pior caso de O(n).

### Exercicios

Quais destas funções hash são consistentes?

5.1 f(x) = 1. Retorna 1 para qualquer entrada </br>
R. Consistente

5.2 f(x) = rand(). Retorna um número aleatório a cada execução. </br>
R. Inconsistente

5.3 f(x) = proximo_espaço_vazio(). Retorna o índice do próximo espaço livre da tabela hash. </br>
R. Inconsistente.

5.4 f(x) = len(x). Use o comprimento da string como índice. </br>
R. Consistente

Suponha que tenhas estas quatro funções hash que operam com strings:

A. Retorna 1 para qualquer entrada </br></br>
B. Utilize o comprimento da string como o índice </br></br>
C. Utilize o primeiro caractere da string como índice. Assim, todas as strings que iniciam com a letra a são hasheadas juntas ae assim por diante. </br></br>
D. Mapeie cada letra para um número primo: a = 2, b = 3, c = 5, d = 7, e = 11 e assim por diante. Para uma string, a função hash é a soma de todos os caracteres-módulo conforme o tamanho da hash. Se o tamanho de sua hash for 10, por exemplo, e a string for "bag", o índice é (3 + 2 + 17) % 10 = 22 % 10 = 2. </br></br>

Para cada um destes exemplos, qual função hash fornecerá uma boa distribuição? Assuma o tamanho da tabela hash como sendo dez espaços. </br>

5.5. Uma lista telefônica, onde as chaves são os nomes e os valores são números telefônicos. Os nomes são os seguintes: Esther, Ben, Bob e Dan. </br>
R. As funções hash C e D fornecerão uma boa distribuição. </br>

5.6. Um mapeamento do tamanho de baterias e sua devida potência. Os tamanhos são A, AA, AAA e AAAA. </br>
R. As funções hash B e D fornecerão uma boa distribuição

5.7. Um mapeamento de títulos de livros e autores. Os títulos são Maus, Fun Home e Watchmen. </br>
R. As funções hash B, C e D fornecerão uma boa distribuição




