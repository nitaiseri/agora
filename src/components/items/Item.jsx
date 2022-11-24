import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


function Item({item}) {

  return (
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
          <Typography gutterBottom variant="body1" color="text.secondary" component="div">
          In Stock: {item.quantity}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}

export default Item;