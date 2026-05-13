import { c as createLucideIcon, u as useParams, p as products, j as jsxRuntimeExports, L as Link, B as Button } from "./index-CHNrevQs.js";
import { M as MediaUpload, C as CircleCheck } from "./MediaUpload-DXyD0rPo.js";
import { B as Badge } from "./badge-Qr1vR9vS.js";
import { m as motion } from "./proxy-c1Ld1YR5.js";
import { A as ArrowRight } from "./arrow-right-DSBO8Coj.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode);
function ProductDetail() {
  const { id } = useParams({ from: "/products/$id" });
  const product = products.find((p) => p.id === id);
  if (!product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "min-h-[60vh] flex flex-col items-center justify-center gap-4",
        "data-ocid": "product_detail.not_found",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-lg", children: "Product not found." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", children: "Back to Products" }) })
        ]
      }
    );
  }
  const otherProducts = products.filter((p) => p.id !== product.id).slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "product_detail.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-3 flex items-center gap-2 text-sm font-body text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/products",
          className: "hover:text-foreground transition-smooth flex items-center gap-1",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
            " Products"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: product.name })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -24 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.6 },
          className: "rounded-lg overflow-hidden border border-border shadow-elevated",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: product.image,
                alt: product.name,
                className: "w-full h-72 object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              MediaUpload,
              {
                accept: "image",
                label: "Update Product Image",
                currentSrc: product.image
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 24 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary border-primary/20 font-body text-xs", children: product.category }),
              product.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent text-accent-foreground text-xs", children: product.badge })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-4", children: product.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground leading-relaxed mb-6", children: product.details }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm uppercase tracking-widest text-foreground mb-3", children: "Applications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: product.applications.map((app) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-center gap-2 text-sm font-body text-muted-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-accent flex-shrink-0" }),
                    app
                  ]
                },
                app
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 bg-muted/30 rounded-lg p-4 border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm uppercase tracking-widest text-foreground mb-3", children: "Technical Specifications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "grid grid-cols-2 gap-x-4 gap-y-2", children: Object.entries(product.specifications).map(([key, val]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs font-body font-semibold text-muted-foreground uppercase tracking-wide", children: key }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-sm font-body font-semibold text-foreground", children: val })
              ] }, key)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "product_detail.enquire_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "lg",
                className: "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elevated",
                children: [
                  "Enquire About This Product",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
                ]
              }
            ) })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-12 bg-muted/30 border-t border-border",
        "data-ocid": "product_detail.related",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-8", children: "Other Products" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: otherProducts.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/products/$id",
              params: { id: p.id },
              "data-ocid": `product_detail.related.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-lg border border-border p-5 hover:shadow-elevated transition-smooth group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body uppercase tracking-widest text-accent font-semibold mb-1", children: p.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground mb-1 group-hover:text-primary transition-smooth", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground line-clamp-2", children: p.description })
              ] })
            },
            p.id
          )) })
        ] })
      }
    )
  ] });
}
export {
  ProductDetail as default
};
