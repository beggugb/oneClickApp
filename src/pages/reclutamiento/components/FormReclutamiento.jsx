import React from 'react';
import Switch from "react-switch";
import { stylesErp } from '../../../helpers'
import Select from 'react-select'
import SelectClientes from "../../clientes/components/SelectClientes";

import {
    Row,
    Col,
    Label,
    Form,
    FormGroup,
    Input,
    Button
  } from "reactstrap";

  const defaultVal = (options, valor) =>{
    return options.filter(item =>
        item.value === valor
      )
  
  }
  const tipos =  [
                  {"value":"Temporal","label":"Temporal"},
                  {"value":"Tiempo Completo","label":"Tiempo Completo"},
                  {"value":"Medio Tiempo","label":"Medio Tiempo"}
                  ];


function FormCliente ({ item, handleSubmit, handleChange, handleChanges, handleChan }) {     
return(
  <div className="herramientas"> 
        <h6>Formulario de Registro</h6>
        <Form onSubmit={ handleSubmit}>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Cargo</label>
                          <Input
                            type="text"
                            name="cargo"
                            id="cargo"
                            placeholder="cargo"
                            value={item.cargo}
                            onChange={handleChanges("cargo")}        
                            required                    
                          />
                        </FormGroup>
                      </Col> 
                      <Col className="px-md-1" md="6">
                      <FormGroup>
                          <label>Cliente</label>
                          <SelectClientes/>
                        </FormGroup>
                      </Col>                                                            
                    </Row>
               
                    <Row>
                    <Col className="pr-md-1" md="6">
                      <label>Requisitos</label>
                      <Input
                          type="text"
                          name="requisitos"
                          id="requisitos"
                          placeholder="requisitos"
                          value={item.requisitos}
                          onChange={handleChanges("requisitos")}
                          required
                          />  
                      </Col>
                      <Col className="pr-md-1" md="6">
                      <label>Carcateristicas</label>
                          <Input
                          type="text"
                          name="caracteristicas"
                          id="caracteristicas"
                          placeholder="caracteristicas"
                          value={item.caracteristicas}
                          onChange={handleChanges("caracteristicas")}
                          />
                      </Col>                                
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                        <label>Tipo</label>
                        <Select                                                               
                          name="tipo"                        
                          options={tipos}                                
                          value={defaultVal(tipos,item.tipo)}    
                          styles={stylesErp}                                                                                                              
                          onChange={handleChange('tipo')}
                          />
                        </FormGroup>
                      </Col> 
                      <Col className="px-md-1" md="6">
                        <FormGroup>
                        <label>Fecha Vencimiento</label>
                          <Input
                          type="date"
                          name="fvencimiento"
                          id="fvencimiento"
                          placeholder="fvencimiento"
                          value={item.fvencimiento}
                          onChange={handleChanges("fvencimiento")}
                          />
                        </FormGroup>
                      </Col>                      
                                 
                    </Row>

                                


                   
        

                    <Row>
                      <Col>
                      <Button 
                        className="btn-sm mb-2" color="success" type="submit">
                          Registrar
                      </Button>
                      </Col>
                    </Row>
                  </Form>
    </div>
    )
}

export default FormCliente
