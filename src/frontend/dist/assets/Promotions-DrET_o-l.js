import { c as createLucideIcon, j as jsxRuntimeExports, e as promotions, L as Link, B as Button } from "./index-CHNrevQs.js";
import { M as MediaUpload } from "./MediaUpload-DXyD0rPo.js";
import { B as Badge } from "./badge-Qr1vR9vS.js";
import { m as motion } from "./proxy-c1Ld1YR5.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$1);
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
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
function Promotions() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "promotions.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14",
        style: {
          background: "linear-gradient(160deg, oklch(0.22 0.10 255) 0%, oklch(0.30 0.14 258) 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs font-semibold uppercase tracking-widest text-accent mb-3", children: "Current Offers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-white mb-3", children: "Promotions & Special Offers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-white/80 max-w-xl mx-auto", children: "Exclusive deals and introductory offers for dealers, distributors, and industrial buyers across India." })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-background", "data-ocid": "promotions.list", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: promotions.map((promo, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.12, duration: 0.5 },
        className: "bg-card rounded-lg border border-border overflow-hidden shadow-subtle hover:shadow-elevated transition-smooth",
        "data-ocid": `promotions.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: promo.bannerImage ?? `https://picsum.photos/seed/${promo.id}/800/300`,
                alt: promo.title,
                className: "w-full h-40 object-cover rounded-t-lg"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-7 pt-3 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            MediaUpload,
            {
              accept: "image",
              label: "Update Banner",
              currentSrc: promo.bannerImage
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent/10 text-accent border-accent/20 font-body text-xs", children: promo.badge }),
              promo.discount && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl font-bold text-accent", children: promo.discount })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground mb-3", children: promo.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground leading-relaxed mb-5", children: promo.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-body text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Valid until:",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: promo.validUntil })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs font-body text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-3 h-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "T&C apply" })
              ] })
            ] })
          ] })
        ]
      },
      promo.id
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-14 bg-muted/30 border-t border-border",
        "data-ocid": "promotions.cta",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 text-center max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground mb-4", children: "Interested in These Offers?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground mb-8", children: "Contact our sales team to learn more about eligibility, terms, and how to place an order at promotional rates." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "promotions.cta.contact_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "lg",
              className: "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elevated",
              children: "Contact Sales Team"
            }
          ) })
        ] })
      }
    )
  ] });
}
export {
  Promotions as default
};
