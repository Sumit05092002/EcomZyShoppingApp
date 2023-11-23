import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);

  async function fetchData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPost(data);
      console.log(post);
    } 
    catch (error) {
      console.log("Error in fetching Data");
      setPost([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      {
        loading ? <Spinner></Spinner> : post.length > 0 ? (
          <div>
            {
              post.map((post) => (
                
                  <Product key={post.id} post={post}></Product>
               
              ))
            }
          </div>
        ) : <div>
          <p>No data found</p></div>

      }
    </div>
  );
};

export default Home;
