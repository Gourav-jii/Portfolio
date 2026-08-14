import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ text: '', type: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ text: 'ESTABLISHING HANDSHAKE CONTEXT...', type: 'info' });

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "";

    if (!accessKey) {
      setStatus({ 
        text: 'ERROR: KEY CONFIGURATION MISSING. PLEASE ADD VITE_WEB3FORMS_KEY TO YOUR .ENV FILE.', 
        type: 'error' 
      });
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          from_name: `${form.name} (Portfolio)`,
          subject_line: `New Portfolio Message: ${form.subject}`
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ text: 'TRANSMISSION RECEIVED SUCCESSFULLY. COMM CHANNEL SECURED.', type: 'success' });
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ text: `TRANSMISSION FAILED: ${data.message || 'Unknown Error'}`, type: 'error' });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({ text: 'TRANSMISSION TERMINATED: SERVER CONNECTIVITY LOST.', type: 'error' });
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        setStatus({ text: '', type: '' });
      }, 6000);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-[6%] bg-space-deep">

      {/* Glow backgrounds */}
      <div className="absolute top-[30%] right-[5%] w-[300px] h-[300px] bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-orbitron text-xs font-semibold tracking-widest text-neon-cyan uppercase mb-2 block">
            Get In Touch
          </span>
          <h2 className="font-orbitron font-extrabold text-white text-3xl md:text-4xl tracking-wide">
            Contact Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 max-w-5xl mx-auto z-10 relative">

          {/* Left Column: Glass Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-space-dark/45 border border-white/5 rounded-2xl shadow-lg text-left"
          >
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">

              <div className="relative w-full group">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  required
                  className="w-full py-2 bg-transparent border-b border-white/10 text-sm text-white outline-none focus:border-neon-cyan transition-colors duration-300"
                  placeholder="Name"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-neon-cyan group-focus-within:w-full transition-all duration-300 shadow-cyan-glow" />
              </div>

              <div className="relative w-full group">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  required
                  className="w-full py-2 bg-transparent border-b border-white/10 text-sm text-white outline-none focus:border-neon-cyan transition-colors duration-300"
                  placeholder="Email"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-neon-cyan group-focus-within:w-full transition-all duration-300 shadow-cyan-glow" />
              </div>

              <div className="relative w-full group">
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full py-2 bg-transparent border-b border-white/10 text-sm text-white outline-none focus:border-neon-cyan transition-colors duration-300"
                  placeholder="Subject"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-neon-cyan group-focus-within:w-full transition-all duration-300 shadow-cyan-glow" />
              </div>

              <div className="relative w-full group">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full py-2 bg-transparent border-b border-white/10 text-sm text-white outline-none focus:border-neon-cyan transition-colors duration-300 resize-none"
                  placeholder="Message"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-neon-cyan group-focus-within:w-full transition-all duration-300 shadow-cyan-glow" />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 mt-2 bg-neon-purple hover:bg-transparent text-white hover:text-neon-cyan border border-neon-purple hover:border-neon-cyan rounded-xl font-orbitron text-xs font-semibold tracking-widest transition-all duration-300 hover:shadow-cyan-glow clickable"
              >
                {submitting ? 'TRANSMITTING...' : 'Send Message'}
              </button>

              {status.text && (
                <div className={`text-xs font-orbitron mt-2 ${
                  status.type === 'success' 
                    ? 'text-[#00ff66] drop-shadow-[0_0_5px_#00ff66]' 
                    : status.type === 'error' 
                      ? 'text-[#ff3333] drop-shadow-[0_0_5px_#ff3333]' 
                      : 'text-neon-cyan'
                }`}>
                  {status.text}
                </div>
              )}
            </form>
          </motion.div>

          {/* Right Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col text-left justify-center lg:pl-8"
          >
            <h3 className="font-orbitron font-bold text-white text-xl tracking-wider mb-6">
              Connect Details
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              Feel free to reach out for collaboration opportunities, project queries, or just to chat about web technologies and IoT.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg border border-white/5 bg-white/2 flex justify-center items-center text-neon-cyan shadow-sm">
                  <FiMail size={18} />
                </div>
                <div>
                  <h5 className="font-orbitron text-[10px] text-slate-500 tracking-wider uppercase mb-0.5">Email</h5>
                  <p className="text-sm text-slate-400">swarnkargourav123@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg border border-white/5 bg-white/2 flex justify-center items-center text-neon-purple shadow-sm">
                  <FiPhone size={18} />
                </div>
                <div>
                  <h5 className="font-orbitron text-[10px] text-slate-500 tracking-wider uppercase mb-0.5">Phone</h5>
                  <p className="text-sm text-slate-400">+91 9234228009</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg border border-white/5 bg-white/2 flex justify-center items-center text-neon-pink shadow-sm">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <h5 className="font-orbitron text-[10px] text-slate-500 tracking-wider uppercase mb-0.5">Location</h5>
                  <p className="text-sm text-slate-400">Jamshedpur, India</p>
                </div>
              </div>
            </div>

            {/* Social media icons */}
            <div className="flex gap-4">
              {[
                { icon: <FaLinkedinIn size={16} />, url: 'https://linkedin.com' },
                { icon: <FaGithub size={16} />, url: 'https://github.com/Gourav-jii' },
                { icon: <FaInstagram size={16} />, url: 'https://instagram.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex justify-center items-center text-slate-400 hover:text-neon-cyan hover:border-neon-cyan hover:shadow-cyan-glow bg-white/2 hover:bg-neon-cyan/5 transition-all duration-300 clickable"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
