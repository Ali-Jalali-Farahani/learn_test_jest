import { PostWithComment } from "../Components/UserInteraction/PostWithComments";

function Home() {


    return (
        <>
            <PostWithComment
                content="The sky is blue"
                user="Alex"
            />
        </>
    )
}

export default Home