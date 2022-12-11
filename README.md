# Reproduction for [Vite #11145](https://github.com/vitejs/vite/pull/11145).

```bash
git clone git@github.com:brillout/vite-reprod-11145
cd vite-reprod-11145/
pnpm install
pnpm build
cd docs/
pnpm run dev
```

Same as single line (copy-paste me):

```shell
git clone git@github.com:brillout/vite-reprod-11145 && cd vite-reprod-11145/ && pnpm install && pnpm build && cd docs/ && pnpm run dev
```

Go to [localhost:3000](http://localhost:3000) and observe the error:

```
Error: Cannot import non-asset file /../node_modules/@brillout/docpress/src/renderer/_default.page.server.tsx which is inside /public.JS/CSS files inside /public are copied as-is on build and can only be referenced via <script src> or <link href> in html.
    at TransformContext.transform (file:///home/romuuu/.prog/files/code/vite-plugin-ssr/node_modules/.pnpm/vite@3.2.4_@types+node@15.14.9/node_modules/vite/dist/node/chunks/dep-67e7f8ab.js:36967:31)
    at async Object.transform (file:///home/romuuu/.prog/files/code/vite-plugin-ssr/node_modules/.pnpm/vite@3.2.4_@types+node@15.14.9/node_modules/vite/dist/node/chunks/dep-67e7f8ab.js:40228:30)
    at async loadAndTransform (file:///home/romuuu/.prog/files/code/vite-plugin-ssr/node_modules/.pnpm/vite@3.2.4_@types+node@15.14.9/node_modules/vite/dist/node/chunks/dep-67e7f8ab.js:36615:29)
```
