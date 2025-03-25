"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
// import Globalapi from "../utlis/Globalapi";
import axios from "axios";

// Define the expected structure of the data
interface Post {
  id: number;
  Title: string;
  Description: string;
  imageUrl?: string;
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:1337/api/posts?populate=*", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedPosts = res.data.data.map((post: any) => ({
          id: post.id,
          Title: post.Title, // Use correct field names
          Description: post.Description,
          imageUrl: post.image ? `http://localhost:1337${post.image.url}` : null,
        }));

        setPosts(formattedPosts);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

     fetchPosts();
    //getFetch()
  }, []);


  // const getFetch= ()=>{
  //   Globalapi.getFetch().then(resp=>{
  //     console.log("resp data", resp.data.data);
  //     setPosts(resp.data.data)
  //   })
  // }

  return (
    <div>
      <h1>Latest Posts</h1>

      {posts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="mt-4 border">
            {post.imageUrl ? (
              <Image
                src={post.imageUrl}
                className="border"
                alt={post.Title}
                width={200}
                height={500}
                unoptimized // Avoids Next.js optimization issues
              />
            ) : (
              <p>No image available</p>
            )}
            <h2>{post.Title}</h2>
            <p>{post.Description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
