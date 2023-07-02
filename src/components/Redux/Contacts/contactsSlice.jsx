import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userLogOut } from '../Auth/authOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null
};

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async ({ name, number }, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/contacts', { name, number });
    console.log(data)
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, { rejectWithValue }) => {
  try {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilledGet = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = null;
};

export const handleFulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(payload);
  state.error = null;
};

export const handleFulfilledDelete = (state, { payload }) => {
  state.isLoading = false;
  const index = state.items.findIndex(contact => contact.id === payload);
  state.items.splice(index, 1);
  state.error = null;
};

export const handleFulfilledLogOut = (state) => {
  state.items = [];
  state.error = null;
  state.isLoading = false;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(userLogOut.fulfilled, handleFulfilledLogOut)
  }
});

export const contactsReducer = contactSlice.reducer;
