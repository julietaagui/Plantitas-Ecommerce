
export default function Banner(){

    return(
        <div>
            <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand fs-3 poppins-medium tx-primary">Plantitas</a>
                <ul className="nav justify-content-end pr-3">
                    <li className="nav-item">
                        <a className="nav-link hover tx-primary" href="#info-section">Informacion</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link hover tx-primary" href="#consejos-section">Consejos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link hover tx-primary" href="#plantas-section">Plantas</a>
                    </li>
                </ul>
            </div>
            <img src="/banner.png" className="img-fluid banner-img" alt="Banner" />
            </nav>
        </div>
    );
};