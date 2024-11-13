import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import databaseService from "../../appwrite/database-service";
import fileService from "../../appwrite/file-service";
import { Button, Container } from "../../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function PostPage() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  console.log(userData);

  const isAuthor = post && userData ? post.User_ID === userData.$id : false;

  useEffect(() => {
    if (slug) {
      console.log(slug);
      databaseService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
          console.log(post);
        } else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    console.log("Clicked");
    databaseService.deletePost(post.$id).then((status) => {
      if (status) {
        fileService.deleteFile(post.FeaturedImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img
            src={fileService.getFilePreview(post.FeaturedImage)}
            alt={post.Title}
            className="rounded-xl"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-4xl font-bold text-center mt-20 mb-10">
            {post.Title}
          </h1>
        </div>
        <div className="browser-css text-2xl">{parse(post.Content)}</div>
      </Container>
    </div>
  ) : null;
}
