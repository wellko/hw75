import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {decodeCipher, encodeCipher} from "./UserFormThunks";
import {SliceState} from "../../types";

const initialState : SliceState = {
	message: '',
	cipher: '',
	password: '',
	loading: false,
}

export const UserFormSlice = createSlice({
	name: 'Cipher',
	initialState,
	reducers: {},
	extraReducers: (builder) =>{
		builder.addCase(encodeCipher.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(encodeCipher.fulfilled, (state, action) => {
			state.loading = false;
			state.cipher = action.payload.message;
			state.password = action.payload.password;
			state.message = '';
		});
		builder.addCase(encodeCipher.rejected, (state) => {
			state.loading = false;
		});
		builder.addCase(decodeCipher.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(decodeCipher.fulfilled, (state,action) => {
			state.loading = false;
			state.message = action.payload.message;
			state.password = action.payload.password;
			state.cipher = '';
		});
		builder.addCase(decodeCipher.rejected, (state) => {
			state.loading = false;
		})
	}
});



export const UserFormReducer = UserFormSlice.reducer;



export const selectProducts = (state: RootState) => state.message;

export const selectProductsLoading = (state: RootState) => state.message;