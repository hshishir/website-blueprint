import { ArrowRightIcon } from "@heroicons/react/24/outline";

type PrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "md";
  className?: string;
};

export function PrimaryButton({ href, children, size = "md", className = "" }: PrimaryButtonProps) {
  const sizing = size === "sm" ? "px-5 py-2.5 text-sm" : "px-6 py-3";
  return (
    <a
      href={href}
      className={`focus-ring inline-flex items-center gap-2 rounded-full bg-[#c8ff00] font-bold text-black shadow-[0_0_24px_-4px_rgba(200,255,0,0.6)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_-2px_rgba(200,255,0,0.85)] ${sizing} ${className}`}
    >
      {children}
      <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
