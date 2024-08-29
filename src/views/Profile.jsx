import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Profile = () => {

  return (
    <div className="container-fluid profile">
      <div className="row vw-100 justify-content-center align-items-center">
        <div className="col-3 bg-secondary p-5">
          <Form className="bg-light p-5">
            <Form.Label column="lg">Datos del usuario</Form.Label>
            <Form.Group className="my-3" as={Col} md="12">
              <Form.Label>Usuario:</Form.Label>
                <Form.Control
                  placeholder="usuario.conectado@gmail.com"
                  disabled
                />
            </Form.Group>

            <Button type="submit" className="my-3" variant="dark">
              <Link to="/" className="text-white ms-3 text-decoration-none">
                Cerrar Sesión
              </Link>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Profile;