import {configureStore} from "@reduxjs/toolkit";
import {UserFormReducer} from "../features/UserForm/UserFormSlice";

export const store = configureStore({

	reducer: {
		message: UserFormReducer,
	}

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;