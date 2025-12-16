"use client";

import Image from "next/image";
import { Factory, Users, Target, Award, Building2, Lightbulb } from 'lucide-react';
import WhatsAppFloatingButton from "../../components/WhatsAppFloatingButton";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <WhatsAppFloatingButton />
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
              <Image
                src="/images/about/plant.jpg"
                alt="Alumforms manufacturing plant - Mivan shuttering and aluminium formwork manufacturers in Hyderabad, Telangana"
                fill
                className="object-cover"
                priority
              />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Mivan Shuttering & Aluminium Formwork Manufacturers in India
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-[#ECA72C] uppercase tracking-wider">
                  WHO WE ARE
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Innovating Excellence in Aluminium Formwork & Mivan Shuttering
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are leading manufacturers of Mivan shuttering and Aluminium Formwork shuttering, Design, Installation and Supervision services in India. Our Aluminium Formwork Shuttering systems are used in the Construction of High-Rise Residential Buildings, Commercial Structures, and Villa housing projects across India.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mivan shuttering is a fast-paced construction technique that uses Aluminium Formwork to create strong and durable buildings. It is more economical than traditional construction methods because it requires less labour and time. Our aluminium formwork systems offer faster construction, better seismic resistance, smooth finishing of walls and slabs, faster completion of floors, superior quality construction work with fewer joints, and reduced leakages.
              </p>
            </div>
            <div className="relative h-96 lg:h-[500px] overflow-hidden shadow-2xl">
              <Image
                src="/images/about/plant-clean.jpg"
                alt="Aluminium formwork and Mivan shuttering manufacturing plant in Hyderabad, Telangana"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#F6F4F3] p-8">
              <h3 className="text-xl font-bold text-[#131200] mb-4">The Mivan Shuttering System</h3>
              <p className="text-[#131200] leading-relaxed">
                Our Mivan shuttering and Aluminium Formwork system is an advanced construction solution made of strong and sturdy Aluminium Components. It offers great strength, durability, simple installation, and adaptability for various construction projects in India.
              </p>
            </div>
            <div className="bg-[#F6F4F3] p-8  ">
              <h3 className="text-xl font-bold text-[#131200] mb-4">Applications Across India</h3>
              <p className="text-[#131200] leading-relaxed">
                Our Aluminium Formwork and Mivan shuttering systems are extensively used in high-rise buildings, residential projects, and villas across Hyderabad, Karnataka, Kolkata, etc. These systems are ideal for structures made entirely of concrete, where wall reinforcing steel is placed with floor slabs, and prefabricated room-sized wall panels and floor slab panels are erected. The Aluminium alloy slabs are accurately manufactured as per required sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-16 lg:py-24 bg-[#F6F4F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#ECA72C] uppercase tracking-wider">
              OUR PROCESS
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#131200] mt-4 mb-6">
              How Our Formwork System Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6   shadow-lg">
              <div className="w-12 h-12 bg-[#ECA72C]/10   flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#ECA72C]">1</span>
              </div>
              <h3 className="font-semibold text-[#131200] mb-2">Design</h3>
              <p className="text-sm text-[#131200]">Engineers design custom aluminum formwork panels tailored to project specifications.</p>
            </div>

            <div className="bg-white p-6   shadow-lg">
              <div className="w-12 h-12 bg-[#ECA72C]/10   flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#ECA72C]">2</span>
              </div>
              <h3 className="font-semibold text-[#131200] mb-2">Manufacturing</h3>
              <p className="text-sm text-[#131200]">Precision manufacturing of panels according to the approved design using high-grade aluminum.</p>
            </div>

            <div className="bg-white p-6   shadow-lg">
              <div className="w-12 h-12 bg-[#ECA72C]/10   flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#ECA72C]">3</span>
              </div>
              <h3 className="font-semibold text-[#131200] mb-2">Erection</h3>
              <p className="text-sm text-[#131200]">Erecting the structure using manufactured panels and the designed plan with precision.</p>
            </div>

            <div className="bg-white p-6   shadow-lg">
              <div className="w-12 h-12 bg-[#ECA72C]/10   flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#ECA72C]">4</span>
              </div>
              <h3 className="font-semibold text-[#131200] mb-2">Concrete Pouring</h3>
              <p className="text-sm text-[#131200]">High quality concrete is poured into the erected formwork system.</p>
            </div>
          </div>

          {/* Additional Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6   shadow-lg">
              <div className="w-12 h-12 bg-[#ECA72C]/10   flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#ECA72C]">5</span>
              </div>
              <h3 className="font-semibold text-[#131200] mb-2">Curing Period</h3>
              <p className="text-sm text-[#131200]">The concrete takes the form and shape of the cast after 24 hours.</p>
            </div>

            <div className="bg-white p-6   shadow-lg">
              <div className="w-12 h-12 bg-[#ECA72C]/10   flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#ECA72C]">6</span>
              </div>
              <h3 className="font-semibold text-[#131200] mb-2">Removal</h3>
              <p className="text-sm text-[#131200]">Formwork side walls are removed after concreting, followed by deck formwork.</p>
            </div>

            <div className="bg-white p-6   shadow-lg">
              <div className="w-12 h-12 bg-[#ECA72C]/10   flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#ECA72C]">7</span>
              </div>
              <h3 className="font-semibold text-[#131200] mb-2">Reuse</h3>
              <p className="text-sm text-[#131200]">Detached formwork is cleaned with scrapers and brushes, then stacked properly for the next use.</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6   shadow-lg border-l-4 border-[#ECA72C]">
              <h4 className="font-semibold text-[#131200] mb-2">Load Capacity</h4>
              <p className="text-sm text-[#131200]">7-8 tonnes per square meter load-carrying capacity.</p>
            </div>

            <div className="bg-white p-6   shadow-lg border-l-4 border-[#ECA72C]">
              <h4 className="font-semibold text-[#131200] mb-2">Lightweight</h4>
              <p className="text-sm text-[#131200]">Weighs around 18-20 kg per square meter.</p>
            </div>

            <div className="bg-white p-6   shadow-lg border-l-4 border-[#ECA72C]">
              <h4 className="font-semibold text-[#131200] mb-2">Highly Durable</h4>
              <p className="text-sm text-[#131200]">Can be repeated around 100 times.</p>
            </div>

            <div className="bg-white p-6   shadow-lg border-l-4 border-[#ECA72C]">
              <h4 className="font-semibold text-[#131200] mb-2">Fast Completion</h4>
              <p className="text-sm text-[#131200]">Cast floor in just 7 days with formwork.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#ECA72C] uppercase tracking-wider">
              OUR CORE VALUES
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#131200] mt-4 mb-6">
              Innovating Excellence, Building Integrity
            </h2>
            <p className="text-lg text-[#131200] max-w-3xl mx-auto">
              At ALUM FORMS, we strive for excellence in everything we do. From the quality of our products to the service we provide, we are committed to delivering exceptional results that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-linear-to-br from-[#ECA72C]/5 to-[#ECA72C]/10 p-8   border-l-4 border-[#ECA72C]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#ECA72C]   flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#131200]">Our Vision</h3>
              </div>
              <p className="text-[#131200] leading-relaxed">
                To revolutionize construction practices through advanced aluminum formwork solutions, enhancing efficiency and sustainability.
              </p>
            </div>

            <div className="bg-linear-to-br from-[#ECA72C]/5 to-[#ECA72C]/10 p-8   border-l-4 border-[#ECA72C]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#ECA72C]   flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#131200]">Our Mission</h3>
              </div>
              <p className="text-[#131200] leading-relaxed">
                To Strengthen our presence as Pioneer in Aluminum Formwork Design, supply and installation creating sustainable environment.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-[#F6F4F3]  ">
              <div className="w-16 h-16 bg-[#ECA72C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-[#131200] mb-2">Manufacturing</h4>
              <p className="text-sm text-[#131200]">State-of-the-art production facilities</p>
            </div>

            <div className="text-center p-6 bg-[#F6F4F3]  ">
              <div className="w-16 h-16 bg-[#ECA72C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-[#131200] mb-2">Expert Team</h4>
              <p className="text-sm text-[#131200]">30+ years of industry experience</p>
            </div>

            <div className="text-center p-6 bg-[#F6F4F3]  ">
              <div className="w-16 h-16 bg-[#ECA72C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-[#131200] mb-2">Innovation</h4>
              <p className="text-sm text-[#131200]">Cutting-edge design solutions</p>
            </div>

            <div className="text-center p-6 bg-[#F6F4F3]  ">
              <div className="w-16 h-16 bg-[#ECA72C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-[#131200] mb-2">Quality</h4>
              <p className="text-sm text-[#131200]">Premium aluminum components</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promoters Section */}
      <section className="py-16 lg:py-24 bg-[#131200] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-sm font-semibold text-[#ECA72C] uppercase tracking-wider">
              FOUNDERS
            </span>
            <h2 className="text-3xl lg:text-4xl text-[#F6F4F3] font-bold mt-4 mb-6">
              About the Promoters
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-sm   p-8 md:p-12 border border-white/10">
            <div className="space-y-6">
              <p className="text-lg text-[#F6F4F3] leading-relaxed">
                Along with two entrepreneurs, the firm was founded by visionary Shri K Suryanarayana, who has over 30 years of expertise in the aluminum extrusion industry.
              </p>
              <p className="text-lg text-[#F6F4F3] leading-relaxed">
                Shri K Suryanarayana possesses extensive expertise in aluminum extrusion manufacturing and fabrication. Among the principal clients are NCC, Shapurji Pallonji, L&T, etc. He owns an aluminum construction plant at Gowraram Village, Wargal Mandal, near Hyderabad, and a fabrication business in Cherlapally, Hyderabad.
              </p>
              <p className="text-lg text-[#F6F4F3] leading-relaxed">
                With Jayabheri Group and NCC, the company has work orders totaling a good eight digit number.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-16 lg:py-24 bg-linear-to-br from-[#ECA72C]/10 via-[#F6F4F3] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#ECA72C] uppercase tracking-wider">
                EXPERIENCE
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-4 mb-6">
                Experience Excellence with Alum Forms
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Alum Forms, our state-of-the-art Mivan shuttering and aluminium formwork solutions are transforming the building industry in Hyderabad, and across India. With 30+ years of experience and creativity, we provide construction projects of all sizes with unmatched quality, cost-effectiveness, and efficiency. Discover the possibilities with Alum Forms and get unparalleled construction quality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With our cutting-edge aluminium formwork and Mivan shuttering systems, we transform the construction industry and establish new benchmarks for productivity, timeliness, and quality in building projects across India. Developers, contractors, and other construction industry professionals may accomplish their objectives with assurance and accuracy thanks to our Alum Forms.
              </p>
            </div>
            <div className="relative h-96 lg:h-[500px] overflow-hidden   shadow-2xl">
              <Image
                src="/images/about/about-excellence.jpg"
                alt="Aluminium formwork construction excellence in Hyderabad, Telangana - Alumforms projects"
                fill
                className="object-cover"
              />
            </div>
        </div>
      </div>
      </section>
    </div>
  );
}
