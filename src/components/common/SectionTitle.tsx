import { cn } from "@/lib/utils";
import palmtree from "@/assets/palmtree.png";

interface SectionTitleProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionTitle({ eyebrow, title, subtitle, align = "left", className, light }: SectionTitleProps) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      {eyebrow && (
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <div className={cn("mt-3 flex items-center gap-2", align === "center" && "justify-center")}>
        <span className="block h-1 w-12 rounded-full bg-accent" />
        <span className="font-script text-lg leading-none text-accent"><img src={palmtree} alt="palmtree" className="w-8 h-8" /></span>
    </div>
      {subtitle && (
        <p className={cn("mt-4 text-base leading-relaxed", light ? "text-primary-foreground/75" : "text-muted-foreground")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
