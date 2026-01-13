import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, 
  ChevronRight, Users, BookOpen, Award, 
  Wrench, BarChart, CheckCircle2, MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Sub-Components ---

const SectionHeader = ({ title, subtitle, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{title}</h2>
    <div className={`h-1.5 w-24 bg-blue-600 rounded-full mb-6 ${centered ? 'mx-auto' : ''}`}></div>
    {subtitle && <p className="text-slate-600 max-w-2xl mx-auto text-lg">{subtitle}</p>}
  </div>
);

const ServiceCard = ({ icon: Icon, title, items }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-slate-800">{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-slate-600">
          <CheckCircle2 size={18} className="mt-1 text-green-500 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const StatCounter = ({ label, value }) => (
  <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm">
    <div className="text-4xl font-bold text-blue-700 mb-2">{value}</div>
    <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">{label}</div>
  </div>
);

// --- Main App Component ---

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Scroll detection for sticky nav
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    { text: "SCT transformed our fleet management approach. The ICE exam prep was detailed and practical.", author: "Technical Director", company: "Logistics MNC" },
    { text: "Passionate and fun to work with! They really understood our HR gap analysis needs.", author: "HR Manager", company: "Manufacturing SME" },
    { text: "The Genset Operator awareness course helped us comply with safety audits immediately.", author: "Facility Manager", company: "GLC Property Group" }
  ];

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className={`font-bold text-2xl ${isScrolled ? 'text-blue-800' : 'text-blue-900'} tracking-tight`}>
              Shyana<span className="text-blue-600">HR</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {['Home', 'About', 'Services', 'Awards', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-800 hover:text-blue-600'} transition-colors`}
              >
                {item}
              </a>
            ))}
            <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="flex flex-col p-6 gap-4">
                {['Home', 'About', 'Services', 'Awards', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-slate-700"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2940" 
            alt="Corporate Team" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-slate-50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                HRDF Registered Provider
              </span>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Your Partner For Success in <span className="text-blue-600">HR & Training</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                We are in this together. Together we inspire. From high-level HR consulting to specialized fleet technical training.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#services" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2">
                  Explore Services <ChevronRight size={20} />
                </a>
                <a href="#contact" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                  Contact Us
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <StatCounter label="Clients Feedback" value="393+" />
              <StatCounter label="Happy Clients" value="299+" />
              <StatCounter label="Training Sessions" value="265+" />
              <div className="bg-blue-600 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-white">
                <Award size={40} className="mb-2 opacity-80" />
                <span className="font-bold text-center">Certified Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Our Expertise" 
            subtitle="Bridging the gap between management strategy and technical execution."
          />

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <ServiceCard 
              icon={Users}
              title="HR Management & Consulting"
              items={[
                "HR Planning & Systems Implementation",
                "Compensation & Benefits Structuring",
                "Performance Management Systems (PMS)",
                "Recruitment & Selection Strategy",
                "Organizational Restructuring",
                "Industrial Relations Advisory"
              ]}
            />
            <ServiceCard 
              icon={Wrench}
              title="Professional Development"
              items={[
                "Vehicle Care & Fleet Management",
                "ICE (Internal Combustion Engine) Exam Prep",
                "Genset Operators Awareness Audit",
                "Leadership & Motivation Workshops",
                "Diversity & Inclusion Training",
                "University/College Faculty Development"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-400">The foundation of everything we do at ShyanaHR.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { letter: 'A', word: 'Attitude', desc: 'Positive approach' },
              { letter: 'B', word: 'Believe', desc: 'In potential' },
              { letter: 'C', word: 'Commitment', desc: 'To excellence' },
              { letter: 'D', word: 'Discipline', desc: 'In execution' }
            ].map((val) => (
              <div key={val.word} className="p-6 border border-slate-700 rounded-xl hover:bg-slate-800 transition-colors">
                <div className="text-5xl font-black text-blue-500 mb-2">{val.letter}</div>
                <div className="text-xl font-bold mb-1">{val.word}</div>
                <div className="text-sm text-slate-400">{val.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="awards" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeader title="Trusted by Industry Leaders" subtitle="From GLCs to SMEs, we deliver results." />
          
          {/* Logo Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 opacity-60 grayscale mb-16 items-center justify-items-center">
            {/* Placeholders for logos - In production use actual client logos */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-12 w-32 bg-slate-200 rounded flex items-center justify-center text-xs font-bold text-slate-400">
                CLIENT {i + 1}
              </div>
            ))}
          </div>

          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden relative p-8 md:p-12 text-center">
             <div className="text-blue-500 mb-6 flex justify-center">
               <MessageCircle size={48} fill="currentColor" className="opacity-20" />
             </div>
             
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTestimonial}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.3 }}
               >
                 <p className="text-xl md:text-2xl text-slate-700 font-medium italic mb-6">
                   "{testimonials[activeTestimonial].text}"
                 </p>
                 <div>
                   <div className="font-bold text-slate-900">{testimonials[activeTestimonial].author}</div>
                   <div className="text-sm text-slate-500">{testimonials[activeTestimonial].company}</div>
                 </div>
               </motion.div>
             </AnimatePresence>

             <div className="flex justify-center gap-4 mt-8">
               <button onClick={prevTestimonial} className="p-2 rounded-full hover:bg-slate-100"><ChevronRight className="rotate-180" /></button>
               <button onClick={nextTestimonial} className="p-2 rounded-full hover:bg-slate-100"><ChevronRight /></button>
             </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Downloads */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to upskill your workforce?</h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
            Download our complete company profile or the specialized ICE Exam Preparation Brochure to see how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <BookOpen size={20} /> Download Profile
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Wrench size={20} /> ICE Exam Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Get In Touch</h2>
              <p className="text-slate-600 mb-8">
                Whether you need a full HR audit or specific technical training for your fleet team, we are here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Our Office</h3>
                    <p className="text-slate-600">L-07-01, Level 7, Block L, Solaris Mont Kiara,<br/>No 2 Jalan Solaris, 50480 Kuala Lumpur, Malaysia.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Call Us</h3>
                    <p className="text-slate-600">03-6200 0670</p>
                    <p className="text-slate-500 text-sm">Fax: 03-6200-0699</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Email</h3>
                    <p className="text-slate-600">support@shyanahr.com.my</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="grid gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" placeholder="Your Organization" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-slate-600">
                    <option>General Inquiry</option>
                    <option>HR Consulting</option>
                    <option>Training: Fleet/ICE Management</option>
                    <option>Training: Leadership & Soft Skills</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm">
            © 2013-{new Date().getFullYear()} Shyana HR Consulting & Training Sdn Bhd (1053568-X).<br/>All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a 
        href="https://wa.me/60362000670" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} fill="currentColor" />
      </a>

    </div>
  );
}

export default App;
