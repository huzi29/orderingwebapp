import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import Item from "../models/Item.js";

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const data = JSON.parse(fs.readFileSync("./data/data.json", "utf-8"));
    const filteredData = data.filter(item => item["Title"] && item["Variant SKU"]);

    const formattedData = filteredData.map(item => ({
      title: item["Title"],
      type: item["Type"],
      variantSKU: item["Variant SKU"],
      variantPrice: item["Variant Price"],
      imageSrc: item["Image Src"]
    }));

    await Item.deleteMany();
    await Item.insertMany(formattedData);

    console.log('Data Seeded Successfully!');
    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
