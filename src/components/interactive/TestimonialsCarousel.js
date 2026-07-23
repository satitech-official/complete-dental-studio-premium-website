"use client";

import { Keyboard, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialsCarousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Keyboard, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      keyboard={{ enabled: true }}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5200, pauseOnMouseEnter: true, disableOnInteraction: false }}
      breakpoints={{
        760: { slidesPerView: 2 },
        1120: { slidesPerView: 3 }
      }}
      aria-label="Patient testimonial carousel"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.name}>
          <article className="panel flex min-h-[260px] flex-col p-6">
            <Quote className="h-8 w-8 text-teal" aria-hidden="true" />
            <p className="mt-5 flex-1 text-sm leading-7 text-slate">"{testimonial.quote}"</p>
            <div className="mt-5 flex items-center justify-between gap-3 border-t border-silver pt-4">
              <div>
                <h3 className="font-display font-extrabold text-ink">{testimonial.name}</h3>
                <p className="text-xs font-bold text-teal">{testimonial.treatment}</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-ice px-3 py-2 text-xs font-extrabold text-deep">
                <Star className="h-3.5 w-3.5 fill-amber text-amber" aria-hidden="true" />
                {testimonial.rating}
              </span>
            </div>
            <p className="mt-3 text-xs font-bold text-amber">{testimonial.verified}</p>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
