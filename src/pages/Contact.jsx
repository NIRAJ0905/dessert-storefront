import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { storeInfo } from '../data/desserts';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Custom Cake / Celebration',
    date: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-100 text-brand-black">
      <Navbar />

      <main className="flex-grow">
        <section className="py-14 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-caramel">Get In Touch</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-black mt-1">
              Contact & Custom Orders
            </h1>
            <p className="text-sm sm:text-base text-brand-muted mt-2 leading-relaxed">
              Have a question about today's counter, allergen details, or need a bespoke whole cake for a celebration? We'd love to hear from you.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Contact Info & Hours */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white rounded-xl border border-cream-300 p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded bg-cream-200 text-caramel">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Bakery Counter Phone</h3>
                    <p className="text-base font-semibold text-brand-black mt-0.5">{storeInfo.phone}</p>
                    <p className="text-xs text-brand-muted">Call during bakery hours (Tue–Sun)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-cream-300 p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded bg-cream-200 text-caramel">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Email Inquiries</h3>
                    <p className="text-base font-semibold text-brand-black mt-0.5">{storeInfo.ordersEmail}</p>
                    <p className="text-xs text-brand-muted">For custom tiers, events & catering</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-cream-300 p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded bg-cream-200 text-caramel mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Store Location</h3>
                    <p className="text-sm font-medium text-brand-black mt-0.5 leading-snug">{storeInfo.address}</p>
                    <p className="text-xs text-brand-muted mt-1">{storeInfo.city}</p>
                  </div>
                </div>
              </div>

              <div className="bg-cream-200/60 rounded-xl border border-cream-300 p-5 text-xs text-brand-muted space-y-1.5">
                <div className="flex items-center gap-1.5 font-semibold text-brand-black">
                  <Clock className="w-4 h-4 text-caramel" />
                  <span>Lead Times for Special Orders</span>
                </div>
                <p>• Custom cakes: 48 hours minimum notice</p>
                <p>• Weekend breakfast boxes: Order before Friday 6 PM</p>
                <p>• Same-day counter holds: Maximum 90 minutes</p>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-cream-300 p-6 sm:p-8">
              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-600" />
                  <h3 className="font-serif text-2xl font-bold text-brand-black">Thank you, {formData.name}!</h3>
                  <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                    We've received your note regarding "{formData.inquiryType}". Our kitchen team will review your request and get back to you at {formData.email} within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'Custom Cake / Celebration',
                        date: '',
                        message: ''
                      });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-semibold rounded border border-cream-300 bg-cream-100 hover:border-caramel hover:text-caramel transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-brand-black">
                      Send an Inquiry or Cake Request
                    </h2>
                    <p className="text-xs text-brand-muted mt-1">
                      Fill out the form below and our bakers will get back to you promptly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-brand-black mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maya Sharma"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-cream-300 bg-cream-50 text-sm focus:outline-none focus:border-caramel focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-black mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. maya@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-cream-300 bg-cream-50 text-sm focus:outline-none focus:border-caramel focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-black mb-1">
                        Phone Number (optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98450 00000"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-cream-300 bg-cream-50 text-sm focus:outline-none focus:border-caramel focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-black mb-1">
                        Inquiry Type
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-cream-300 bg-cream-50 text-sm focus:outline-none focus:border-caramel focus:bg-white"
                      >
                        <option>Custom Cake / Celebration</option>
                        <option>Weekend Pastry Box Pre-order</option>
                        <option>Dietary / Allergy Question</option>
                        <option>Catering / Corporate Gifting</option>
                        <option>General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-black mb-1">
                      Event / Preferred Pickup Date (optional)
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-cream-300 bg-cream-50 text-sm focus:outline-none focus:border-caramel focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-black mb-1">
                      Details / Flavors / Message *
                    </label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you're looking for (e.g. 1kg New York Cheesecake with raspberry compote, message on cake, etc.)"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-cream-300 bg-cream-50 text-sm focus:outline-none focus:border-caramel focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-brand-black text-white text-sm font-medium hover:bg-caramel transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}