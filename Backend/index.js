const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: 'Laptop14',
    company: 'AMZ',
    category: 'Phone',
    price: 100,
    rating: 4.5,
    discount: 10,
    availability: true,

  },
  {
    id: 2,
    name: 'Laptop 16',
    company: 'FLP',
    category: 'Computer',
    price: 2236,
    rating: 4.7,
    discount: 63,
    availability: true,

  },
  {
    id: 2,
    name: 'Laptop 14',
    company: 'FLP',
    category: 'Computer',
    price: 2236,
    rating: 4.7,
    discount: 63,
    availability: "out of stock",

  },

];

// Helper function to filter products
const filterProducts = (query) => {
  return products.filter((product) => {
    return (
      (query.category ? product.category === query.category : true) &&
      (query.company ? product.company === query.company : true) &&
      (query.rating ? product.rating >= parseFloat(query.rating) : true) &&
      (query.priceRange
        ? product.price >= parseFloat(query.priceRange.split('-')[0]) &&
        product.price <= parseFloat(query.priceRange.split('-')[1])
        : true) &&
      (query.availability
        ? product.availability === (query.availability === 'yes')
        : true)
    );
  });
};


const sortProducts = (products, sort) => {
  return products.sort((a, b) => {
    if (sort === 'price') return a.price - b.price;
    if (sort === 'rating') return b.rating - a.rating;
    if (sort === 'discount') return b.discount - a.discount;
    return 0;
  });
};


app.get('/products', (req, res) => {
  const query = req.query;
  let filteredProducts = filterProducts(query);
  if (query.sort) {
    filteredProducts = sortProducts(filteredProducts, query.sort);
  }
  res.json(filteredProducts);
});


app.get('/products/:id', (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
