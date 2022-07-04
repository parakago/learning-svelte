## 0. 목표

### 0.1 SvelteKit으로 TypeScript 기반 Hello World 

## 1. 배운것

## 1.1 Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte

# create a new project in my-app
npm init svelte my-app
```

## 1.2 Updating Libraries

Once you've installed dependencies with `npm install -g npm-check-updates`, update libraries:

```bash
# update
ncu -u
```

## 1.3 Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## 1.4 Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
