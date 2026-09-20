import React from 'react';
import { Phone, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-brand-black">
      <Navbar />

      <main className="flex-grow">
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold">
              Contact Us
            </h1>

            <p className="text-brand-muted mt-3">
              Have a question? Get in touch with us.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-cream-300 p-6 text-center shadow-sm">
              <Phone className="w-7 h-7 mx-auto text-caramel" />

              <h2 className="font-serif text-xl font-semibold mt-4">
                Phone
              </h2>

              <p className="text-brand-muted mt-2">
                Your phone number
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-cream-300 p-6 text-center shadow-sm">
              <Mail className="w-7 h-7 mx-auto text-caramel" />

              <h2 className="font-serif text-xl font-semibold mt-4">
                Email
              </h2>

              <p className="text-brand-muted mt-2">
                Your email address
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-2xl border border-cream-300 p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-semibold text-center">
              Send an Enquiry
            </h2>

            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 focus:outline-none focus:border-lightblue"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 focus:outline-none focus:border-lightblue"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-cream-50 focus:outline-none focus:border-lightblue resize-none"
              />

              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-brand-black text-white font-medium hover:bg-caramel transition-colors"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}