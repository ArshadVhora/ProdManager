import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '../../redux/actions';
import ProductModal from '../../components/ProductModal';
import Header from '../../components/header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import EmptyComponent from '../../components/EmptyComponent';

const ProductsPage = () => {
    const dispatch = useDispatch();
    const { products, loading } = useSelector(state => state);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAddClick = () => {
        setEditingProduct(null);
        setIsModalOpen(true);
    };

    const handleEditClick = (product) => {
        setEditingProduct(product);
        setIsModalOpen(true);
    };

    const handleDeleteClick = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            dispatch(deleteProduct(id));
        }
    };

    const handleSubmit = (productData) => {
        if (editingProduct) {
            dispatch(updateProduct(editingProduct._id, productData));
        } else {
            dispatch(createProduct(productData));
        }
    };

    return (
        <section style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <Header />

            <Container className="mt-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 style={{ fontWeight: 'bold', color: '#333' }}>🛍️ Products</h2>
                    <Button
                        variant="success"
                        onClick={handleAddClick}
                        style={{
                            padding: '10px 16px',
                            fontWeight: 'bold',
                            borderRadius: '8px',
                        }}
                    >
                        ➕ Add Product
                    </Button>
                </div>
            </Container>

            <Container>
                {loading && (
                    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
                        <p style={{ fontSize: '16px' }}>Loading...</p>
                    </div>
                )}

                {!loading && products.length === 0 && (
                    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                        <EmptyComponent message="No products found" />
                    </div>
                )}

                {!loading && products.length > 0 && (
                    <Row className="g-4 justify-content-center mb-4">
                        {products.map(product => (
                            <Col key={product._id} xs={12} sm={6} md={4} lg={3} className="d-flex">
                                <div
                                    style={{
                                        backgroundColor: '#fff',
                                        borderRadius: '8px',
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                        padding: '16px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        transition: 'transform 0.2s, box-shadow 0.2s',
                                        width: '100%',
                                        cursor: 'pointer',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.15)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                                    }}
                                >
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        style={{
                                            width: '100%',
                                            height: '160px',
                                            objectFit: 'cover',
                                            borderRadius: '6px',
                                            marginBottom: '12px',
                                        }}
                                    />
                                    <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#222' }}>{product.title}</h3>
                                    <p style={{ fontSize: '14px', color: '#555', marginBottom: '10px' }}>{product.description}</p>
                                    <p style={{ fontWeight: 'bold', fontSize: '16px', color: '#000', marginBottom: '12px' }}>
                                        Price: ${product.price}
                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Button
                                            variant="primary"
                                            size="sm"
                                            onClick={() => handleEditClick(product)}
                                        >
                                            ✏️ Edit
                                        </Button>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => handleDeleteClick(product._id)}
                                        >
                                            🗑️ Delete
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>

            <ProductModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit}
                initialValues={editingProduct}
            />
        </section>
    );
};

export default ProductsPage;
