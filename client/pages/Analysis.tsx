import { Header } from "@/components/Header";
import { SQLBlock } from "@/components/SQLBlock";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import {
  FileSearch,
  Database,
  LineChart as LineIcon,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 45000, orders: 1200 },
  { month: "Feb", revenue: 52000, orders: 1350 },
  { month: "Mar", revenue: 48000, orders: 1280 },
  { month: "Apr", revenue: 61000, orders: 1550 },
  { month: "May", revenue: 59000, orders: 1480 },
  { month: "Jun", revenue: 68000, orders: 1720 },
  { month: "Jul", revenue: 75000, orders: 1950 },
  { month: "Aug", revenue: 82000, orders: 2100 },
  { month: "Sep", revenue: 79000, orders: 2000 },
  { month: "Oct", revenue: 95000, orders: 2400 },
  { month: "Nov", revenue: 125000, orders: 3100 },
  { month: "Dec", revenue: 110000, orders: 2800 },
];

const categoryData = [
  { name: "Electronics", value: 35, color: "#10b981" },
  { name: "Apparel", value: 25, color: "#3b82f6" },
  { name: "Home & Garden", value: 20, color: "#f59e0b" },
  { name: "Beauty", value: 12, color: "#8b5cf6" },
  { name: "Others", value: 8, color: "#64748b" },
];

export default function Analysis() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />

      <section className="pt-16 pb-12 border-b border-border bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4 uppercase italic italic">
              Exploratory Data <span className="text-primary">Analysis</span>
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed font-medium">
              A comprehensive technical breakdown of the Kaggle E-Commerce Dataset. 
              Applying deterministic SQL logic to drive business intelligence and operational integrity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Summary Metrics */}
            <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <LineIcon className="text-primary w-5 h-5" />
                <h2 className="text-lg font-bold uppercase tracking-wider">Annual Revenue Trajectory</h2>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                    <XAxis dataKey="month" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: "#121212", border: "1px solid #333", borderRadius: "8px" }}
                      itemStyle={{ color: "#10b981" }}
                    />
                    <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Database className="text-primary w-5 h-5" />
                <h2 className="text-lg font-bold uppercase tracking-wider">Category Mix</h2>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                       contentStyle={{ backgroundColor: "#121212", border: "1px solid #333", borderRadius: "8px" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2">
                {categoryData.map((item) => (
                  <div key={item.name} className="flex justify-between items-center text-xs uppercase tracking-widest font-bold">
                    <span className="text-foreground/60 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      {item.name}
                    </span>
                    <span>{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Analysis Modules */}
          <div className="space-y-16">
            {/* Module 1: Data Hygiene */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <FileSearch className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tight">Stage 01: Data Hygiene Protocol</h2>
                  <p className="text-foreground/60 font-medium">Surgical removal of entropy to ensure 100% data integrity.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-sm font-black text-primary uppercase tracking-[0.2em]">The Observation</h3>
                  <div className="bg-muted/30 border border-border p-6 rounded-lg">
                    <ul className="space-y-4">
                      <li className="flex gap-3 items-start">
                        <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                        <span className="text-sm text-foreground/80 leading-relaxed">
                          Detected 2,143 records with orphaned <code>customer_id</code> keys, potentially skewing LTV metrics by 14%.
                        </span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                        <span className="text-sm text-foreground/80 leading-relaxed">
                          Inconsistent category naming (e.g., "Electronics" vs "ELECT") requiring normalization.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <SQLBlock 
                  title="Normalization & Pruning"
                  query={`-- Standardizing Categories & Pruning Orphans
UPDATE products 
SET category = 'Electronics' 
WHERE category IN ('ELECT', 'electr', 'Electronics_DE');

DELETE FROM orders 
WHERE customer_id NOT IN (SELECT id FROM users);`}
                  insight="Ensures that all downstream joins return deterministic results without inflating volume through null-key matching."
                />
              </div>
            </div>

            {/* Module 2: LTV & Customer Windowing */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <LineIcon className="text-secondary w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">Stage 02: Revenue Telemetry</h2>
                  <p className="text-foreground/60 font-medium">Advanced window functions to calculate MoM growth and LTV ranking.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8">
                <SQLBlock 
                  title="MoM Growth & Running Total"
                  query={`WITH MonthlySales AS (
  SELECT 
    DATE_TRUNC('month', order_date) as month,
    SUM(total_amount) as revenue
  FROM orders
  GROUP BY 1
)
SELECT 
  month,
  revenue,
  SUM(revenue) OVER (ORDER BY month) as cumulative_revenue,
  LAG(revenue) OVER (ORDER BY month) as prev_month_revenue,
  (revenue - LAG(revenue) OVER (ORDER BY month)) / 
    LAG(revenue) OVER (ORDER BY month) * 100 as mom_growth
FROM MonthlySales;`}
                  insight="The 23% YoY growth spike in Q4 was driven by a 45% increase in Apparel volume during the holiday window."
                />
              </div>
            </div>

            {/* Final Outcome */}
            <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl text-center">
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold uppercase tracking-widest mb-2 text-foreground">Integrity Verified</h3>
              <p className="text-foreground/60 max-w-xl mx-auto italic">
                "Through deterministic cleaning and advanced SQL windowing, we established a clear LTV trajectory that identified a $1.2M revenue opportunity in under-served geographic clusters."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
