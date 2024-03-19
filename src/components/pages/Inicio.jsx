import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { leerRecetasAPI } from "../../helpers/queries";
import RecetaCard from "../recetas/RecetaCard";

function Inicio() {
  const [recetas, setRecetas] = useState([]);

  const cargarProductos = async () => {
    const respuesta = await leerRecetasAPI();
    setRecetas(respuesta);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <section className="mainSection">
      <img
        className="banner img-fluid"
        src="https://png.pngtree.com/background/20230522/original/pngtree-food-in-a-cookbook-on-table-along-with-plates-and-other-picture-image_2693277.jpg"
        alt="plato con postre y un libro de receta"
      />
      <Container fluid className="my-4">
        <h2 className="mb-3">Recetas disponibles</h2>
        <div className="row">
          {recetas?.map((receta) => (
            <div className="col-md-4 col-lg-3 mb-3" key={receta.id}>
              <RecetaCard receta={receta}/>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Inicio;
