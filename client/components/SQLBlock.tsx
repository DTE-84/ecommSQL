import React from "react";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface SQLBlockProps {
  title: string;
  query: string;
  insight: string;
}

export const SQLBlock = ({ title, query, insight }: SQLBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(query);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden transition-all hover:shadow-xl hover:border-primary/30">
      <div className="bg-muted px-4 py-3 border-b border-border flex justify-between items-center">
        <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/80">
          {title}
        </h3>
        <button
          onClick={copyToClipboard}
          className="text-foreground/50 hover:text-primary transition-colors p-1"
          title="Copy SQL"
        >
          {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="p-0 bg-[#1e1e1e]">
        <pre className="p-4 text-xs md:text-sm font-mono text-blue-300 overflow-x-auto leading-relaxed">
          {query}
        </pre>
      </div>
      <div className="p-4 bg-primary/5 border-t border-border">
        <p className="text-xs md:text-sm text-foreground/70 italic leading-relaxed">
          <strong className="text-primary not-italic uppercase font-black text-[10px] mr-2">
            Insight:
          </strong>
          {insight}
        </p>
      </div>
    </div>
  );
};
