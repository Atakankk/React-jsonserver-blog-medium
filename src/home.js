
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error} = useFetch("http://192.168.1.103:8000/blogs")
  
  let title = "All Blogs"
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} title={title} />}
    </div>
  );
}
 
export default Home;