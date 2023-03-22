import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from "@mui/material";
import { CarrinhoContext } from '/src/Context/Provedor';
import { useContext } from 'react';
export default function MultiActionAreaCard(props) {
    const { id, title, description, image, price } = props;
    const { adicionarItem } = useContext(CarrinhoContext);
    function handleAdicionarCarrinho() {
        adicionarItem(id);
    }

    return (
        <Card sx={{ maxWidth: 270, float: 'left', margin: '20px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    sx={{ width: '70%', height: ' 0px auto', padding: '15px' }}
                    image={image}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}

                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" size="large" color="secondary" onClick={() => handleAdicionarCarrinho()} sx={{ backgroundColor: "#FF00FF" }}   >
                    ADICIONAR AO CARRINHO
                </Button>
            </CardActions>
        </Card>
    );
}

