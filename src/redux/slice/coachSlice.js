import { createSlice } from "@reduxjs/toolkit";
import { coaches as initialCoaches } from "../../data/coaches";

const initialState = {
  coaches: initialCoaches,

  selectedCoach: null,

  searchTerm: "",

  selectedBatch: "All",

  isModalOpen: false,

  isProfileOpen: false,

  isDeleteModalOpen: false,

  loading: false,

  error: null,
};

const coachSlice = createSlice({
  name: "coaches",

  initialState,

  reducers: {
    // ==========================
    // Coach CRUD
    // ==========================

    addCoach: (state, action) => {
      state.coaches.push(action.payload);
    },

    updateCoach: (state, action) => {
      const index = state.coaches.findIndex(
        (coach) => coach.id === action.payload.id
      );

      if (index !== -1) {
        state.coaches[index] = action.payload;
      }
    },

    deleteCoach: (state, action) => {
      state.coaches = state.coaches.filter(
        (coach) => coach.id !== action.payload
      );
    },

    // ==========================
    // Selected Coach
    // ==========================

    setSelectedCoach: (state, action) => {
      state.selectedCoach = action.payload;
    },

    clearSelectedCoach: (state) => {
      state.selectedCoach = null;
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

    clearBatchFilter: (state) => {
      state.selectedBatch = "All";
    },

    // ==========================
    // Add/Edit Modal
    // ==========================

    openModal: (state) => {
      state.isModalOpen = true;
    },

    closeModal: (state) => {
      state.isModalOpen = false;
    },

    // ==========================
    // Profile Drawer
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
  addCoach,
  updateCoach,
  deleteCoach,

  setSelectedCoach,
  clearSelectedCoach,

  setSearchTerm,
  clearSearch,

  setSelectedBatch,
  clearBatchFilter,

  openModal,
  closeModal,

  openProfile,
  closeProfile,

  openDeleteModal,
  closeDeleteModal,
} = coachSlice.actions;

export default coachSlice.reducer;