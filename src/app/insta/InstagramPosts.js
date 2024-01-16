"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

const InstagramPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      const accessToken = process.env.NEXT_PUBLIC_TOKEN; // トークンをセット
      const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}`);
      const data = await response.json();
      setPosts(data.data.slice(0, 6)); // 最新の6投稿を取得
    };

    fetchInstagramPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <a href={post.permalink} key={post.id} target="_blank" rel="noopener noreferrer">
          <Image src={post.media_url} alt={post.caption} width={300} height={300}/>
          </a>
          
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default InstagramPosts;