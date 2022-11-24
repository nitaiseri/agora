import { useSelector } from "react-redux"
import {selectItems} from "../../app/inventorySlice"
import Grid from "@mui/material/Grid"
import Item from './Item';

function Items(){

    const items = useSelector(selectItems)

    return <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {items.map( item => <Grid key={item.name} item xs={3}><Item item={item}></Item></Grid>)}
    </Grid>

}

export default Items;