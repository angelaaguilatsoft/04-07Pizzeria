import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";


const Register = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const password2 = form.password.value;
    const passwordConfirm2 = form.passwordConfirm.value;
    event.preventDefault();

    if (form.checkValidity() === false) {
      alert("Error - Todos los campos son obligatorios");
      event.stopPropagation();
      setValidated(true);
      return;
    } if (password2.length < 6) {
      alert("Error - Contraseña debe tener al menos 6 caracteres");
      event.stopPropagation();
      setValidated(true);
      return;
    } else if (password2 !== passwordConfirm2) {
      alert("Error - Contraseñas deben ser iguales");
      event.stopPropagation();
      setValidated(true);
      return;
    } 
    alert(`Datos enviados`)
    setValidated(false);
    form.email.value = '';
    form.password.value= '';
    form.passwordConfirm.value='';
  };

  return (
    <div className="container-fluid">
      <div className="row vw-100 justify-content-center align-items-center">
        <div className="col-auto bg-secondary p-5">
          <Form
            className="bg-light p-5"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Label column="lg">Formulario de Registro</Form.Label>
            <Form.Group
              className="my-3"
              as={Col}
              md="12"
              controlId="formBasicEmail"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter your email"
                defaultValue=""
                name="email"
              />
            </Form.Group>

            <Form.Group
              className="my-3"
              as={Col}
              md="12"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter your password"
                defaultValue=""
                name="password"
              />
            </Form.Group>

            <Form.Group
              className="my-3"
                as={Col}
              md="12"
              controlId="formBasicPassword"
            >
              <Form.Label>Confirmar Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Confirm your password"
                defaultValue=""
                name="passwordConfirm"
              />
            </Form.Group>

            <Button type="submit" className="my-3">
              Enviar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;