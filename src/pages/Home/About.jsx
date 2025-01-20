import about from '../../assets/about.jpg'

const About= () => {
    return (
      <section className=" py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <img
                src={about}
                alt="About Us"
                className="rounded-lg shadow-md w-full"
              />
            </div>
  
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                About Us
              </h2>
              <p className="text-gray-600 mb-6">
                We are passionate about delivering exceptional solutions to our
                clients. Our team is dedicated to achieving excellence in
                everything we do, ensuring you get the best service possible. We
                strive to innovate and adapt to meet your needs.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to create value and make a positive impact on our
                customers, community, and the world at large. With years of
                experience, we have built a reputation for reliability and
                quality.
              </p>
              <a
                href="#"
                className="px-6 py-3 bg-[#A35C7A] text-white font-medium rounded-md shadow-md hover:bg-[#A35C7A] transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  