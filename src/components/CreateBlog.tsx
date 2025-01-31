"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState(["devblog"]);
  const [addTag, setAddTag] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Blog Created");
  };

  return (
    <div className="mx-auto px-4 py-10 bg-blue-50/20 w-full flex  justify-center h-[90vh] ">
      <form
        className="w-5/6 md:w-2/3 shadow-md border p-4 bg-blue-50/40 flex flex-col items-start gap-2"
        onSubmit={handleSubmit}
      >
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">
          Add a cover image
        </button>

        <input
          className="w-full mt-4 text-2xl font-semibold border-none focus:ring-0 p-2 rounded-sm shadow-sm"
          placeholder="Post title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="flex gap-2 mt-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-lg flex items-center gap-1"
            >
              #{tag}
              <X
                size={16}
                className="cursor-pointer"
                onClick={() => setTags(tags.filter((_, i) => i !== index))}
              />
            </div>
          ))}
        </div>
        {/* Input for adding tags */}
        <input
          type="text"
          value={addTag}
          placeholder="Add #tag"
          className="p-2 rounded-sm shadow-sm mt-2 border border-gray-300 w-fit mr-3"
          onChange={(e) => setAddTag(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && addTag.trim() !== "") {
              if (!tags.includes(addTag.trim()) && tags.length <= 4) {
                setTags([...tags, addTag.trim()]);
              }
              setAddTag("");
              e.preventDefault();
            }
          }}
        />

        {/* Button to add tags manually */}
        <button
          onClick={() => {
            if (addTag.trim() !== "" && !tags.includes(addTag.trim())) {
              if (tags.length <= 4) {
                setTags([...tags, addTag.trim()]);
                setAddTag(""); // Clear input
              }
            }
          }}
          className="bg-blue-500 text-white px-3 py-1 rounded-lg mt-2"
        >
          Add Tag
        </button>
        <textarea
          className="w-full mt-4 border-none focus:ring-0 text-gray-500 rounded-sm p-2 shadow-sm"
          placeholder="Write your post content here..."
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="flex gap-4 mt-4">
          <button
            type="submit"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}
