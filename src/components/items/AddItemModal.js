import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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
                <TextField name="name" type="text" placeholder='Item name' value={inputItem.name} onChange={inputHandler}></TextField>
                <TextField name="price" type="number" placeholder='Item price' value={inputItem.price} onChange={inputHandler}></TextField>
                <TextField name="url" type="text" placeholder='Item url' value={inputItem.url} onChange={inputHandler}></TextField>
                <TextField name="quantity" type="number" placeholder='Item quantity' value={inputItem.quantity} onChange={inputHandler}></TextField>
             
                <button onClick={addItemHandler}>Add</button>
            </BasicModal>
        </div>
    );
}

export default AddItemModal;