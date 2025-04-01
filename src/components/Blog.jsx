import PropTypes from "prop-types";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function Blog({ dataInfo }) {
  return (
    <Fragment>
      <div id="info-section" className="bg-col-sec py-5">
        <section className="container">
          <h1 className="text-white text-center mb-4">
            ¿Cómo identificar tu Planta ideal?
          </h1>
          <div className="row">
            {dataInfo.map((planta) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={planta.id}>
                <div className="text-white text-center p-3 h-100">
                  <img
                    className="img-fluid rounded-circle mx-auto"
                    src={planta.img}
                    alt={planta.name}
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  />
                  <div className="text-center mt-3">
                    <h3>{planta.name}</h3>
                    <p>
                      <span className="fw-semibold">Tipo:</span> {planta.type}
                    </p>
                    <p>
                      <span className="fw-semibold">Riego:</span> {planta.irrigation}
                    </p>
                    <NavLink to="../pages/index.html">
                      <button type="button" className="btn btn-outline-light w-50">
                        Ver Más
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Fragment>
  );
}

Blog.propTypes = {
  dataInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      care: PropTypes.string.isRequired,
      irrigation: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};
