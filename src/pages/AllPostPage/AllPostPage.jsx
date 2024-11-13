import { useState, useEffect } from "react";
import databaseService from "../../appwrite/database-service";
import { Container, PostCard } from "../../components";

function AllPostPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    databaseService.getPosts([]).then((allPosts) => {
      console.log("AllPost:", allPosts);
      if (allPosts) {
        setPosts(allPosts.documents);
        // console.log(posts.documents);
        console.log(allPosts.documents);
      }
    });
  }, []);

  console.log(posts);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPostPage;
