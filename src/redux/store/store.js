import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "../slice/studentSlice";
import courseSlice from "../slice/courseSlice";
import bookingSlice from "../slice/bookingSlice";
import coachSlice from "../slice/coachSlice";
import attendanceSlice from "../slice/attendanceSlice";
import communicationSlice from "../slice/communicationSlice";
import paymentSlice from "../slice/paymentSlice"
const store =  configureStore({
    reducer: {
     students : studentSlice,
     courses : courseSlice,
     bookings : bookingSlice,
     coaches : coachSlice,
     attendance: attendanceSlice,
     communication: communicationSlice,
     payments: paymentSlice
    }
})

export default store;