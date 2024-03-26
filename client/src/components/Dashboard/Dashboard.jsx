import React, { useState, useEffect } from 'react';
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
      
      <div className="container mx-auto px-8">
        <h1 className="text-2xl font-bold mt-8 mb-4">Product Management System</h1>

        <div className="product-list flex flex-col">
          <button onClick={() => setShowAddPopup(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-max ml-auto">
            Add Product
          </button>

          
          <div class="flex-auto block py-8 pt-6 px-9">
          <div class="overflow-x-auto">
            <table class="w-full my-0 align-middle text-dark border-neutral-200">
              <thead class="align-bottom">
                <tr class="font-semibold text-[0.95rem] text-secondary-dark">
                  <th class="pb-3 text-start min-w-[175px]">Image</th>
                  <th class="pb-3  ">Name</th>
                  <th class="pb-3 pr-12 ">Size</th>
                  <th class="pb-3 pr-12 ">Category</th>
                  <th class="pb-3 pr-12 ">Color</th>
                  <th class="pb-3 pr-12 ">Price</th>
                  <th class="pb-3 ">Events</th>
                </tr>
              </thead>
              <tbody>
              {products.map((product, index) => (
                <tr class="border-b border-dashed last:border-b-0">
                  <td class="p-3 pl-0">
                    <div class="flex items-center">
                      <div class="relative inline-block shrink-0 rounded-2xl">
                        <img src={`http://localhost:3000/uploads/${product.image}`} alt={product.name}  class="w-20 h-30 ml-10 inline-block shrink-0 rounded-2xl"/>
                      </div>
                    </div>
                  </td>
                  <td class="p-3 pr-0 text-centre">
                    <span class="font-semibold ml-32">{product.name}</span>
                  </td>
                  <td class="p-3 pr-0 text-end">
                    <span class="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                     {product.size} </span>
                  </td>
                  <td class="p-3 pr-18 text-end">
                    <span class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">{product.category} </span>
                  </td>
                  <td class="p-3 pr-12 text-end">
                    <span class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">{product.color} </span>
                  </td>
                  <td class="pr-0 text-start">
                    <span class="font-semibold text-light-inverse text-md/normal">{product.prix} DH</span>
                  </td>
                  <td className="text-center  px-4 py-2">
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
        </div> 
      </div>
        {/* Add Product Popup */}
        {showAddPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <h3 className="text-lg font-semibold mb-4">Add Product</h3>
              <form encType="multipart/form-data">
                <div className='flex flex-col py-1 gap-1'>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} className="bg-gray-100 py-2 px-2 rounded-lg " />
                
                </div>
                <div className='flex flex-col py-1 gap-1'>
                <label htmlFor="size">Size:</label>
                <select type="text" id="size" value={newProduct.size} onChange={(e) => setNewProduct({ ...newProduct, size: e.target.value })} className="bg-gray-100 py-2 px-2 rounded-lg">
                  <option value="s">s</option>
                  <option value="m">m</option>
                  <option value="l">l</option>
                  <option value="xl">xl</option>
                  <option value="xxl">xxl</option>
                </select>
                </div>
                <div className='flex flex-col py-1 gap-1'>
                <label htmlFor="prix">Price:</label>
                <input type="text" id="prix" value={newProduct.prix} onChange={(e) => setNewProduct({ ...newProduct, prix: e.target.value })} className="bg-gray-100 py-2 px-2 rounded-lg" />
                </div>
                <div className='flex flex-col py-1 gap-1'>
                <label htmlFor="category">Category:</label>
                <select type="text" id="category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} className="bg-gray-100 py-2 px-2 rounded-lg">
                  <option value="t-shirt">t-shirt</option>
                  <option value="Streetwear">Streetwear</option>
                  <option value="sweatshirt">sweatshirt</option>
                  <option value="sweat">sweat</option>
                </select>
                </div>
                <div className='flex flex-col py-1 gap-1'>
                <label htmlFor="color">Color:</label>
                <input type="text" id="color" value={newProduct.color} onChange={(e) => setNewProduct({ ...newProduct, color: e.target.value })} className="bg-gray-100 py-2 px-2 rounded-lg" />
                </div>
                <div className='flex flex-col py-1 gap-1'>
                <label htmlFor="image">Image:</label>
                <input type="file" id="image" onChange={(e) => setNewProduct({ ...newProduct, image: e.target.files[0] })} className="bg-gray-100 py-2 px-2 rounded-lg" />
                </div>
                <div className="flex justify-end pt-4">
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
                <input type="text" id="name" value={updateProduct.name} onChange={(e) => setUpdateProduct({ ...updateProduct, name: e.target.value })} className="border border-gray-300 py-2  px-3 py-1 mb-2 rounded" />
                </div>
                <div><label htmlFor="size">Size:</label>
                <select type="text" id="size" value={updateProduct.size} onChange={(e) => setUpdateProduct({ ...updateProduct, size: e.target.value })} className="border border-gray-300 py-2  px-3 py-1 mb-2 rounded" >
                <option value="s">s</option>
                <option value="m">m</option>
                <option value="l">l</option>
                <option value="xl">xl</option>
                <option value="xxl">xxl</option>
                </select>
                </div>
                <div><label htmlFor="prix">Price:</label>
                <input type="text" id="prix" value={updateProduct.prix} onChange={(e) => setUpdateProduct({ ...updateProduct, prix: e.target.value })} className="border border-gray-300 py-2 px-3 py-1 mb-2 rounded" />
                </div>
                <div>
                <label htmlFor="category">Category:</label>
                <select type="text" id="category" value={updateProduct.category} onChange={(e) => setUpdateProduct({ ...updateProduct, category: e.target.value })} className="border border-gray-300 py-2 px-3 py-1 mb-2 rounded">
                  <option value="t-shirt">t-shirt</option>
                  <option value="Streetwear">Streetwear</option>
                  <option value="sweatshirt">sweatshirt</option>
                  <option value="sweat">sweat</option>
                </select>
                </div>
                <div><label htmlFor="color">Color:</label>
                <input type="text" id="color" value={updateProduct.color} onChange={(e) => setUpdateProduct({ ...updateProduct, color: e.target.value })} className="border border-gray-300 py-2 px-3 py-1 mb-2 rounded" />
                </div>
                <div><label htmlFor="image">Image:</label>
                <input type="file" id="image" onChange={(e) => setUpdateProduct({ ...updateProduct, image: e.target.files[0] })} className="border border-gray-300 py-2 px-3 py-1 mb-2 rounded" />
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
