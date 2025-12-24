import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchStudents = createAsyncThunk("students/fetchStudents",async () => {
    const response = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}/students`,
  );
  return response.data;
});
export const updateStudentAsync = createAsyncThunk("students/updateStudentAsync",async ({studentData, studentId}) => {
    const response = await axios.put(
    `${import.meta.env.VITE_BACKEND_URL}/students/${studentId}`,studentData
  );
  return response.data;
});
export const deleteStudentAsync = createAsyncThunk("students/deleteStudentAsync",async (studentId) => {
    const response = await axios.delete(
    `${import.meta.env.VITE_BACKEND_URL}/students/${studentId}`
  );
  console.log(response.data);
  
  return response.data;
});
export const addStudentAsync = createAsyncThunk("students/addStudentAsync",async (studentData) => {
    const response = await axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/students`,studentData
  );
  return response.data;
});

export const studentsSlice = createSlice({
    name: "students",
    initialState: {
        students: [],
        loadingState: "Idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
    builder.addCase(fetchStudents.pending, (state) => {
      state.loadingState = "loading";
    });
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.loadingState = "success";
      state.students = action.payload;
    });
    builder.addCase(fetchStudents.rejected, (state) => {
      state.loadingState = "error";
    });
    builder.addCase(updateStudentAsync.fulfilled, (state, action) => {
  // Replace the updated student in the list
  const index = state.students.findIndex(s => s._id === action.payload._id);
  if (index !== -1) {
    state.students[index] = action.payload;
  }
});
    builder.addCase(addStudentAsync.fulfilled, (state, action) => {
    state.students.push(action.payload);
});
    builder.addCase(deleteStudentAsync.fulfilled, (state, action) => {
    state.students.pop(action.payload);
});
  },
})