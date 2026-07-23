import clsx from "clsx";

export function GradientLink({ children, className = "", ...props }) {
  return (
    <a {...props} className={clsx("relative group", className)}>
      <span className="transition-opacity duration-300 group-hover:opacity-0">
        {children}
      </span>

      <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-green-900 to-green-800 bg-clip-text text-transparent">
        {children}
      </span>
    </a>
  );
}