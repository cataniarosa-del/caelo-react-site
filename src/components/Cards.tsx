import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { FileText, MessageSquare, BarChart3, Shield, Plug, Lock, TrendingUp, CheckCircle2, Quote } from 'lucide-react';
import type { Feature, Benefit, CaseStudy, Testimonial } from '@/lib/index';
import { springPresets, hoverLift } from '@/lib/motion';

const iconMap = {
  FileText,
  MessageSquare,
  BarChart3,
  Shield,
  Plug,
  Lock,
};

interface FeatureCardProps {
  feature: Feature;
  index?: number;
}

export function FeatureCard({ feature, index = 0 }: FeatureCardProps) {
  const Icon = iconMap[feature.icon as keyof typeof iconMap] || FileText;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ ...springPresets.gentle, delay: index * 0.1 }}
    >
      <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02] border-border/50">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <Icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
              <CardDescription className="text-base">
                {feature.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {feature.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface BenefitCardProps {
  benefit: Benefit;
  index?: number;
}

export function BenefitCard({ benefit, index = 0 }: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ ...springPresets.gentle, delay: index * 0.1 }}
    >
      <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02] border-border/50">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
              <CardDescription className="text-base">
                {benefit.description}
              </CardDescription>
            </div>
            {benefit.metric && (
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-accent/10 text-accent min-w-[80px]">
                <TrendingUp className="w-5 h-5 mb-1" />
                <span className="text-2xl font-bold">{benefit.metric}</span>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <CheckCircle2 className="w-4 h-4" />
            <span>{benefit.impact}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index?: number;
}

export function CaseStudyCard({ caseStudy, index = 0 }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ ...springPresets.gentle, delay: index * 0.1 }}
    >
      <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02] border-border/50">
        <CardHeader>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <CardTitle className="text-2xl mb-2">{caseStudy.title}</CardTitle>
              <Badge variant="secondary" className="text-sm">
                {caseStudy.organization}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-sm text-muted-foreground mb-2">Sfida</h4>
            <p className="text-sm">{caseStudy.challenge}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-muted-foreground mb-2">Soluzione</h4>
            <p className="text-sm">{caseStudy.solution}</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-muted-foreground mb-2">Risultati</h4>
            <ul className="space-y-2">
              {caseStudy.results.map((result, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
          {caseStudy.testimonial && (
            <div className="pt-4 border-t border-border">
              <div className="flex items-start gap-3">
                <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm italic text-muted-foreground mb-3">
                    "{caseStudy.testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-sm font-semibold">{caseStudy.testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{caseStudy.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  const initials = testimonial.author
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ ...springPresets.gentle, delay: index * 0.1 }}
    >
      <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02] border-border/50">
        <CardHeader>
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-primary flex-shrink-0" />
            <p className="text-base italic text-muted-foreground leading-relaxed">
              "{testimonial.quote}"
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-sm">{testimonial.author}</p>
              <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              <p className="text-xs text-muted-foreground font-medium">
                {testimonial.organization}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}