import Item from "../models/Item.js";

const extractQueryParams = (query) => {
    const skuMatch = query.match(/sku (\d+)/i);
    const priceMatch = query.match(/under \$(\d+)/i);
    const typeMatch = query.match(
      /(bikinis|accessories|tops|skirts|dresses|t-shirts|hoodies|children's t-shirts|footwear)/i
    );
    
  return {
    sku: skuMatch ? skuMatch[1] : null,
    price: priceMatch ? parseFloat(priceMatch[1]) : null,
    type: typeMatch ? typeMatch[1] : null,
  };
};

const handleQuery = async (req, res) => {
  try {
    const { query } = req.body;
    const { sku, price, type } = extractQueryParams(query);

    const dbQuery = {};

    if (sku) {
      dbQuery.variantSKU = sku;
    }
    if (price) {
      dbQuery.variantPrice = { $lte: price };
    }
    if (type) {
      dbQuery.type = { $regex: type, $options: "i" };
    }

    const items = await Item.find(dbQuery);

    res.json({ success: true, data: items });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};


export default handleQuery;