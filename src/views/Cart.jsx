// Carrito de compras
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import carroCompra from "../assets/imgs/carroCompra.png";
import ListGroup from "react-bootstrap/ListGroup";
import { useEffect } from "react";

export const Cart = () => {

  const styleCard = {
    width: "30%",
    height: "auto",
    margin: "10px 10px 8px 20px",
  };

  //  genera la lista de pizzas en el carrito
  const [listaPizzas, setListaPizzas] = useState([]);
  // es Total de la lista de pizzas a pagar
  const [total, setTotal] = useState(0);
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

  // Agrega, suma o resta las pizzas a la lista
  const agregaPizza = (pizza, operacion) => {
    if (operacion === "agregar") {
      const found = listaPizzas.findIndex((Lista) => Lista.id === pizza.id);

      if (found < 0) {
        // primera carga de cada pizza seleccionada a la lista y total
        setTotal(total + pizza.price);
        setListaPizzas([
          ...listaPizzas,
          {
            id: pizza.id,
            name: pizza.name,
            price: pizza.price,
            cantidad: 1,
          },
        ]);
      } else {
        alert("La pizza ya se encuentra en el carrito de compras");
      }
    } else if (operacion === "sumar") {
      // busca en la lista, el ID que se está agregando
      const pizzas = listaPizzas.map((pizzaEnLista) =>
        pizzaEnLista.id === pizza.id
          ? // si lo encuentra, aumenta la cantidad de la pizza en 1
            { ...pizzaEnLista, cantidad: pizzaEnLista.cantidad + 1 }
          : pizzaEnLista
      );

      // Al Total le suma la pizza seleccionada
      setTotal(total + pizza.price);
      return setListaPizzas([...pizzas]);
    } else if (operacion === "restar") {
      // Copia de la lista para trabajar en ella y luego actualizar
      const nuevasPizzas = [...listaPizzas];

      // Busca indice de la pizza para restar la cantidad
      const index = nuevasPizzas.findIndex((el) => el.id === pizza.id);
      nuevasPizzas[index].cantidad = pizza.cantidad - 1;
      console.log("listado original");
      console.log(nuevasPizzas);

      // Actualizar cantidad en el carrito de compra
      setListaPizzas(nuevasPizzas);
      console.log("listado actualizado");
      console.log(listaPizzas);

      // Actualizar Total a Pagar según Pizza eliminada
      setTotal(total - pizza.price);

      // Eliminar Pizza con cantidad = 0
      console.log("cantidad de pizzas");
      console.log(nuevasPizzas[index].cantidad);
      if (nuevasPizzas[index].cantidad === 0) {
        const listaActualizada = listaPizzas.filter(
          (pizzaNull) => pizzaNull.id !== pizza.id
        );
        console.log("lista sin cantidades = 0");
        console.log(listaActualizada);
        setListaPizzas(listaActualizada);
      }
    }
  };
  

  return (
    <>
      <Container fluid>
        <Row>
          {/* LISTADO DE PIZZAS A PAGAR */}
          <Col xs={12} md={2} className="d-flex flex-column">
            <Form>
              <Form.Group className="d-flex align-items-center">
                <Button variant="outline-light" className="text-primary">
                  Total: ${Intl.NumberFormat("de-DE").format(total)}
                </Button>
                <Button
                  variant="dark"
                  type="submit"
                  style={{ width: "30%", padding: "2px" }}
                >
                  Pagar
                </Button>
              </Form.Group>

              <Form.Label>
                <h5>Carrito de Compras</h5>
              </Form.Label>

              <Form.Text className="mb-3">
                <ListGroup as="ol" numbered>
                  {listaPizzas.length ? (
                    <>
                      {listaPizzas.map((pizza) => (
                        <ListGroup.Item
                          key={pizza.id}
                          className="d-flex justify-content-between align-items-start"
                        >
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Pizza {pizza.name}</div>
                            Precio: $
                            {Intl.NumberFormat("de-DE").format(pizza.price)}
                          </div>
                          <Button 
                            variant="dark"
                            style={{ width: "10%" }}
                            onClick={() => agregaPizza(pizza, "restar")}
                          >
                            -
                          </Button>
                          <Form.Text name="cantidad" className="m-2">
                            {pizza.cantidad}
                          </Form.Text>
                          <Button
                            variant="dark"
                            style={{ width: "10%" }}
                            onClick={() => agregaPizza(pizza, "sumar")}
                          >
                            +
                          </Button>
                        </ListGroup.Item>
                      ))}
                    </>
                  ) : (
                    <Form.Text> Carro vacío </Form.Text>
                  )}
                </ListGroup>
              </Form.Text>
            </Form>
          </Col>

          {/* Listado de pizzas para seleccionar  */}
          <Col
            xs={12}
            md={10}
            className="d-flex justify-content-start flex-wrap my-5 p-3"
          >
            {/* Renderizar una pizza por tarjeta */}
            {pizzas.map((pizza) => (
              <Card style={styleCard} key={pizza.id}>
                <Card.Header style={{ height: "auto" }}>
                  <Card.Img
                    alt={pizza.name}
                    variant="top"
                    src={pizza.img}
                    style={{ width: "100%" }}
                  />
                  <Card.Title className="mt-3">Pizza {pizza.name}</Card.Title>
                </Card.Header>
                <form>
                  <Card.Footer className="p-4 text-center">
                    <Card.Text className="h4 mb-4">
                      Precio: ${Intl.NumberFormat("de-DE").format(pizza.price)}
                    </Card.Text>
                    <Card.Text className="h4 mb-4">
                      Ingredientes:
                    </Card.Text>
                    <Card.Text className="h5 mb-4">
                      {[pizza.ingredients].join(', ')}
                    </Card.Text>
                    <Button
                      variant="dark"
                      className="mx-3"
                      onClick={() => agregaPizza(pizza, "agregar")}
                    >
                      <Card.Img
                        variant="top"
                        src={carroCompra}
                        style={{ width: "20%" }}
                      />
                      Añadir
                    </Button>
                  </Card.Footer>
                </form>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
