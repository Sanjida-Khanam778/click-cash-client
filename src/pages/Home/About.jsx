import about from "../../assets/about.jpg";

const About = () => {
  return (
    <section className="w-11/12 mx-auto py-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-right"
            data-aos-once="false"
          >
            <img
              src={about}
              alt="About Us"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* Text Section */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-left"
            data-aos-once="false"
          >
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="mb-6 text-justify">
              We are passionate about delivering exceptional solutions to our
              clients. Our team is dedicated to achieving excellence in
              everything we do, ensuring you get the best service possible. We
              strive to innovate and adapt to meet your needs.
            </p>
            <p className="mb-6 text-justify">
              Our mission is to create value and make a positive impact on our
              customers, community, and the world at large. With years of
              experience, we have built a reputation for reliability and
              quality.
            </p>
            <p className="mb-6 text-justify">
              Customer satisfaction is at the heart of our business. We believe
              in building long-term relationships by delivering consistent
              results and exceeding expectations. Our team works tirelessly to
              bring your vision to life with precision and dedication.
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
