import React from 'react';
import UserForm from "./features/UserForm/UserForm";
import {useAppSelector} from "./app/hooks";
import {selectCipherApp} from "./features/UserForm/UserFormSlice";
import {Container} from "@mui/material";


function App() {
    const mainState = useAppSelector(selectCipherApp);

    return (
        <div className="App">
            <Container>
                <UserForm props={{
                    message: mainState.message,
                    cipher: mainState.cipher,
                    password: mainState.password,
                }}
                          loadingEncode={mainState.loadingEncode}
                          loadingDecode={mainState.loadingDecode}/>
            </Container>
        </div>

    );
}

export default App;
