import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { crudActions } from "../../actions";

import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import FormReclutamiento from './components/FormReclutamiento'



import classnames from 'classnames';

class reclutamiento extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
        activeTab:'2',
        clienteId: 0,
        password2:'0', 
        validate:false,
        igual:false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };  

    componentDidMount() {
        const {
          match: { params },
        } = this.props;
        if (params.reclutamientoId > 0) {
          this.props.getItem("FAVORITO_ITEM", "favoritos", params.reclutamientoId);
          this.setState({
            reclutamientoId: params.reclutamientoId,
            file: "",
            imagePreviewUrl: "",
          })
        }
    }    

    toggle = tab =>{
        const {activeTab, clienteId } = this.state
        if(activeTab !== tab) {
          this.setState({
            activeTab : tab
          },this.props.getItem("FAVORITO_ITEM", "clientes", clienteId)
          )
        }
    
    }
    handleSubmit(event) {
      event.preventDefault();       
          let dato = this.props.favoritos.item;          
          if (dato.id) { 	    
            this.props.update("FAVORITO_REGISTO", "favoritos", dato);
          } else {
            this.props.register("FAVORITO_REGISTO", "favoritos", dato);
          }
       
       
    }
  
    handleChange = (prop) => (event) => {
      if (event) {
        this.props.change("FAVORITO_CHANGE", prop, event.value);
      } else {
        this.props.change("FAVORITO_CHANGE", prop, "");
      }
    };
  
    handleChanges = (prop) => (event) => {
      if (event) {
        this.props.change("FAVORITO_CHANGE", prop, event.target.value);
      } else {
        this.props.change("FAVORITO_CHANGE", prop, "");
      }
    };
  
    handleChan = (prop) => (event) => {
      this.props.change("FAVORITO_CHANGE", prop, event);
    };

    handlec = (prop) => (event) => {
      this.setState({
        password2: event.target.value
      })      
    };

    handleDelete = () => {      
      this.props.change("FAVORITO_CHANGE", "password", "");      
      this.setState({
        validate: false
      })
        
    };

    handleValidar = (dato) => {      
      let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      if(dato.match(passw)) 
      { 
        this.setState({
          validate: true
        })
      }      
  };

   componentWillUnmount() {
    this.props.reset("FAVORITO_RESE");
  }

     
  render() {       
    const { activeTab, reclutamientoId } = this.state       
    const { item } = this.props.favoritos
    return (
        <div className="content">
        <div className="main-contenido">        
        <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}       >
            <Link to={`/admin/reclutamientos`}>
            Lista de Postulaciones
            </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { this.toggle('2'); }}
          >
            Datos Generales
          </NavLink>
        </NavItem>  
       
      </Nav>
      <TabContent activeTab={activeTab} className="tabled">
        <TabPane tabId="1">          
                  
        </TabPane>
        <TabPane tabId="2">          
          <FormReclutamiento
            item = { item }
            handleSubmit = { this.handleSubmit }            
            handleChange = { this.handleChange }
            handleChanges = { this.handleChanges }
            handleChan = { this.handleChan }
          />
        </TabPane>
       
     
     
      </TabContent>
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
  clientes: state.clientes,
  favoritos: state.favoritos,  
  users: state.users
});

export default connect(mapStateToProps, mapDispatchToProps)(reclutamiento);
