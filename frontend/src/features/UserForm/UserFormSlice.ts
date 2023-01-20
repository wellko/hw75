import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {decodeCipher, encodeCipher} from "./UserFormThunks";
import {SliceState} from "../../types";

const initialState : SliceState = {
	message: '',
	cipher: '',
	password: '',
	loadingEncode: false,
	loadingDecode: false
}

export const UserFormSlice = createSlice({
	name: 'Cipher',
	initialState,
	reducers: {},
	extraReducers: (builder) =>{
		builder.addCase(encodeCipher.pending, (state) => {
			state.loadingEncode = true;
		});
		builder.addCase(encodeCipher.fulfilled, (state, action) => {
			state.loadingEncode = false;
			state.cipher = action.payload.message;
			state.password = action.payload.password;
			state.message = '';
		});
		builder.addCase(encodeCipher.rejected, (state) => {
			state.loadingEncode = false;
		});
		builder.addCase(decodeCipher.pending, (state) => {
			state.loadingDecode = true;
		});
		builder.addCase(decodeCipher.fulfilled, (state,action) => {
			state.loadingDecode = false;
			state.message = action.payload.message;
			state.password = action.payload.password;
			state.cipher = '';
		});
		builder.addCase(decodeCipher.rejected, (state) => {
			state.loadingDecode = false;
		})
	}
});



export const UserFormReducer = UserFormSlice.reducer;



export const selectProducts = (state: RootState) => state.message;
