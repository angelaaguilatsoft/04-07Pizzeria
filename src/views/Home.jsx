import CardPizza from '../component/CardPizza.jsx'
import Row from "react-bootstrap/Row";
import { Container } from 'react-bootstrap';
import { useEffect } from "react";
import { useState } from "react";


const Home = () => {  
  // Estados
  const [pizzas, setPizzas] = useState([]);

  // Conectar y consumir la API
  const url = "http://localhost:5000/api/pizzas/";

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container fluid className=" py-3 mx-2">
        <Row xs={1} md={2} className="g-4">
          {pizzas.map((pizza) => (
            <CardPizza key={pizza.id} pizza={pizza} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;