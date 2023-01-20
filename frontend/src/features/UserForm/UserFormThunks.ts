import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axios-api";
import {CipherType} from "../../types";

export const encodeCipher = createAsyncThunk<CipherType, CipherType>(
    'Cipher/encode',
    async (arg) => {
        const response = await axiosApi.post('/encode', arg);
        return {
            message: response.data.encoded,
            password: arg.password
        };
    }
)

export const decodeCipher = createAsyncThunk<CipherType, CipherType>(
    'Cipher/decode',
    async (arg) => {
        const response = await axiosApi.post('/decode', arg);
        return {
            message: response.data.decoded,
            password: arg.password
        };
    }
)