import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    how: "",
    message: "",
    iam: "curious",
  });
  const [newsletter, setNewsletter] = useState({ firstName: "", email: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    setNewsletterDone(true);
  }

  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <section className="bg-[#C8102E] text-white py-12 sm:py-16 md:py-20 px-5 sm:px-6 text-center" data-testid="contact-header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight"
          style={{ fontFamily: "'Oswald', sans-serif" }}
          data-testid="contact-title"
        >
          {t("contact.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-red-100 text-base sm:text-lg italic"
        >
          {t("contact.subtitle")}
        </motion.p>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#003087] text-white p-12 text-center h-full flex flex-col items-center justify-center"
                data-testid="contact-success"
              >
                <div className="w-16 h-16 mb-6 border-4 border-white rounded-full flex items-center justify-center mx-auto">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6 16l8 8 12-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p className="text-xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {t("contact.form.success")}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div variants={fadeUp}>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#003087] mb-2">
                      {t("contact.form.firstName")} *
                    </label>
                    <input
                      type="text"
                      required
                      data-testid="input-firstName"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#003087] bg-white"
                    />
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#003087] mb-2">
                      {t("contact.form.lastName")} *
                    </label>
                    <input
                      type="text"
                      required
                      data-testid="input-lastName"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#003087] bg-white"
                    />
                  </motion.div>
                </div>

                <motion.div variants={fadeUp}>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#003087] mb-2">
                    {t("contact.form.email")} *
                  </label>
                  <input
                    type="email"
                    required
                    data-testid="input-email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#003087] bg-white"
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#003087] mb-2">
                    {t("contact.form.how")}
                  </label>
                  <select
                    data-testid="select-how"
                    value={form.how}
                    onChange={(e) => setForm({ ...form, how: e.target.value })}
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#003087] bg-white appearance-none"
                  >
                    <option value="">—</option>
                    {["opt1","opt2","opt3","opt4","opt5"].map((o) => (
                      <option key={o} value={o}>{t(`contact.form.how.${o}`)}</option>
                    ))}
                  </select>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#003087] mb-3">
                    {t("contact.form.iam")}
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      ["curious", "contact.form.curious"],
                      ["vegan", "contact.form.vegan"],
                      ["outraged", "contact.form.outraged"],
                      ["media", "contact.form.media"],
                      ["other", "contact.form.other"],
                    ].map(([val, key]) => (
                      <label key={val} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="iam"
                          value={val}
                          data-testid={`radio-iam-${val}`}
                          checked={form.iam === val}
                          onChange={() => setForm({ ...form, iam: val })}
                          className="accent-[#003087]"
                        />
                        <span className="text-sm text-gray-700">{t(key)}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#003087] mb-2">
                    {t("contact.form.message")} *
                  </label>
                  <textarea
                    required
                    rows={5}
                    data-testid="input-message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#003087] bg-white resize-none"
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <button
                    type="submit"
                    data-testid="contact-submit-btn"
                    className="w-full bg-[#003087] text-white py-4 font-bold text-sm tracking-widest uppercase hover:bg-[#C8102E] transition-colors"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {t("contact.form.submit")}
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-10"
          >
            {/* Contact info */}
            <motion.div variants={fadeUp} className="bg-[#003087] text-white p-8">
              <h3 className="text-xl font-black mb-6 uppercase tracking-wide" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {t("site.name")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                  <p className="text-blue-200 text-sm leading-relaxed whitespace-pre-line">
                    {t("contact.address")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div variants={fadeUp}>
              <h3
                className="text-lg font-black text-[#003087] mb-5 uppercase tracking-wide"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {t("contact.follow")}
              </h3>
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Youtube, label: "YouTube" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    data-testid={`social-${label.toLowerCase()}`}
                    className="w-12 h-12 bg-[#003087] text-white flex items-center justify-center hover:bg-[#C8102E] transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={fadeUp} className="bg-[#faf8f4] border border-gray-200 p-8">
              <h3
                className="text-lg font-black text-[#003087] mb-5 uppercase tracking-wide"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {t("contact.newsletter")}
              </h3>
              {newsletterDone ? (
                <p className="text-green-700 font-semibold text-sm">{t("contact.form.success")}</p>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3" data-testid="newsletter-form">
                  <input
                    type="text"
                    placeholder={t("contact.form.firstName")}
                    required
                    data-testid="newsletter-firstName"
                    value={newsletter.firstName}
                    onChange={(e) => setNewsletter({ ...newsletter, firstName: e.target.value })}
                    className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#003087] bg-white"
                  />
                  <input
                    type="email"
                    placeholder={t("contact.form.email")}
                    required
                    data-testid="newsletter-email"
                    value={newsletter.email}
                    onChange={(e) => setNewsletter({ ...newsletter, email: e.target.value })}
                    className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#003087] bg-white"
                  />
                  <button
                    type="submit"
                    data-testid="newsletter-submit"
                    className="w-full bg-[#C8102E] text-white py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#003087] transition-colors"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {t("contact.newsletter.submit")}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
