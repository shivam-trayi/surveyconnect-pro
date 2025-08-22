import { Card } from '@/components/ui/card';
import { steps } from '@/data/mock';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-surface">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Get started in minutes and begin earning from market research projects 
            with our streamlined vendor onboarding process.
          </p>
        </div>

        {/* Desktop - Horizontal Stepper */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-32 right-32 h-0.5 bg-gradient-to-r from-primary via-primary to-accent"></div>
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="relative text-center animate-fade-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 w-12 h-12 mx-auto mb-6 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-glow">
                    {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 bg-surface-elevated rounded-xl flex items-center justify-center text-primary shadow-subtle">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile - Vertical Stepper */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="p-6 gradient-subtle border-border/50">
                <div className="flex items-start space-x-4">
                  {/* Step Number and Icon */}
                  <div className="flex-shrink-0 space-y-3">
                    <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-glow">
                      {step.id}
                    </div>
                    <div className="w-12 h-12 bg-surface-elevated rounded-lg flex items-center justify-center text-primary shadow-subtle">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-20 w-0.5 h-8 bg-gradient-to-b from-primary to-accent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-border/50">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">2-5 min</div>
            <p className="text-muted-foreground">Average setup time</p>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">24/7</div>
            <p className="text-muted-foreground">Project availability</p>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">100+</div>
            <p className="text-muted-foreground">Active research firms</p>
          </div>
        </div>
      </div>
    </section>
  );
}