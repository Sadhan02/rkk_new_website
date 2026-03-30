import { motion } from 'motion/react';
import { Target, Eye, Heart, Award, Users, Briefcase, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CTABanner } from '../components/CTABanner';

export function About() {
  const officeImage = `${import.meta.env.BASE_URL}office1.jpg`;
  const founderImage = `${import.meta.env.BASE_URL}papa.jpg`;

  const milestones = [
    { year: '2003', event: 'RKK Associates Established' },
    { year: '2008', event: 'Expanded to Corporate Advisory' },
    { year: '2015', event: 'Achieved 300+ Client Milestone' },
    { year: '2020', event: 'Launched Digital Services' },
    { year: '2024', event: 'Serving 500+ Satisfied Clients' },
  ];

  const certifications = [
    'Institute of Chartered Accountants of India (ICAI)',
    'Member of Chamber of Tax Consultants',
    'ISO 9001:2015 Certified',
    'GST Suvidha Provider Certified',
  ];

  const teamValues = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Meticulous attention to detail in every engagement',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Unwavering commitment to ethical practices',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority',
    },
    {
      icon: Briefcase,
      title: 'Expertise',
      description: '20+ years of specialized knowledge',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/90 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About RKK Associates</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Your trusted financial partner committed to excellence, integrity, and personalized service since 2003
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Building Trust Through Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                RKK Associates is a premier chartered accountancy firm based in Delhi, providing comprehensive financial, taxation, and advisory services to businesses and individuals across India.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Founded in 1980, we have grown to become one of the most trusted names in the industry, serving over 2000 clients ranging from startups to established corporations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of certified professionals combines technical expertise with a deep understanding of business dynamics to deliver solutions that drive growth and ensure compliance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src={officeImage}
                alt="Modern Office"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <ImageWithFallback
                src={founderImage}
                alt="Founder Profile"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="mb-4">
                <Award className="w-12 h-12 text-accent mb-4" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Meet Our Founder
              </h2>
              <h3 className="text-2xl font-semibold text-primary mb-2">CA Subhash Singla</h3>
              <p className="text-accent mb-6">FCA, DISA (ICA)</p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                CA Subhash Singla is a Fellow Chartered Accountant with over 30 years of experience in taxation, audit, and financial advisory. He founded RKK Associates with a vision to provide personalized, high-quality chartered accountancy services.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                His expertise spans across various industries, and his client-centric approach has been the cornerstone of our firm's success. Under his leadership, RKK Associates has become synonymous with trust and excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Mission, Vision & Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-2xl p-8 text-center"
            >
              <Target className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-primary mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional chartered accountancy services that empower our clients to achieve their financial goals with confidence and peace of mind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-2xl p-8 text-center"
            >
              <Eye className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-primary mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and respected chartered accountancy firm, recognized for our integrity, expertise, and commitment to client success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-2xl p-8 text-center"
            >
              <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-primary mb-4">Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrity, Excellence, Client-Centricity, Innovation, and Continuous Learning guide everything we do.
              </p>
            </motion.div>
          </div>

          {/* Team Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">Key milestones in our growth story</p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">{milestone.year}</span>
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-primary">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Certifications & Affiliations
            </h2>
            <p className="text-lg text-muted-foreground">
              Recognized and certified by leading professional bodies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-secondary rounded-xl p-6"
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-lg text-primary font-medium">{cert}</span>
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
              title="Partner with RKK Associates"
              description="Experience the difference that 20+ years of expertise and personalized service can make for your business."
              primaryButtonText="Get in Touch"
              primaryButtonLink="/contact"
              secondaryButtonText="View Services"
              secondaryButtonLink="/services"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
