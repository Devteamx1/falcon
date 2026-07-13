import { createSlice } from "@reduxjs/toolkit";
import { attendance as initialAttendance } from "../../data/attendance";

const initialState = {
  attendance: initialAttendance,

  selectedAttendance: null,

  searchTerm: "",

  selectedBatch: "All",

  selectedStatus: "All",

  selectedDate: "",

  isModalOpen: false,

  isProfileOpen: false,

  isDeleteModalOpen: false,

  loading: false,

  error: null,
};

const attendanceSlice = createSlice({
  name: "attendance",

  initialState,

  reducers: {
    // ==========================
    // CRUD
    // ==========================

    addAttendance: (state, action) => {
      state.attendance.push(action.payload);
    },

    updateAttendance: (state, action) => {
      const index = state.attendance.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        state.attendance[index] = action.payload;
      }
    },

    deleteAttendance: (state, action) => {
      state.attendance = state.attendance.filter(
        (item) => item.id !== action.payload
      );
    },

    // ==========================
    // Selected Attendance
    // ==========================

    setSelectedAttendance: (state, action) => {
      state.selectedAttendance = action.payload;
    },

    clearSelectedAttendance: (state) => {
      state.selectedAttendance = null;
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
    // Batch Filter
    // ==========================

    setSelectedBatch: (state, action) => {
      state.selectedBatch = action.payload;
    },

    // ==========================
    // Status Filter
    // ==========================

    setSelectedStatus: (state, action) => {
      state.selectedStatus = action.payload;
    },

    // ==========================
    // Date Filter
    // ==========================

    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },

    clearFilters: (state) => {
      state.selectedBatch = "All";
      state.selectedStatus = "All";
      state.selectedDate = "";
      state.searchTerm = "";
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
  addAttendance,
  updateAttendance,
  deleteAttendance,

  setSelectedAttendance,
  clearSelectedAttendance,

  setSearchTerm,
  clearSearch,

  setSelectedBatch,
  setSelectedStatus,
  setSelectedDate,
  clearFilters,

  openModal,
  closeModal,

  openProfile,
  closeProfile,

  openDeleteModal,
  closeDeleteModal,
} = attendanceSlice.actions;

export default attendanceSlice.reducer;