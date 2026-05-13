import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products } from "@/data/sampleData";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const categories = [
  "All",
  ...Array.from(new Set(products.map((p) => p.category))),
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div data-ocid="products.page">
      {/* Header */}
      <section
        className="py-14"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.22 0.10 255) 0%, oklch(0.30 0.14 258) 100%)",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Product Catalog
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
            Our Chemical Products
          </h1>
          <p className="font-body text-white/80 max-w-xl mx-auto">
            Industrial-grade chemicals engineered for performance, consistency,
            and safety.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-card border-b border-border py-4 sticky top-[105px] z-30">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center gap-3">
          <Input
            placeholder="Search products…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-xs bg-background text-sm"
            data-ocid="products.search_input"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-body font-semibold transition-smooth ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                data-ocid={`products.filter.${cat.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 bg-background" data-ocid="products.list">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20" data-ocid="products.empty_state">
              <p className="font-body text-muted-foreground text-lg">
                No products match your search.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-4 text-sm text-primary underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i, 5) * 0.1, duration: 0.5 }}
                  className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-elevated transition-smooth group"
                  data-ocid={`products.item.${i + 1}`}
                >
                  <div className="relative h-44 overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-1 bg-accent" />
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                    {product.badge && (
                      <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-body uppercase tracking-widest text-accent font-semibold mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground line-clamp-2 mb-4">
                      {product.description}
                    </p>
                    <Link
                      to="/products/$id"
                      params={{ id: product.id }}
                      data-ocid={`products.learn_more.${i + 1}`}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-primary border-primary/30 hover:bg-primary/5 font-semibold"
                      >
                        Learn More <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
