"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  phone: string;
  location: string;
  service: string;
  message: string;
}

interface Errors {
  name?: string;
  phone?: string;
  location?: string;
  service?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", location: "", service: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Enter a valid 10-digit Indian mobile number.";
    if (!form.location.trim()) e.location = "Please enter your location.";
    if (!form.service) e.service = "Please select a service.";
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Errors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={40} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">Request Received!</h3>
        <p className="text-slate-600 mb-6">Thank you, {form.name}! We'll contact you within 30 minutes to confirm your booking.</p>
        <Button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", location: "", service: "", message: "" }); }} variant="outline">
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  const inputClass = (field: keyof Errors) =>
    `w-full px-4 py-3 rounded-xl border text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
      errors[field]
        ? "border-red-300 focus:ring-red-200 bg-red-50"
        : "border-slate-200 focus:ring-blue-200 focus:border-blue-400 bg-white"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Rahul Sharma" className={inputClass("name")} />
          {errors.name && <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number *</label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="98765 43210" className={inputClass("phone")} />
          {errors.phone && <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1"><AlertCircle size={12} />{errors.phone}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Location *</label>
          <input name="location" value={form.location} onChange={handleChange} placeholder="Banjara Hills, Hyderabad" className={inputClass("location")} />
          {errors.location && <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1"><AlertCircle size={12} />{errors.location}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service Required *</label>
          <select name="service" value={form.service} onChange={handleChange} className={inputClass("service")}>
            <option value="">Select a service...</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
          </select>
          {errors.service && <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1"><AlertCircle size={12} />{errors.service}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your space, preferred date/time, or any special requirements..."
          className={inputClass("message")}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1"><AlertCircle size={12} />{errors.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full justify-center" disabled={loading}>
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending...
          </span>
        ) : (
          <>Send Request <Send size={18} /></>
        )}
      </Button>

      <p className="text-xs text-slate-500 text-center">
        We respond within 30 minutes during working hours. Your data is safe with us.
      </p>
    </form>
  );
}
