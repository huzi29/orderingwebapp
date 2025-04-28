import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  variantSKU: { type: String, required: true },
  variantPrice: { type: Number, required: true },
  imageSrc: { type: String, required: true }
});

export default mongoose.model('Item', itemSchema);
