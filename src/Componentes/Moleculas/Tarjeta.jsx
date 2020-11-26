import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const Tarjeta = (props) => {
    return (
        <Card style={{height:"370px"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image="https://images.pexels.com/photos/5563180/pexels-photo-5563180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    title={props.titulo}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.titulo}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.descripcion}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Solucionar
                    </Button>
                <Button size="small" color="primary">
                    Ver
                    </Button>
            </CardActions>
        </Card>
    );
}
export default Tarjeta;