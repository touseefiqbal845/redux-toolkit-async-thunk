import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/Products/ProductSlice';
import { addProduct, updateProduct,DeleteProduct } from '../features/Products/ProductSlice';



const Product = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const [newProduct, setNewProduct] = useState({
        title: '',
        price: 0,
        description: '',
        image: '',
        category: ''
    });

    const handleAddProduct = () => {
        dispatch(addProduct(newProduct));
        setNewProduct({
            title: '',
            price: 0,
            description: '',
            image: '',
            category: ''
        });
    };

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const handleUpdateProduct = (productId) => {
        const updatedData = {
            title: 'Updated Test Product',
            price: 15.0,
            description: 'Updated description',
            image: 'https://i.pravatar.cc/200',
            category: 'electronics'
        };

        dispatch(updateProduct({ productId, updatedData }));
    };
    const handleDeleteProduct = (productId) => {
        dispatch(DeleteProduct({ productId }));
    };
    



   return (
    <div className="product-container grid grid-cols-3 gap-4 mt-10">
        {products.map(product => (
            <div className="product-card p-4 border rounded-md shadow-md" key={product.id}>
                <img className="w-20 h-20 mb-2" src={product.image} alt={product.title} />
                <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
                <h4 className="text-gray-600 text-sm mb-2">{product.description}</h4>
                <p className="text-green-600 font-semibold">${product.price}</p>
                <button onClick={() => handleUpdateProduct(product.id)}>Update Product</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete Product</button>

            </div>
        ))}

            <div className="product-card p-4 border rounded-md shadow-md">
                <h2 className="text-lg font:bold mb-1">Add New Product</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={newProduct.title}
                    onChange={e => setNewProduct({ ...newProduct, title: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={e => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newProduct.description}
                    onChange={e => setNewProduct({ ...newProduct, description: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newProduct.image}
                    onChange={e => setNewProduct({ ...newProduct, image: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={newProduct.category}
                    onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
                />
                <button onClick={handleAddProduct}>Add Product</button>
            </div>
        </div>
    );
};

export default Product;
