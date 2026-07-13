import { createSlice } from "@reduxjs/toolkit";
import paymentData from "../../data/payments";

const initialState = {
  payments: paymentData,

  selectedPayment: null,

  searchTerm: "",

  selectedStatus: "All",

  isModalOpen: false,

  isProfileOpen: false,

  isDeleteModalOpen: false,
};

const paymentSlice = createSlice({
  name: "payment",

  initialState,

  reducers: {
    addPayment: (state, action) => {
      state.payments.unshift(action.payload);
    },

    updatePayment: (state, action) => {
      const index = state.payments.findIndex(
        (payment) => payment.id === action.payload.id
      );

      if (index !== -1) {
        state.payments[index] = action.payload;
      }
    },

    deletePayment: (state, action) => {
      state.payments = state.payments.filter(
        (payment) => payment.id !== action.payload
      );
    },

    setSelectedPayment: (state, action) => {
      state.selectedPayment = action.payload;
    },

    clearSelectedPayment: (state) => {
      state.selectedPayment = null;
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    setSelectedStatus: (state, action) => {
      state.selectedStatus = action.payload;
    },

    openModal: (state) => {
      state.isModalOpen = true;
    },

    closeModal: (state) => {
      state.isModalOpen = false;
    },

    openProfile: (state) => {
      state.isProfileOpen = true;
    },

    closeProfile: (state) => {
      state.isProfileOpen = false;
    },

    openDeleteModal: (state) => {
      state.isDeleteModalOpen = true;
    },

    closeDeleteModal: (state) => {
      state.isDeleteModalOpen = false;
    },
  },
});

export const {
  addPayment,
  updatePayment,
  deletePayment,

  setSelectedPayment,
  clearSelectedPayment,

  setSearchTerm,
  setSelectedStatus,

  openModal,
  closeModal,

  openProfile,
  closeProfile,

  openDeleteModal,
  closeDeleteModal,
} = paymentSlice.actions;

export default paymentSlice.reducer;