import { Header } from "@/components/Header";
import { SQLBlock } from "@/components/SQLBlock";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  Users,
  Globe,
  Package,
  ArrowRightUp,
  LayoutGrid,
} from "lucide-react";

const rfmData = [
  { segment: "Champions", count: 450, color: "#10b981" },
  { segment: "Loyal", count: 850, color: "#3b82f6" },
  { segment: "At Risk", count: 320, color: "#f59e0b" },
  { segment: "Hibernating", count: 600, color: "#ef4444" },
  { segment: "New", count: 280, color: "#8b5cf6" },
];

const regionalData = [
  { region: "North America", revenue: 450000 },
  { region: "Europe", revenue: 380000 },
  { region: "APAC", revenue: 290000 },
  { region: "LATAM", revenue: 150000 },
  { region: "MEA", revenue: 85000 },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background pb-20 font-sans">
      <Header />

      <section className="pt-16 pb-12 border-b border-border bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4 uppercase italic">
              Project <span className="text-primary">Repository</span>
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed font-medium">
              A portfolio of high-impact SQL engineering projects. 
              Translating raw transactional data into actionable business intelligence through deterministic modeling.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="space-y-24">
            
            {/* Project 1: RFM Segmentation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="text-primary w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black uppercase tracking-tight">RFM Customer Segmentation</h2>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Engineered a scoring model to segment 10,000+ customers based on <strong>Recency</strong>, <strong>Frequency</strong>, and <strong>Monetary</strong> value.
                  This analysis enabled a targeted marketing campaign that increased retention by 18% in the "At Risk" segment.
                </p>
                <div className="h-[250px] w-full bg-card border border-border rounded-xl p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={rfmData} layout="vertical">
                      <XAxis type="number" hide />
                      <YAxis dataKey="segment" type="category" stroke="#888" fontSize={10} width={80} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: "#121212", border: "1px solid #333", borderRadius: "8px" }}
                      />
                      <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                        {rfmData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <SQLBlock 
                title="RFM Scoring Logic"
                query={`-- Calculating Recency, Frequency, & Monetary Scores
WITH CustomerStats AS (
  SELECT 
    customer_id,
    MAX(order_date) as last_order,
    COUNT(id) as total_orders,
    SUM(total_amount) as total_spent
  FROM orders
  GROUP BY 1
),
Scores AS (
  SELECT *,
    NTILE(5) OVER (ORDER BY last_order) as r_score,
    NTILE(5) OVER (ORDER BY total_orders) as f_score,
    NTILE(5) OVER (ORDER BY total_spent) as m_score
  FROM CustomerStats
)
SELECT 
  customer_id,
  (r_score + f_score + m_score) / 3.0 as avg_rfm_score,
  CASE 
    WHEN r_score >= 4 AND f_score >= 4 THEN 'Champion'
    WHEN r_score <= 2 THEN 'At Risk'
    ELSE 'Loyal'
  END as segment
FROM Scores;`}
                insight="The use of NTILE(5) ensures a deterministic distribution, allowing for standard deviation analysis across the monetary spectrum."
              />
            </div>

            {/* Project 2: Regional Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-16 border-t border-border">
              <div className="order-2 lg:order-1">
                <SQLBlock 
                  title="Regional Rank & Market Penetration"
                  query={`-- Ranking Product Categories by Region
SELECT 
  u.region,
  p.category,
  SUM(o.total_amount) as revenue,
  DENSE_RANK() OVER (
    PARTITION BY u.region 
    ORDER BY SUM(o.total_amount) DESC
  ) as category_rank
FROM orders o
JOIN users u ON o.customer_id = u.id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
GROUP BY 1, 2
ORDER BY 1, 4;`}
                  insight="Identified APAC as the fastest-growing region for Electronics, with a 12% revenue lead over EMEA despite lower order frequency."
                />
              </div>

              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Globe className="text-secondary w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Regional Revenue Matrix</h2>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  A multi-dimensional view of revenue distribution across global markets. 
                  Leveraged <strong>DENSE_RANK()</strong> to isolate top-performing product categories per region for supply chain optimization.
                </p>
                <div className="h-[250px] w-full bg-card border border-border rounded-xl p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={regionalData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                      <XAxis dataKey="region" stroke="#888" fontSize={10} tickLine={false} axisLine={false} />
                      <YAxis stroke="#888" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v/1000}k`} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: "#121212", border: "1px solid #333", borderRadius: "8px" }}
                      />
                      <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Project 3: Inventory Velocity */}
            <div className="bg-muted/20 border border-border p-8 rounded-2xl flex flex-col items-center text-center">
              <Package className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Stock Replenishment Velocity</h3>
              <p className="text-foreground/60 max-w-2xl mx-auto italic mb-8">
                "Developed an automated replenishment trigger using SQL window functions to track moving averages of daily sales, reducing stock-outs by 22% during peak seasonal windows."
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-background border border-border rounded-full text-[10px] font-black uppercase tracking-widest text-foreground/50">
                  Moving Averages
                </div>
                <div className="px-4 py-2 bg-background border border-border rounded-full text-[10px] font-black uppercase tracking-widest text-foreground/50">
                  Lead Time Calculation
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
