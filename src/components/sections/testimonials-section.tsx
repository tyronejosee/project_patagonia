"use client";

import { Star } from "lucide-react";

import { SpotlightCard } from "@/components/animations/spotlight-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heading } from "@/components/ui/heading";
import { DEFAULT_ANIMATION_COLOR } from "@/config/animations";
import { testimonials } from "@/data/testimonials";
import type { Testimonial } from "@/types/testimonial";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

function StarRating() {
  return (
    <div className="flex gap-1 text-amber-400 mb-4">
      {Array.from({ length: 5 }, (_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: Static star rating
        <Star key={`star-${index}`} className="h-4 w-4 fill-current drop-shadow-sm" />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="testimonial-card shrink-0 w-[350px] mx-4 relative">
      <div className="absolute -top-3 -left-3 w-10 h-10 bg-black rounded-full flex items-center justify-center shadow hover:shadow-lg transition-all duration-300 z-20">
        <span className="text-white text-2xl font-serif leading-none">"</span>
      </div>

      <SpotlightCard
        className="h-full bg-white rounded-2xl p-4 shadow hover:shadow-xl transition-all duration-300 border group"
        spotlightColor={DEFAULT_ANIMATION_COLOR}
      >
        <div className="relative z-10">
          <StarRating />

          <p className="text-gray-800 text-base leading-relaxed mb-6 font-light italic min-h-[100px]">
            "{testimonial.text}"
          </p>

          <div className="flex items-center gap-4 pt-4 border-t">
            <Avatar className="w-12 h-12 border-2 shadow-md">
              <AvatarImage
                src={`https://i.pravatar.cc/150?u=${testimonial.avatarIndex}`}
                alt={testimonial.author}
              />
              <AvatarFallback className="bg-black text-white font-semibold">
                {testimonial.author[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-black text-sm">{testimonial.author}</p>
              <p className="text-xs text-gray-600">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}

export function TestimonialsSection() {
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="relative py-24 bg-white overflow-hidden" id="testimonials">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-black/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <Heading level="h2" underline align="center">
            Lo que dicen nuestros huéspedes
          </Heading>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="testimonials-scroll-container overflow-hidden py-4">
            <div className="testimonials-track flex hover:pause-animation">
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-382px * ${testimonials.length}));
          }
        }

        .testimonials-track {
          animation: scroll-horizontal 40s linear infinite;
          will-change: transform;
        }

        .testimonials-track:hover {
          animation-play-state: paused;
        }

        .testimonial-card {
          transition: transform 0.3s ease;
        }

        .testimonials-track:hover .testimonial-card:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
