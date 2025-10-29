
import React from 'react';
import ContactForm from '@/components/contact/ContactForm';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-cyber-dark">
      <div className="pt-24 pb-12 bg-cyber-darker relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-dark"></div>
        
        <div className="cyber-container relative z-10">
          <h1 className="font-tech text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-glow">Touch</span>
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Have a security concern or interested in working together? Fill out the form below or reach out directly through one of my contact channels.
          </p>
        </div>
      </div>
      
      <section className="py-12 bg-cyber-dark">
        <div className="cyber-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div className="card-cyber p-8">
                <h2 className="font-tech text-2xl font-semibold text-white mb-6">Send a Message</h2>
                <ContactForm />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="card-cyber p-8 mb-8">
                <h2 className="font-tech text-2xl font-semibold text-white mb-6">Contact Info</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-md bg-cyber-green/10 text-cyber-green flex items-center justify-center mr-4">
                      <MapPin size={24} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white font-medium mb-1 text-sm">Location</h3>
                      <p className="text-gray-400 text-sm">Long Beach, CA 90807</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-md bg-cyber-green/10 text-cyber-green flex items-center justify-center mr-4">
                      <Mail size={24} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white font-medium mb-1 text-sm">Email</h3>
                      <a href="mailto:cameronjordanprice562@yahoo.com" className="text-gray-400 hover:text-cyber-green transition-colors text-sm block">
                        cameronjordanprice562@yahoo.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-md bg-cyber-green/10 text-cyber-green flex items-center justify-center mr-4">
                      <Phone size={24} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white font-medium mb-1 text-sm">Phone</h3>
                      <p className="text-gray-400 text-sm">562-253-3505</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 rounded-md bg-cyber-green/10 text-cyber-green flex items-center justify-center mr-4">
                      <Clock size={24} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white font-medium mb-1 text-sm">Availability</h3>
                      <p className="text-gray-400 text-sm">Mon-Fri: 9AM-6PM (email preferred)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card-cyber p-8">
                <h2 className="font-tech text-2xl font-semibold text-white mb-6">Connect</h2>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://github.com/cameronjprice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-cyber-darker rounded-md text-center hover:bg-cyber-green/10 transition-colors group"
                  >
                    <svg className="h-8 w-8 mx-auto text-gray-400 group-hover:text-cyber-green transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <p className="mt-2 text-gray-400 group-hover:text-cyber-green transition-colors">GitHub</p>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/cameron-price-6013831b4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-cyber-darker rounded-md text-center hover:bg-cyber-green/10 transition-colors group"
                  >
                    <svg className="h-8 w-8 mx-auto text-gray-400 group-hover:text-cyber-green transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <p className="mt-2 text-gray-400 group-hover:text-cyber-green transition-colors">LinkedIn</p>
                  </a>
                  
                  <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-cyber-darker rounded-md text-center hover:bg-cyber-green/10 transition-colors group"
                  >
                   <svg className="h-8 w-8 mx-auto text-gray-400 group-hover:text-cyber-green transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 8.25a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5zm0 1.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm4.25-.75a.75.75 0 110 1.5.75.75 0 010-1.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5z" />
                   </svg>
                    <p className="mt-2 text-gray-400 group-hover:text-cyber-green transition-colors">Instagram</p>
                  </a>
                  
                  <a 
                    href="#"
                    className="p-4 bg-cyber-darker rounded-md text-center hover:bg-cyber-green/10 transition-colors group"
                  >
                    <ExternalLink className="h-8 w-8 mx-auto text-gray-400 group-hover:text-cyber-green transition-colors" />
                    <p className="mt-2 text-gray-400 group-hover:text-cyber-green transition-colors">Website</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map or Additional Contact Info */}
      <section className="py-16 bg-cyber-darker relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        
        <div className="cyber-container relative z-10 text-center">
          <h2 className="font-tech text-3xl font-bold text-white mb-6">
            Let's Work <span className="text-glow">Together</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in new cybersecurity challenges and opportunities to help organizations strengthen their security posture.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
