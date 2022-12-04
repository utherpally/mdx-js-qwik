# mdx-js-qwik

```ts
// vite.config.ts
qwikCity({
  mdx: {
    providerImportSource: "mdx-js-qwik",
    recmaPlugins: [recmaJsxRewriteQwik],
  },
});
```

```tsx
// layout.tsx
import { component$, Slot } from "@builder.io/qwik";

import { MDXProvider } from "mdx-js-qwik";

export const components = {
  h1: component$((props) => (
    <h1 {...props} class="h1">
      <Slot />
    </h1>
  )),
  h2: component$((props) => (
    <h2 {...props} class="h2">
      <Slot />
    </h2>
  )),
};

export default component$(() => {
  return (
    <MDXProvider components={components}>
      <Slot />
    </MDXProvider>
  );
});
```
