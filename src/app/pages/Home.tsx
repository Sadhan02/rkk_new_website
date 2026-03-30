import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  FileText,
  Receipt,
  Shield,
  Building2,
  TrendingUp,
  CheckCircle2,
  Award,
  Users,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { CTABanner } from '../components/CTABanner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const services = [
    {
      icon: FileText,
      title: 'Tax Filing',
      description: 'Expert income tax filing and planning services to maximize your returns and ensure compliance.',
      link: '/services',
    },
    {
      icon: Receipt,
      title: 'GST Services',
      description: 'Complete GST registration, filing, and consultation services for your business.',
      link: '/services',
    },
    {
      icon: Shield,
      title: 'Audit & Assurance',
      description: 'Comprehensive audit services ensuring accuracy and transparency in your financial records.',
      link: '/services',
    },
    {
      icon: Building2,
      title: 'Business Registration',
      description: 'Seamless company registration, partnership formation, and business setup assistance.',
      link: '/services',
    },
    {
      icon: TrendingUp,
      title: 'Financial Consulting',
      description: 'Strategic financial advisory to help your business grow and achieve financial goals.',
      link: '/services',
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: '39+ Years Experience',
      description: 'Four decades of excellence in chartered accountancy services',
    },
    {
      icon: Users,
      title: '2000+ Clients Served',
      description: 'Trusted by businesses and individuals across Delhi',
    },
    {
      icon: CheckCircle2,
      title: 'Certified Professionals',
      description: 'ICAI certified chartered accountants with proven expertise',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Committed to meeting deadlines and compliance schedules',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      role: 'CEO',
      company: 'Tech Innovations Pvt Ltd',
      content: 'RKK Associates has been instrumental in managing our company\'s finances. Their expertise in tax planning saved us significantly. Highly recommend their services!',
      rating: 5,
    },
    {
      name: 'Priya Mehta',
      role: 'Business Owner',
      company: 'Mehta Textiles',
      content: 'Professional, reliable, and always available when we need them. The team at RKK Associates handles our GST and audit requirements flawlessly.',
      rating: 5,
    },
    {
      name: 'Amit Kumar',
      role: 'Director',
      company: 'Kumar Enterprises',
      content: 'Their financial consulting helped us restructure our business effectively. The personalized attention and expert advice are truly commendable.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Trusted Chartered Accountants in Delhi
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Expert Taxation, Audit & Financial Advisory Services
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                    Book Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
                    Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              <ImageWithFallback
                src="office2.jpg"
                alt="Professional CA Office"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">39+</div>
              <div className="text-white/90">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">2000+</div>
              <div className="text-white/90">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-white/90">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive chartered accountancy solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose RKK Associates?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for all financial and compliance needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CTABanner
              title="Ready to Get Started?"
              description="Let our expert chartered accountants handle your financial needs while you focus on growing your business."
              primaryButtonText="Book Free Consultation"
              primaryButtonLink="/contact"
              secondaryButtonText="Learn More"
              secondaryButtonLink="/about"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}