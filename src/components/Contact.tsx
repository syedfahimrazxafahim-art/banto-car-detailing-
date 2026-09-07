import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { BUSINESS_DATA } from '../data/business';
import { BookingFormData } from '../types';

interface ContactProps {
  selectedService: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedService }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    vehicle: '',
    service: 'Car Washing',
    preferredDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  // Update selected service if parent changes it
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const validate = () => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.vehicle.trim()) {
      newErrors.vehicle = 'Vehicle year, make, and model is required.';
    }
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Honest simulation: does not falsely claim backend DB storage
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const resetForm = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      phone: '',
      vehicle: '',
      service: 'Car Washing',
      preferredDate: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="bg-[#101010] py-24 sm:py-32 relative border-t border-[#8C6B18]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] block mb-3">
            Inquiries & Reservations
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            RESERVE YOUR <span className="text-[#F5C542]">SERVICE</span>
          </h2>
          <div className="w-16 h-[2px] bg-metallic-gold-gradient mx-auto mb-6" />
          <p className="text-base text-[#A8A8A8] font-light leading-relaxed">
            Reach out directly or submit your appointment request below. We look forward to providing your vehicle with pristine hand care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE: Direct Business Contact Information */}
          <div className="lg:col-span-5 bg-[#050505] p-8 sm:p-10 rounded-sm border border-[#8C6B18]/40 shadow-2xl shadow-black">
            <h3 className="font-heading text-2xl font-bold text-white mb-3">
              CONTACT INFORMATION
            </h3>
            <div className="w-12 h-[2px] bg-[#8C6B18] mb-8" />

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#101010] border border-[#8C6B18]/50 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#A8A8A8] mb-1">
                    Direct Telephone
                  </div>
                  <a
                    href={`tel:${BUSINESS_DATA.phoneRaw}`}
                    className="text-base sm:text-lg font-semibold text-white hover:text-[#F5C542] transition-colors focus:outline-none focus-visible:underline"
                  >
                    {BUSINESS_DATA.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#101010] border border-[#8C6B18]/50 flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#A8A8A8] mb-1">
                    Email Inquiries
                  </div>
                  <a
                    href={`mailto:${BUSINESS_DATA.email}`}
                    className="text-sm sm:text-base font-medium text-white hover:text-[#F5C542] break-all transition-colors focus:outline-none focus-visible:underline"
                  >
                    {BUSINESS_DATA.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#101010] border border-[#8C6B18]/50 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#A8A8A8] mb-1">
                    Service Area
                  </div>
                  <div className="text-base font-semibold text-white">
                    {BUSINESS_DATA.location}
                  </div>
                  <p className="text-xs text-[#A8A8A8] mt-0.5">
                    Professional auto detailing serving greater Los Angeles.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-10 pt-8 border-t border-[#8C6B18]/30">
              <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-4">
                Official Social Profiles
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={BUSINESS_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Banto Auto Detailing on Instagram."
                  className="inline-flex items-center justify-between p-3 rounded-sm bg-[#101010] hover:bg-[#181818] border border-[#8C6B18]/40 hover:border-[#D4AF37] text-white hover:text-[#F5C542] text-xs font-semibold tracking-wider uppercase transition-all"
                >
                  <span>Instagram: @bantoadetailing</span>
                  <span className="text-[#D4AF37]">↗</span>
                </a>

                <a
                  href={BUSINESS_DATA.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Banto Auto Detailing on Facebook."
                  className="inline-flex items-center justify-between p-3 rounded-sm bg-[#101010] hover:bg-[#181818] border border-[#8C6B18]/40 hover:border-[#D4AF37] text-white hover:text-[#F5C542] text-xs font-semibold tracking-wider uppercase transition-all"
                >
                  <span>Facebook Profile</span>
                  <span className="text-[#D4AF37]">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Premium Booking / Contact Form */}
          <div className="lg:col-span-7 bg-[#050505] p-8 sm:p-10 rounded-sm border border-[#8C6B18]/40 shadow-2xl shadow-black relative">
            <h3 className="font-heading text-2xl font-bold text-white mb-2">
              BOOK AN APPOINTMENT
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A8A8] mb-8 font-light">
              Submit your vehicle specifications and preferred schedule to initiate your detailing reservation.
            </p>

            {submittedData ? (
              <div className="p-8 bg-[#101010] border border-[#D4AF37] rounded-sm text-center animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-[#F5C542]" />
                </div>
                <h4 className="font-heading text-xl font-bold text-white mb-2">
                  REQUEST PREPARED
                </h4>
                <p className="text-sm text-[#A8A8A8] mb-6 leading-relaxed">
                  Thank you, <strong className="text-white">{submittedData.name}</strong>. Your appointment request for your <strong className="text-white">{submittedData.vehicle}</strong> ({submittedData.service}) has been compiled.
                </p>

                {/* Honest feedback disclosure */}
                <div className="p-4 bg-[#050505] border border-[#8C6B18]/50 rounded-sm text-left text-xs text-[#A8A8A8] space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-[#D4AF37] font-semibold">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Website Preview Notice</span>
                  </div>
                  <p>
                    Because this is an active client demonstration preview without a live connected database backend, inquiries can be verified immediately via telephone at{' '}
                    <a href={`tel:${BUSINESS_DATA.phoneRaw}`} className="text-white underline font-semibold">
                      {BUSINESS_DATA.phone}
                    </a>{' '}
                    or email at{' '}
                    <a href={`mailto:${BUSINESS_DATA.email}`} className="text-white underline font-semibold">
                      {BUSINESS_DATA.email}
                    </a>.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`mailto:${BUSINESS_DATA.email}?subject=Booking Request: ${encodeURIComponent(
                      submittedData.service
                    )} - ${encodeURIComponent(submittedData.vehicle)}&body=${encodeURIComponent(
                      `Name: ${submittedData.name}\nPhone: ${submittedData.phone}\nVehicle: ${submittedData.vehicle}\nService: ${submittedData.service}\nPreferred Date: ${submittedData.preferredDate}\nMessage: ${submittedData.message}`
                    )}`}
                    className="inline-flex items-center justify-center gap-2 bg-metallic-gold-gradient text-[#050505] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-sm hover:brightness-110 transition-all"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send via Email Client</span>
                  </a>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="bg-[#101010] text-white hover:text-[#F5C542] border border-[#8C6B18] text-xs uppercase tracking-wider px-6 py-3 rounded-sm transition-all"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="client-name-input"
                      className="block text-xs font-semibold uppercase tracking-widest text-[#A8A8A8] mb-2"
                    >
                      Your Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      id="client-name-input"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Michael Vance"
                      className={`w-full bg-[#101010] text-white text-sm px-4 py-3 rounded-sm border focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-[#8C6B18]/40 focus:border-[#D4AF37]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="client-phone-input"
                      className="block text-xs font-semibold uppercase tracking-widest text-[#A8A8A8] mb-2"
                    >
                      Phone Number <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      id="client-phone-input"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 213-555-0199"
                      className={`w-full bg-[#101010] text-white text-sm px-4 py-3 rounded-sm border focus:outline-none transition-colors ${
                        errors.phone
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-[#8C6B18]/40 focus:border-[#D4AF37]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Vehicle */}
                  <div>
                    <label
                      htmlFor="client-vehicle-input"
                      className="block text-xs font-semibold uppercase tracking-widest text-[#A8A8A8] mb-2"
                    >
                      Vehicle (Year / Make / Model) <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      id="client-vehicle-input"
                      type="text"
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      placeholder="e.g. 2024 Porsche 911"
                      className={`w-full bg-[#101010] text-white text-sm px-4 py-3 rounded-sm border focus:outline-none transition-colors ${
                        errors.vehicle
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-[#8C6B18]/40 focus:border-[#D4AF37]'
                      }`}
                    />
                    {errors.vehicle && (
                      <p className="text-red-400 text-xs mt-1.5">{errors.vehicle}</p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="client-service-select"
                      className="block text-xs font-semibold uppercase tracking-widest text-[#A8A8A8] mb-2"
                    >
                      Selected Service <span className="text-[#D4AF37]">*</span>
                    </label>
                    <select
                      id="client-service-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#101010] text-white text-sm px-4 py-3 rounded-sm border border-[#8C6B18]/40 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    >
                      <option value="Car Washing">Car Washing (Primary Confirmed Service)</option>
                      <option value="Car Washing - Free Estimate">Car Washing - Free Estimate</option>
                      <option value="Basic Detail">Package: Basic Detail</option>
                      <option value="Premium Detail">Package: Premium Detail (Most Popular)</option>
                      <option value="Full Detail">Package: Full Detail</option>
                      <option value="Ultimate Detail">Package: Ultimate Detail</option>
                      <option value="Other / Custom Inquiry">Other / Custom Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label
                    htmlFor="client-date-input"
                    className="block text-xs font-semibold uppercase tracking-widest text-[#A8A8A8] mb-2"
                  >
                    Preferred Date <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="client-date-input"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className={`w-full bg-[#101010] text-white text-sm px-4 py-3 rounded-sm border focus:outline-none transition-colors ${
                      errors.preferredDate
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-[#8C6B18]/40 focus:border-[#D4AF37]'
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.preferredDate}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="client-message-input"
                    className="block text-xs font-semibold uppercase tracking-widest text-[#A8A8A8] mb-2"
                  >
                    Vehicle Notes & Specific Requests (Optional)
                  </label>
                  <textarea
                    id="client-message-input"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mention any specific areas requiring attention or scheduling preferences..."
                    className="w-full bg-[#101010] text-white text-sm px-4 py-3 rounded-sm border border-[#8C6B18]/40 focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit button: BOOK NOW */}
                <button
                  id="booking-form-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-metallic-gold-gradient text-[#050505] font-bold text-sm uppercase tracking-[0.2em] py-4 px-8 rounded-sm hover:brightness-110 active:scale-[0.99] transition-all shadow-xl shadow-[#D4AF37]/20 border border-[#F5C542] disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#050505]" />
                  <span>{isSubmitting ? 'PROCESSING...' : 'BOOK NOW'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
