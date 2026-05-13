import { MediaUpload } from "@/components/MediaUpload";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products } from "@/data/sampleData";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function ProductDetail() {
  const { id } = useParams({ from: "/products/$id" });
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div
        className="min-h-[60vh] flex flex-col items-center justify-center gap-4"
        data-ocid="product_detail.not_found"
      >
        <p className="font-body text-muted-foreground text-lg">
          Product not found.
        </p>
        <Link to="/products">
          <Button variant="outline">Back to Products</Button>
        </Link>
      </div>
    );
  }

  const otherProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div data-ocid="product_detail.page">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center gap-2 text-sm font-body text-muted-foreground">
          <Link
            to="/products"
            className="hover:text-foreground transition-smooth flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Products
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden border border-border shadow-elevated"
            >
              <div className="h-2 bg-accent" />
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-3">
                <MediaUpload
                  accept="image"
                  label="Update Product Image"
                  currentSrc={product.image}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-primary/10 text-primary border-primary/20 font-body text-xs">
                  {product.category}
                </Badge>
                {product.badge && (
                  <Badge className="bg-accent text-accent-foreground text-xs">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                {product.details}
              </p>

              {/* Applications */}
              <div className="mb-6">
                <h3 className="font-display font-bold text-sm uppercase tracking-widest text-foreground mb-3">
                  Applications
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.applications.map((app) => (
                    <li
                      key={app}
                      className="flex items-center gap-2 text-sm font-body text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs */}
              <div className="mb-8 bg-muted/30 rounded-lg p-4 border border-border">
                <h3 className="font-display font-bold text-sm uppercase tracking-widest text-foreground mb-3">
                  Technical Specifications
                </h3>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <div key={key}>
                      <dt className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wide">
                        {key}
                      </dt>
                      <dd className="text-sm font-body font-semibold text-foreground">
                        {val}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <Link to="/contact" data-ocid="product_detail.enquire_button">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elevated"
                >
                  Enquire About This Product{" "}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section
        className="py-12 bg-muted/30 border-t border-border"
        data-ocid="product_detail.related"
      >
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8">
            Other Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProducts.map((p, i) => (
              <Link
                key={p.id}
                to="/products/$id"
                params={{ id: p.id }}
                data-ocid={`product_detail.related.${i + 1}`}
              >
                <div className="bg-card rounded-lg border border-border p-5 hover:shadow-elevated transition-smooth group">
                  <p className="text-xs font-body uppercase tracking-widest text-accent font-semibold mb-1">
                    {p.category}
                  </p>
                  <h3 className="font-display font-bold text-base text-foreground mb-1 group-hover:text-primary transition-smooth">
                    {p.name}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
