import { Link } from 'react-router';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export function CTABanner({
  title,
  description,
  primaryButtonText = 'Get Started',
  primaryButtonLink = '/contact',
  secondaryButtonText,
  secondaryButtonLink,
}: CTABannerProps) {
  return (
    <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">{description}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to={primaryButtonLink}>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            {primaryButtonText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
        {secondaryButtonText && secondaryButtonLink && (
          <Link to={secondaryButtonLink}>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              {secondaryButtonText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
