import './App.css';

function App() {
  return (
    <div className="container">
      <div className="title">
        <h1 className="h1">Cuadro comparativo<br/>Aplicaciones nativas contra Hibridas</h1>
        
      </div>
        <h2>¿Qué son?</h2>
        <p>
        Son aplicaciones móviles diseñadas con un lenguaje de programación web y junto con un framework que permite adaptar la vista web a cualquier vista de un dispositivo móvil. De esta manera, diseñamos y creamos la aplicación una sola vez y que funcione en diversos dispositivos
        </p>

        <h2>¿Cuándo usarlas?</h2>
        <p>Dependiendo del tipo de requerimientos del proyecto usaremos un tipo de aplicación, si contamos con mayor presupuesto y queremos la mejor experiencia de usuario posible, con pleno acceso e integración con las funciones de hardware del dispositivo y APIs nativas, tiempos de respuesta mucho más cortos y plena utilidad sin conexión a internet, escogeremos el desarrollo de una aplicación Nativa, en cambio si no contamos con un presupuesto tan elevado, podemos optar por desarrollar una aplicación híbrida, este tipo de aplicaciones también tienen sus ventajas como reducir el tiempo de desarrollo, solo se hace mantenimiento a una fuente de código, una menor complejidad para mantener el código, entre otras.</p>

        <h2>Comparación entre híbridas y nativas</h2>
        <div className="cuadroComparativo">
          <span className="span">Características</span>
          <span className="span">Aplicaciones Híbridas</span>
          <span className="span">Aplicaciones Nativas</span>

          <span className="span">Mayor nivel de seguridad</span>
          <span className="span"></span>
          <span className="span"> <span className="yes"/></span>

          <span className="span">Mayor rendimiento</span>
          <span className="span"></span>
          <span className="span"> <span className="yes"/></span>

          <span className="span">Multiplataforma</span>
          <span className="span"><span className="yes"/></span>
          <span className="span"> </span>

          <span className="span">Mejor control de los procesos</span>
          <span className="span"></span>
          <span className="span"> <span className="yes"/> </span>

          <span className="span">Mejor experiencia de usuario</span>
          <span className="span"></span>
          <span className="span"> <span className="yes"/> </span>

          <span className="span">Más Económico</span>
          <span className="span"><span className="yes"/> </span>
          <span className="span"> </span>

          <span className="span">Menor tiempo de desarrollo</span>
          <span className="span"><span className="yes"/> </span>
          <span className="span"> </span>

          <span className="span">Alto nivel de personalización</span>
          <span className="span"> </span>
          <span className="span"> <span className="yes"/></span>

          <span className="span">Mayor complejidad para mantener</span>
          <span className="span"> </span>
          <span className="span"> <span className="yes"/></span>

          <span className="span">Escabilidad</span>
          <span className="span"> <span className="yes"/> </span>
          <span className="span"> </span>
        </div>

        <h2>
          Conclusión
        </h2>

        <p>
        Sin duda alguna ambas tecnologías son realmente útiles y cada una de ellas tienen sus puntos fuertes y débiles, pero sería incorrecto dar por sentado que las aplicaciones nativas son mejores que las aplicaciones híbridas, porque para llegar a esa conclusión se tiene que tomar en cuenta los requerimientos del proyecto que se va a realizar, por ejemplo, si se desea una aplicación que sea multiplataforma y no sea muy  costosa, sin duda alguna la mejor opción es desarrollar una aplicación híbrida, pero si se necesita de una aplicación que sea rapida y muy confiable como por ejemplo un antivirus o una aplicación para un servidor entonces lo más idóneo y correcto es desarrollar una aplicación nativa dado que las aplicaciones estas son mucho más robustas a nivel de seguridad y en nivel de eficiencia. 
Ambas tecnologías son realmente buenas, por ende al momento de elegir una de ellas hay que tener en cuenta en base a sus características de cada una para saber cual de estas dos tecnologías utilizar para desarrollar el proyecto.

        </p>

        <span className="creador">Created By Pedro Avila Bermudez</span>
    </div>
  );
}

export default App;
