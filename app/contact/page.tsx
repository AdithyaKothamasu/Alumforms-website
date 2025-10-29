"use client";

import { useState } from "react";
import Image from "next/image";
import content from "../../content/site-content.json";

export default function Contact() {
  const pageCopy = content.pages.contact;
  const contactInfo = content.contact;

  const [formValues, setFormValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message?: string }>({ type: "idle" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "idle" });

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitting(false);
      setStatus({ type: "error", message: "Email service not configured. Please set NEXT_PUBLIC_EMAILJS_* env vars." });
      return;
    }

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: formValues.name,
            company: formValues.company,
            reply_to: formValues.email,
            phone: formValues.phone,
            message: formValues.message,
          },
        }),
      });

      if (!response.ok) throw new Error("Failed to send");

      setStatus({ type: "success", message: "Thanks! We received your message and will get back soon." });
      setFormValues({ name: "", company: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong. Please try again later." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Background Image Section */}
      <section className="relative min-h-screen py-12 lg:py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/other-images/plant-clean.jpg"
            alt="Plant background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {/* Header */}
          <div className="mb-8">
            <span className="text-sm font-semibold text-[#ECA72C] uppercase tracking-wider">
              Reach out to us
            </span>
            <h2 className="text-3xl font-bold text-white mt-3">Connect with us, Your Project Awaits!</h2>
          </div>

          {/* Grid with both boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact Info Box */}
            <div className="bg-[#F6F4F3]/90 backdrop-blur-sm shadow-xl p-6">
              <div className="p-4">
                <h3 className="text-sm font-semibold text-[#ECA72C] uppercase tracking-wider">{contactInfo.office.label}</h3>
                <p className="text-[#131200] font-bold text-lg mt-2">Srinivasam, H.No. 16-11-743/37, Gaddiannaram, Dilsukhnagar, Hyderabad, 500060.</p>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-[#ECA72C] uppercase tracking-wider">{contactInfo.factory.label}</h3>
                <p className="text-[#131200] font-bold text-lg mt-2">5-22, Gowram Village, Pamulaparthy Road, Siddipet District, Telangana, 502279.</p>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-[#ECA72C] uppercase tracking-wider">Email us</h3>
                <div className="mt-2 space-y-1">
                  <p className="text-[#131200] font-bold text-lg">info@alumforms.com</p>
                  <p className="text-[#131200] font-bold text-lg">sales@alumforms.com</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-[#ECA72C] uppercase tracking-wider">Call us</h3>
                <div className="mt-2 space-y-1">
                  {contactInfo.phones.map((phone: string) => (
                    <p key={phone} className="text-[#131200] font-bold text-lg">{phone}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form Box */}
            <form onSubmit={onSubmit} className="bg-[#F6F4F3]/90 backdrop-blur-sm p-6 lg:p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-md font-bold text-[#131200] mb-1" htmlFor="name">Name</label>
                  <input id="name" name="name" value={formValues.name} placeholder="Name" onChange={onChange} required className="w-full bg-white text-[#131200] border-2  border-[#ECA72C] focus:outline-none p-2" />
                </div>
                <div>
                  <label className="block text-md font-bold text-[#131200] mb-1" htmlFor="company">Company</label>
                  <input id="company" name="company" value={formValues.company} placeholder="Company" onChange={onChange} className="w-full  bg-white text-[#131200] border-2 border-[#ECA72C] focus:outline-none p-2" />
                </div>
                <div>
                  <label className="block text-md font-bold text-[#131200] mb-1" htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" value={formValues.email} placeholder="Email" onChange={onChange} required className="w-full bg-white text-[#131200] border-2 border-[#ECA72C] focus:outline-none p-2" />
                </div>
                <div>
                  <label className="block text-md font-bold text-[#131200] mb-1" htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" value={formValues.phone} placeholder="Phone" onChange={onChange} required className="w-full  bg-white text-[#131200] border-2 border-[#ECA72C] focus:outline-none p-2" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-md font-bold text-[#131200] mb-1" htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} value={formValues.message} placeholder="Message" onChange={onChange} required className="w-full bg-white text-[#131200] border-2 border-[#ECA72C] focus:outline-none p-2"></textarea>
                </div>
              </div>

              {status.type !== "idle" && (
                <div className={`mt-4 text-sm ${status.type === "success" ? "text-green-700" : "text-red-700"}`}>
                  {status.message}
                </div>
              )}

              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className="group inline-flex items-center gap-2 bg-[#ECA72C] cursor-pointer text-[#131200] hover:text-white font-light text-sm px-6 py-2 underline uppercase transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#ECA72C] uppercase tracking-wider">
              Find Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#131200] mt-4">
              Our Locations
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Office Location Map */}
            <div className="bg-[#F6F4F3] rounded-lg shadow-xl overflow-hidden">
              <div className="p-6 border-b-2 border-[#ECA72C]">
                <h3 className="text-lg font-bold text-[#131200] uppercase">
                  {contactInfo.office.label}
                </h3>
              </div>
              <div className="relative w-full h-96">
                {/* 
                  To get the embed URL:
                  1. Open: https://maps.app.goo.gl/xqFskxibx4qa6d2s5
                  2. Click "Share" → "Embed a map"
                  3. Copy the src URL from the iframe code
                  4. Replace the src below with the copied URL
                */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.9196263863155!2d78.51800147506353!3d17.36760010337507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb991a2d1bf903%3A0x1b808458877b4dad!2sAlumforms%20Office!5e0!3m2!1sen!2sin!4v1761734281375!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Office Location"
                ></iframe>
              </div>
            </div>

            {/* Factory Location Map */}
            <div className="bg-[#F6F4F3] rounded-lg shadow-xl overflow-hidden">
              <div className="p-6 border-b-2 border-[#ECA72C]">
                <h3 className="text-lg font-bold text-[#131200] uppercase">
                  {contactInfo.factory.label}
                </h3>
              </div>
              <div className="relative w-full h-96">
                {/* 
                  To get the embed URL:
                  1. Open: https://maps.app.goo.gl/Ghj6bwoKxS9auyULA
                  2. Click "Share" → "Embed a map"
                  3. Copy the src URL from the iframe code
                  4. Replace the src below with the copied URL
                */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.4360252638203!2d78.66047627507137!3d17.77119349163527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc810025ceb34b%3A0x8184701a944d19f9!2sAlumforms%20Manufacturing%20Plant!5e0!3m2!1sen!2sin!4v1761734174652!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Factory Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
