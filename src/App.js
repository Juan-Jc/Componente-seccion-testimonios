import './App.css';
import Testimonio from './componentes/Testimonio.js';
import testigos from './componentes/testigos';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
        nombre={testigos.shawn.nombre}
        pais={testigos.shawn.pais}
        imagen={testigos.shawn.imagen}
        cargo={testigos.shawn.cargo}
        empresa={testigos.shawn.empresa}
        testimonio={testigos.shawn.testimonio} />
        <Testimonio
       nombre={testigos.emma.nombre}
       pais={testigos.shawn.pais}
       imagen={testigos.emma.imagen}
       cargo={testigos.emma.cargo}
       empresa={testigos.emma.empresa}
       testimonio={testigos.emma.testimonio} />
        <Testimonio
        nombre={testigos.sarah.nombre}
        pais={testigos.sarah.pais}
        imagen={testigos.sarah.imagen}
        cargo={testigos.sarah.cargo}
        empresa={testigos.sarah.empresa}
        testimonio={testigos.sarah.testimonio} />
      </div>
    </div>
  );
}

export default App;
