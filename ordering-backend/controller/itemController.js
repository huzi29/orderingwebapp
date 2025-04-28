import Item from "../models/Item.js";

const buildSearchQuery = (search, maxPrice, type) => {
  const query = {};

  if (search) {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { variantSKU: { $regex: search, $options: "i" } },
    ];
  }

  if (maxPrice) {
    query.variantPrice = { $lte: Number(maxPrice) };
  }

  if (type) {
    query.type = { $regex: type, $options: "i" };
  }

  return query;
};

const getItems = async (req, res) => {
  try {
    const { search, maxPrice, type, page = 1, limit = 20 } = req.query;

    const query = buildSearchQuery(search, maxPrice, type);

    const skip = (page - 1) * limit;

    const items = await Item.find(query).skip(skip).limit(Number(limit));
    const totalItems = await Item.countDocuments(query);
    const totalPages = Math.ceil(totalItems / limit);

    res.status(200).json({
      items,
      currentPage: Number(page),
      totalPages,
      totalItems,
    });
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({ items, totalItems: items.length });
  } catch (error) {
    console.error("Error fetching all items:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const ItemController = {
  getItems,
  getAllItems,
};

export default ItemController;
