import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CarrinhoContext } from "/src/Context/Provedor";
import { useContext } from "react";
export default function MultiActionAreaCard(props) {
  const { id, title, description, image, price, onIncrement, count } = props;
  const { adicionarItem, counters } = useContext(CarrinhoContext);
  function handleAdicionarCarrinho() {
    adicionarItem(id);
  }

  return (
    <Card
      className="animate__animated animate__fadeInUp"
      sx={{ maxWidth: 270, float: "left", margin: "20px" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ width: "70%", height: " 0px auto", padding: "15px" }}
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description} {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions onClick={() => onIncrement()}>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={() => handleAdicionarCarrinho()}
          sx={{
            backgroundColor: "#FF00FF",
            fontSize: "14px",
            textAlign: "center",
            whiteSpace: "nowrap",
            margin: "5px",
            gap: "7px",
          }}
        >
          <AddShoppingCartIcon />
          <span>{count}</span>
          ADICIONA AO CARRINHO
        </Button>
      </CardActions>
    </Card>
  );
}
