import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { testimonials } from '@/data/mock';

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
);

const QuoteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
  </svg>
);

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-surface">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            See what our vendor partners are saying about their experience 
            growing their business with VendorPortal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="relative p-8 gradient-subtle border-border/30 hover:shadow-medium hover:-translate-y-1 transition-all duration-500"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <QuoteIcon />
              </div>

              {/* Rating */}
              {testimonial.rating && (
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {testimonial.rating}.0
                  </span>
                </div>
              )}

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatarUrl}
                  alt={`${testimonial.name} avatar`}
                  className="w-12 h-12 rounded-full ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute bottom-6 right-6">
                <Badge variant="outline" className="text-xs border-accent/30 text-accent">
                  Verified
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border/50 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">4.9/5</div>
            <p className="text-sm text-muted-foreground">Average rating</p>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-accent mb-2">500+</div>
            <p className="text-sm text-muted-foreground">Happy vendors</p>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">98%</div>
            <p className="text-sm text-muted-foreground">Satisfaction rate</p>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-accent mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Support available</p>
          </div>
        </div>
      </div>
    </section>
  );
}