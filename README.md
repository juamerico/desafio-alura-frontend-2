# Desafio Front End - Alura Dev

## https://romantic-johnson-345867.netlify.app

## Objetivo
A aplicação foi desenvolvida durante a segunda edição do Alura Challenges - Front End, utilizando Angular.\
A proposta do projeto é a criação de um site onde o usuário possa armazenar e compartilhar pequenos trechos de código com o destaque de sintaxe.

## Tecnologias utilizadas
- [Angular 13](https://angular.io/)
- [SCSS](https://sass-lang.com/)
- [Highlight.js](https://github.com/murhafsousli/ngx-highlightjs)

### Atribuição de usuário
Ao iniciar a aplicação, no ciclo de vida `ngOnInit()` do [`AppComponent`](https://github.com/juamerico/desafio-alura-frontend-2/blob/main/src/app/app.component.ts), o método `getUser()` do [`UserService`](https://github.com/juamerico/desafio-alura-frontend-2/blob/48e08f2bdfef74f42243aafcfc3c8e84ad276baa/src/app/services/user.service.ts#L10) é invocado, atribuindo nome e imagem ao [`UserComponent`](https://github.com/juamerico/desafio-alura-frontend-2/blob/48e08f2bdfef74f42243aafcfc3c8e84ad276baa/src/app/shared/user/user.component.ts).

### Criando um novo projeto
Para criar um novo projeto, basta inserir os seguintes dados:
- trecho de código na área principal
- linguagem utilizada
- título
- breve descrição
- cor da borda do card

Clicar no botão **Salvar projeto**.

### Salvando e exibindo os projetos na página de Comunidades
O [`ProjectService`](https://github.com/juamerico/desafio-alura-frontend-2/blob/main/src/app/services/project.service.ts) realiza a comunicação com o backend - no caso é utilizado o `localStorage` - para manipular essas informações entre [`CodeEditorComponent`](https://github.com/juamerico/desafio-alura-frontend-2/blob/main/src/app/code-editor/code-editor.component.ts) e [`CommunityComponent`](https://github.com/juamerico/desafio-alura-frontend-2/blob/main/src/app/community/community.component.ts), através da injeção de dependência.

### Destaque de sintaxe
O destaque de sintaxe no [`CodeEditorComponent`](https://github.com/juamerico/desafio-alura-frontend-2/blob/main/src/app/code-editor/code-editor.component.ts) é realizado com auxílio da biblioteca [**Highlight.js**](https://github.com/murhafsousli/ngx-highlightjs), ao clicar no botão **Visualizar com o highlight**, através do [`HighlightJsService`](https://github.com/juamerico/desafio-alura-frontend-2/blob/main/src/app/services/highlight-js.service.ts).

Já nos cards do [`CommunityComponent`](https://github.com/juamerico/desafio-alura-frontend-2/blob/main/src/app/community/community.component.ts), o destaque é feito através da chamada do método `hljs.highlighText()` dentro do ciclo de vida `ngOnInit()` do próprio componente.

#### Instalando o projeto
Clone o projeto. No seu terminal de preferência, digite:
```
git clone https://github.com/juamerico/desafio-alura-frontend-2.git
```
\
Abra a pasta do projeto com:
```
cd desafio-front-end-2
```
\
Instale as dependências com:
```
npm install
```
\
Execute o projeto com:
```
npm run start
```
\
Ou disponibilize o projeto em sua rede local `http://${seuEndereçoDeIP}:4200` através do comando:
```
npm run public
```
