import type { ReactNode, AnchorHTMLAttributes } from "react";
import clsx from "clsx";

const defaultClass = "relative inline-block cursor-pointer text-center";

interface GradientLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
}

export function GradientLink({
  children,
  className = "",
  ...props
}: GradientLinkProps) {
  return (
    <a
      {...props}
      data-text={children}
      className={clsx(
        defaultClass,
        "text-black",
        "after:absolute after:inset-0",
        "after:flex after:items-center",
        "after:justify-center",
        "after:content-[attr(data-text)]",
        "after:bg-gradient-to-r after:from-green-900 after:to-green-800",
        "after:bg-clip-text after:text-transparent",
        "after:opacity-0",
        "after:transition-opacity after:duration-300",
        "hover:after:opacity-100",
        className,
      )}
    >
      {children}
    </a>
  );
}
