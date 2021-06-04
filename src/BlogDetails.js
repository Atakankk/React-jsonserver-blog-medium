import {useParams} from "react-router-dom"
import useFetch from "./useFetch"
import "./index.css"
import { useHistory } from "react-router-dom";


const BlogDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const {data: blog, isPending, error} = useFetch('http://192.168.1.103:8000/blogs/' + id);
    const handleClick = () => {
      fetch('http://192.168.1.103:8000/blogs/' + blog.id, {
        method: 'DELETE'
      }).then(() => {
        history.push('/');
      }) 
    }
    return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Author: { blog.author }</p>
          <div id="body">{ blog.body }</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;
