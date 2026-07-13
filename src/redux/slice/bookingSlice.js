import { createSlice } from "@reduxjs/toolkit";
import { bookings as initialBookings } from "../../data/bookings";

const initialState = {
  bookings: initialBookings,

  selectedBooking: null,

  searchTerm: "",

  selectedStatus: "All",

  selectedPayment: "All",

  isModalOpen: false,

  isProfileOpen: false,

  isDeleteModalOpen: false,

  loading: false,

  error: null,
};

const bookingSlice = createSlice({
  name: "bookings",

  initialState,

  reducers: {
    // ==========================
    // CRUD
    // ==========================

    addBooking: (state, action) => {
      state.bookings.unshift(action.payload);
    },

    updateBooking: (state, action) => {
      const index = state.bookings.findIndex(
        (booking) => booking.id === action.payload.id
      );

      if (index !== -1) {
        state.bookings[index] = action.payload;
      }
    },

    deleteBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking.id !== action.payload
      );
    },

    // ==========================
    // Selected Booking
    // ==========================

    setSelectedBooking: (state, action) => {
      state.selectedBooking = action.payload;
    },

    clearSelectedBooking: (state) => {
      state.selectedBooking = null;
    },

    // ==========================
    // Search
    // ==========================

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    clearSearch: (state) => {
      state.searchTerm = "";
    },

    // ==========================
    // Status Filter
    // ==========================

    setSelectedStatus: (state, action) => {
      state.selectedStatus = action.payload;
    },

    // ==========================
    // Payment Filter
    // ==========================

    setSelectedPayment: (state, action) => {
      state.selectedPayment = action.payload;
    },

    // ==========================
    // Modal
    // ==========================

    openModal: (state) => {
      state.isModalOpen = true;
    },

    closeModal: (state) => {
      state.isModalOpen = false;
    },

    // ==========================
    // Profile
    // ==========================

    openProfile: (state) => {
      state.isProfileOpen = true;
    },

    closeProfile: (state) => {
      state.isProfileOpen = false;
    },

    // ==========================
    // Delete Modal
    // ==========================

    openDeleteModal: (state) => {
      state.isDeleteModalOpen = true;
    },

    closeDeleteModal: (state) => {
      state.isDeleteModalOpen = false;
    },
  },
});

export const {
  addBooking,
  updateBooking,
  deleteBooking,

  setSelectedBooking,
  clearSelectedBooking,

  setSearchTerm,
  clearSearch,

  setSelectedStatus,
  setSelectedPayment,

  openModal,
  closeModal,

  openProfile,
  closeProfile,

  openDeleteModal,
  closeDeleteModal,
} = bookingSlice.actions;

export default bookingSlice.reducer;