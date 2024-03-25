import { createAsyncThunk } from '@reduxjs/toolkit'; // Optional: Use createAsyncThunk for improved error handling

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    const data = await response.json();
    return data;
  }
);

