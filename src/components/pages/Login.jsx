import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { login } from "../../helpers/queries";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const usuario = JSON.parse(sessionStorage.getItem("usuarioRecetasRolling")) || []
  const navegar = useNavigate()

  const onSubmit = (usuario) => {
    if(login(usuario)) {
      Swal.fire({
        title: "Usuario Logueado",
        text: `Bienvenido ${usuario.mail}`,
        icon: "success",
      });
      navegar("/logueado")
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: `El nombre de usuario o password es incorrecto`,
        icon: "error",
      });
    }
  };

  useEffect(() => {
    if (usuario !== 'admin@recetasrolling.com'){
    } else {
      navegar("/")
    }
  },[])
  return (
    <section className="container mainSection">
      <div className="card my-5 border border-success">
        <h3 className="card-header">Login</h3>
        <Form onSubmit={handleSubmit(onSubmit)} className="container mb-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese un mail"
              {...register("mail", {
                required: "El email es obligatorio",
                minLength: {
                  value: 4,
                  message: "El email debe contener al menos 4 caracteres",
                },
                maxLength: {
                  value: 150,
                  message: "El email debe contener como máximo 150 caracteres",
                },
              })}
            />

            <Form.Text className="text-muted">
              Nunca compartiremos su correo electrónico con nadie más.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              minLength={3}
              maxLength={30}
              required
              {...register("password",{
                required: "El password es obligatorio",
                minLength: {
                  value: 3,
                  message: "El password debe contener al menos 3 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "El email debe contener como máximo 30 caracteres",
                },
              })}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Login;
