import React from "react";


const blogs = [
  {
    id: 1,
    title: "How to Maximize Your Earnings on Click Cash",
    summary:
      "Explore actionable tips to maximize your income by completing tasks effectively on Click Cash.",
    image: "https://i.imgur.com/5AEyQcB.png",
    author: "John Doe",
    date: "February 18, 2025",
  },
  {
    id: 2,
    title: "Why Click Cash is the Future of Micro-Tasking",
    summary:
      "Discover how Click Cash is revolutionizing the micro-tasking world with innovative features.",
    image: "https://i.imgur.com/2qfCvFS.jpeg",
    author: "Jane Smith",
    date: "February 15, 2025",
  },
  {
    id: 3,
    title: "Top 5 Tips for Buyers on Click Cash",
    summary:
      "Learn the best practices for buyers to create tasks and get the best results from workers.",
    image: "https://i.imgur.com/kFgYHDI.png",
    author: "Mike Johnson",
    date: "February 12, 2025",
  },
];

const Blog = () => {
  return (
    <section className="py-12 w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Left Section */}
      <div className="flex justify-center">
        <div className="rounded-lg overflow-hidden border w-full">
          {/* Image */}
          <div className="h-80 flex justify-center w-full items-center">
            <img
              src="https://i.imgur.com/IlLGIsm.png" // Replace with your image URL
              alt="Extra Income"
              className="h-full w-full object-cover w-full"
            />
          </div>

          {/* Content */}
          <div className="p-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold  mb-4">
              Click Cash will bring you extra income!
            </h2>
            <p className=" text-base md:text-lg">
              Earn extra income from your app and invite developers to join
              Click Cash.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Blog Image */}
            <div className="w-full md:w-1/3 h-40">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Blog Content */}
            <div className="flex flex-col justify-center p-4 md:w-2/3">
              <h2 className="text-lg md:text-xl font-semibold  mb-2 hover:text-[#A35C7A] transition duration-200">
                {blog.title}
              </h2>
              <p className=" text-sm mb-2">{blog.summary}</p>
              <p className="text-gray-400 text-xs">
                By {blog.author} | {blog.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
