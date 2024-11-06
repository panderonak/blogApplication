const config = {
  appwrite_URL: String(import.meta.env.VITE_APPWRITE_URL),
  appwrite_ProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwrite_DatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwrite_Collection_ID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwrite_BucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default config;
