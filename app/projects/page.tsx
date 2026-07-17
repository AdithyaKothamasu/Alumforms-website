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
    title: "Sharadchandrika Infra Projects",
    location: "Tellapur, Hyderabad, Telangana",
    sector: "Villa Housing",
    accent: "#ECA72C",
    media: projectMediaSources.sharadchandrika,
  },
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
  const [isHovering, setIsHovering] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const totalSlides = media.length;
  const safeActiveIndex = activeIndex % totalSlides;
  const activeMedia = media[safeActiveIndex];
  const isVideoActive = activeMedia.type === "video";

  useEffect(() => {
    if (isHovering || isVideoPlaying || isVideoActive || totalSlides <= 1) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 4800);

    return () => window.clearInterval(interval);
  }, [isHovering, isVideoActive, isVideoPlaying, totalSlides]);

  const shiftSlide = (direction: -1 | 1) => {
    setIsVideoPlaying(false);
    setActiveIndex((prev) => (prev + direction + totalSlides) % totalSlides);
  };

  const selectSlide = (index: number) => {
    setIsVideoPlaying(false);
    setActiveIndex(index);
  };

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative flex aspect-4/3 max-h-[680px] min-h-[240px] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#080706] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] sm:aspect-4/3">
        {activeMedia.type === "image" ? (
          <Image
            key={activeMedia.src}
            src={activeMedia.src}
            alt={activeMedia.alt}
            fill
            priority={eagerFirstImage && safeActiveIndex === 0}
            sizes="(min-width: 1280px) 1120px, (min-width: 768px) 90vw, 100vw"
            className="object-contain"
          />
        ) : (
          <video
            key={activeMedia.src}
            src={activeMedia.src}
            poster={activeMedia.poster}
            title={activeMedia.title}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-contain"
            onPlay={() => setIsVideoPlaying(true)}
            onPause={() => setIsVideoPlaying(false)}
            onEnded={() => setIsVideoPlaying(false)}
          />
        )}
      </div>

      <div className="mt-4 flex min-h-11 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {totalSlides > 1 && (
            <>
            <button
              type="button"
              onClick={() => shiftSlide(-1)}
              aria-label="Show previous project media"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#131200]/15 bg-white text-[#131200] transition-colors hover:border-[#131200]/35 hover:bg-[#F3F0EA] focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ outlineColor: accentColor }}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => shiftSlide(1)}
              aria-label="Show next project media"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#131200]/15 bg-white text-[#131200] transition-colors hover:border-[#131200]/35 hover:bg-[#F3F0EA] focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ outlineColor: accentColor }}
            >
              <ArrowRight className="h-5 w-5" />
            </button>
            </>
          )}
          <span className="ml-2 min-w-12 text-sm font-semibold tabular-nums text-[#131200]/60">
            {safeActiveIndex + 1} / {totalSlides}
          </span>
        </div>

        {totalSlides > 1 && (
          <div className="flex items-center gap-2 sm:hidden" aria-label="Choose project media">
            {media.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => selectSlide(index)}
                aria-label={`Show media ${index + 1} of ${totalSlides}`}
                aria-current={index === safeActiveIndex ? "true" : undefined}
                className="h-2.5 w-2.5 cursor-pointer rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  backgroundColor: index === safeActiveIndex ? accentColor : "rgba(19,18,0,0.22)",
                  transform: index === safeActiveIndex ? "scale(1.2)" : undefined,
                  outlineColor: accentColor,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {totalSlides > 1 && (
        <div className="mt-3 hidden gap-3 overflow-x-auto pb-2 sm:flex" aria-label="Project media thumbnails">
          {media.map((item, index) => {
            const thumbnailSrc = item.type === "image" ? item.src : item.poster;

            return (
              <button
                key={item.src}
                type="button"
                onClick={() => selectSlide(index)}
                aria-label={`Show media ${index + 1} of ${totalSlides}`}
                aria-current={index === safeActiveIndex ? "true" : undefined}
                className="relative h-16 w-24 shrink-0 cursor-pointer overflow-hidden rounded-md border-2 bg-[#080706] transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  borderColor: index === safeActiveIndex ? accentColor : "rgba(19,18,0,0.12)",
                  outlineColor: accentColor,
                }}
              >
                {thumbnailSrc ? (
                  <Image
                    src={thumbnailSrc}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                ) : (
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
                    Video
                  </span>
                )}
                {item.type === "video" && (
                  <span className="absolute inset-x-0 bottom-0 bg-black/70 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white">
                    Video
                  </span>
                )}
              </button>
            );
          })}
        </div>
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
          <div className="grid gap-10 sm:gap-14">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="relative overflow-hidden bg-white text-[#131200] shadow-[0_24px_70px_rgba(19,18,0,0.10)]"
                style={{
                  borderRadius: "24px",
                  border: `1px solid ${project.accent}33`,
                }}
              >
                <div className="p-5 sm:p-7 lg:p-8">
                  <header className="mb-6 grid gap-4 border-b border-[#131200]/10 pb-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                    <div className="min-w-0">
                      {/* <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#131200]/45">
                        Project {String(index + 1).padStart(2, "0")}
                      </span> */}
                      <h2 className="text-xl font-semibold leading-tight text-[#131200] sm:text-2xl lg:text-3xl">
                        {project.title}
                      </h2>
                    </div>
                    <div className="grid gap-1 text-sm md:max-w-sm md:text-right">
                      <span className="font-medium text-[#131200]/75">{project.location}</span>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#131200]/40">
                        {project.sector}
                      </span>
                    </div>
                  </header>

                  <ProjectCarousel
                    media={project.media}
                    accentColor={project.accent}
                    eagerFirstImage={index === 0}
                  />
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
