import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/common/SectionTitle";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import sigiriya from "@/assets/dest-sigiriya.jpg";
import mirissa from "@/assets/dest-mirissa.jpg";
import ella from "@/assets/dest-ella.jpg";
import kandy from "@/assets/dest-kandy.jpg";
import yala from "@/assets/dest-yala.jpg";
import galle from "@/assets/dest-galle.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

const all = [sigiriya, gallery1, mirissa, gallery2, ella, gallery3, kandy, gallery4, yala, gallery5, galle, gallery6, gallery7, gallery8, gallery9, gallery10];

function GalleryPage() {
  return (
    <div className="bg-background pb-24 pt-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle align="center" eyebrow="Photo Gallery" title="Sri Lanka through our lens" subtitle="A curated visual diary from across the island." />
        <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {all.map((img, i) => (
            <div key={i} className="break-inside-avoid overflow-hidden rounded-xl shadow-card transition-bounce hover:shadow-elegant">
              <img src={img} alt="Sri Lanka" loading="lazy" className="h-auto w-full transition-bounce hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
