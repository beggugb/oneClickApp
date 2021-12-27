import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { crudActions } from "../../actions";

import {Modal,Button,ModalBody,Row,Col} from "reactstrap";
import { Link } from "react-router-dom";

import TablaReclutamiento from './components/TablaReclutamiento'

import Pagination from "../../components/Navbars/Pagination";
import SearchReclutamientos from "./components/SearchReclutamiento" 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

class Reclutamientos extends React.Component {

  state = {
    nroPagina: 12,
    modalDelete: false,
    deleteId: 0,
    item: {
      nombres: "",
      pagina: 1,
      num: 12,
      prop:"nombres",
      orden:"ASC"
    },
  };
 
  componentDidMount() {    
    this.makeHttpRequestWithPage(1, 12, "nombres","ASC");
  }
  
  makeHttpRequestWithPage = (pageNumber, num, prop, orden) => {    
    this.props.getData("FAVORITO_DATA", "favoritos", pageNumber, num, prop, orden);
  };

 
  toggleView = (item) => {
    let est = this.props.favoritos.modalView === true ? false : true;
    this.props.getItemView("FAVORITO_ITEM_VIEW", "favoritos", item, est);    
  };

  toggleModalView = () => {
    let est = this.props.favoritos.modalView === true ? false : true;
    this.props.getItemViews("FAVORITO_ITEM_VIEWS", est);
  };

  toggleViewf = (item) => {
    let est = this.props.favoritos.modalView === true ? false : true;
    this.props.getItemView("FAVORITO_ITEM_VIEW", "favoritos", item, est);
  };

 
  handleSearch = (prop) => (value) => {
    let item = this.state.item;
    item[prop] = value.target.value;
    if(value.target.value)
    {
      this.search(value.target.value);
    }else{
      this.search(0);
    }
    
    
  };

  search = (name) => {    
    this.props.search('FAVORITO_DATA','favoritos',name)
  };

  componentWillUnmount() {
    /*this.props.reset("FAVORITO_RESET");*/
  }

  
  render() {        
    const { pagina, paginas, total, data, modalView, item } = this.props.favoritos;    
    const { nombres } = this.state
          
    return (
      <div className="content">     
      <div className="main-contenido">   
    

        <div className="hede">        
        <Row>
          <Col md="3">
              <Link to="/admin/Reclutamiento/0">
                <Button className={"btn-xs btn-info"}>
                  <i className="fas fa-arrow-left" /> Nuevo Reclutamiento
                </Button>
              </Link>
          </Col>
          <Col md="8">
            <SearchReclutamientos
            handleSearch={this.handleSearch}
            nombres={nombres}
            />
          </Col>
        </Row>
        </div>

        <Row>
          <Col md="12">
          <TablaReclutamiento
            data = {data}            
            toggleView ={ this.toggleView}
            toggleViewf ={ this.toggleViewf}
            handleAprobar={ this.handleAprobar}            
          />
          </Col>
        </Row>
        <Row>
        <Col>
        <div className="navegador" >
        <Pagination
                current={pagina}
                paginas={paginas}
                total={total}
                handlePagina={this.handlePagina}
                pagina={12}
                makeHttpRequestWithPage={this.makeHttpRequestWithPage}
              />
        </div>
        </Col>                
        </Row>  
      </div>
      </div>
    )
  }  
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ...crudActions,
    },
    dispatch
  ),
});

const mapStateToProps = (state) => ({
  favoritos: state.favoritos,  
  users: state.users
});

export default connect(mapStateToProps, mapDispatchToProps)(Reclutamientos);