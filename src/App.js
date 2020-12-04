import { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';

function App() {
    // definir la categoria y noticias
    const [categoria, setCategoria] = useState('');

    return (
        <Fragment>
            <Header titulo='Buscador de Noticias' />

            <div className='container-white'>
                <Formulario setCategoria={setCategoria} />
            </div>
        </Fragment>
    );
}

export default App;
