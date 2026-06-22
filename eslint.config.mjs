import astro from "eslint-plugin-astro";

export default [
  ...astro.configs.recommended,
  {
    rules: {
      // override/add rules settings here
    },
  },
];
