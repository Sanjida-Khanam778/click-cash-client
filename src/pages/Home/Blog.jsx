import React, { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "How to Maximize Your Earnings on Click Care",
    summary: "Learn the best strategies to earn more as a worker on Click Care.",
    content:
      "Click Care offers a wealth of opportunities to earn by completing micro-tasks. To maximize your earnings, focus on tasks that match your skills, maintain a high approval rate, and stay active on the platform.",
    image: "https://via.placeholder.com/800x400",
    author: "John Doe",
    publishedDate: "February 18, 2025",
    category: "Earning Tips",
  },
  {
    id: 2,
    title: "Why Buyers Love Using Click Care for Outsourcing Tasks",
    summary: "Discover how buyers are using Click Care to streamline task management.",
    content:
      "Click Care provides buyers with an easy-to-use platform for outsourcing tasks. The streamlined task management and secure payment options make it a preferred choice for businesses.",
    image: "https://via.placeholder.com/800x400",
    author: "Jane Smith",
    publishedDate: "February 15, 2025",
    category: "Task Management",
  },
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBackToList = () => {
    setSelectedBlog(null);
  };

  return (
    <section className="container mx-auto py-12 px-6">
      {selectedBlog ? (
        // Individual Blog Post View
        <article>
          <button
            onClick={handleBackToList}
            className="mb-4 text-blue-500 hover:underline"
          >
            Back to Blogs
          </button>
          <h1 className="text-4xl font-bold mb-4">{selectedBlog.title}</h1>
          <p className="text-gray-500 mb-8">
            By {selectedBlog.author} | Published on {selectedBlog.publishedDate}
          </p>
          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="w-full rounded-lg mb-6"
          />
          <div className="text-gray-700 text-lg leading-relaxed mb-12">
            {selectedBlog.content}
          </div>
        </article>
      ) : (
        // Blog List View
        <div>
          <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="rounded-lg shadow-md bg-white cursor-pointer"
                onClick={() => handleBlogClick(blog)}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">{blog.summary}</p>
                  <button className="text-blue-500 hover:underline">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
