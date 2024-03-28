import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

axios.defaults.withCredentials = true;

const Produit = () => {
  const [products, setProducts] = useState([]);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [userCount, setUserCount] = useState(null);
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
    const fetchUserCount = async () => {
      try {
        const response = await axios.get('http://localhost:3000/auth/users/count');
        setUserCount(response.data.userCount);
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    };

    fetchUserCount();
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

  const ProductsTable = ({ products, handleDeleteProduct, setUpdateProduct, setShowUpdatePopup }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 4;
  
    const pageCount = Math.ceil(products.length / productsPerPage);
  
    const handlePageClick = ({ selected }) => {
      setCurrentPage(selected);
    };
  
    const offset = currentPage * productsPerPage;
    const currentPageData = products.slice(offset, offset + productsPerPage);
  
    return (
      <div className="overflow-x-auto">
        <table className="w-full my-0 align-middle text-dark border-neutral-200">
          <thead className="align-bottom">
            <tr className="font-semibold text-[0.95rem] text-secondary-dark">
              <th className="pb-3 text-start min-w-[175px]">Image</th>
              <th className="pb-3">Name</th>
              <th className="pb-3 pr-12">Size</th>
              <th className="pb-3 pr-12">Category</th>
              <th className="pb-3 pr-12">Color</th>
              <th className="pb-3 pr-12">Price</th>
              <th className="pb-3">Events</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((product, index) => (
              <tr key={index} className="border-b border-dashed last:border-b-0">
                <td className="p-3 pl-0">
                  <div className="flex items-center">
                    <div className="relative inline-block shrink-0 rounded-2xl">
                      <img
                        src={`http://localhost:3000/uploads/${product.image}`}
                        alt={product.name}
                        className="w-20 h-30 ml-10 inline-block shrink-0 rounded-2xl"
                      />
                    </div>
                  </div>
                </td>
                <td className="p-3 pr-0 text-centre">
                  <span className="font-semibold ml-32">{product.name}</span>
                </td>
                <td className="p-3 pr-0 text-end">
                  <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                    {product.size}
                  </span>
                </td>
                <td className="p-3 pr-18 text-end">
                  <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                    {product.category}
                  </span>
                </td>
                <td className="p-3 pr-18 text-end">
                  <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                    {product.color}
                  </span>
                </td>
                <td className="p-3 pr-0 text-start">
                  <span className="font-semibold text-light-inverse text-md/normal">{product.prix} DH</span>
                </td>
                <td className="px-16 py-2">
                  <span className="text-yellow-500 flex">
                    <svg
                      onClick={() => {
                        setUpdateProduct({
                          id: product._id,
                          name: product.name,
                          size: product.size,
                          prix: product.prix,
                          image: product.image,
                          category: product.category,
                          color: product.color
                        });
                        setShowUpdatePopup(true);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-700 mx-2 cursor-pointer"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <svg
                    onClick={() => handleDeleteProduct(product._id)}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-700 cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex justify-end mt-4"}
          activeClassName={"active"}
          previousClassName={"cursor-pointer px-3 py-1  text-black font-semibold rounded"}
          nextClassName={"cursor-pointer px-3 py-1 text-black font-semibold rounded"}
          pageClassName={"cursor-pointer px-3 py-1  text-gray font-semibold rounded"}
          breakClassName={"cursor-pointer px-3 py-1 text-gray font-semibold rounded"}
          previousLinkClassName={"flex items-center"}
          nextLinkClassName={"flex items-center"}
          pageLinkClassName={"flex items-center"}
          breakLinkClassName={"flex items-center"}
        />
      </div>
    );
  };
                  
  

  return (
    <>
    <div className="container mx-auto px-8">
      <h1 className="text-2xl font-bold mt-8 mb-4">Product Management System</h1>
          {/*  */}
          <div class="m-6">
    <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
            <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
                <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                    <svg class="h-8 w-8 text-white" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                            fill="currentColor"></path>
                        <path
                            d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                            fill="currentColor"></path>
                        <path
                            d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                            fill="currentColor"></path>
                        <path
                            d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                            fill="currentColor"></path>
                        <path
                            d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                            fill="currentColor"></path>
                        <path
                            d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                            fill="currentColor"></path>
                    </svg>
                </div>

                <div class="mx-5">
                    <h4 className="text-2xl font-semibold text-gray-700">{userCount !== null ? userCount : 'Loading...'}</h4>
                    <div class="text-gray-500">New Users</div>
                </div>
            </div>
        </div>

        <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
            <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
                <div class="p-3 rounded-full bg-orange-600 bg-opacity-75">
                    <svg class="h-8 w-8 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
                            fill="currentColor"></path>
                        <path
                            d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z"
                            fill="currentColor"></path>
                        <path
                            d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z"
                            fill="currentColor"></path>
                    </svg>
                </div>

                <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-gray-700">3453</h4>
                    <div class="text-gray-500">Total Orders</div>
                </div>
            </div>
        </div>

        <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
            <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
                <div class="p-3 rounded-full bg-pink-600 bg-opacity-75">
                    <svg class="h-8 w-8 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z" fill="currentColor"
                            stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path>
                        <path
                            d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z"
                            stroke="currentColor" stroke-width="2"></path>
                    </svg>
                </div>

                <div class="mx-5">
                    <h4 class="text-2xl font-semibold text-gray-700">678</h4>
                    <div class="text-gray-500">Available Products</div>
                </div>
            </div>
        </div>
    </div>
</div>

          {/*  */}
      <div className="product-list flex flex-col">
        <button onClick={() => setShowAddPopup(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-max ml-auto">
          Add Product
        </button> 
        <div className="flex-auto block py-8 pt-6 px-9">
          <ProductsTable
            products={products}
            handleDeleteProduct={handleDeleteProduct}
            setUpdateProduct={setUpdateProduct}
            setShowUpdatePopup={setShowUpdatePopup}
          />
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
                <div className='flex flex-col py-1 gap-1'>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={updateProduct.name} onChange={(e) => setUpdateProduct({ ...updateProduct, name: e.target.value })} className="border border-gray-300 py-2  px-3 py-1 mb-2 rounded" />
                </div>
                <div className='flex flex-col py-1 gap-1'>
                <label htmlFor="size">Size:</label>
                <select type="text" id="size" value={updateProduct.size} onChange={(e) => setUpdateProduct({ ...updateProduct, size: e.target.value })} className="border border-gray-300 py-2  px-3 py-1 mb-2 rounded" >
                <option value="s">s</option>
                <option value="m">m</option>
                <option value="l">l</option>
                <option value="xl">xl</option>
                <option value="xxl">xxl</option>
                </select>
                </div>
                <div className='flex flex-col py-1 gap-1'>
                <label htmlFor="prix">Price:</label>
                <input type="text" id="prix" value={updateProduct.prix} onChange={(e) => setUpdateProduct({ ...updateProduct, prix: e.target.value })} className="border border-gray-300 py-2 px-3 py-1 mb-2 rounded" />
                </div>
                <div className='flex flex-col py-1 gap-1'>
                <label htmlFor="category">Category:</label>
                <select type="text" id="category" value={updateProduct.category} onChange={(e) => setUpdateProduct({ ...updateProduct, category: e.target.value })} className="border border-gray-300 py-2 px-3 py-1 mb-2 rounded">
                  <option value="t-shirt">t-shirt</option>
                  <option value="Streetwear">Streetwear</option>
                  <option value="sweatshirt">sweatshirt</option>
                  <option value="sweat">sweat</option>
                </select>
                </div>
                <div className='flex flex-col py-1 gap-1'>
                <label htmlFor="color">Color:</label>
                <input type="text" id="color" value={updateProduct.color} onChange={(e) => setUpdateProduct({ ...updateProduct, color: e.target.value })} className="border border-gray-300 py-2 px-3 py-1 mb-2 rounded" />
                </div>
                <div className='flex flex-col py-1 gap-1'>
                <label htmlFor="image">Image:</label>
                <input type="file" id="image" onChange={(e) => setUpdateProduct({ ...updateProduct, image: e.target.files[0] })} className="border border-gray-300 py-2 px-3 py-1 mb-2 rounded" />
                </div>
                <div className="flex justify-end pt-4">
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
