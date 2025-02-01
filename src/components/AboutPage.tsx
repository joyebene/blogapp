const AboutPage = () => {
  return (
    <div className="w-full bg-blue-50 pt-8">
      <div className=" p-6 mx-auto h-screen">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          About Our Community
        </h2>
        <p className="text-gray-700 mb-4">
          Welcome to our <span className="font-bold text-blue-700">developer community!</span> We are a group of passionate
          coders, tech enthusiasts, and problem-solvers who love sharing
          knowledge and collaborating on projects.
        </p>
        <h4 className="font-semibold text-lg mb-2 text-gray-900">What We Do Here</h4>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>💡 Share innovative ideas</li>
          <li>🤝 Collaborate on projects</li>
          <li>📚 Learn and grow together</li>
          <li>🎯 Build impactful solutions</li>
        </ul>
        <p className="text-gray-700">
          Join us on this journey to build, learn, and inspire each other. Let&apos;s
          code the future together!
        </p>
      </div>
    </div>
  );
};
export default AboutPage;
