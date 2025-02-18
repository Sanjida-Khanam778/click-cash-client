const Contact = () => {
const handleSubmit=e=>{

    e.preventDefault();
    toast.success("Newsletter subscription successful!")
    e.target.reset()


}
    return (
      <section className="bg-[#FBF5E5] py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Contact Us
          </h2>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A35C7A]"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A35C7A]"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows="5"
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A35C7A]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-[#A35C7A] text-white font-semibold rounded-md hover:bg-[#A35C7A] transition duration-300"
              >
                Send Message
              </button>
            </form>
  
            {/* Contact Information */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Get In Touch</h3>
              <p className="text-gray-600 mb-4">
                Have questions? We'd love to hear from you. Feel free to reach out!
              </p>
              <ul className="space-y-4">
                <li className="flex items-center justify-center lg:justify-start">
                  <span className="text-blue-500 mr-3">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <span>+880 1684785544</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <span className="text-blue-500 mr-3">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span>click@cash.com</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <span className="text-blue-500 mr-3">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <span>123 Main Street, Dhaka, Bangladesh</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  