
import React, { useEffect } from "react"

function Blog({ posts }) {
    useEffect(() => {
      const url = "https://api.github.com/users/github";
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.log("error", error);
        }
      };
      fetchData();
  }, []);
  return(
    <div>欢迎来到我的世界</div>
  )
}

export default Blog