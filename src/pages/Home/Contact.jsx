import toast from "react-hot-toast";
import { BiEnvelope, BiMobile } from "react-icons/bi";
import { FaLocationPin } from "react-icons/fa6";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Newsletter subscription successful!");
    e.target.reset();
  };

  return (
    <section className="{` py-8 ${theme==='dark'?'bg-black/65':'bg-[#FBF5E5]'}`}">
      <div className="container w-11/12 mx-auto">
        <h2 className="text-2xl font-bold text-center  mb-6">
          Contact Us
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Contact Form */}
         <div className="border w-full lg:w-1/2 p-6 rounded-lg shadow-md">
         <form
            onSubmit={handleSubmit}
            className="{` ${theme==='dark'?'bg-black/65':'bg-[#FBF5E5]'} border`}"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium  mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A35C7A]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium  mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A35C7A]"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium  mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows="4"
                placeholder="Enter your message"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A35C7A]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#A35C7A] text-white font-semibold rounded-md hover:bg-[#A35C7A] transition duration-300"
            >
              Send Message
            </button>
          </form>
         </div>

          {/* Contact Information */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-xl font-bold  mb-3">
              Get In Touch
            </h3>
            <p className=" mb-3 text-sm">
              Have questions? We'd love to hear from you. Feel free to reach
              out!
            </p>
            <ul className="space-y-3">
              <li className="flex items-center justify-center lg:justify-start text-sm">
                <span className=" mr-2">
                  <BiMobile></BiMobile>
                </span>
                <span>Mobile: +880 1684796244</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start text-sm">
                <span className=" mr-2">
                  <BiEnvelope></BiEnvelope>
                </span>
                <span>Email: click@cash.com</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start text-sm">
                <span className=" mr-2">
                  <FaLocationPin></FaLocationPin>
                </span>
                <span>Location: Main Street, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
