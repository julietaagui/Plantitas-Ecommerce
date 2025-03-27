export default function Consejos() {
    return (
        <div id="consejos-section" className="container my-5">
            <div className="row align-items-center">
                {/* Sección de imágenes */}
                <div className="col-md-5 d-flex flex-column">
                    <img
                        src="../public/consejos.jpg"
                        className="img-fluid mb-3 rounded-5 shadow"
                        alt="Parte 1"
                        style={{ width: "500px", height: "500px"}}
                    />
                </div>

                {/* Sección de texto */}
                <div className="col">
                    <h2 className="fw-bold mb-4">
                    🌱 Consejos Generales para Cuidar Plantas
                    </h2>
                    <p className="text-muted">
                    1. Conoce las Necesidades de tu Planta
                    Cada planta tiene requerimientos específicos:

                    Plantas de interior suelen necesitar menos luz directa.
                    Plantas de exterior suelen requerir más exposición solar y un espacio amplio para crecer.
                    Consejo: Investiga el nombre de tu planta para entender sus necesidades de luz, agua y suelo.
                    </p>
                    <p className="text-muted">
                    2. Riego Adecuado
                    Evita el exceso de agua: Muchas plantas mueren por riego excesivo. Asegúrate de que la tierra esté seca al tacto antes de volver a regar.
                    Plantas suculentas o cactus necesitan muy poca agua; espera a que la tierra esté completamente seca.
                    Plantas tropicales como las Monsteras o Helechos prefieren tierra húmeda pero no encharcada.
                    Consejo: Usa macetas con drenaje para evitar acumulación de agua.
                    </p>
                    <p className="text-muted">
                    3. Luz Correcta
                    Luz directa: Ideal para cactus, suculentas o plantas como lavanda.
                    Luz indirecta: Perfecta para plantas de interior como pothos, monsteras o lirios de la paz.
                    Sombra parcial: Para plantas como helechos o calatheas que no toleran la luz fuerte.
                    Consejo: Si la planta está en interior, coloca las macetas cerca de ventanas orientadas al este o sur para aprovechar la luz natural.
                    </p>
                    <p className="text-muted">
                    4. Control de Plagas
                    Plagas comunes: Ácaros, cochinillas, pulgones.
                    Limpia las hojas regularmente con un paño húmedo o una mezcla de agua con jabón potásico para prevenir infestaciones.
                    Usa aceite de neem como repelente natural.
                    Consejo: Inspecciona tus plantas regularmente para detectar plagas a tiempo.
                    </p>
                </div>
            </div>
        </div>
    );
}
