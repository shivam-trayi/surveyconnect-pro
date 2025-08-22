import { Card } from '@/components/ui/card';
import { features } from '@/data/mock';

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Everything You Need to{' '}
            <span className="text-gradient">Scale Your Business</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Our comprehensive platform provides all the tools and connections 
            you need to grow your market research business globally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.id}
              className="group relative p-8 gradient-subtle border-border/50 hover:shadow-elevated hover:-translate-y-2 hover:border-primary/20 transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon Container */}
              <div className="mb-6">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-medium">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.subtitle}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground bg-surface px-4 py-2 rounded-full border border-border/50">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span>Live platform with real projects available now</span>
          </div>
        </div>
      </div>
    </section>
  );
}