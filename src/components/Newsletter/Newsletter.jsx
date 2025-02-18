
import './newslater.css'
import toast from 'react-hot-toast';

const Newslatter = () => {


      const handleNewsLatterSignIn = (e) => {
            e.preventDefault();
            toast.success("Newsletter subscription successful!")
            e.target.reset()
      };

      return (
            <div className=" my-14">
                  <div className=" container mx-auto h-96 bg-[#A35C7A] w-full  flex items-center justify-center text-center rounded-xl" id="newslater-contenar">
                        <div className=" space-y-3 ">
                              <h1 className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ">Subscribe our newsletter</h1>
                              <p className=" ">New Things Will Always Update Regularl</p>
                              <form onSubmit={handleNewsLatterSignIn} className=" join">
                                    <input required placeholder='Enter your email' type="email" name="email" id="" className="input w-11/12 join-item focus:outline-none focus:border-none" />
                                    <button className="btn join-item ">Subscribe</button>
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default Newslatter;