import { type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";
import { typographyVariants } from "@/shared/components/ui/typography-variants";

interface TypographyProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

function Typography({
  className,
  variant = "body",
  as,
  ...props
}: TypographyProps) {
  const Component =
    as ??
    ({
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      lead: "p",
      body: "p",
      small: "small",
      muted: "p",
    }[variant!] as React.ElementType) ??
    "p";

  return (
    <Component
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Typography };
