import { createSlice } from "@reduxjs/toolkit";
import { students as initialStudents } from "../../data/students";

const initialState = {
  students: initialStudents,

  // Selected Student
  selectedStudent: null,

  // Search & Filter
  searchTerm: "",
  selectedBatch: "All",

  // UI States
  isModalOpen: false,
  isProfileOpen: false,
  isDeleteModalOpen: false,

  // Loading
  loading: false,
  error: null,
};

const studentSlice = createSlice({
  name: "students",

  initialState,

  reducers: {
    // ===========================
    // Student CRUD
    // ===========================

    addStudent: (state, action) => {
      state.students.push(action.payload);
    },

    updateStudent: (state, action) => {
      const index = state.students.findIndex(
        (student) => student.id === action.payload.id
      );

      if (index !== -1) {
        state.students[index] = action.payload;
      }
    },

    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );

      state.selectedStudent = null;
      state.isDeleteModalOpen = false;
    },

    // ===========================
    // Selected Student
    // ===========================

    setSelectedStudent: (state, action) => {
      state.selectedStudent = action.payload;
    },

    clearSelectedStudent: (state) => {
      state.selectedStudent = null;
    },

    // ===========================
    // Search
    // ===========================

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    clearSearch: (state) => {
      state.searchTerm = "";
    },

    // ===========================
    // Filter
    // ===========================

    setSelectedBatch: (state, action) => {
      state.selectedBatch = action.payload;
    },

    clearBatchFilter: (state) => {
      state.selectedBatch = "All";
    },

    // ===========================
    // Add / Edit Modal
    // ===========================

    openModal: (state) => {
      state.isModalOpen = true;
    },

    closeModal: (state) => {
      state.isModalOpen = false;
      state.selectedStudent = null;
    },

    // ===========================
    // Student Profile
    // ===========================

    openProfile: (state) => {
      state.isProfileOpen = true;
    },

    closeProfile: (state) => {
      state.isProfileOpen = false;
      state.selectedStudent = null;
    },

    // ===========================
    // Delete Modal
    // ===========================

    openDeleteModal: (state) => {
      state.isDeleteModalOpen = true;
    },

    closeDeleteModal: (state) => {
      state.isDeleteModalOpen = false;
      state.selectedStudent = null;
    },
  },
});

export const {
  addStudent,
  updateStudent,
  deleteStudent,

  setSelectedStudent,
  clearSelectedStudent,

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
} = studentSlice.actions;

export default studentSlice.reducer;