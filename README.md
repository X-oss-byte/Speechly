*Looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)*

---

# Browser UI

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

## Files served at

### Dev

https://speechly.github.io/browser-ui (Usage)
https://speechly.github.io/browser-ui/dev/push-to-talk-button.js
https://speechly.github.io/browser-ui/dev/big-transcript.js

### V1

Push-to-talk button with integrated browser-client 1.0.8 and button logic

https://speechly.github.io/v1/browser-ui (Usage)
https://speechly.github.io/v1/browser-ui/v1/push-to-talk-button.js
https://speechly.github.io/v1/browser-ui/v1/big-transcript.js

## Testing browser-ui locally in a test project


```
# In browser-ui, create a "linked package". Uses package.json in a subfolder to prevent unnecessary folder structure in the package
cd browser-ui/
pnpm run build
cd docs/dev
pnpm link 

# Using "linked package" in a project (intead of repo package/installing local)
cd react-ui
pnpm link browser-ui
```

## Creating a browser-ui package

```
# Uses package.json in a subfolder to prevent unnecessary folder structure in the package.

pnpm pack docs/v1/
```

## Using browser-ui in React

```
import "browser-ui/push-to-talk-button";
import "browser-ui/big-transcript";
import "browser-ui/speechly-ui.css";

<div className="BigTranscriptContainer">
    <big-transcript></big-transcript>
</div>
<div className="PushToTalkContainer">
    <push-to-talk-button appid="1234"></push-to-talk-button>
</div>
```

- Notes: Copying .js from browser-ui directly resulted in compile errors in React project, so using packages solves this problem.

## Svelte: Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript

This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
