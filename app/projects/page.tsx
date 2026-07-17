"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import WhatsAppFloatingButton from "../../components/WhatsAppFloatingButton";
import { mediaPath } from "../../lib/media";

type ProjectMedia =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "video";
      src: string;
      title: string;
      poster?: string;
    };

type Project = {
  title: string;
  location: string;
  sector: string;
  accent: string;
  media: ProjectMedia[];
};

const projectImage = (src: string, projectTitle: string): ProjectMedia => ({
  type: "image",
  src: mediaPath(src),
  alt: `Aluminium formwork and Mivan shuttering project in Hyderabad, Telangana - ${projectTitle}`,
});

const projectVideo = (src: string, title: string, poster?: string): ProjectMedia => ({
  type: "video",
  src: mediaPath(src),
  title,
  poster: poster ? mediaPath(poster) : undefined,
});

const projectMediaSources: Record<string, ProjectMedia[]> = {
  jayabheriProperties: [
    projectImage("/images/projects/jayabheri/jayabheri-block-b.png", "Jayabheri SAHASRA"),
    projectImage("/images/projects/jayabheri/jayabheri-new.jpeg", "Jayabheri SAHASRA"),
    projectImage("/images/projects/jayabheri/jayabheri-block-g.png", "Jayabheri SAHASRA"),
    projectImage("/images/projects/jayabheri/jayabheri-block-d.png", "Jayabheri SAHASRA"),
  ],
  deepthiNirmaanProjects: [
    projectImage("/images/projects/deepthi-nirmaan/deepthi-nirmaan4.jpeg", "Deepthi Nirmaan Projects Pvt Ltd"),
    projectImage("/images/projects/deepthi-nirmaan/deepthi-nirmaan2.jpeg", "Deepthi Nirmaan Projects Pvt Ltd"),
    projectImage("/images/projects/deepthi-nirmaan/deepthi-nirmaan1.jpeg", "Deepthi Nirmaan Projects Pvt Ltd"),
    projectImage("/images/projects/deepthi-nirmaan/deepthi-nirmaan3.jpeg", "Deepthi Nirmaan Projects Pvt Ltd"),
  ],
  rasaInfraframe: [
    projectImage("/images/projects/gulbarga/rasa-4.jpeg", "Rasa Infra Frame"),
    projectImage("/images/projects/gulbarga/rasa-2.jpeg", "Rasa Infra Frame"),
    projectImage("/images/projects/gulbarga/rasa-1.jpeg", "Rasa Infra Frame"),
    projectImage("/images/projects/gulbarga/rasa-3.jpeg", "Rasa Infra Frame"),
  ],
  meeraShantivanam: [
    projectImage("/images/projects/meera/meera-4.jpeg", "Meera Shanthivanam Pvt Ltd"),
    projectImage("/images/projects/meera/meera-2.jpeg", "Meera Shanthivanam Pvt Ltd"),
    projectImage("/images/projects/meera/meera-1.jpeg", "Meera Shanthivanam Pvt Ltd"),
    projectImage("/images/projects/meera/meera-3.jpeg", "Meera Shanthivanam Pvt Ltd"),
  ],
  shreeji: [
    projectImage("/images/projects/shreeji/shreeji-4.jpeg", "Shreeji Infra"),
    projectImage("/images/projects/shreeji/shreeji-2.jpeg", "Shreeji Infra"),
    projectImage("/images/projects/shreeji/shreeji-1.jpeg", "Shreeji Infra"),
    projectImage("/images/projects/shreeji/shreeji-3.jpeg", "Shreeji Infra"),
  ],
  pmr: [
    projectImage("/images/projects/pmr/pmr-1.jpeg", "PMR Group - Dithya Agartha"),
    projectImage("/images/projects/pmr/pmr-2.jpeg", "PMR Group - Dithya Agartha"),
    projectImage("/images/projects/pmr/pmr-3.jpeg", "PMR Group - Dithya Agartha"),
    projectImage("/images/projects/pmr/pmr-5.jpeg", "PMR Group - Dithya Agartha"),
  ],
  sharadchandrika: [
    projectImage("/images/projects/sharadchandrika/sc-1.jpeg", "Sharadchandrika Infra Projects"),
    projectImage("/images/projects/sharadchandrika/sc-2.jpeg", "Sharadchandrika Infra Projects"),
    projectVideo(
      "/images/projects/sharadchandrika/sc-vid.mp4",
      "Sharadchandrika Infra Projects site video",
      "/images/projects/sharadchandrika/sc-vid-thumbnail.jpeg"
    ),
    projectImage("/images/projects/sharadchandrika/sc-3.jpeg", "Sharadchandrika Infra Projects"),
  ],
};

const projects: Project[] = [
  {
    title: "Jayabheri SAHASRA",
    location: "Gowlidoddy, Hyderabad",
    sector: "High-Rise Residential",
    accent: "#ECA72C",
    media: projectMediaSources.jayabheriProperties,
  },
  {
    title: "Deepthi Nirmaan Projects Pvt Ltd",
    location: "Adibatla, Hyderabad",
    sector: "Individual Housing",
    accent: "#ECA72C",
    media: projectMediaSources.deepthiNirmaanProjects,
  },
  // {
  //   title: "Deepthi Enterprises",
  //   location: "Hyderabad, India",
  //   sector: "High-Rise Residential",
  //   accent: "#C48522",
  //   images: projectImageSources.verdantLivingCommunity,
  // },
  {
    title: "Rasa Infra Frame",
    location: "Gulbarga, Karnataka",
    sector: "Residential Apartments",
    accent: "#B1731D",
    media: projectMediaSources.rasaInfraframe,
  },
  {
    title: "Meera Shanthivanam Pvt Ltd",
    location: "Kanha village, Nandigama, Hyderabad",
    sector: "Residential Apartments",
    accent: "#F4B942",
    media: projectMediaSources.meeraShantivanam,
  },
  {
    title: "Shreeji Infra",
    location: "Gurramguda, Balapur, Hyderabad",
    sector: "Villa Housing",
    accent: "#E1A233",
    media: projectMediaSources.shreeji,
  },
  {
    title: "PMR Group - Dithya Agartha",
    location: "Kompally, Hyderabad",
    sector: "High-Rise luxury Apartments",
    accent: "#E1A233",
    media: projectMediaSources.pmr,
  },
  {
    title: "Sharadchandrika Infra Projects",
    location: "Tellapur, Hyderabad, Telangana",
    sector: "Villa Housing",
    accent: "#ECA72C",
    media: projectMediaSources.sharadchandrika,
  },
];

function ProjectCarousel({
  media,
  accentColor,
  eagerFirstImage = false,
}: {
  media: ProjectMedia[];
  accentColor: string;
  eagerFirstImage?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const isLargeScreen = window.innerWidth >= 1024;
      setSlidesToShow(isLargeScreen && media.length >= 2 ? 2 : 1);
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, [media.length]);

  const totalSlides = Math.max(1, Math.ceil(media.length / slidesToShow));
  const safeActiveIndex = activeIndex % totalSlides;

  useEffect(() => {
    if (isPaused || totalSlides <= 1) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 4800);

    return () => window.clearInterval(interval);
  }, [isPaused, totalSlides]);

  const shiftSlide = (direction: -1 | 1) => {
    setActiveIndex((prev) => (prev + direction + totalSlides) % totalSlides);
  };

  const startIndex = safeActiveIndex * slidesToShow;
  let visibleMedia = media
    .slice(startIndex, startIndex + slidesToShow)
    .map((item, localIndex) => ({ item, originalIndex: startIndex + localIndex }));

  if (visibleMedia.length < slidesToShow && media.length > slidesToShow) {
    const remainder = slidesToShow - visibleMedia.length;
    visibleMedia = visibleMedia.concat(
      media.slice(0, remainder).map((item, localIndex) => ({ item, originalIndex: localIndex }))
    );
  }

  const gridColumnsClass = slidesToShow > 1 ? "lg:grid-cols-2" : "";

  return (
    <div
      className="relative lg:h-150 w-full overflow-hidden rounded-3xl border border-[#131200]/12 bg-[#0F0D07] shadow-sm"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={`grid w-full grid-cols-1 gap-0.5 ${gridColumnsClass}`}>
        {visibleMedia.map(({ item, originalIndex }) => (
          <div
            key={`${item.src}-${originalIndex}`}
            className="relative flex w-full items-center justify-center overflow-hidden bg-[#050403] h-100 lg:h-150"
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={eagerFirstImage && originalIndex === 0}
                sizes="(min-width: 1280px) 560px, (min-width: 1024px) 44vw, 100vw"
                className="object-cover object-top"
              />
            ) : (
              <video
                src={item.src}
                poster={item.poster}
                title={item.title}
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
                onPlay={() => setIsPaused(true)}
              />
            )}
          </div>
        ))}
      </div>

      {totalSlides > 1 && (
        <>
          <div className="absolute bottom-5 right-5 flex items-center gap-3">
            <button
              type="button"
              onClick={() => shiftSlide(-1)}
              className="flex h-10 w-10 items-center cursor-pointer justify-center rounded-full border border-white/25 bg-black/70 text-white transition hover:bg-black/50"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => shiftSlide(1)}
              className="flex h-10 w-10 items-center cursor-pointer justify-center rounded-full border border-white/25 bg-black/70 text-white transition hover:bg-black/50"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="h-2.5 w-2.5 rounded-full transition-opacity cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  backgroundColor: index === safeActiveIndex ? accentColor : "black",
                  opacity: index === safeActiveIndex ? 1 : 0.7,
                  boxShadow: index === safeActiveIndex ? `0 0 0 4px rgba(0,0,0,0.35)` : "none",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <div className="relative min-h-screen bg-[#F6F4F3]">
      <WhatsAppFloatingButton />
      <section className="relative overflow-hidden bg-linear-to-br from-[#131200] via-[#1C1A13] to-[#2E291E] text-white">
        <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-[#ECA72C]/30 blur-[120px]" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#ECA72C]/20 blur-[140px]" />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 sm:px-10 lg:pb-32 lg:pt-32">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-6 lg:max-w-3xl">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.4em] text-[#ECA72C]">
                Portfolio Projects
              </span>
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-[3.5rem]">
                Projects that push the skyline forward.
              </h1>
              <p className="text-lg text-gray-300 mt-4">
                High-rise buildings, residential projects, and villas built with our advanced aluminium formwork systems
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-1 -mt-16 pb-24 sm:-mt-20 lg:-mt-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid gap-16">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-[28px] bg-white text-[#131200] shadow-[0_30px_80px_rgba(19,18,0,0.12)] transition-transform duration-500 hover:-translate-y-1.5"
                style={{
                  borderRadius: "30px",
                  border: `1px solid ${project.accent}33`,
                }}
              >
                <div className="relative grid gap-10 p-8 sm:p-10 lg:gap-14 lg:p-8">
                  <div className="flex flex-col gap-9">
                    <div className="flex items-center justify-between gap-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#131200]/50">
                      <span>Project {String(index + 1).padStart(2, "0")}</span>
                      <div className="h-px flex-1 bg-[#131200]/10" />
                    </div>

                    <ProjectCarousel
                      media={project.media}
                      accentColor={project.accent}
                      eagerFirstImage={index === 0}
                    />

                    <div className="flex flex-col gap-6">
                      <div className="space-y-3">
                        <h2 className="text-xl font-semibold leading-tight text-[#131200] sm:text-2xl lg:text-3xl">
                          {project.title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#131200]/60 sm:text-sm">
                          <span>{project.location}</span>
                          <span className="h-3 w-px bg-[#131200]/20" />
                          <span className="text-[#131200]/40">{project.sector}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#131200]/10 bg-white p-10 text-center shadow-[0_25px_60px_rgba(19,18,0,0.08)]">
          <div className="flex flex-col items-center gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#ECA72C]">
              Ready for Launch
            </span>
            <h2 className="text-2xl font-semibold text-[#131200] sm:text-[2.5rem]">
              Let’s engineer your next landmark together.
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                className="bg-[#ECA72C] hover:bg-[#ECA72C] hover:text-white text-[#131200] font-light underline cursor-pointer uppercase text-sm tracking-wide px-8 py-2 transition-colors duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = '/contact'}
              >
                Talk to Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
