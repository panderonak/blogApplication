import { useState, useEffect } from "react";
import databaseService from "../../appwrite/database-service";
import { Container, PostCard } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { setAllPosts } from "../../features/postSlice";

function AllPostPage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.allPosts);

  const isFetchingData = useSelector((state) => state.posts.isFetching);

  useEffect(() => {
    if (!posts || posts.length === 0)
      databaseService.getPosts().then((posts) => {
        if (posts) {
          const allUserPosts = posts.documents;
          dispatch(setAllPosts({ allPosts: allUserPosts }));
        }
      });
  }, [posts]);

  if (isFetchingData) {
    return <div>Loadiing...</div>;
  }

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
