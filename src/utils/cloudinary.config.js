import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECERET_KEY,
});

const uploadCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload file on cloundinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File has been uploaded successfully on cloudinary...");
    console.log(response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // removed locally saved temporary file
  }
};

export { uploadCloudinary };
