export interface CipherType {
    password: string;
    message: string;
}

export interface FormState extends CipherType {
    cipher: string;
}

export interface SliceState extends FormState {
    loadingEncode: boolean;
    loadingDecode: boolean;
}


