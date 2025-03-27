import PropTypes from 'prop-types';
import { Fragment } from 'react';

export default function Plantas({ data }) {
    if (!data || data.length === 0) {
        return <p>No hay plantas disponibles</p>; 
    }

    return (
        <Fragment>
            <div id="plantas-section" className="container space">
                <div className="row row-cols-1 row-cols-md-5 g-4 ">
                    {data.map((plant) => (
                        <div className="col" key={plant.id}>
                            <div className="card w-80">
                                <img
                                    src={plant.img}
                                    className="card-img-top card-img-custom"
                                    alt={plant.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{plant.name}</h5>
                                    <p className="card-text poppins-medium">{plant.description}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-body-secondary poppins-medium tx-primary">${plant.price}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}

Plantas.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
        })
    ).isRequired,
};
