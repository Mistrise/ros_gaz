import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Container from "../components/Container/Container.tsx";
import PostCard from "../components/PostCard/PostCard.tsx";

export interface Post {
    userId: number
    id: number
    title: string
    body: string
}

const Post = () => {
    const [post, setPost] = useState<Post>()

    const { postId} = useParams()

    useEffect( () => {
        const getPostData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            const data: Post = await response.json()
            setPost(data)
        }
        getPostData().catch(error => console.log(error))
    }, [])



    return (
        <>
            <Container>
                {post === undefined ?
                    <div>loading</div>  :
                    <PostCard title={post.title} body={post.body}/>
                }
            </Container>
        </>
    );
};

export default Post;