import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ProductModal = ({ isOpen, onClose, onSubmit, initialValues }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const formik = useFormik({
        initialValues: initialValues || {
            title: '',
            image: '',
            description: '',
            price: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is required'),
            image: Yup.string().url('Invalid URL').required('Image URL is required'),
            description: Yup.string().required('Description is required'),
            price: Yup.number().positive('Price must be positive').required('Price is required'),
        }),
        enableReinitialize: true,
        onSubmit: (values) => {
            onSubmit(values);
            onClose();
        },
    });

    if (!isOpen) return null;

    return (
        <div
            className="modal-backdrop"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
            }}
        >
            <div
                style={{
                    background: '#fff',
                    padding: '24px',
                    borderRadius: '10px',
                    width: '400px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    animation: 'fadeIn 0.3s ease-in-out',
                }}
            >
                <h2 style={{ marginBottom: '16px', color: '#333' }}>
                    {initialValues ? '✏️ Edit Product' : '➕ Add Product'}
                </h2>
                <form onSubmit={formik.handleSubmit}>
                    <div style={{ marginBottom: '12px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{
                                width: '100%',
                                padding: '8px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                            }}
                        />
                        {formik.errors.title && formik.touched.title && (
                            <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{formik.errors.title}</div>
                        )}
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Image URL</label>
                        <input
                            type="text"
                            name="image"
                            value={formik.values.image}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{
                                width: '100%',
                                padding: '8px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                            }}
                        />
                        {formik.errors.image && formik.touched.image && (
                            <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{formik.errors.image}</div>
                        )}
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Description</label>
                        <input
                            type="text"
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{
                                width: '100%',
                                padding: '8px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                            }}
                        />
                        {formik.errors.description && formik.touched.description && (
                            <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{formik.errors.description}</div>
                        )}
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{
                                width: '100%',
                                padding: '8px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                            }}
                        />
                        {formik.errors.price && formik.touched.price && (
                            <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>{formik.errors.price}</div>
                        )}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button
                            type="button"
                            onClick={onClose}
                            style={{
                                padding: '8px 12px',
                                marginRight: '10px',
                                backgroundColor: '#6c757d',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            style={{
                                padding: '8px 12px',
                                backgroundColor: '#28a745',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                            }}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductModal;
