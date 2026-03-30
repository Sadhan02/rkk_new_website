import { motion } from 'motion/react';
import {
  FileText,
  Receipt,
  Shield,
  Building2,
  TrendingUp,
  ClipboardCheck,
  Calculator,
  Users,
  FileSpreadsheet,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { CTABanner } from '../components/CTABanner';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';

export function Services() {
  const services = [
    {
      icon: FileText,
      title: 'Income Tax Services',
      description: 'Comprehensive income tax planning, filing, and compliance solutions',
      features: [
        'Individual & Corporate Tax Returns',
        'Tax Planning & Advisory',
        'TDS Compliance & Returns',
        'Tax Assessments & Appeals',
        'Tax Refund Processing',
      ],
    },
    {
      icon: Receipt,
      title: 'GST Services',
      description: 'Complete GST registration, filing, and consultation services',
      features: [
        'GST Registration & Cancellation',
        'Monthly & Annual GST Returns',
        'Input Tax Credit Reconciliation',
        'GST Audit & Assessment',
        'GST Advisory & Compliance',
      ],
    },
    {
      icon: Shield,
      title: 'Audit & Assurance',
      description: 'Thorough audit services ensuring accuracy and compliance',
      features: [
        'Statutory Audit',
        'Internal Audit',
        'Tax Audit',
        'Stock & Inventory Audit',
        'Management Audit',
      ],
    },
    {
      icon: Building2,
      title: 'Business Registration',
      description: 'Seamless company formation and registration services',
      features: [
        'Private Limited Company Registration',
        'LLP Registration',
        'Partnership Firm Registration',
        'Proprietorship Registration',
        'NGO & Trust Registration',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Financial Consulting',
      description: 'Strategic financial advisory for business growth',
      features: [
        'Business Planning & Forecasting',
        'Financial Analysis & Reporting',
        'Investment Advisory',
        'Working Capital Management',
        'Merger & Acquisition Support',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Company Compliance',
      description: 'Ensure your business stays compliant with all regulations',
      features: [
        'ROC Compliance',
        'Annual Returns Filing',
        'Board Meeting Support',
        'Secretarial Services',
        'Compliance Calendar Management',
      ],
    },
    {
      icon: Calculator,
      title: 'Accounting & Bookkeeping',
      description: 'Professional accounting services for accurate financial records',
      features: [
        'Day-to-day Bookkeeping',
        'Financial Statement Preparation',
        'Accounts Payable & Receivable',
        'Bank Reconciliation',
        'MIS Reporting',
      ],
    },
    {
      icon: Users,
      title: 'Payroll Management',
      description: 'Complete payroll processing and compliance solutions',
      features: [
        'Salary Processing',
        'PF & ESI Compliance',
        'Payroll Tax Management',
        'Gratuity & Leave Calculations',
        'Payroll Software Implementation',
      ],
    },
    {
      icon: FileSpreadsheet,
      title: 'Project Financing',
      description: 'Assistance in securing funding for your business projects',
      features: [
        'Project Report Preparation',
        'Bank Loan Documentation',
        'Subsidy & Grant Applications',
        'Venture Capital Support',
        'Financial Modeling',
      ],
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Comprehensive chartered accountancy solutions tailored to meet all your business and personal financial needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border hover:border-accent hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the RKK Associates advantage
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Expert Knowledge',
                description: 'Deep understanding of tax laws and financial regulations',
              },
              {
                icon: Users,
                title: 'Personalized Service',
                description: 'Customized solutions tailored to your specific needs',
              },
              {
                icon: Shield,
                title: 'Reliable & Secure',
                description: 'Complete confidentiality and data security guaranteed',
              },
              {
                icon: TrendingUp,
                title: 'Growth Focused',
                description: 'Strategic advice to help your business thrive',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-6 shadow-sm"
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

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Service Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, transparent, and efficient
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Discuss your requirements and understand your needs',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Develop a customized strategy for your situation',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Implement the plan with precision and care',
              },
              {
                step: '04',
                title: 'Support',
                description: 'Ongoing assistance and regular updates',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
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
              title="Let's Discuss Your Needs"
              description="Schedule a free consultation with our experts to find the perfect solution for your business."
              primaryButtonText="Book Consultation"
              primaryButtonLink="/contact"
              secondaryButtonText="Contact Us"
              secondaryButtonLink="/contact"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}