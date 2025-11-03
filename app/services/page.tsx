"use client";

import Image from "next/image";
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Aluminum Formwork Systems",
      description: "Our aluminum formwork systems represent a paradigm shift in construction methodologies, offering unparalleled efficiency, durability, and versatility. Engineered with precision, our systems enable rapid assembly and dismantling, significantly reducing construction timelines and costs. The high reusability of our aluminum components ensures long-term cost savings while minimizing environmental impact. Additionally, our formwork systems deliver exceptional concrete finishing quality, resulting in structures of superior aesthetic appeal and structural integrity. Whether for residential, commercial, industrial, or infrastructure projects, our comprehensive range of formwork solutions, including wall, slab, column, and special formwork, caters to diverse construction needs with unmatched performance and reliability.",
      image: "/images/services/services-formwork.png"
    },
    {
      title: "Design and Engineering Services",
      description: "At ALUM FORMS, we offer comprehensive design and engineering services tailored to meet the unique requirements of each project. Our team of experienced engineers utilizes advanced software and cutting-edge technologies to develop customized solutions that optimize structural integrity, minimize material wastage, and enhance overall project efficiency. From initial concept to detailed design documentation, rely on our expertise to bring your vision to life with precision and innovation.",
      image: "/images/services/services-design.png"
    },
    {
      title: "Manufacturing and Supply",
      description: "With state-of-the-art manufacturing facilities and stringent quality control measures, we ensure the production of high-quality aluminum formwork components that meet the highest industry standards. Our efficient supply chain management ensures timely delivery of components to your project site, minimizing downtime and optimizing project schedules. Count on us for reliable manufacturing and supply solutions that support the seamless execution of your construction projects.",
      image: "/images/services/services-manufacturing.jpg"
    },
    {
      title: "Installation and Training",
      description: "Our professional installation teams are equipped with the expertise and experience to ensure the seamless integration of aluminum formwork systems on your project site. With meticulous attention to detail and adherence to safety protocols, we guarantee efficient and precise installation, minimizing disruptions and maximizing productivity. Additionally, we provide comprehensive training programs to equip your team with the knowledge and skills required to operate the formwork systems effectively, ensuring optimal performance throughout the project duration.",
      image: "/images/services/services-installation.jpeg"
    }
  ];

  const howItWorksSteps = [
    {
      title: "Consultation",
      description: "Begin by scheduling a consultation with our expert team. We'll discuss your project requirements, timelines, and budget to tailor a solution that meets your specific needs."
    },
    {
      title: "Design & Engineering",
      description: "Our team of experienced engineers will craft a customized design solution optimized for your project. We leverage cutting-edge technology and industry expertise to ensure precision and efficiency."
    },
    {
      title: "Supervision & Support",
      description: "Throughout the project lifecycle, our dedicated team provides ongoing supervision and support to address any challenges and ensure smooth project execution."
    },
    {
      title: "Project Completion",
      description: "As your project nears completion, we conduct thorough quality checks to ensure everything meets our high standards."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero/Intro Section */}
      <section className="bg-[#F6F4F3] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <span className="text-sm font-semibold text-[#ECA72C] uppercase tracking-wider">
                OUR SERVICES
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#131200] leading-tight">
                Transforming Concepts into Concrete Reality
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Explore our comprehensive range of innovative products and services tailored to elevate your construction projects. From advanced aluminium formwork systems to expert design and engineering solutions, we're here to empower your vision. Discover excellence, efficiency, and reliability with ALUM FORMS.
              </p>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src="/images/services/services-hero-2.jpg"
                alt="Aluminium formwork panels and construction materials"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Individual Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`mb-16 lg:mb-24 last:mb-0 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`bg-[#F6F4F3] rounded-lg overflow-hidden shadow-xl ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } flex flex-col lg:flex-row lg:h-[400px]`}>
                {/* Image */}
                <div className="relative h-64 lg:h-full lg:w-[45%]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 lg:w-[55%] flex flex-col justify-center">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#131200] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-24 bg-[#F6F4F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left Side - Header */}
            <div className="lg:col-span-1">
              <span className="text-sm font-semibold text-[#ECA72C] uppercase tracking-wider">
                HOW IT WORKS
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#131200] mt-4 mb-6 leading-tight">
                Transforming Vision into Reality, Step by Step
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Beginning with a consultation, we dive into understanding your project requirements, timelines, and budget constraints. Leveraging this insight, our team of seasoned engineers and designers crafts a tailored solution optimized for your unique needs. Once the design is finalized, our state-of-the-art manufacturing facilities spring into action, meticulously producing high-quality aluminum formwork components.
              </p>
            </div>

            {/* Right Side - Steps Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300 hover:border-[#ECA72C] transition-colors duration-300 shadow-sm">
                  <h3 className="text-xl font-bold text-[#131200] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#131200]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with our expert team to discuss your construction needs
          </p>
          {/* <button
            onClick={() => window.location.href = '/contact'}
            className="group inline-flex items-center gap-2 bg-[#ECA72C] hover:bg-[#d49929] text-[#131200] font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button> */}
          <div className="pt-4">
              <button
                className="bg-[#ECA72C] hover:bg-[#ECA72C] hover:text-white text-[#131200] font-light underline cursor-pointer uppercase text-sm tracking-wide px-8 py-2 transition-colors duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = '/services'}
              >
                Contact us Today
              </button>
          </div>
        </div>
      </section>
    </div>
  );
}
