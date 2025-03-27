
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default function Blog({ dataInfo }) {
    

  return (
    <Fragment>
      <div id='info-section' className="bg-col-sec h-5 content-section space">
        <section className='container'> 
                <h1 className="text-white text-center ">¿Cómo identificar tu Planta ideal?</h1>
                <section>
                    <div className="row">
                    {dataInfo.map((planta) => (
                        <div className="col g-5" key={planta.id}>
                            <div className=''>
                                <img className='img-circle' src={planta.img} alt={planta.name} />
                                <div className='text-white' style={ {marginLeft: "8rem", marginTop: "1rem"}}>
                                    <h3>{planta.name}</h3>
                                    <p><span className='fw-semibold'>Tipo:</span> {planta.type}</p>
                                    <p><span className='fw-semibold'>Cuidado:</span> {planta.care}</p>
                                    <p><span className='fw-semibold'>Riego:</span> {planta.irrigation}</p>
                                    <NavLink to="../pages/index.html">
                                        <button  type="button" className="btn btn-outline-light">Ver Mas</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </section>
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
