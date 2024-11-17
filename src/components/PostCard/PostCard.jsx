import { Link } from "react-router-dom";
import fileService from "../../appwrite/file-service";

function PostCard({ $id, Title, FeaturedImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-[#C6D8FF] rounded-xl p-4 border-[#222222] border-2 cursor-pointer custom-cursor">
        <div className="w-full justify-center mb-4">
          <img
            src={fileService.getFilePreview(FeaturedImage)}
            alt={Title}
            className="rounded-xl border-[#222222] border-2"
          />
        </div>
        <h2 className="text-xl text-center font-bold">{Title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
