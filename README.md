<h1 align="center">Monorepo frontend boilerplate</h1>

<p align="center">
  <a href="http://commitizen.github.io/cz-cli/">
	  <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitzen friendly" />
  </a>
  <a href="https://conventionalcommits.org">
	  <img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Conventional Commits" />
  </a>
</p>

## Getting started

This is a monorepo repository using [npm workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces), [Commitzen](http://commitizen.github.io/cz-cli/) and [Conventional Commits](https://conventionalcommits.org) to maintain and manage component versions and for documentation, we use [Storybook](https://storybook.js.org/).

## 💥 Features

- ⚛️ Create React App (CRA 5) - (React 17.0.2)
- 📖 Storybook 6.4.18
- 📦 Npm Workspaces
- ✨ Host Multiple CRA Apps, Component Libraries & Storybooks in one monorepo
- 🔥 Hot Reload all Apps, Components & Storybooks
- 👨‍🔬 Test all workspaces with Eslint & Jest using one command

## 🌐 Links

Storybook live demo:
- ➡️ https://monorepo-boilerplate-storybook.vercel.app/?path=/docs/

![Storybook](docs/images/ui-components.png)

Design tokens live demo:
- ➡️ https://monorepo-boilerplate-storybook.vercel.app/?path=/docs/design-system-colors--page

![Design tokens](docs/images/design-tokens.png)

Create React App live demo:
- ➡️ https://monorepo-boilerplate-cra.vercel.app/

## ⚠️ Requirements

- Node
- NPM

_In order to use semantic release with github actions, you need to add a new secrets in your github repository. This is needed in order for Semantic Release to be able to publish a new release for the Github repository._

_[Create a token for Github](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line). You need to give the token repo scope permissions._

_Check out this file: https://github.com/emunhoz/monorepo-boilerplate/blob/main/.github/workflows/release.yml#L32_

_You need to change this value with you new secrets: `GH_MONOREPO_TOKEN`_

## 🚀 Quick start

In the root folder run following commands _(all the below commands need to run on root folder)_:

Install all dependecies with:

```bash
  npm i
```

To run the front end application [`@monorepo/cra`](./packages/cra) :

```bash
  npm run start
```

To run all components with storybook [`@monorepo/ui-components`](./packages/ui-components) :

```bash
  npm run storybook
```

## 🗂 Monorepo structure

| Package                                               | Description                                                                            |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [`@monorepo/design-tokens`](./packages/design-tokens) | Design tokens (colors, typography, attributes...)                                      |
| [`@common/**`](./packages/commons)                    | Common functions, images, lints (eslint, stylelint, prettier) and other generics setup |
| [`@monorepo/ui-components`](./packages/ui-components) | React library components with [stories](https://storybook.js.org/)                     |
| [`@monorepo/webapp`](./packages/webapp)               | Front end application create with create-react-app                                     |

## 🚨 Code standard

- [JavaScript Standard Style](https://standardjs.com/) - Javascript styleguide
- [Prettier](https://prettier.io/) - Code formatter
- [ESLint](https://eslint.org/) - Lint to quickly find problems
- [Stylelint](https://stylelint.io/) - A mighty, modern linter that helps you avoid errors and enforce conventions in your styles

## ⌨️ Commands

| Command                 | Description                                                                                                                                                                               |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm i`                  | Install all dependencies                                                                                                                                                                  |
| `npm run start`            | Run frontend app                                                                                                                                                                          |
| `npm run test:ci`          | Run all tests                                                                                                                                                                             |
| `npm run storybook`        | Run storybook doc components                                                                                                                                                              |
| `npm run watch:tokens`     | Watch design-tokens package                                                                                                                                                               |
| `npm run watch:components` | Watch ui-components package                                                                                                                                                               |
| `npm run build-app`        | Build of front app([`@monorepo/cra`](./packages/cra)) and generate a directory with all assets in the following path: `packages/webapp/build`                                                |
| `npm run build-storybook`  | Build of storybook with components([`@monorepo/ui-components`](./packages/ui-components)) and generate a directory with all assets in the following path: `packages/ui-components/storybook-static` |
