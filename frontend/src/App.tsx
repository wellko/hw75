import React from 'react';
import UserForm from "./features/UserForm/UserForm";
import {useAppSelector} from "./app/hooks";
import {selectProducts} from "./features/UserForm/UserFormSlice";


function App() {
    const mainState = useAppSelector(selectProducts);

    return (
        <div className="App">

            <UserForm props={{
                message: mainState.message,
                cipher: mainState.cipher,
                password: mainState.password,
            }}
                      loadingEncode={mainState.loadingEncode}
            loadingDecode={mainState.loadingDecode}/>


        </div>
    );
}

export default App;
