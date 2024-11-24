import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RealTimeEditor } from "../../components/index";
import databaseService from "../../appwrite/database-service";
import fileService from "../../appwrite/file-service";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAllPosts } from "../../features/postSlice";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.Title || "",
        slug: post?.$id || "",
        content: post?.Content || "",
        status: post?.Status || "active",
      },
    });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const allPosts = useSelector((state) => state.posts.allPosts);

  console.log(userData);

  const submitPost = async (data) => {
    console.log(data.title);
    if (post) {
      console.log("Post here.");
      const file = data.image[0]
        ? await fileService.uploadFile(data.image[0])
        : null;

      if (file) {
        fileService.deleteFile(post.FeaturedImage);
      }
      const databasePost = await databaseService.updatePost(post.$id, {
        ...data,
        FeaturedImage: file ? file.$id : undefined,
      });
      if (databasePost) {
        navigate(`/`);
      }
    } else {
      const file = await fileService.uploadFile(data.image[0]);

      if (file) {
        console.log(`New File:`);
        const fileId = file.$id;
        console.log(data);
        data.featuredImage = fileId;

        const newDatabasePost = await databaseService.createPost({
          ...data,
          userID: userData.$id,
        });
        if (newDatabasePost) {
          dispatch(setAllPosts({ allPosts: [...allPosts, newDatabasePost] }));
          navigate(`post/${newDatabasePost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  });

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title, { shouldValidate: true }));
      }
    });
    return () => subscription.unsubscribe();
  });

  return (
    <form onSubmit={handleSubmit(submitPost)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RealTimeEditor
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={fileService.getFilePreview(post.FeaturedImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
