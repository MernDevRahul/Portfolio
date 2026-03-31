"use client";

import Section from "../components/Section";
import { MdMarkEmailUnread, MdPhoneInTalk, MdSend } from "react-icons/md";
import { FaMapPin } from "react-icons/fa";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get In Touch</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you have a question, a project proposal, or just want to say hi, 
            I will try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col space-y-8">
            <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                <MdMarkEmailUnread size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Email</h3>
                <p className="text-gray-400 mt-1">tech.rahul.shrivastav@gmail.com</p>
                <a href="mailto:tech.rahul.shrivastav@gmail.com" className="text-blue-400 text-sm hover:underline mt-2 inline-block">
                  Send an email
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                <MdPhoneInTalk size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Phone</h3>
                <p className="text-gray-400 mt-1">+91 8368037797</p>
                <a href="tel:+918368037797" className="text-blue-400 text-sm hover:underline mt-2 inline-block">
                  Call me
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                <FaMapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Location</h3>
                <p className="text-gray-400 mt-1">New Delhi, Delhi</p>
                <p className="text-gray-500 text-sm mt-2">Available for remote work</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl glass border border-white/10 shadow-2xl">
            <form className="flex flex-col space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  placeholder="[Your Name]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  placeholder="[EMAIL_ADDRESS]"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
              >
                <MdSend size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
