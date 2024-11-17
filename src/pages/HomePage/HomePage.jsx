import { useEffect, useState } from "react";
import databaseService from "../../appwrite/database-service";
import { Container, PostCard } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { setAllPosts } from "../../features/postSlice";

function HomePage() {
  // const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.status);
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

  if (!authenticated) {
    return (
      <div className="w-full h-screen py-8 mt-4 text-center bg-[#6B5CA5]">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

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

export default HomePage;
