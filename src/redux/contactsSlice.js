// import { createSlice } from '@reduxjs/toolkit';
import { logOut } from './auth/operations';
import { fetchContacts, addContact, deleteContact } from './operations';


// const initialState = { items: [], isLoading: false, error: null };

// function isPendingAction(action) {
//   return action.type.endsWith('pending');
// }

// function isRejectedAction(action) {
//   return action.type.endsWith('rejected');
// }

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,

//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.fulfilled, (state, { payload }) => {
//         state.items = payload;
//         state.isLoading = false;
//       })
//       .addCase(addContact.fulfilled, (state, { payload }) => {
//         state.items = [...state.items, payload];
//         state.isLoading = false;
//       })
//       .addCase(deleteContact.fulfilled, ({ items }, { payload: { id } }) => ({
//         items: items.filter(contact => contact.id !== id),
//         isLoading: false,
//       }))
//       .addMatcher(isPendingAction, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addMatcher(isRejectedAction, state => {
//         state.isLoading = false;
//         state.error = 'Something went wrong... Try again later.';
//       });
//   },
// });

// export const contactsReducer = contactsSlice.reducer;





const { createSlice } = require('@reduxjs/toolkit');

const pending = state => {
  state.isLoading = true;
};
const fulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: pending,
    [fetchContacts.fulfilled](state, { payload }) {
      fulfilled(state);
      state.items = payload;
    },
    [fetchContacts.rejected]: rejected,
    [addContact.pending]: pending,
    [addContact.fulfilled](state, { payload }) {
      fulfilled(state);
      state.items.push({ ...payload });
    },
    [addContact.rejected]: rejected,
    [deleteContact.pending]: pending,
    [deleteContact.fulfilled](state, { payload }) {
      fulfilled(state);
      const idx = state.items.findIndex(item => item.id === payload);
      state.items.splice(idx, 1);
    },
    [deleteContact.rejected]: rejected,
    [logOut.fulfilled](state, payload) {
      state.items = [];
      state.isLoading = false;
      state.error = null;
    },
  },
});
