import { cva } from "class-variance-authority";

export const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "font-manrope text-5xl font-bold tracking-tight text-crimson-12 dark:text-crimson-8",
      h2: "font-manrope text-3xl font-bold tracking-tight text-crimson-12 dark:text-crimson-8",
      h3: "font-manrope text-2xl font-semibold text-crimson-12 dark:text-crimson-8",
      h4: "font-manrope text-xl font-semibold text-crimson-12 dark:text-crimson-8",
      lead: "text-lg text-muted-foreground",
      body: "text-base ",
      small: "text-sm leading-none",
      muted: "text-sm text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});
