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
    image: '',
    category: '',
    color: ''
  });
  const [updateProduct, setUpdateProduct] = useState({
    id: '',
    name: '',
    size: '',
    prix: '',
    image: '',
    category: '',
    color: ''
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
      const formData = new FormData();
      formData.append('name', newProduct.name);
      formData.append('size', newProduct.size);
      formData.append('prix', newProduct.prix);
      formData.append('image', newProduct.image);
      formData.append('category', newProduct.category); 
      formData.append('color', newProduct.color); 
  
      if (!newProduct.name || !newProduct.size || !newProduct.prix || !newProduct.image || !newProduct.category || !newProduct.color) {
        throw new Error('All fields (name, size, prix, image, category, color) are required.');
      }
  
      await axios.post('http://localhost:3000/produits/create', formData);
      setNewProduct({ name: '', size: '', prix: '', image: '', category: '', color: '' });
      fetchProducts();
      setShowAddPopup(false); 
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };
  
  const handleUpdateProduct = async () => {
    try {
      const formData = new FormData();
      formData.append('name', updateProduct.name);
      formData.append('size', updateProduct.size);
      formData.append('prix', updateProduct.prix);
      formData.append('image', updateProduct.image);
      formData.append('category', updateProduct.category);
      formData.append('color', updateProduct.color);

      await axios.put(`http://localhost:3000/produits/update/${updateProduct.id}`, formData);
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

      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mt-8 mb-4">Product Management System</h1>

        <div className="product-list">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          <button onClick={() => setShowAddPopup(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Product
          </button>

          <table className="w-full border-collapse mt-4">
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border border-gray-300">
                  <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.size}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.prix} DH</td>
                  <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.color}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img src={`http://localhost:3000/uploads/${product.image}`} alt={product.name} className="h-12 w-12 object-cover" />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button onClick={() => { setUpdateProduct({ id: product._id, name: product.name, size: product.size, prix: product.prix, image: product.image, category: product.category, color: product.color }); setShowUpdatePopup(true); }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
                      Update
                    </button>
                    <button onClick={() => handleDeleteProduct(product._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Product Popup */}
        {showAddPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <h3 className="text-lg font-semibold mb-4">Add Product</h3>
              <form encType="multipart/form-data">
                <div>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} className="border border-gray-300 px-3 py-1 mb-2 rounded" />
                
                </div>
                <div>
                <label htmlFor="size">Size:</label>
                <select type="text" id="size" value={newProduct.size} onChange={(e) => setNewProduct({ ...newProduct, size: e.target.value })} className="border border-gray-300 px-3 py-1 mb-2 rounded">
                  <option value="s">s</option>
                  <option value="m">m</option>
                  <option value="l">l</option>
                  <option value="xl">xl</option>
                  <option value="xxl">xxl</option>
                </select>
                </div>
                <div>
                <label htmlFor="prix">Price:</label>
                <input type="text" id="prix" value={newProduct.prix} onChange={(e) => setNewProduct({ ...newProduct, prix: e.target.value })} className="border border-gray-300 px-3 py-1 mb-2 rounded" />
                </div>
                <div>
                <label htmlFor="category">Category:</label>
                <select type="text" id="category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} className="border border-gray-300 px-3 py-1 mb-2 rounded">
                  <option value="t-shirt">t-shirt</option>
                  <option value="Streetwear">Streetwear</option>
                  <option value="sweatshirt">sweatshirt</option>
                  <option value="sweat">sweat</option>
                </select>
                </div>
                <div>
                <label htmlFor="color">Color:</label>
                <input type="text" id="color" value={newProduct.color} onChange={(e) => setNewProduct({ ...newProduct, color: e.target.value })} className="border border-gray-300 px-3 py-1 mb-2 rounded" />
                </div>
                <div>
                <label htmlFor="image">Image:</label>
                <input type="file" id="image" onChange={(e) => setNewProduct({ ...newProduct, image: e.target.files[0] })} className="border border-gray-300 px-3 py-1 mb-2 rounded" />
                </div>
                <div className="flex justify-end">
                  <button type="button" onClick={handleAddProduct} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Add Product
                  </button>
                  <button type="button" onClick={() => setShowAddPopup(false)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Update Product Popup */}
        {showUpdatePopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <h3 className="text-lg font-semibold mb-4">Update Product</h3>
              <form encType="multipart/form-data">
                <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={updateProduct.name} onChange={(e) => setUpdateProduct({ ...updateProduct, name: e.target.value })} className="border border-gray-300 px-3 py-1 mb-2 rounded" />
                </div>
                <div><label htmlFor="size">Size:</label>
                <select type="text" id="size" value={updateProduct.size} onChange={(e) => setUpdateProduct({ ...updateProduct, size: e.target.value })} className="border border-gray-300 px-3 py-1 mb-2 rounded" >
                <option value="s">s</option>
                <option value="m">m</option>
                <option value="l">l</option>
                <option value="xl">xl</option>
                <option value="xxl">xxl</option>
                </select>
                </div>
                <div><label htmlFor="prix">Price:</label>
                <input type="text" id="prix" value={updateProduct.prix} onChange={(e) => setUpdateProduct({ ...updateProduct, prix: e.target.value })} className="border border-gray-300 px-3 py-1 mb-2 rounded" />
                </div>
                <div>
                <label htmlFor="category">Category:</label>
                <select type="text" id="category" value={updateProduct.category} onChange={(e) => setUpdateProduct({ ...updateProduct, category: e.target.value })} className="border border-gray-300 px-3 py-1 mb-2 rounded">
                  <option value="t-shirt">t-shirt</option>
                  <option value="Streetwear">Streetwear</option>
                  <option value="sweatshirt">sweatshirt</option>
                  <option value="sweat">sweat</option>
                </select>
                </div>
                <div><label htmlFor="color">Color:</label>
                <input type="text" id="color" value={updateProduct.color} onChange={(e) => setUpdateProduct({ ...updateProduct, color: e.target.value })} className="border border-gray-300 px-3 py-1 mb-2 rounded" />
                </div>
                <div><label htmlFor="image">Image:</label>
                <input type="file" id="image" onChange={(e) => setUpdateProduct({ ...updateProduct, image: e.target.files[0] })} className="border border-gray-300 px-3 py-1 mb-2 rounded" />
                </div>
                <div className="flex justify-end">
                  <button type="button" onClick={handleUpdateProduct} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Update Product
                  </button>
                  <button type="button" onClick={() => setShowUpdatePopup(false)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Produit;
