import { configureStore } from "@reduxjs/toolkit";
import starmicroartReducer from "./features/starmicroartSlice";

export const store = configureStore({
	reducer: {
		starmicroart: starmicroartReducer,
	},
});
