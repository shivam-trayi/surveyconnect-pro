import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { clientLogos } from '@/data/mock';

const HeroGraphic = () => (
  <div className="relative w-full h-64 lg:h-80 animate-fade-up">
    <div className="absolute inset-0 gradient-hero rounded-3xl">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Globe/Network Visualization */}
        <div className="relative w-40 h-40 lg:w-48 lg:h-48">
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse"></div>
          <div className="absolute inset-4 rounded-full border border-primary/30 animate-pulse delay-150"></div>
          <div className="absolute inset-8 rounded-full border border-primary/40 animate-pulse delay-300"></div>
          
          {/* Central Node */}
          <div className="absolute top-1/2 left-1/2 w-6 h-6 -mt-3 -ml-3 gradient-primary rounded-full shadow-glow"></div>
          
          {/* Connecting Nodes */}
          <div className="absolute top-8 left-1/2 w-3 h-3 -ml-1.5 bg-accent rounded-full animate-float delay-100"></div>
          <div className="absolute bottom-8 left-1/2 w-3 h-3 -ml-1.5 bg-accent rounded-full animate-float delay-200"></div>
          <div className="absolute top-1/2 left-8 w-3 h-3 -mt-1.5 bg-accent rounded-full animate-float delay-300"></div>
          <div className="absolute top-1/2 right-8 w-3 h-3 -mt-1.5 bg-accent rounded-full animate-float delay-400"></div>
          
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full">
            <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="currentColor" strokeWidth="1" className="text-primary/30" />
            <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="currentColor" strokeWidth="1" className="text-primary/30" />
            <line x1="50%" y1="50%" x2="20%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-primary/30" />
            <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-primary/30" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 gradient-primary rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 gradient-accent rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Expand Your Reach with{' '}
                <span className="text-gradient">Global Market Research</span>{' '}
                Projects
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground text-balance max-w-2xl">
                Join our vendor network, connect with top researchers, manage surveys, 
                and grow revenue—securely and efficiently.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => navigate('/signup')}
                className="gradient-primary text-white shadow-glow hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 h-12 px-10 text-base font-semibold"
              >
                Sign Up Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/login')}
                className="font-semibold h-12 px-10 text-base"
              >
                Login
              </Button>
            </div>

            {/* Trust Strip */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-6">Trusted by leading research firms worldwide</p>
              <div className="flex flex-wrap items-center gap-6 lg:gap-8 opacity-60 hover:opacity-80 transition-opacity">
                {clientLogos.map((logo) => (
                  <div key={logo.id} className="flex-shrink-0">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-8 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="order-first lg:order-last">
            <HeroGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}