import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function RecetaCard({ receta }) {
  return (
    <Card className="recetaCardContainer d-flex flex-column h-100">
      <Card.Img
        variant="top"
        src={receta.imagen}
        className="recetaCardImg"
        alt={`imagen de ${receta.nombre}`}
      />
      <Card.Body className="h-100">
        <Card.Title>{receta.nombre}</Card.Title>
        <Card.Text>
          {receta.descripcionBreve}
        </Card.Text>
      </Card.Body>
      <div className="text-end pe-2 pb-2">
          <Link className="btn btn-primary" to={`/receta/${receta._id}`}>Ver receta</Link>
        </div>
    </Card>
  );
}

export default RecetaCard;
