import config from "../config/config";
import { Client, Databases, Storage, Query } from "appwrite";

export class DatabaseService {
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

  async createPost({ title, slug, content, featuredImage, status, userID }) {
    console.log(title);
    try {
      console.log("Inside the creation of post.");
      return await this.databases.createDocument(
        config.appwrite_DatabaseID,
        config.appwrite_Collection_ID,
        slug,
        {
          Title: title,
          Content: content,
          FeaturedImage: featuredImage,
          Status: status,
          User_ID: userID,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwrite_DatabaseID,
        config.appwrite_Collection_ID,
        slug,
        {
          Title: title,
          Content: content,
          FeaturedImage: featuredImage,
          Status: status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwrite_DatabaseID,
        config.appwrite_Collection_ID,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwrite_DatabaseID,
        config.appwrite_Collection_ID,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("Status", "active")]) {
    try {
      console.log("Get Posts.");
      return await this.databases.listDocuments(
        config.appwrite_DatabaseID,
        config.appwrite_Collection_ID,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error", error);
      return false;
    }
  }
}

const databaseService = new DatabaseService();

export default databaseService;
