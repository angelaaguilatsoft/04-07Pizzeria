import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import PizzaTrozo from "../../assets/imgs/PizzaTrozo.png";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from 'react-bootstrap';
import carroCompra from "../../assets/imgs/carroCompra.png";

const Pizza = () => {
  // Estados
    const [pizza, setPizza] = useState([]);

  // Conectar y consumir la API
  const url = "http://localhost:5000/api/pizzas/p001";

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizza(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const styleCard = {
    width: "25%",
    height: "auto",
    margin: "40px 10px 8px 20px" 
  };

  const ingredientes = [pizza.ingredients].join(", ");

  return (
    <>
      <Card style={styleCard} key={pizza.id} className="mx-auto my-5">
        <Card.Header style={{ height: "auto" }}>
          <Card.Img variant="top" src={pizza.img} style={{ width: "100%" }} />
          <Card.Title className="mt-3">Pizza {pizza.name}</Card.Title>
          <Card.Text>{pizza.desc}</Card.Text>
        </Card.Header>

        <Card.Body className="text-center">
          <Card.Text className="h5 mb-2">
            <Image src={PizzaTrozo} /> Ingredientes:
          </Card.Text>
          <Card.Text>{ingredientes}</Card.Text>
        </Card.Body>

        <Card.Footer className="p-4 text-center">
          <Card.Text className="h4 mb-4">
            {" "}
            Precio: ${Intl.NumberFormat("de-DE").format(pizza.price)}
          </Card.Text>
          <Button variant="dark" className="mx-3" type="submit">
            Añadir <Image src={carroCompra} />
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Pizza
