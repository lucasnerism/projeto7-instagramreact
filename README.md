# **Projeto [Instagram (React)](https://lucasnerism.github.io/projeto7-instagramreact/)**

Neste mini projeto foi transformado um projeto já feito em html+css num projeto React, com os requisitos descritos abaixo.

Cada passo do desenvolvimento do projeto foi _versionada_ no`GitHub`. Vocês podem acompanhar o processo nos`commits`no [repositório do projeto](https://lucasnerism.github.io/projeto7-instagramreact/).

[> O projeto pode ser acessado online aqui <](https://lucasnerism.github.io/projeto7-instagramreact/)

Para executar esse projeto localmente você precisa ter o [Node.js](https://nodejs.org/) instalado.

## Este projeto é sobre

- `React`
- `Componentização`
- `Utilização de estados`

## ✅ Requisitos Obrigatórios

<details open>
<summary>Versionamento do código</summary>

- [ ] Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do GitHub.
- [ ] Faça _commits_ a cada funcionalidade implementada.
</details>

<details open>
<summary>Layout</summary>

- [ ]  Você pode utilizar o seu próprio código do [Instagram](https://github.com/lucasnerism/projeto2-instagram) para iniciar o projeto ou utilizar o que nós fornecemos no fim desse enunciado 😃
- [ ]  O *layout* é quase o mesmo do Instagram que vocês fizeram no início do curso! A única diferença é que só há um nome para o usuário com um ícone de lápis depois dele (pode usar o do ion-icons). Consulte o Figma para fazer os ajustes necessários.
</details>

<details open>
<summary>Componentes</summary>

- [ ]  A página deve ser componentizada em arquivos diferentes, utilizando `import`/`export`:
  <details open>    
  <summary>Lista dos componentes que deverão ser feitos</summary>
  
    - `App`
    - `Corpo`
    - `SideBar`
    - `NavBar`
    - `Usuario`
    - `Stories` (onde cada item será um componente diferente, o `Story`)
    - `Posts` (onde cada item será um componente diferente, o `Post`)
    - `Sugestoes` (onde cada item será um componente diferente, o `Sugestao`)
     </details>
- [ ]  Todos os itens repetitivos do projeto devem ser representados como Arrays/Objetos nos componentes e renderizados no JSX usando `map`. No projeto, esses itens são:
    - Os stories (deve ter pelo menos 3 stories)
    - Os posts (deve ter pelo menos 3 posts)
    - As sugestões de seguidores (deve ter pelo menos 3 sugestões)
    - O usuário acima das sugestões (este não é um array, mas os dados devem vir de props)
</details>

<details open>
<summary>Dados dinâmicos</summary>

- [ ]  O projeto também deverá ter alguns dados dinâmicos que irão mudar na tela. São eles:
    - [ ]  Nome de usuário (ao apertar o lápis, aparece um `prompt` para alterá-lo). Se for passada uma string vazia, não atualiza.
    - [ ]  Imagem de perfil (ao clicar uma vez na imagem, aparece um `prompt` pedindo novo link). Se for passada uma string vazia, não atualiza.
    - [ ]  Salvar o post (ao clicar no ícone de salvar o post, ele deverá ficar preenchido).
        - Caso a postagem já esteja salva, ao clicar no ícone, a postagem deve passar para não salva.
    - [ ]  *Like* no post:
        - Ao clicar no ícone do *like* o usuário poderá curtir a postagem. Ou seja, o ícone de coração deverá ficar preenchido e vermelho.
            - Caso a postagem já esteja curtida, ao clicar no ícone, a postagem deve passar para não curtida.
        - Ao clicar na imagem de um post do *feed*, o usuário poderá curtir a postagem, ou seja, o botão do *like* deverá ficar preenchido em vermelho.
            - OBS: assim como no Instagram de verdade, clicar na imagem **NÃO** retira *likes*, apenas adiciona caso já não tenha.
        - Sobre a frase de “Curtido por *fulano* e outras **xxx** pessoas”:
            - O número de *likes* deverá aumentar quando a pessoa der um *like* e diminuir quando retirá-lo.
            - O início da frase “Curtido por *fulano*” pode ter qualquer valor no lugar de *fulano*, não precisa ser o nome do usuário logado nem mudar quando o post for curtido.
</details>

## ✅ Requisitos Bônus

<details open>
<summary>Like com double click na imagem</summary>

- [ ]  Para dar *like* clicando na imagem, é necessário clicar duas vezes seguidas, rapidamente.
  - Clicar duas vezes com um intervalo de tempo grande NÃO CONFIGURA *double click*. Só serão aceitas implementações usando `onDoubleClick` do React ou evento nativo equivalente:
</details>

<details open>
<summary>Animação de coração no double click</summary>

- [ ]  Quando ocorrer o *double click* na imagem, deverá surgir no centro da imagem um coração, que primeiro cresce e depois desaparece.    
- [ ]  Parâmetros da animação:
    - Escala inicial: 0.2
    - Escala final: 1
    - Tempo da animação: 0.3s
    - Cor do coração: white
    - Após 0.5s, o coração some da tela
</details>
