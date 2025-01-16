import React, { useState, useEffect } from 'react';
import { X,  Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { sendContactEmail } from '../lib/sentMail';

interface ContactFormProps {
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = '' | 'sending' | 'success' | 'error';

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>('');
  const [isVisible, setIsVisible] = useState(false);
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  useEffect(() => {
    setIsVisible(true);
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEscape);
    
    return () => window.removeEventListener('keydown', handleEscape);
  }, [handleClose]);

 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setStatus('success');
        setTimeout(() => {
          handleClose();
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Error in form submission:', error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div 
      className={`fixed inset-0 bg-black/80 transition-opacity duration-300 z-50 
        ${isVisible ? 'bg-opacity-80' : 'bg-opacity-0'} 
        ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      <div 
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          bg-gray-900 rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 transition-all duration-300
          ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-200 transition-colors duration-200 hover:rotate-90 transform"
            aria-label="Close contact form"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="group">
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border-2 border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none 
                transition-colors duration-200 bg-gray-800 text-gray-100 placeholder-gray-400
                group-hover:bg-gray-700"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>

          {/* Email Input */}
          <div className="group">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border-2 border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none 
                transition-colors duration-200 bg-gray-800 text-gray-100 placeholder-gray-400
                group-hover:bg-gray-700"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message Input */}
          <div className="group">
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none 
                transition-colors duration-200 bg-gray-800 text-gray-100 placeholder-gray-400
                group-hover:bg-gray-700 resize-none"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className={`w-full py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2
              ${status === 'sending'
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transform hover:-translate-y-1 hover:shadow-lg'
              } text-white font-medium`}
          >
            {status === 'sending' && <Loader2 size={20} className="animate-spin" />}
            {status === 'success' && <CheckCircle size={20} />}
            {status === 'error' && <AlertCircle size={20} />}
            <span>
              {status === 'sending' ? 'Sending...' :
               status === 'success' ? 'Sent Successfully!' :
               status === 'error' ? 'Failed to Send' : 'Send Message'}
            </span>
          </button>

          {/* Status Messages */}
          <div className="h-6">
            {status === 'error' && (
              <p className="text-red-400 text-center text-sm animate-fade-in">
                Failed to send message. Please try again.
              </p>
            )}
          </div>
        </form>

        {/* Bottom Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-xl" />
      </div>
    </div>
  );
};

export default ContactForm;