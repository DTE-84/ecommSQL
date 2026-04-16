import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Database,
  Zap,
  BarChart3,
  GitBranch,
  Code2,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              SQL Portfolio: <span className="text-primary">E-Commerce</span>{" "}
              Data Analyst
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-8">
              Exploratory Data Analysis and Business Reporting on E-Commerce
              Datasets. Demonstrating advanced SQL proficiency through complex
              queries, window functions, and actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                View Projects
              </Link>
              <Link
                to="/analysis"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-colors"
              >
                See Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Key Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Data Cleaning */}
            <div className="rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Data Cleaning
                  </h3>
                  <p className="text-foreground/70">
                    Handle nulls, incorrect formats, and data inconsistencies
                    using UPDATE and DELETE statements
                  </p>
                </div>
              </div>
            </div>

            {/* Complex Joins */}
            <div className="rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-secondary/10 p-3">
                  <GitBranch className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Complex Joins
                  </h3>
                  <p className="text-foreground/70">
                    Combine user, order, and product tables with efficient multi-table joins
                  </p>
                </div>
              </div>
            </div>

            {/* Window Functions */}
            <div className="rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Window Functions
                  </h3>
                  <p className="text-foreground/70">
                    Calculate running totals and rankings with ROW_NUMBER(),
                    RANK(), and SUM() OVER()
                  </p>
                </div>
              </div>
            </div>

            {/* Aggregate Queries */}
            <div className="rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-secondary/10 p-3">
                  <BarChart3 className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Aggregate Queries
                  </h3>
                  <p className="text-foreground/70">
                    Determine monthly revenue growth and business metrics with
                    GROUP BY and aggregation functions
                  </p>
                </div>
              </div>
            </div>

            {/* Data Analysis */}
            <div className="rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    EDA Methodology
                  </h3>
                  <p className="text-foreground/70">
                    Exploratory data analysis with statistical insights and data quality assessment
                  </p>
                </div>
              </div>
            </div>

            {/* Database Proficiency */}
            <div className="rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-secondary/10 p-3">
                  <Code2 className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    MySQL & PostgreSQL
                  </h3>
                  <p className="text-foreground/70">
                    Production-ready queries optimized for both MySQL and PostgreSQL databases
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlight Section */}
      <section className="py-16 md:py-24 bg-foreground/5">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Featured Project: E-Commerce Analysis
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Kaggle E-Commerce Dataset
              </h3>
              <p className="text-foreground/70 mb-6">
                Comprehensive analysis of a large-scale e-commerce dataset,
                featuring:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-sm mt-0.5">
                    1
                  </span>
                  <span className="text-foreground/70">
                    <strong className="text-foreground">Data cleaning:</strong>{" "}
                    Removed 2,000+ records with missing customer IDs and
                    standardized product categories
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-sm mt-0.5">
                    2
                  </span>
                  <span className="text-foreground/70">
                    <strong className="text-foreground">Complex joins:</strong>{" "}
                    Combined users, orders, products, and reviews tables to
                    create 360° customer view
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-sm mt-0.5">
                    3
                  </span>
                  <span className="text-foreground/70">
                    <strong className="text-foreground">Window functions:</strong>{" "}
                    Identified top 5 customers per region by revenue with
                    ranking and running totals
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-sm mt-0.5">
                    4
                  </span>
                  <span className="text-foreground/70">
                    <strong className="text-foreground">Monthly metrics:</strong>{" "}
                    Discovered 23% YoY revenue growth with seasonal patterns in
                    Q4
                  </span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  View All Projects
                </Link>
                <Link
                  to="/analysis"
                  className="inline-flex items-center justify-center px-6 py-2 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-colors"
                >
                  View Analysis Report
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to explore the data?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              View detailed SQL queries, analysis methodologies, and insights
              from real-world e-commerce data.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 transition-colors"
            >
              Start Exploring
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-foreground/5 py-8">
        <div className="container px-4 md:px-6 text-center text-foreground/60 text-sm">
          <p>SQL Portfolio • E-Commerce Data Analysis • Advanced SQL Proficiency</p>
        </div>
      </footer>
    </div>
  );
}
