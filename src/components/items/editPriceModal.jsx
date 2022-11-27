import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import BasicModal from '../BasicModal'
import { editItemPrice } from '../../app/inventorySlice'
import { TextField } from '@mui/material';

function EditPriceModal(props) {
    const [inputText, setInput] = useState("");

    const inputHandler = (event) => {
        setInput(event.target.value)
    }

    const dispach = useDispatch()

    const updatePriceHandler = () => {
        dispach(editItemPrice({itemName: props.itemName, price: inputText}))
        props.handleClose()
    }

    return (
        <div>
            <BasicModal open={props.open} handleClose={props.handleClose}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Insert new price:
                </Typography>
                <TextField type="number" placeholder='$' value={inputText} onChange={inputHandler} />
                <Button onClick={updatePriceHandler}>Update</Button>
            </BasicModal>
        </div>
    );
}

export default EditPriceModal;