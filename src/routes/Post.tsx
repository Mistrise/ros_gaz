import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export interface Post {
    userId: number
    id: number
    title: string
    body: string
}

const Post = () => {
    const [post, setPost] = useState<Post>()

    let { postId} = useParams()

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
        {post === undefined ? <div>loading</div>  :
            <div>
                title is:
                {post?.title}

                body is:
                {post?.body}
            </div>
        }
        </>
    );
};

export default Post;