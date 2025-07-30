// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//     name: String,
//     category: String,
//     gender: String,
//     subtype: String,
//     price: Number,
//     img: String,
//     description: String,
//     isFeatured: Boolean,
// }, { timestamps: true });

// const Product = mongoose.model('Product', productSchema);

// export default Product;

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  isFeatured: Boolean,
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;