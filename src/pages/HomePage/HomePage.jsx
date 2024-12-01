import { useEffect, useState } from "react";
import databaseService from "../../appwrite/database-service";
import { Button, Container, PostCard } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { setAllPosts } from "../../features/postSlice";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.status);
  const posts = useSelector((state) => state.posts.allPosts);
  const isFetchingData = useSelector((state) => state.posts.isFetching);

  useEffect(() => {
    if (!Boolean(posts) || posts.length === 0)
      databaseService.getPosts().then((posts) => {
        if (posts) {
          const allUserPosts = posts.documents;
          dispatch(setAllPosts({ allPosts: allUserPosts }));
        }
      });
  }, [posts, posts.length, navigate]);

  console.log(posts);
  console.log(Boolean(posts));

  if (!authenticated) {
    return (
      <div className="w-full h-screen pt-4 pb-60 mt-4 text-center bg-[#fff] grid">
        <Container>
          <div className="bg-teal-5 w-full h-1/4 flex justify-between items-center">
            <h1 className="font-bold font-sans text-5xl">BLOGS</h1>
            <Button
              bgColor={"bg-[lightgray]"}
              textColor={"text-[#000000]"}
              className="flex items-center justify-center gap-3 py-3 px-6"
            >
              <Link to="/signup">{"Read Our Blog"} </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Button>
          </div>
          <div className="grid h-3/4 sm:grid-cols-2 gap-2 py-2 w-full">
            <div className="h-full w-full bg-[#C83E4D] rounded-3xl bg-center bg-no-repeat bg-cover">
              <img
                src="src/public/assets/images/image-2.2.jpg"
                className="w-full h-full object-cover rounded-3xl"
                alt=""
              />
            </div>
            <div className="grid grid-cols-12 grid-rows-6 gap-2 bg-white">
              <div className="col-span-8 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-[40px] bg-center bg-no-repeat bg-cover row-span-4 relative">
                <img
                  className="w-ful h-full object-cover rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-[40px]"
                  src="src/public/assets/images/image-1.jpg"
                  alt=""
                />
                <div className="absolute inset-0 flex flex-col px-10 py-14 items-start">
                  <div className="bg-[#C6DBC9] absolute right-0 top-0 p-3 rounded-full border-8 border-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      className="-rotate-45"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-sans font-semibold text-left mb-3">
                    Thoughts, stories & reflections.
                  </h3>
                  <p className="text-xl font-sans font-medium text-left mb-6">
                    A place to share, explore, and connect through personal
                    experiences and ideas.
                  </p>

                  <Button
                    bgColor={"bg-[rgba(198,219,201,0.6)]"}
                    textColor={"text-[#000000]"}
                    className="flex items-center justify-center py-3 px-5 gap-3 font-bold"
                  >
                    {"View all categories"}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="bg-[#F4B860] col-span-4 rounded-3xl row-span-4 relative">
                <div className="absolute inset-0 flex flex-col px-6 py-7 items-start">
                  <h3 className="text-xl font-sans font-semibold text-left mb-3 pb-2 border-b-2 border-[#000]">
                    Stories Unfolded experiences & insights
                  </h3>
                  <p className="text-base font-sans font-medium text-left mb-6">
                    A personal space to read, reflect, and explore the moments
                    that define you and the ideas that shape our world.
                  </p>
                </div>
              </div>
              <div className="bg-[#C83E4D] col-span-7 rounded-3xl row-span-2 relative px-6 py-7">
                <div className="absolute inset-0 flex flex-col px-6 py-7 items-start">
                  <h3 className="text-lg font-sans font-semibold text-left mb-3 pb-2 border-b-2 border-[#000]">
                    The Everyday thoughts & moments
                  </h3>
                  <p className="text-base font-sans font-medium text-left mb-6">
                    A space to share our everyday reflections, lessons learned,
                    and stories that shape who I am.
                  </p>
                </div>
              </div>
              <div
                className="bg-pink-500 col-span-5 rounded-3xl
              bg-center bg-no-repeat bg-cover row-span-2 relative"
              >
                <img
                  className="w-ful h-full object-cover rounded-3xl"
                  src="src/public/assets/images/image-3.jpg"
                  alt=""
                />
              </div>
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
