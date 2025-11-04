"use client";

import Image from "next/image";

const clients = [
  {
    name: "Jayabheri",
    logo: "/images/clients/jayabheri.png",
  },
  {
    name: "PMR",
    logo: "/images/clients/pmr.svg",
  },
  {
    name: "Meera Shanthivanam",
    logo: "/images/clients/meera.avif",
  },
  // {
  //   name: "Rasa Infra Frame",
  //   logo: "/images/clients/rasa.webp",
  // },
  {
    name: "Shreeji Infra",
    logo: "/images/clients/shreeji.jpg",
  },
  {
    name: "Deepthi Nirmaan Projects",
    logo: "/images/clients/deepthi.svg",
  },
  {
    name: "KLC",
    logo: "/images/clients/klc.jpeg",
  },
  {
    name: "Shangrila",
    logo: "/images/clients/shangrila.webp",
  },

];

export default function ClientsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6F4F3]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12">
          <p className="text-sm font-semibold text-gray-600 uppercase">
            Trusted By Builders
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our Clients
          </h2>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 " />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 " />

          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="bg-white rounded-lg p-2 flex items-center justify-center w-[240px] h-[160px]">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={180}
                      height={100}
                      className="w-full h-full object-contain"
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          position: relative;
          overflow: hidden;
        }

        .marquee__inner {
          display: flex;
          align-items: center;
          gap: 3.5rem;
          width: max-content;
          animation: marquee 18s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

