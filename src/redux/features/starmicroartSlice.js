import { createSlice } from "@reduxjs/toolkit";

const starmicroartSlice = createSlice({
	name: "starmicroart",
	initialState: {
		services: null,
		controller: null,
		bookings: null,
		otherServices: null,
		allBookings: null,
		loading: true,
		error: null,
	},
	reducers: {
		setServices: (state, action) => {
			state.services = action.payload;
		},
		setController: (state, action) => {
			state.controller = action.payload;
		},
		setBookings: (state, action) => {
			state.bookings = action.payload;
		},
		setAllBookings: (state, action) => {
			state.allBookings = action.payload;
		},
		setOtherServices: (state, action) => {
			state.otherServices = action.payload;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setError: (state, action) => {
			state.error = action.payload;
		},
	},
});

export const {
	setServices,
	setBookings,
	setController,
	setOtherServices,
	setAllBookings,
	setLoading,
	setError,
} = starmicroartSlice.actions;
export default starmicroartSlice.reducer;
