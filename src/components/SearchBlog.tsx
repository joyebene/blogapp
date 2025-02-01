"use client";

import React, { useState } from "react";
import Feeds from "./Feeds";
import { Search } from "lucide-react";

// Define the Blog type
interface Blog {
  id: string;
  title: string;
  description: string;
}

interface BlogSearchProps {
  blogs: Blog[];
}

const BlogSearch: React.FC<BlogSearchProps> = ({ blogs }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 mx-auto w-full bg-blue-50/20 text-center">
      <div className="flex items-center w-full justify-center text-center mt-6">
        <input
          type="text"
          placeholder="Input #tag to search blog..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-2/3 md:w-1/3 p-2 border-2 border-blue-500 rounded-s-lg shadow-sm focus:outline-none h-[45px]"
        />
        <Search
          size={40}
          color="black"
          fill="blue"
          className="border-2 border-blue-500 p-1 rounded-e-lg h-[45px]"
        />
      </div>

      {filteredBlogs.length > 0 ? (
        <ul className="mt-4">
          {filteredBlogs.map((blog) => (
            <li key={blog.id} className="p-2 border-b">
              <strong>{blog.title}</strong>
              <p className="text-sm text-gray-600">{blog.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-4 text-center">
          <Feeds />
        </div>
      )}
    </div>
  );
};

export default BlogSearch;
