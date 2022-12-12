import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';


const initialState = { items: [], isLoading: false, error: null };

function isPendingAction(action) {
  return action.type.endsWith('pending');
}

function isRejectedAction(action) {
  return action.type.endsWith('rejected');
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, ({ items }, { payload: { id } }) => ({
        items: items.filter(contact => contact.id !== id),
        isLoading: false,
      }))
      .addMatcher(isPendingAction, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isRejectedAction, state => {
        state.isLoading = false;
        state.error = 'Something went wrong... Try again later.';
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

