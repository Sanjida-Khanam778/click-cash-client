import React from "react";
import AOS from "aos";
import faq from "../../assets/faq.webp";

const FAQ = () => {
  //   React.useEffect(() => {
  //     AOS.init({
  //       duration: 1000,
  //       once: false,
  //     });
  //     AOS.refresh();
  //   }, []);
  return (
    <div className="my-10 lg:my-24 w-11/12 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h2
          data-aos="fade-up"
          data-aos-once="false"
          className="text-2xl lg:text-5xl font-medium"
        >
          Frequently Asked Questions
        </h2>
        <p
          className=" font-medium mb-4 md:mb-10 mt-2 text-center"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-once="false"
        >
          Have questions about our services? Find answers to the most common
          inquiries below. If you need further assistance, feel free to contact
          us!
        </p>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row justify-center items-center">
        <div>
          <img src={faq} alt="" />
        </div>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is Click Cash?
            </div>
            <div className="collapse-content">
              <p>
                Click cash connects businesses and individuals with workers who
                complete small, specific tasks online in exchange for payment.
                Examples of tasks include data entry, surveys, content
                moderation, and more.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              How can I earn money on this platform?{" "}
            </div>
            <div className="collapse-content">
              <p>
                You can earn money by signing up as a worker, completing
                available tasks listed on the platform, and receiving payment
                after the task is approved by the buyer.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              How do I create an account?{" "}
            </div>
            <div className="collapse-content">
              <p>
                Simply click the "Sign Up" button, provide your email, username,
                and password, and verify your email. After registration, you can
                select a role as a worker or a buyer.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              How will I get paid for completing tasks?
            </div>
            <div className="collapse-content">
              <p>
                {" "}
                Payments are credited to your platform wallet after the buyer
                approves the task. You can withdraw your earnings using
                supported payment methods, such as PayPal, Stripe, or bank
                transfer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
