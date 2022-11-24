import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { buyItem } from '../../app/inventorySlice'
import { useDispatch } from 'react-redux'
import EditPriceModal from './editPriceModal'


function Item({ item }) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispach = useDispatch()

  const buyItemHandler = () => {
    dispach(buyItem(item.name))
  }

  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.url}
            alt={item.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {item.price}$
            </Typography>
            <Typography gutterBottom variant="body1" color="text.secondary" component="div">
              In Stock: {item.quantity}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={buyItemHandler}>
            Buy
          </Button>
          <Button onClick={handleOpen}>Update Price</Button>
        </CardActions>
      </Card>
      <EditPriceModal open={open} handleClose={handleClose} itemName={item.name}/>
    </React.Fragment>
  );
}

export default Item;