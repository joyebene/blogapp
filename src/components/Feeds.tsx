"use client";

import { Bookmark, Heart, MessageCircle } from "lucide-react";
import React, { useState } from "react";

const Feeds = () => {
  // Dummy blog post data (Replace with actual API data)
  const [posts, setPosts] = useState([
    { id: 1, title: "First Blog", author: "Joy Ebene", date: "Jan 25 '24", isLiked: false, isFavourite: false },
    { id: 2, title: "Second Blog", author: "Jane Doe", date: "Jan 26 '24", isLiked: false, isFavourite: false },
    { id: 3, title: "Third Blog", author: "John Smith", date: "Jan 27 '24", isLiked: false, isFavourite: false },
    { id: 4, title: "Fourth Blog", author: "Emily Carter", date: "Jan 28 '24", isLiked: false, isFavourite: false },
  ]);

  // Function to toggle "like" for a specific post
  const toggleLike = (id: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, isLiked: !post.isLiked } : post
      )
    );
  };

  // Function to toggle "favourite" for a specific post
  const toggleFavourite = (id: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, isFavourite: !post.isFavourite } : post
      )
    );
  };

  return (
    <div className="p-5 bg-blue-50/20 flex flex-col items-center justify-center md:flex-row md:flex-wrap md:justify-center md:items-center gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex flex-col items-start justify-center gap-2 bg-white px-4 py-5 shadow-sm rounded-xl w-full md:w-5/12"
        >
          {/* Author & Date */}
          <div className="flex items-center justify-center gap-2">
            <div>
              <p className="bg-blue-600 rounded-full px-4 py-2 border border-gray-700 text-white w-fit">
                {post.author[0]} {/* First letter of author */}
              </p>
            </div>
            <div>
              <h4 className="text-gray-800">{post.author}</h4>
              <p className="text-sm text-gray-600 font-extralight">{post.date}</p>
            </div>
          </div>

          {/* Title */}
          <div>
            <h1 className="font-bold text-black text-lg">{post.title}</h1>
          </div>

          {/* Tags Placeholder */}
          <div className="flex items-center justify-center mb-4">#tags</div>

          {/* Actions (Like, Comment, Favourite) */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-center gap-6">
              <span>
                <Heart
                  size={20}
                  color={post.isLiked ? "red" : "gray"}
                  fill={post.isLiked ? "red" : "none"}
                  onClick={() => toggleLike(post.id)}
                  className="cursor-pointer transition-all duration-300"
                />
              </span>
              <span>
                <MessageCircle size={20} color="gray" />
              </span>
            </div>

            <div className="flex items-center justify-center gap-6">
              <span className="text-sm text-gray-600 font-extralight">3 min read</span>
              <span>
                <Bookmark
                  size={20}
                  color={post.isFavourite ? "blue" : "gray"}
                  fill={post.isFavourite ? "blue" : "none"}
                  onClick={() => toggleFavourite(post.id)}
                  className="cursor-pointer transition-all duration-300"
                />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feeds;