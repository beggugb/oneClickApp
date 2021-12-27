import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Select from "react-select";
import { stylesErp } from '../../../helpers'
import { crudActions } from "../../../actions";

const defaultVal = (options, valor) => {
  return options.filter((item) => item.value === valor);
};

class SelectClientes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  handleChanges = (prop) => (event) => {    
    if (event.value) {
      this.props.changez("FAVORITO_CHANGE", prop, event.value);      
    } else {
      this.props.changez("FAVORITO_CHANGE", prop, "");
    }
  };

  componentWillUnmount() {
    this.props.reset("CLIENTE_RESET");
  }

  componentDidMount() {
    this.props.getLista("CLIENTE_LISTA", "clientes", "0");
  }

  render() {
    const { items } = this.props.clientes;  
    const { item } = this.props.favoritos;
   
      
    return (
      <Select                                                               
      name="clienteId"                                    
      styles={stylesErp}                     
      options={items}
      value={defaultVal(items, item.clienteId)}
      onChange={this.handleChanges("clienteId")}
      />
    );
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
  users: state.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectClientes);
