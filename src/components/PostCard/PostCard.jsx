import { Link } from "react-router-dom";
import fileService from "../../appwrite/file-service";

function PostCard({ $id, Title, FeaturedImage }) {
  return (
    <Link to={`all-posts/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={fileService.getFilePreview(FeaturedImage)}
            alt={Title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{Title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
