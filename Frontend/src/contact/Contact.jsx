
import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    
    <div className="bg-orange-300 text-black">
        <Navbar />
    <div className="container mx-auto p-6 ">
      
      
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">General Inquiries</h2>
        <p>Email us at: <a href="mailto:info@yourecommerce.com" className="text-blue-500">info@yourecommerce.com</a></p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Customer Support</h2>
        <p>Email us at: <a href="mailto:support@yourecommerce.com" className="text-blue-500">support@yourecommerce.com</a></p>
        <p>Or call us at: <span className="font-medium">1-800-123-4567</span></p>
        <p>Support Hours: Monday - Friday: 9 AM - 6 PM EST</p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Contact Form</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name:</label>
            <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email:</label>
            <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject:</label>
            <input type="text" id="subject" name="subject" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message:</label>
            <textarea id="message" name="message" rows="4" className="w-full p-2 border border-gray-300 rounded" required></textarea>
          </div>
          
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>
      
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Follow Us</h2>
        <p className="text-blue-500"><a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a> | <a href="#">LinkedIn</a></p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Our Address</h2>
        <p>Your eCommerce</p>
        <p>123 Market Street, Suite 500</p>
        <p>Your City, Your State, 12345</p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Map</h2>
        <div className="border border-gray-300 rounded overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094275!2d144.95373531531584!3d-37.81720997975178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43e1f9dfb3%3A0x5045675218ce7e33!2s123%20Market%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1579277764214!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            frameborder="0" 
            style={{border:0}} 
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
