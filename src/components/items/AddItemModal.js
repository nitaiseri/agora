import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import BasicModal from '../BasicModal'
import { addItem } from '../../app/inventorySlice'
import { TextField } from '@mui/material';



function AddItemModal(props) {
    const [inputItem, setItem] = useState({name:"", price:"", url:"", quantity:""});

    const inputHandler = (event) => {
        setItem((prevState) => ({...prevState, [event.target.name]:event.target.value})
        )
    }

    const dispach = useDispatch()

    const addItemHandler = () => {
        dispach(addItem(inputItem))
        props.handleClose()
    }

    return (
        <div>
            <BasicModal open={props.open} handleClose={props.handleClose}>
                <TextField sx={{m:1}} name="name" type="text" placeholder='Item name' value={inputItem.name} onChange={inputHandler}></TextField>
                <TextField sx={{m:1}} name="price" type="number" placeholder='Item price' value={inputItem.price} onChange={inputHandler}></TextField>
                <TextField sx={{m:1}} name="url" type="text" placeholder='Item url' value={inputItem.url} onChange={inputHandler}></TextField>
                <TextField sx={{m:1}} name="quantity" type="number" placeholder='Item quantity' value={inputItem.quantity} onChange={inputHandler}></TextField>
                <Button onClick={addItemHandler}>Add</Button>
            </BasicModal>
        </div>
    );
}

export default AddItemModal;