import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API URLs
const BASE_URL = 'http://localhost/LMS/Api/auth';

// Register
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/registration.php`, userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

// Login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/login.php`, credentials);

      if (response.data.status === 'success') {
        // ✅ store user (NOT token)
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }

      return response.data;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

// Get All Users
export const getUsers = createAsyncThunk(
  'auth/getUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/getUsers.php`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: 'Fetch users failed' }
      );
    }
  }
);

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isLoggedIn: !!localStorage.getItem('user'),
  loading: false,
  error: null,
  users: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem('user'); // ✅ fixed
    },
  },
  extraReducers: (builder) => {

    // Register
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(registerUser.fulfilled, (state) => {
      state.loading = false;
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message || 'Registration failed';
    });

    // Login
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;

      if (action.payload.status === 'success') {
        state.user = action.payload.user; // ✅ correct
        state.isLoggedIn = true;
      } else {
        state.error = action.payload.message;
      }
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message || 'Login failed';
    });

    // Get Users
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;

      if (action.payload.status === 'success') {
        state.users = action.payload.data;
      } else {
        state.error = action.payload.message;
      }
    });

    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message || 'Fetch users failed';
    });

  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;