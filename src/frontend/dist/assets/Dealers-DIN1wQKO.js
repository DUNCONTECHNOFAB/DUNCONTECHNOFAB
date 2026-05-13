import { c as createLucideIcon, j as jsxRuntimeExports, d as dealers, M as MapPin, P as Phone, L as Link, B as Button } from "./index-CHNrevQs.js";
import { M as MediaUpload } from "./MediaUpload-DXyD0rPo.js";
import { B as Badge } from "./badge-Qr1vR9vS.js";
import { m as motion } from "./proxy-c1Ld1YR5.js";
import { M as Mail } from "./mail-DnGCItuW.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const BadgeCheck = createLucideIcon("badge-check", __iconNode);
function Dealers() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "dealers.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14",
        style: {
          background: "linear-gradient(160deg, oklch(0.22 0.10 255) 0%, oklch(0.30 0.14 258) 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3", children: "Dealer Network" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-white mb-3", children: "Authorised Dealers & Distributors" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-white/80 max-w-xl mx-auto", children: "Find an authorised DUNCANTECHNOFAB CAMICALS dealer near you for genuine products and professional support." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-background", "data-ocid": "dealers.list", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: dealers.map((dealer, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1, duration: 0.5 },
        className: "bg-card rounded-lg border border-border p-6 shadow-subtle hover:shadow-elevated transition-smooth",
        "data-ocid": `dealers.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: dealer.photo ?? `https://api.dicebear.com/7.x/avataaars/svg?seed=${dealer.id}`,
                alt: dealer.name,
                className: "w-16 h-16 rounded-full border-2 border-primary/20 object-cover bg-muted mb-2"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              MediaUpload,
              {
                accept: "image",
                label: "Update Photo",
                currentSrc: dealer.photo,
                className: "w-full"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground", children: dealer.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-primary/10 text-primary border-primary/20 font-body text-xs", children: dealer.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 text-sm font-body text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 mt-0.5 flex-shrink-0 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-snug", children: dealer.address })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-body text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 flex-shrink-0 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `tel:${dealer.phone}`,
                  className: "hover:text-foreground transition-smooth",
                  children: dealer.phone
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-body text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 flex-shrink-0 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `mailto:${dealer.email}`,
                  className: "hover:text-foreground transition-smooth truncate",
                  children: dealer.email
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-body font-semibold uppercase tracking-widest text-accent", children: dealer.region }) })
        ]
      },
      dealer.id
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14 bg-muted/30 border-t border-border",
        "data-ocid": "dealers.cta",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 text-center max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground mb-4", children: "Become an Authorised Dealer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground mb-8", children: "Expand your business with DUNCANTECHNOFAB CAMICALS. We offer competitive margins, marketing support, and technical training to our authorised dealer partners across India." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "dealers.cta.apply_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "lg",
              className: "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elevated",
              children: "Apply for Dealership"
            }
          ) })
        ] })
      }
    )
  ] });
}
export {
  Dealers as default
};
