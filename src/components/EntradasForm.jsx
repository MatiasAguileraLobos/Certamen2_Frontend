import React, { useState } from 'react'
import { Panel } from 'primereact/panel';
import { FloatLabel } from 'primereact/floatlabel';
import { Dropdown } from 'primereact/dropdown';
import { SelectButton } from 'primereact/selectbutton';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { ListBox } from 'primereact/listbox';
import { Button } from 'primereact/button';




function EntradasForm({onCreateEntrada=()=>{}}) {

    const [dia, setDia] = useState(null);
    const [tipo, setTipo] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    const [ciudad, setCiudad] = useState("");
    const [pelicula, setPelicula] = useState(null);

    const handleClick = () => {
        const entradaObj = { dia,tipo,cantidad,ciudad,pelicula };
        onCreateEntrada(entradaObj);
    }

    const footerTemplate = () => {
        return <div className='p-2'>
            <Button onClick={handleClick} rounded severity='info' label='Registrar'></Button>
        </div>
    }

    const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    const tipos = ['Efectivo', 'Tarjeta'];
    const peliculas = ["Wifi Ralph", "Dragon Ball Super Broly", "Cascanueces", "El Grinch"];



    return (
        <div className='mt-5'>
            <Panel header="Compra de Entradas" footerTemplate={footerTemplate} >

                <div className='mb-3'>
                    <FloatLabel>
                        <Dropdown value={dia} onChange={(e) => setDia(e.value)} options={dias} />
                        <label htmlFor='dia'>Dia</label>
                    </FloatLabel>
                </div>

                <div className='mb-3'>
                    <label className="mb-3">Tipo de Pago</label>
                    <SelectButton value={tipo} onChange={(e) => setTipo(e.value)} options={tipos} />
                </div>

                <div className='mb-3'>
                    <label className="mb-3">Cantidad de Entradas</label>
                    <InputNumber  min={1} value={cantidad} onValueChange={(e) => setCantidad(e.value)} />
                </div>

                <div className='mb-3'>
                    <label className="mb-3">Ciudad</label>
                    <InputText  id="ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />

                </div>

                <div className='mb-3'>
                    <label className="mb-3">Pelicula</label>
                    <ListBox value={pelicula} onChange={(e) => setPelicula(e.value)} options={peliculas} />
                </div>

            </Panel>
        </div>
    )
}

export default EntradasForm
