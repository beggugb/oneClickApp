import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit,faFilePdf,faCheck,faTimes, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Table,Button,ButtonGroup } from "reactstrap";

function TablaClientes ({data, toggleView, toggleViewf, handleAprobar, handleOrden }) {     
return(
  <div className="table-single">             
  <Table className="table-simple">
  <thead>
        <tr>  
          <th className="text-center" width="5%">#</th>
             <th width="30%">Empresa</th>
             <th width="30%">Cargo</th>
             <th width="10%">Tipo</th>
             <th width="10%">F.Vencimiento</th>             
             <th width="15%" className="text-center">
               Acciones
             </th>                
      </tr>
  </thead>
  {data && (
           <tbody>
             {data.map((item) => (
               <tr key={item.id}>
                 <td className="text-center">{item.id}</td>
                 <td className="largo">{item.Cliente.nombres || ''}</td>
                 <td>{item.cargo}</td>
                 <td>{item.tipo}</td>
                 <td>{item.fvencimiento}</td>                                     
                 <td className="text-center">
                   <ButtonGroup>                                                      
                         <Link to={`/admin/reclutamiento/${item.id}`}>
                           <Button className={"btn-sm btn-info"}>
                             <FontAwesomeIcon icon={faEdit} />
                           </Button>
                         </Link>
                                                                 
                   </ButtonGroup>
                 </td>
               </tr>  
               ))}
           </tbody>
   )}
</Table>    
</div>
)
}

export default TablaClientes