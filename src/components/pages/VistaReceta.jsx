import { useEffect, useState } from "react";
import { leerRecetaPorId } from "../../helpers/queries";
import { useParams } from "react-router";
import { Button, Form, FormLabel } from "react-bootstrap";

const VistaReceta = () => {
  const [receta, setReceta] = useState([]);
  const [checked, setChecked] = useState({});
  const { id } = useParams();

  const cargarReceta = async () => {
    try {
      const respuesta = await leerRecetaPorId(id);
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setReceta(datos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cargarChecks = (ingrediente) => {
    setChecked({
      ...checked,
      [ingrediente]: !checked[ingrediente],
    });
  };

  useEffect(() => {
    cargarReceta();
  }, []);

  return (
    <section className="container my-4 mainSection">
      <div className="row  border border-success rounded">
        <div className="col-lg-6 text-center my-3">
          <img
            src={receta?.imagen}
            alt={`foto de ${receta?.nombre}`}
            className="vistaCard img-fluid"
          />
        </div>
        <div className="col-lg-6">
          <h4 className="my-3">{receta?.nombre}</h4>
          <hr />
          <p>{receta?.descripcionBreve}</p>
          <hr />
          <h5 className="my-2">Categoria: {receta?.categoria}</h5>

          <h5 className="mt-4">Preparacion:</h5>
          <p>{receta?.recetaCompleta}</p>
        </div>
        <div className="container-fluid col-lg-12 mb-3">
          <h5>Ingredientes:</h5>
          <div className="bg-light p-2 d-flex row">
            {receta.listaIngredientes?.map((ingrediente, i) => (
              <Form
                key={i}
                className="d-flex flex-nowrap mb-2 col-md-6 col-lg-3"
              >
                <input
                  type="checkbox"
                  id={`${ingrediente}`}
                  className="me-2"
                  onClick={() => cargarChecks(ingrediente)}
                />
                <FormLabel
                  htmlFor={ingrediente}
                  className={`mb-0 d-flex align-items-center ${
                    checked[ingrediente] ? "text-decoration-line-through" : ""
                  }`}
                >
                  {ingrediente}
                </FormLabel>
              </Form>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VistaReceta;
