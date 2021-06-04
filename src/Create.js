import { forwardRef, useState } from "react";
import { useHistory } from "react-router-dom"


const Create = () => {

    const [title, SetTitle] = useState("")
    const [body, SetBody] = useState("")
    const [author, SetAuthor] = useState("Atakan")
    const [isPending, setPending] = useState(false)
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}

        setPending(true)
        fetch("http://192.168.1.103:8000/blogs", 
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)

        }
        )
        .then(() => {
            console.log("new blog added")
            setPending(false)
            history.push("/")
            
            

        })
    }
    return ( 

        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog Title:</label>
                <input type="text"
                required
                value = { title }
                onChange={(e) => SetTitle(e.target.value)}
                ></input>
                <label>Blog:</label>
                <textarea
                required
                value = { body }
                onChange={(e) => SetBody(e.target.value)}
                ></textarea>
               {!isPending && <button>Add Blog</button> } 
               {isPending && <button disabled>Adding Blog...</button> }
                
            </form>
        </div>
     );
}
 
export default Create;