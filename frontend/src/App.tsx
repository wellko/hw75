import React from 'react';
import UserForm from "./features/UserForm/UserForm";
import {useAppSelector} from "./app/hooks";
import {selectProducts} from "./features/UserForm/UserFormSlice";
import {CircularProgress} from "@mui/material";


function App() {
	const mainState = useAppSelector(selectProducts);

	return (
		<div className="App">
			{mainState.loading ? <CircularProgress/> : <UserForm props={{
				message: mainState.message,
				cipher: mainState.cipher,
				password: mainState.password,
			}}/>}


		</div>
	);
}

export default App;
