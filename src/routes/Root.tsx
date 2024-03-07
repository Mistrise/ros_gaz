import {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom";

export interface Post {
    userId: number
    id: number
    title: string
    body: string
}

export default function Root() {
    const [posts, setPosts] = useState<Post[]>()

    const [page, setPage] = useState(1)


    const goToNextPage = useCallback(() => {
        setPage(page + 1)
    }, [page]);

    const goToPrevPage = useCallback(() => {
        setPage(page - 1)
    }, [page]);


    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            setPosts(data)
        }
        getPosts().catch(e => console.log(e))
    }, [])

    return (
        <>
           <div>
               {posts === undefined
                   ? <div>Loading</div>
                       : posts.map((post) =>
                       <div key={post.id}>
                           {post.title}
                           <Link to={`posts/${post.id}`}>Go to post</Link>
                       </div>)
               }
               <button onClick={() => goToNextPage()}>Next</button>
               <button onClick={() => goToPrevPage()}>Prev</button>
           </div>
        </>
    );
}