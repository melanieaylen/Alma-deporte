import React from 'react';

const Inicio = () => {
  return (
    <main>
      <h1>BIENVENIDOS A ALMA DEPORTE</h1>
      <br />
      <div className="inicio-contenido">
        <p className="inicio-texto">
          Tu tienda de indumentaria deportiva femenina en Orán, Salta
        </p>
        <div className="inicio-cards">
          <div className="info-card">
            <h2>💪 Calidad</h2>
            <p>Las mejores marcas del mercado</p>
          </div>
          <div className="info-card">
            <h2>💚 Variedad</h2>
            <p>Amplio catálogo de productos</p>
          </div>
          <div className="info-card">
            <h2>📍 Ubicación</h2>
            <p>Lavalle 220, Orán</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Inicio;