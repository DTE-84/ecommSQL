import { Header } from "@/components/Header";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Projects
            </h1>
            <p className="text-lg text-foreground/70 mb-12">
              Detailed SQL projects and case studies demonstrating advanced data
              analysis techniques.
            </p>

            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <p className="text-foreground/60 mb-4">
                This section is coming soon! Continue prompting to fill in the
                project details.
              </p>
              <p className="text-sm text-foreground/50">
                Expected content: Project descriptions, SQL queries, database
                schemas, and analysis results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
