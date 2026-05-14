import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionTitle } from "@/components/common/SectionTitle";
import { SITE, mailtoLink, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional(),
  subject: z.string().trim().min(2, "Please add a subject").max(150),
  message: z.string().trim().min(10, "Please add a few details").max(2000),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((s) => ({ ...s, [k]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const body =
      `Name: ${result.data.name}\n` +
      `Email: ${result.data.email}\n` +
      `Phone: ${result.data.phone ?? "—"}\n\n` +
      `${result.data.message}`;
    window.location.href = mailtoLink(`Contact: ${result.data.subject}`, body);
    setTimeout(() => {
      toast.success("Opening your email — please send to complete.");
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="bg-background pb-24 pt-32">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle align="center" eyebrow="Get in Touch" title="Let's plan your journey" subtitle="WhatsApp is fastest. Or send a message below — we reply within hours." />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <aside className="space-y-4 lg:col-span-1">
            <a href={SITE.phoneLink} className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-card transition-smooth hover:shadow-elegant">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-accent text-accent-foreground"><Phone className="h-5 w-5" /></span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                <div className="font-display font-bold text-foreground">{SITE.phone}</div>
              </div>
            </a>
            <a href={SITE.emailLink} className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-card transition-smooth hover:shadow-elegant">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-accent text-accent-foreground"><Mail className="h-5 w-5" /></span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="break-all font-display font-bold text-foreground">{SITE.email}</div>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-accent text-accent-foreground"><MapPin className="h-5 w-5" /></span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Office</div>
                <div className="font-display font-bold text-foreground">{SITE.address}</div>
              </div>
            </div>
            <Button asChild className="w-full rounded-full bg-whatsapp font-semibold text-whatsapp-foreground hover:opacity-90">
              <a href={whatsappLink("Hi Champ Lanka!")} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </Button>
          </aside>

          <form onSubmit={onSubmit} className="space-y-4 rounded-2xl bg-card p-6 shadow-card lg:col-span-2 lg:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">Your name</Label>
                <Input id="name" required maxLength={100} value={form.name} onChange={onChange("name")} placeholder="Dhanush K Raja" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required maxLength={255} value={form.email} onChange={onChange("email")} placeholder="dhanushkraj@mail.com" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" maxLength={40} value={form.phone} onChange={onChange("phone")} placeholder="+1 234 567 8900" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" required maxLength={150} value={form.subject} onChange={onChange("subject")} placeholder="Trip enquiry" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" required maxLength={2000} rows={6} value={form.message} onChange={onChange("message")} placeholder="Tell us about your dream trip — dates, group size, interests…" />
            </div>
            <Button type="submit" disabled={submitting} size="lg" className="rounded-full bg-gradient-accent font-semibold text-accent-foreground hover:opacity-90">
              <Send className="mr-2 h-4 w-4" />
              {submitting ? "Opening…" : "Send message"}
            </Button>
            <p className="text-xs text-muted-foreground">By sending, you agree to be contacted by Champ Lanka about your enquiry.</p>
          </form>
        </div>
      </div>
    </div>
  );
}
