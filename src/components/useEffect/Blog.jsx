import { useEffect, useState } from "react";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setBlog(data.products);
    };
    fetchData();
  }, []);
  return (
    <div>
      {blog.map((item) => {
        return <div key={item.id} style={{ display: "flex", alignItems: "center", gap: '10px' }}>
            <p>{item.id}</p>
            <h1>{item.title}</h1>
        </div>;
      })}
    </div>
  );
};

export default Blog;
