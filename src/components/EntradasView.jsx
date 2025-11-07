import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';

function EntradasView({ entradaData }) {
  return (
    <div>
      <div className='mt-5'>
        <Panel header="Entradas Compradas">
          <DataTable value={entradaData} paginator rows={5}>
            <Column header="Dia" field="dia" />
            <Column header="Pelicula" field="pelicula" sortable />
            <Column header="Cantidad de Entradas" field="cantidad" />
            <Column header="Valor a pagar" body={(rowData) => rowData.cantidad * 5000}  />
          </DataTable>
        </Panel>
      </div>
    </div>
  );
}

export default EntradasView;