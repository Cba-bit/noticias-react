import React from 'react';
import useSelect from '../hooks/useSelect';
import styles from './Formulario.module.css';

const Formulario = ({ setCategoria }) => {
    // crear las opciones
    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnología' },
    ];

    // Utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    // submit al form pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault();

        setCategoria(categoria);
    };

    return (
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form onSubmit={buscarNoticias}>
                    <h2 className={styles.heading}>
                        Encuentra Noticias Por Categoría
                    </h2>

                    <SelectNoticias />

                    <div className='input-field col s12'>
                        <input
                            type='submit'
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value='buscar'
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Formulario;
