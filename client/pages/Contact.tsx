import { Header } from "@/components/Header";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact
            </h1>
            <p className="text-lg text-foreground/70 mb-12">
              Get in touch to discuss SQL projects, data analysis opportunities,
              or collaboration inquiries.
            </p>

            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <p className="text-foreground/60 mb-4">
                This section is coming soon! Continue prompting to fill in the
                contact details.
              </p>
              <p className="text-sm text-foreground/50">
                Expected content: Contact form, email address, GitHub links, and
                professional profiles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
