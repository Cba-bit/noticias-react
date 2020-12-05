import { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';

function App() {
    // definir la categoria y noticias
    const [categoria, setCategoria] = useState('');
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=c731c8b64eb245ae99ce6f3a3269fbc2`;

            const respuesta = await fetch(url);
            const noticias = await respuesta.json();

            setNoticias(noticias.articles);
            setLoading(false);
        };

        consultarAPI();
    }, [categoria]);

    return (
        <Fragment>
            <Header titulo='Buscador de Noticias' />

            {!loading ? (
                <div className='container-white'>
                    <Formulario setCategoria={setCategoria} />
                    <ListadoNoticias noticias={noticias} />
                </div>
            ) : null}
        </Fragment>
    );
}

export default App;
