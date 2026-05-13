import { j as jsxRuntimeExports, b as cn, r as reactExports, p as products, L as Link, B as Button } from "./index-CHNrevQs.js";
import { B as Badge } from "./badge-Qr1vR9vS.js";
import { m as motion } from "./proxy-c1Ld1YR5.js";
import { A as ArrowRight } from "./arrow-right-DSBO8Coj.js";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
const categories = [
  "All",
  ...Array.from(new Set(products.map((p) => p.category)))
];
function Products() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [search, setSearch] = reactExports.useState("");
  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "products.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14",
        style: {
          background: "linear-gradient(160deg, oklch(0.22 0.10 255) 0%, oklch(0.30 0.14 258) 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3", children: "Product Catalog" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-white mb-3", children: "Our Chemical Products" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-white/80 max-w-xl mx-auto", children: "Industrial-grade chemicals engineered for performance, consistency, and safety." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-4 sticky top-[105px] z-30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 flex flex-col sm:flex-row items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "Search products…",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          className: "max-w-xs bg-background text-sm",
          "data-ocid": "products.search_input"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setActiveCategory(cat),
          className: `px-3 py-1.5 rounded-full text-xs font-body font-semibold transition-smooth ${activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`,
          "data-ocid": `products.filter.${cat.toLowerCase().replace(/[^a-z0-9]/g, "_")}`,
          children: cat
        },
        cat
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-background", "data-ocid": "products.list", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", "data-ocid": "products.empty_state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-lg", children: "No products match your search." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            setSearch("");
            setActiveCategory("All");
          },
          className: "mt-4 text-sm text-primary underline",
          children: "Clear filters"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: Math.min(i, 5) * 0.1, duration: 0.5 },
        className: "bg-card rounded-lg border border-border overflow-hidden hover:shadow-elevated transition-smooth group",
        "data-ocid": `products.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-1 bg-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: product.image,
                alt: product.name,
                className: "w-full h-full object-cover group-hover:scale-105 transition-smooth"
              }
            ),
            product.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute top-3 right-3 bg-accent text-accent-foreground text-xs", children: product.badge })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body uppercase tracking-widest text-accent font-semibold mb-1", children: product.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground mb-2", children: product.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground line-clamp-2 mb-4", children: product.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/products/$id",
                params: { id: product.id },
                "data-ocid": `products.learn_more.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    className: "text-primary border-primary/30 hover:bg-primary/5 font-semibold",
                    children: [
                      "Learn More ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 w-3 h-3" })
                    ]
                  }
                )
              }
            )
          ] })
        ]
      },
      product.id
    )) }) }) })
  ] });
}
export {
  Products as default
};
