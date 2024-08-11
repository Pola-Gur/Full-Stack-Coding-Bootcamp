import postJSON from "../../data/data.json"

function PostList () {
        return (
        <>
            {postJSON.map(post => (
                <div key = {post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
            
        </>
    ) 
    }




export default PostList;