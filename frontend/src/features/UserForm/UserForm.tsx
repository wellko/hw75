import {TextField} from '@mui/material';
import {useState} from 'react';
import {useAppDispatch} from "../../app/hooks";
import {decodeCipher, encodeCipher} from "./UserFormThunks";
import {FormState} from "../../types";

interface Props {
	props: FormState
}

const UserForm:React.FC<Props> = ({props}) => {

	const dispatch = useAppDispatch();

	const [formText, setFormText] = useState<FormState>(props)

	const ChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setFormText(prev => ({...prev, [name]: value}));
	};

	const DecodeEvent = async () => {
		await dispatch(decodeCipher({
			message: formText.cipher,
			password: formText.password
		}));
	}

	const EncodeEvent = async () => {
		await dispatch(encodeCipher({
			message: formText.message,
			password: formText.password
		}))
	}

	return (
		<div>
			<TextField
				id="decode"
				name='cipher'
				label="Cipher"
				value={formText.cipher}
				onChange={ChangeEvent}
			/>
			<TextField
				id="password"
				name='password'
				label="Password"
				value={formText.password}
				onChange={ChangeEvent}
			/>
			<TextField
				id="encode"
				name='message'
				label="Message"
				value={formText.message}
				onChange={ChangeEvent}
			/>
			<button disabled={!(formText.password.length > 0 && formText.message.length > 0)} onClick={EncodeEvent}>Encode</button>
			<button disabled={!(formText.password.length > 0 && formText.cipher.length > 0)} onClick={DecodeEvent}>Decode</button>
		</div>
	);
};

export default UserForm;