# RUPay

&ensp;Projeto de applicativo, abordado pelo **SENAC**, para um software capaz de integrar um sistema de recarga e controle de um _Restaurante Universitário_.

&ensp;A ideia surge da necessidade que algumas universidades enfrentam, no âmbito de interagir com os alunos sobre o **cardápio** e a forma **segura de realizar o pagamento das refeições**.

## Funcionalidades

- **Recarga de saldo**
- **Pagamento de refeições**
- **Visualização do cardápio**
- **Controle de Usuários**
- **Painel de Admin**

## Tecnologias

- **Vite**
- **React**
- **TypeScript**
- **shadcn/ui**
- **Tailwind CSS**

## Comandos

### bun js

&ensp;Esse projeto foi criado na base do [**bun**](https://bun.sh/).

#### Execução

Para executar o projeto, utilize o comando dentro da pasta raiz do projeto:

```bash
bun run dev
```

#### Edição

Abrirá um canal de API do bun na porta **localhost:5173**. Pode editar o arquivo enquanto roda a aplicação, ele aplicará as mudanças automaticamente no projeto. Caso contrário utilize o comando **bun run build** para gerar uma versão de produção do projeto.

O projeto vem com a tecnologia **React Hot Reload**. Então, o projeto prevê a possibilidade de visualizar na prática as alterações feitas.

### shadcn/ui monorepo template

This is a Vite monorepo template with shadcn/ui.

#### Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

#### Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button";
```
