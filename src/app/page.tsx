import BlogSearch from "@/components/SearchBlog";



export default function Home() {
  return (
    <div className="bg-blue-50/20">
      <BlogSearch blogs={[]} />
    </div>
  );
}
