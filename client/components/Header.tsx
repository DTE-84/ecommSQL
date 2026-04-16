import { Link } from "react-router-dom";
import { Database } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        "border-b border-border bg-background sticky top-0 z-50",
        className
      )}
    >
      <nav className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold text-lg hover:opacity-80 transition-opacity"
        >
          <Database className="w-6 h-6 text-primary" />
          <span className="hidden sm:inline">DataInsights</span>
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          <Link
            to="/projects"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/analysis"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Analysis
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
