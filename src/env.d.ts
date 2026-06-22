/// <reference types="@storybook-astro/framework/shim" />

declare module "@storybook-astro/framework" {
  import type {
    ComponentAnnotations,
    StoryAnnotations,
    WebRenderer,
  } from "storybook/internal/types";

  interface AstroRenderer extends WebRenderer {
    component: any;
    storyResult: any;
  }

  export type Meta<TComponent = any> = ComponentAnnotations<AstroRenderer, any>;
  export type StoryObj<TMetaOrCmp = any> = StoryAnnotations<AstroRenderer, any>;
}

interface Window {
  aboutIntroObserver: IntersectionObserver;
}
