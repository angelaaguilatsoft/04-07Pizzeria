import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import PizzaTrozo from '../assets/imgs/PizzaTrozo.png';
import carroCompra from '../assets/imgs/carroCompra.png';
import eyes from '../assets/imgs/eyes.png';
import { Link } from "react-router-dom";


export const CardPizza = ({ pizza }) => {
  const styleCard = { width: "30%", height: "auto", margin: "20px 3px 10px 3px", padding: "5px"};
  const precio = Intl.NumberFormat("de-DE").format(pizza.price);
  const toPizza = "/Pizza/" + pizza.id.toUpperCase();

  return (
    <>
      <Card style={styleCard} key={pizza.id}>
        <Card.Header style={{ height: "auto" }}>
          <Card.Img variant="top" src={pizza.img} style={{ width: "100%" }} />
          <Card.Title className="mt-3">Pizza {pizza.name}</Card.Title>
          <Card.Text>{pizza.desc}</Card.Text>
        </Card.Header>

        <Card.Body className="text-center">
          <Card.Text className="h5 mb-2">
            <Image src={PizzaTrozo} /> Ingredientes:
          </Card.Text>

          <Card.Text as="ul">
            {pizza.ingredients.map((ingrediente, index) => (
              <Card.Text as="li" key={index}>
                {ingrediente}
              </Card.Text>
            ))}
          </Card.Text>
        </Card.Body>

        <Card.Footer className="p-4 text-center">
          <Card.Text className="h4 mb-4"> Precio: ${precio}</Card.Text>
          <Button variant="outline-dark" className="mx-3">
            <Link
              to="/Pizza/P001"
              className="text-dark ms-3 text-decoration-none"
            >
              Ver más
            </Link>{" "}
            <Image src={eyes} />
          </Button>

          <Button variant="dark" className="mx-3" type="submit">
            <Link to="/Cart" className="text-white ms-3 text-decoration-none">
              Añadir
            </Link>{" "}
            <Image src={carroCompra} />
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default CardPizza;
