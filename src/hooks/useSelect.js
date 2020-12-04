import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {
    // State del custom hook
    const [state, setState] = useState('');

    const selectNoticias = () => (
        <select className='browser-default'>
            <option value=''>Seleccione</option>
        </select>
    );

    return [state, selectNoticias];
};

export default useSelect;
