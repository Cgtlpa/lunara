import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors duration-200 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/85",
        outline: "border border-border text-foreground hover:border-primary/60 hover:bg-card",
        ghost: "text-muted-foreground hover:text-foreground",
        disabled: "border border-border bg-disabled text-disabled-foreground",
      },
      size: { sm: "h-8 px-3", md: "h-10 px-5" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonStyleProps = VariantProps<typeof buttonStyles>;
export const btn = (p: ButtonStyleProps & { className?: string } = {}) => cn(buttonStyles(p), p.className);
