import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit,faFilePdf,faCheck,faTimes, faDollarSign, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Table,Button,ButtonGroup } from "reactstrap";

function TablaClientes ({data, toggleView, toggleViewf, handleAprobar, handleOrden, borrar }) {     
return(
  <div className="table-single">             
  <Table className="table-simple">
  <thead>
        <tr>  
          <th className="text-center" width="5%">#</th>
             <th width="30%">Nombres</th>
             <th width="20%">Dirección</th>
             <th width="10%">Teléfono</th>
             <th width="10%">Tipo</th>
             <th width="10%">Hab.</th>
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
                 <td className="largo">{item.nombres}</td>
                 <td>{item.direccion}</td>
                 <td>{item.telefono}</td>
                 <td>{item.coordenadas}</td>                     
                 <td>
                   {item.habilitado ? (
                     <FontAwesomeIcon
                       icon={faCheck}
                       className="text-center text-success"
                     />
                   ) : (
                     <FontAwesomeIcon
                       icon={faTimes}
                       className="text-danger text-danger"
                     />
                   )}
                 </td>
                 <td className="text-center">
                   <ButtonGroup>                                                      
                         <Link to={`/admin/cliente/${item.id}`}>
                           <Button className={"btn-sm btn-info"}>
                             <FontAwesomeIcon icon={faEdit} />
                           </Button>
                         </Link>
                         <Button
                           className="btn-danger btn-sm"
                           onClick={() => toggleViewf(item.id)}>
                           <FontAwesomeIcon icon={faFilePdf} />
                         </Button> 
                         <Button
                           className="btn-danger btn-sm"
                           onClick={() => borrar(item.id)}>
                           <FontAwesomeIcon icon={faTrash} />
                         </Button>                                                   
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