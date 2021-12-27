import React from 'react';
import { faCheck,faTimes} from "@fortawesome/free-solid-svg-icons";

import ReactToPrint from "react-to-print";
import { apiErp } from "../../../helpers";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, Row, Card, Col, Button, CardBody, CardFooter } from "reactstrap";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";


function ComponentToPrint ({ item, usuario, citem, pdata }) {     
    const fechaHoy = new Date();    
    return(
    <>
    <Row>
        <Col md="4">
            <p className="text-left">
                Fecha Impresión :{" "}
                <Moment format="DD/MM/YYYY">{fechaHoy}</Moment>
            </p>
            </Col>
            <Col md="4">
            <p className="text-center">
                Hora : <Moment format="HH:mm:ss">{fechaHoy}</Moment>
            </p>
            </Col>
            <Col md="4">
            <p className="text-right">Usuario : { usuario.nombres } </p>
        </Col>
    </Row>

    <Row>            
            <Col md="12">
              <Card className="card-cliente">
                <CardBody>                                                    
                  <div className="card-description text-white text-center">                    
                    {item.Cliente.nombres || ""}
                  </div>                  
                </CardBody>
                <CardFooter>
                <Row>
                      <Col className="pr-md-1 txtcl" md="4">                        
                          Cargo:
                      </Col>
                      <Col className="px-md-1 txtcl" md="8">                        
                          {item.cargo}
                      </Col>                      
                    </Row>
                    <Row>
                      <Col className="pr-md-1 txtcl" md="4">                        
                          Caracteristicas:
                      </Col>
                      <Col className="px-md-1 txtcl" md="8">                        
                          {item.caracteristicas}
                      </Col>                      
                    </Row>
                    <Row>
                      <Col className="pr-md-1 txtcl" md="4">                        
                          Dirección:
                      </Col>
                      <Col className="px-md-1 txtcl" md="8">                        
                          {item.direccion}
                      </Col>                      
                    </Row>               
                    <Row>
                      <Col className="pr-md-1 txtcl" md="4">                        
                          Teléfono:
                      </Col>
                      <Col className="px-md-1 txtcl" md="8">                        
                          {item.telefono}
                      </Col>                      
                    </Row>
                    <Row>
                      <Col className="pr-md-1 txtcl" md="4">                        
                          Celular:
                      </Col>
                      <Col className="px-md-1 txtcl" md="8">                        
                          {item.celular}
                      </Col>                      
                    </Row>             
                    <Row>
                      <Col className="pr-md-1 txtcl" md="4">                        
                          Email:
                      </Col>
                      <Col className="px-md-1 txtcl" md="8">                        
                          {item.email}
                      </Col>                      
                    </Row> 

                    <Row>
                      <Col className="pr-md-1 txtcl" md="4">                        
                          Reg.:
                      </Col>
                      <Col className="px-md-1 txtcl" md="8">                        
                      {item.registrado ? (
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
                      </Col>                      
                    </Row>
                    <Row>
                      <Col className="pr-md-1 txtcl" md="4">                        
                          Habilitado:
                      </Col>
                      <Col className="px-md-1 txtcl" md="8">                        
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
                      </Col>                      
                    </Row>    
                      
                </CardFooter> 
              </Card>           
            </Col>          
</Row> 


    </>
     )
}

function ClienteView ({ item, usuario }) {     
return(
    <div className="creporte">
        <ReactToPrint
            trigger={() => ( <Button className="fas fa-print btn-sm btn-info">Imprimir</Button>)}
            content={() => this.componentRef}          
        />
        <ComponentToPrint
            ref={(el) => (this.componentRef = el)}
            item={item}            
            usuario={usuario}            
        />
    </div>
     )
}

export default ClienteView