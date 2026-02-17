import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva("font-bold tracking-tight", {
  variants: {
    level: {
      h1: "text-6xl md:text-7xl font-extrabold",
      h2: "text-4xl md:text-5xl",
      h3: "text-3xl md:text-4xl",
      h4: "text-2xl md:text-3xl",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    level: "h2",
    align: "center",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  underline?: boolean;
  underlineWidth?: string;
  underlineColor?: string;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      level,
      align,
      as,
      underline = false,
      underlineWidth = "w-20",
      underlineColor = "bg-black",
      children,
      ...props
    },
    ref,
  ) => {
    const Tag = as || (level as "h1" | "h2" | "h3" | "h4") || "h2";

    const content = (
      <Tag ref={ref} className={cn(headingVariants({ level, align, className }))} {...props}>
        {children}
      </Tag>
    );

    if (underline) {
      return (
        <div
          className={cn(
            "flex flex-col gap-4",
            align === "center" ? "items-center" : align === "right" ? "items-end" : "items-start",
          )}
        >
          {content}
          <div className={cn("h-1 rounded-full", underlineWidth, underlineColor)} />
        </div>
      );
    }

    return content;
  },
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
