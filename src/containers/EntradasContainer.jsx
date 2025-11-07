
import React, { useEffect, useRef, useState } from 'react'
import EntradasToolBar from '../components/EntradasToolBar'
import EntradasForm from '../components/EntradasForm'
import EntradasView from '../components/EntradasView'
import { createEntrada, getEntrada } from '../services/EntradasService'
import { Toast } from 'primereact/toast';

function EntradasContainer() {
    const toast = useRef(null);

    const [entradaData, setentradaData] = useState([]);

    const onCreateEntrada = (entrada) => {
        createEntrada(entrada);
        toast.current.show({
            severity: "success",
            summary: "Entrada Registrada",
            detail: "Nueva entrada registrada"
        });
        const data = getEntrada();
        setentradaData(data);
    }

    return (
        <>
            
            <Toast ref={toast} />

            <EntradasToolBar />

            <div className='row'>
                <div className='col'>
                    <EntradasForm onCreateEntrada={onCreateEntrada} />
                </div>
                <div className='col'>
                    <EntradasView entradaData={entradaData}/>
                </div>
            </div>
        </>
    )
}

export default EntradasContainer
