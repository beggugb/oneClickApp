const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item: {
      id: 0,
      cargo: "",
      requisitos: "",
      caracteristicas: "",
      tipo: "",
      fvencimiento: ""    
    },  
    modalView: false,
    vusername: false,
    venlace: false
  };
  
  export function favoritos(state = initialState, action) {
    switch (action.type) {
      case "FAVORITO_DATA":
        return {
          ...state,
          data: action.response.data,
          pagina: action.response.pagina,
          paginas: action.response.paginas,
          total: action.response.total,
        };    
      case "FAVORITO_UPDATE":
        return {
          ...state,
          item: action.cliente,
        };
      case "FAVORITO_CONFIRMAR":
        return {
          ...state,
          item: action.cliente,
        };
      case "FAVORITO_VERIFICAR_USERNAME":
        return {
          ...state,
          vusername: action.response,
        };
      case "FAVORITO_VERIFICAR_ENLACE":
          return {
            ...state,
            venlace: action.response,
          };  
      case "FAVORITO_CHANGE":
        return {
          ...state,
          item: { ...state.item, [action.props]: action.value },
        };  
      case "FAVORITO_CREATE":
        return {
          ...state,
          item: initialState.item,
        };
      case "FAVORITO_REGISTRO":
          return {
            ...state,
            item: action.item
          };  
      case "FAVORITO_ITEM_VIEW":
        return {
          ...state,
          item: action.response,        
          modalView: action.state,
        };
      case "FAVORITO_ITEM_VIEWS":
        return {
          ...state,
          item: initialState.item,
          modalView: action.state,
          nota: {},
          contrato: {},
          plan: [],
        };
      case "FAVORITO_ITEM":
        return {
          ...state,
          item: action.response
  
        };
      case "FAVORITO_RESET":
        return {
          ...state,
          data: [],
          pagina: 0,
          paginas: 0,
          total: 0,
          item: initialState.item,
          nota: {},
          contrato: {},
          plan: [],
        };
       case "FAVORITO_RESE":
        return {
          ...state,
          item: initialState.item,
        };		  
      default:
        return state;
    }
  }
  