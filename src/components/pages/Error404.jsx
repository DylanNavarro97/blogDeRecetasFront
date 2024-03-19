import error from "../../assets/error404.png"
import { Button } from "react-bootstrap";

const Error404 = () => {
    return (
        <section className="container w-100 d-flex flex-column align-items-center text-center mainSection">
            <img src={error} alt="imagen de error 404" className="w-50 mt-4" />
            <h3>Ooops... Error 404</h3>
            <h4 className="my-4">Lo sentimos, no se pudo encontrar la pagina</h4>
            <div className="mb-4">
                <Button variant="primary">Volver al inicio</Button>
            </div>
        </section>
    );
};

export default Error404;