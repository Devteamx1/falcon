import { createSlice } from "@reduxjs/toolkit";
import { courses as initialCourses } from "../../data/courses";

const initialState = {
  // Course Data
  courses: initialCourses,

  // Selected Course
  selectedCourse: null,

  // Search & Filter
  searchTerm: "",
  selectedLevel: "All",
  selectedBatch: "All",

  // UI State
  isModalOpen: false,
  isProfileOpen: false,
  isDeleteModalOpen: false,
  isProfileOpen: false,

  // Loading
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: "courses",

  initialState,

  reducers: {
    // =====================================
    // Course CRUD
    // =====================================

    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },

    updateCourse: (state, action) => {
      const index = state.courses.findIndex(
        (course) => course.id === action.payload.id
      );

      if (index !== -1) {
        state.courses[index] = action.payload;
      }
    },

    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload
      );

      state.selectedCourse = null;
      state.isDeleteModalOpen = false;
    },

    // =====================================
    // Selected Course
    // =====================================

    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },

    clearSelectedCourse: (state) => {
      state.selectedCourse = null;
    },

    // =====================================
    // Search
    // =====================================

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    clearSearch: (state) => {
      state.searchTerm = "";
    },

    // =====================================
    // Level Filter
    // =====================================

    setSelectedLevel: (state, action) => {
      state.selectedLevel = action.payload;
    },

    clearLevelFilter: (state) => {
      state.selectedLevel = "All";
    },

    // =====================================
    // Batch Filter
    // =====================================

    setSelectedBatch: (state, action) => {
      state.selectedBatch = action.payload;
    },

    clearBatchFilter: (state) => {
      state.selectedBatch = "All";
    },

    // =====================================
    // Add / Edit Modal
    // =====================================

    openModal: (state) => {
      state.isModalOpen = true;
    },

    closeModal: (state) => {
      state.isModalOpen = false;
      state.selectedCourse = null;
    },

    // =====================================
    // Course Profile
    // =====================================

    openProfile: (state) => {
      state.isProfileOpen = true;
    },

    closeProfile: (state) => {
      state.isProfileOpen = false;
      state.selectedCourse = null;
    },

    // =====================================
    // Delete Modal
    // =====================================

    openDeleteModal: (state) => {
      state.isDeleteModalOpen = true;
    },

    closeDeleteModal: (state) => {
      state.isDeleteModalOpen = false;
      state.selectedCourse = null;
    },

    // =====================================
    // Loading
    // =====================================

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  addCourse,
  updateCourse,
  deleteCourse,

  setSelectedCourse,
  clearSelectedCourse,

  setSearchTerm,
  clearSearch,

  setSelectedLevel,
  clearLevelFilter,

  setSelectedBatch,
  clearBatchFilter,

  openModal,
  closeModal,

  openProfile,
  closeProfile,

  openDeleteModal,
  closeDeleteModal,

  setLoading,
  setError,
} = courseSlice.actions;

export default courseSlice.reducer;