import React, { useState, useEffect } from 'react';
import logo from '../../assets/image/1e2f5cd0-2280-4816-ac4d-ffcbeabeb8c9.png'; 
import axios from 'axios';
axios.defaults.withCredentials = true;
const Produit = () => {
  const [products, setProducts] = useState([]);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    size: '',
    prix: '',
    image: ''
  });
  const [updateProduct, setUpdateProduct] = useState({
    id: '',
    name: '',
    size: '',
    prix: '',
    image: ''
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/produits/');
      setProducts(response.data.produits);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddProduct = async () => {
    try {
      console.log(newProduct)
      await axios.post('http://localhost:3000/produits/create', newProduct, { headers: {'Content-Type': 'multipart/form-data'}});
      setNewProduct({ name: '', size: '', prix: '', image: '' });
      fetchProducts();
      setShowAddPopup(false); 
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleUpdateProduct = async () => {
    try {
      await axios.put(`http://localhost:3000/produits/update/${updateProduct.id}`, updateProduct);
      setUpdateProduct({ id: '', name: '', size: '', prix: '', image: '' });
      fetchProducts();
      setShowUpdatePopup(false); 
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/produits/delete/${productId}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <>
      <nav className="bg-gray-100 border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" className="flex items-center">
            <img src={logo} className="h-6 mr-3 sm:h-9" alt="mochtara Logo"/>
          </a>
        </div>
      </nav>
      <div>
        <h1 className="title">Product Management System</h1>
      </div>

      <div className="product-list">
        <h2 className="text-xl font-semibold mb-4">Products</h2>
        <button onClick={() => setShowAddPopup(true)}>Add Product</button>

        <table className="w-full border-collapse">
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                <td className="border border-gray-300 px-4 py-2">{product.size}</td>
                <td className="border border-gray-300 px-4 py-2">{product.prix} DH</td>
                <td className="border border-gray-300 px-4 py-2"><img src={`C:\\Users\INKONNU\Documents\\brief\\Tanora-Shop-\\server\\uploads\\${product.image}`} alt={product.name} className="h-12 w-12 object-cover" /></td> 
                <td className="border border-gray-300 px-4 py-2">
                  <button onClick={() => { setUpdateProduct({ id: product._id, name: product.name, size: product.size, prix: product.prix, image: product.image }); setShowUpdatePopup(true); }}>Update</button>
                  <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

{showAddPopup && (
  <div className="popup">
    <div className="popup-content">
      <h3>Add Product</h3>
      <form encType="multipart/form-data">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
        <label htmlFor="size">Size:</label>
        <input type="text" id="size" value={newProduct.size} onChange={(e) => setNewProduct({ ...newProduct, size: e.target.value })} />
        <label htmlFor="prix">Price:</label>
        <input type="text" id="prix" value={newProduct.prix} onChange={(e) => setNewProduct({ ...newProduct, prix: e.target.value })} />
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" onChange={(e) => {setNewProduct({ ...newProduct, image: e.target.files[0] }); console.log(e)}} />
        <button type="button" onClick={handleAddProduct}>Add Product</button>
        <button type="button" onClick={() => setShowAddPopup(false)}>Close</button>
      </form>
    </div>
  </div>
)}

{showUpdatePopup && (
  <div className="popup">
    <div className="popup-content">
      <h3>Update Product</h3>
      <form encType="multipart/form-data">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={updateProduct.name} onChange={(e) => setUpdateProduct({ ...updateProduct, name: e.target.value })} />
        <label htmlFor="size">Size:</label>
        <input type="text" id="size" value={updateProduct.size} onChange={(e) => setUpdateProduct({ ...updateProduct, size: e.target.value })} />
        <label htmlFor="prix">Price:</label>
        <input type="text" id="prix" value={updateProduct.prix} onChange={(e) => setUpdateProduct({ ...updateProduct, prix: e.target.value })} />
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" onChange={(e) => setUpdateProduct({ ...newProduct, image: e.target.files[0] })} />
        <button type="button" onClick={handleUpdateProduct}>Update Product</button>
        <button type="button" onClick={() => setShowUpdatePopup(false)}>Close</button>
      </form>
    </div>
  </div>
)}
    </>
  );
};

export default Produit;
