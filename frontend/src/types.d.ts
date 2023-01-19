export interface CipherType {
	password: string;
	message: string;
}

export interface SliceState {
	cipher: string;
	message: string;
	password: string;
	loading: boolean;
}

export interface FormState {
	message: string;
	password: string;
	cipher: string;
}