
<h1 align="center">
  <br/>
  <img src="https://user-images.githubusercontent.com/55251721/78802105-ca55de80-7993-11ea-9187-3a97342a8dfb.png" width=80 />
  <br/>
  NoteList
</h1>
<h2 align="center">
  Aplicação para salvar anotações <br/>
  <br/>
  <a href="https://github.com/rafaelnrabelo/NoteList-Mobile#testando">
    <img src="https://img.shields.io/badge/Testing-Install-%23DA552F" alt="testing"/>
  </a>
  <a href="https://github.com/rafaelnrabelo/NoteList-Mobile/releases/latest">
    <img src="https://img.shields.io/badge/Last%20Release-2.1.1-%23DA552F" alt="release"/>
  </a>
  <br/>
  <br/>
  <img src="https://user-images.githubusercontent.com/55251721/80868905-ad9b8680-8c73-11ea-96bf-b5ebca177628.png" />
</h2>

## Features
  - Login com Facebook.
  - Sincronização das notas em nuvem.
  - Tema Dark e Light.
  - Lista de Tarefas.
  - Cadastro de anotações.
  - Editar anotação.
  - Apagar anotação.
  
#### Dependências
  - React Native
  - Expo
  - Axios
  - Redux
  - Redux Saga
  - Redux Persist   
   
## Testando:
   1. Clone o repositorio usando `git clone https://github.com/rafaelnrabelo/NoteList-Mobile.git`
   2. Mova para a pasta clonada usando `cd NoteList-Mobile`
   
   Instale o APK disponivel em <a href="https://github.com/rafaelnrabelo/NoteList-Mobile/releases">
    Releases
    </a> ou siga os passos abaixo para rodar sua propria aplicação.
   1. Mova para a pasta mobile usando `cd mobile`
   2. Instale todas dependecias usando `yarn install`
   3. Adicione a url de conexão do backend no campo `API_URL` no arquivo `.env.json` na pasta `src`
   4. Adicione o ID do seu app do Facebook no campo `FACEBOOK_ID` no arquivo `.env.json` na pasta `src`
   5. Execute `yarn start` para iniciar o expo.
