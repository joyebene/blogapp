import { UserCircle2Icon } from "lucide-react";
import Feeds from "./Feeds";

const user = {
    name: "Jane Doe",
    avatar: "https://via.placeholder.com/150", // Placeholder avatar
    bio: "Full-stack developer | Open-source enthusiast | Tech blogger",
    contributions: [
      "Contributed to React Open Source Project",
      "Published 20+ technical blog posts",
      "Mentored junior developers in coding bootcamps",
      "Developed a popular npm package"
    ]
  };

  

const UserProfilePage = () => {

    return (
      <div className="bg-white p-6 mx-auto py-8 ">
        <div className="flex items-center space-x-4 mb-4">
          <UserCircle2Icon size={30} color="grey"
            className="w-16 h-16 rounded-full border border-gray-500"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-gray-600">{user.bio}</p>
          </div>
        </div>
        <div>
            <button className="p-1 bg-gray-500 text-white rounded-lg shadow-sm">Edit profile</button>
        </div>
        <div className="border-t pt-4 mt-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Contributions</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {user.contributions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="border-t pt-8 mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Blog Posts</h3>
               <Feeds /> 
        </div>
      </div>
    );
  }
  export default UserProfilePage;
  