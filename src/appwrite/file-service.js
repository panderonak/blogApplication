import config from "../config/config";
import { Client, Databases, Storage, ID } from "appwrite";

export class FileService {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(config.appwrite_URL)
      .setProject(config.appwrite_ProjectID);

    this.databases = new Databases(this.client);

    this.storage = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        config.appwrite_BucketID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileID) {
    try {
      await this.storage.deleteFile(config.appwrite_BucketID, fileID);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.storage.getFilePreview(config.appwrite_BucketID, fileId);
  }
}

const fileService = new FileService();

export default fileService;
