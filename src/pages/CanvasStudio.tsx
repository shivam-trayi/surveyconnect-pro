import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DesignCanvas } from '@/components/canvas/DesignCanvas';

const PaletteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="13.5" cy="6.5" r=".5"/>
    <circle cx="17.5" cy="10.5" r=".5"/>
    <circle cx="8.5" cy="7.5" r=".5"/>
    <circle cx="6.5" cy="12.5" r=".5"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
  </svg>
);

export default function CanvasStudio() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-surface">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center space-x-2 font-bold text-xl text-foreground hover:text-primary transition-colors"
              >
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">VP</span>
                </div>
                <span className="hidden sm:block">VendorPortal</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-2 pl-4 border-l border-border/50">
                <PaletteIcon />
                <span className="font-semibold">Design Studio</span>
                <Badge variant="secondary" className="ml-2">Beta</Badge>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="font-medium"
              >
                Back to Portal
              </Button>
              <Button
                onClick={() => navigate('/signup')}
                className="gradient-primary text-white font-medium"
              >
                Save & Share
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                Design Studio
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Create visual proposals, project mockups, and collaborate with clients 
                using our professional design canvas tools.
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="border-accent/30 text-accent">
                Auto-save enabled
              </Badge>
              <Badge variant="outline" className="border-primary/30 text-primary">
                Real-time collaboration
              </Badge>
            </div>
          </div>
        </div>

        {/* Canvas Area */}
        <DesignCanvas />

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 gradient-subtle border-border/50">
            <div className="space-y-3">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Professional Tools</h3>
              <p className="text-muted-foreground text-sm">
                Full-featured drawing tools including shapes, text, and freehand drawing 
                with customizable colors and stroke widths.
              </p>
            </div>
          </Card>

          <Card className="p-6 gradient-subtle border-border/50">
            <div className="space-y-3">
              <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Client Collaboration</h3>
              <p className="text-muted-foreground text-sm">
                Share your designs with clients for real-time feedback and collaborative 
                editing sessions to streamline project approval.
              </p>
            </div>
          </Card>

          <Card className="p-6 gradient-subtle border-border/50">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted-foreground">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Export & Share</h3>
              <p className="text-muted-foreground text-sm">
                Export your designs as high-quality PNG images or save as editable 
                JSON files for future modifications and project archives.
              </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}