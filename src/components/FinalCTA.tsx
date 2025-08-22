import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function FinalCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-accent/20 rounded-full"></div>
      <div className="absolute top-1/2 left-20 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse delay-150"></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fade-up">
            <h2 className="text-3xl lg:text-6xl font-bold text-balance">
              Ready to Grow Your{' '}
              <span className="text-gradient">Research Business?</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Join thousands of vendors already earning with our platform. 
              Start your journey today with full access to our global network.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                onClick={() => navigate('/signup')}
                className="gradient-primary text-white shadow-glow hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 h-12 px-10 text-base font-semibold"
              >
                Join Now – It's Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/login')}
                className="font-semibold h-12 px-10 text-base bg-background/50 backdrop-blur-sm hover:bg-background/70"
              >
                I'm Already a Member
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 gradient-accent rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-white">
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <span>Free to join</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 gradient-accent rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-white">
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 gradient-accent rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-white">
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <span>Start earning immediately</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}