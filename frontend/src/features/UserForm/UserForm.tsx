import {CircularProgress, Grid, IconButton, TextField} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../app/hooks";
import {decodeCipher, encodeCipher} from "./UserFormThunks";
import {FormState} from "../../types";
import {ArrowDownward, ArrowUpward} from "@mui/icons-material";

interface Props {
    props: FormState;
    loadingEncode: boolean;
    loadingDecode: boolean;
}

const UserForm: React.FC<Props> = ({props, loadingEncode, loadingDecode}) => {
    const dispatch = useAppDispatch();
    const [formText, setFormText] = useState<FormState>(props);

    useEffect(() => {
        setFormText(props);
    }, [props])

    const ChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormText(prev => ({...prev, [name]: value}));
    };

    const DecodeEvent = async () => {
        await dispatch(decodeCipher({
            message: formText.cipher,
            password: formText.password
        }));
    };

    const EncodeEvent = async () => {
        await dispatch(encodeCipher({
            message: formText.message,
            password: formText.password
        }))
    };

    return (
        <Grid container direction="column" spacing={6}>
            <Grid item>
                <TextField
                    multiline
                    rows={5}
                    fullWidth
                    id="decode"
                    name='cipher'
                    label="Cipher"
                    value={formText.cipher}
                    onChange={ChangeEvent}
                />
            </Grid>
            <Grid item>
                <TextField
                    id="password"
                    name='password'
                    label="Password"
                    value={formText.password}
                    onChange={ChangeEvent}
                />
                <IconButton
                    disabled={!(formText.password.length > 0 && formText.message.length > 0 && !loadingDecode)}
                    onClick={EncodeEvent}>{loadingEncode ? <CircularProgress size={32}/> :
                    <ArrowUpward fontSize='large'/>}</IconButton>
                <IconButton
                    disabled={!(formText.password.length > 0 && formText.cipher.length > 0 && !loadingDecode)}
                    onClick={DecodeEvent}>{loadingDecode ? <CircularProgress size={32}/> :
                    <ArrowDownward fontSize='large'/>}</IconButton>
            </Grid>
            <Grid item>
                <TextField
                    rows={5}
                    multiline
                    fullWidth
                    id="encode"
                    name='message'
                    label="Message"
                    value={formText.message}
                    onChange={ChangeEvent}
                />
            </Grid>
        </Grid>
    );
};

export default UserForm;