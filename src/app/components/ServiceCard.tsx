import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

export function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full border-border hover:border-accent hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6">
          <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-4">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
          {link && (
            <Link to={link}>
              <Button variant="link" className="text-accent hover:text-accent/80 p-0">
                Learn More →
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
