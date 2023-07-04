import { useQuery } from "react-query";
import './Post.css';
import axios from "axios";

export default function Posts(){
    
    const {data , error , isLoading} = useQuery('posts' , fetchAllPosts);
    if(error) return <div>{error.message}</div>;
    if(isLoading) return <div>Loading....</div>;


    return (
        <div>
        {data.posts.map(post => <h1 classname="postTtitle"> {post.title} </h1>)}
        </div>
        
    )
}

async function fetchAllPosts() {
  const {data} = await axios.get('http://localhost:3001/api/posts')
  console.log(data)
  return data
}