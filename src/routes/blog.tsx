import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Clock } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { blogPosts } from "@/data/blog";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="bg-background pb-24 pt-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle align="center" eyebrow="Travel Stories" title="Notes from the island" subtitle="Local insights, seasonal tips and stories from the road." />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((p) => (
            <article key={p.slug} className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-card transition-bounce hover:-translate-y-1 hover:shadow-elegant">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.cover} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-bounce group-hover:scale-110" />
                <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">{p.category}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(p.date).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{p.readMinutes} min</span>
                </div>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug text-foreground">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body.slice(0, 1).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
