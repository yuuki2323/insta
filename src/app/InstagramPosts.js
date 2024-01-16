"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

const InstagramPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      const accessToken = 'IGQWRQTWVVNUFtNjdhVGV1ODVxOUdETERydWRITUVEdWJ0MFk4dThiUGdSNGp4WTk2R0h4d2NYdDJMOU84U2lfLXZAnX3MyZAmk2bEZASQ2JFa1VXU0dkMWYzSGRLdThxckZADdURZANnQySkZA2R29sRXZAMcWQ3QzNOaDQZD'; // トークンをセット
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
          <Image src={post.media_url} alt={post.caption} width={300} height={300}/>
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default InstagramPosts;