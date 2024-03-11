import {useCallback, useEffect, useState} from "react";
import Container from "../components/Container/Container.tsx";
import PostList from "../components/PostsList/PostList.tsx";
import PostListItem from "../components/PostListItem/PostListItem.tsx";

export interface Post {
    userId: number
    id: number
    title: string
    body: string
}

export default function Root() {
    const [posts, setPosts] = useState<Post[]>()

    const [page, setPage] = useState(1)

    const [pagePosts, setPagePosts] = useState<Post[]>()


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

    useEffect(() => {
        const POSTS_ON_PAGE = 10
        const getPaginatedPosts = async () => {
            setPagePosts(posts?.slice((page * POSTS_ON_PAGE) - 10, (page * POSTS_ON_PAGE)))
        }
        getPaginatedPosts()
    }, [page, posts]);

    return (
        <>
            <Container>
                <PostList>
                    {pagePosts === undefined
                        ? <div>Loading</div>
                        : pagePosts.map((post) =>
                            <PostListItem id={post.id} title={post.title} key={post.id}/>)
                    }
                    <button disabled={page < 2} onClick={() => goToPrevPage()}>Prev</button>
                    {page}
                    <button disabled={posts === undefined ? true : page + 1 > posts?.length / 10} onClick={() => goToNextPage()}>Next</button>
                </PostList>
            </Container>
        </>
    );
}