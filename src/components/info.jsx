export default function Info() {
    return (
        <div className="container mb-5 space">
            <div className="row d-flex flex-wrap justify-content-center text-center">
                <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center mb-4">
                    <div className="card border-2 card-info icons align-items-center">
                        <i className="bi bi-truck mb-3 icon-style"></i>
                        <h5 className="card-title tx-titulo">Envios a Todo el Pais</h5>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center mb-4">
                    <div className="card border-2 card-info icons align-items-center">
                        <i className="bi bi-box-seam mb-3 icon-style"></i>
                        <h5 className="card-title tx-titulo">Calidad en Envio</h5>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center mb-4">
                    <div className="card border-2 card-info icons align-items-center">
                        <i className="bi bi-person-workspace mb-3 icon-style"></i>
                        <h5 className="card-title tx-titulo">La mejor atencion</h5>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center mb-4">
                    <div className="card border-2 card-info icons align-items-center">
                        <i className="bi bi-shield-fill-check mb-3 icon-style"></i>
                        <h5 className="card-title tx-titulo">Devolucion</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
