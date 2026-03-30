import { Quote, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export function TestimonialCard({ name, role, company, content, rating, image }: TestimonialCardProps) {
  return (
    <Card className="h-full bg-white border-border hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
          ))}
        </div>
        
        <Quote className="w-8 h-8 text-accent/30 mb-4" />
        
        <p className="text-foreground leading-relaxed mb-6 italic">
          "{content}"
        </p>
        
        <div className="flex items-center gap-3">
          {image ? (
            <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-semibold">{name.charAt(0)}</span>
            </div>
          )}
          <div>
            <p className="font-semibold text-primary">{name}</p>
            <p className="text-sm text-muted-foreground">{role}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
