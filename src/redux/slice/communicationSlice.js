import { createSlice } from "@reduxjs/toolkit";
import communicationData from "../../data/communication";

const initialState = {
  messages: communicationData,

  selectedMessage: null,

  searchTerm: "",

  selectedAudience: "All",

  isModalOpen: false,

  isProfileOpen: false,

  isDeleteModalOpen: false,
};

const communicationSlice = createSlice({
  name: "communication",

  initialState,

  reducers: {
    addMessage: (state, action) => {
      state.messages.unshift(action.payload);
    },

    updateMessage: (state, action) => {
      const index = state.messages.findIndex(
        (msg) => msg.id === action.payload.id
      );

      if (index !== -1) {
        state.messages[index] = action.payload;
      }
    },

    deleteMessage: (state, action) => {
      state.messages = state.messages.filter(
        (msg) => msg.id !== action.payload
      );
    },

    setSelectedMessage: (state, action) => {
      state.selectedMessage = action.payload;
    },

    clearSelectedMessage: (state) => {
      state.selectedMessage = null;
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    setSelectedAudience: (state, action) => {
      state.selectedAudience = action.payload;
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
  addMessage,
  updateMessage,
  deleteMessage,

  setSelectedMessage,
  clearSelectedMessage,

  setSearchTerm,
  setSelectedAudience,

  openModal,
  closeModal,

  openProfile,
  closeProfile,

  openDeleteModal,
  closeDeleteModal,
} = communicationSlice.actions;

export default communicationSlice.reducer;