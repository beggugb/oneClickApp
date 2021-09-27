import { userService } from "../services";
import { alertActions } from "./";
import { history } from "../helpers";

export const userActions = {
  verificarEnlace,
  verificarConfirmacion,
  verificarUsername,
  usuarioCreate,
  usuarioUpdate,
  changePassword,
  login,
  logout,
};

function changePassword(data){
  return dispatch => {               

      userService.cambiarPassword(data,data.id)
      .then((response)=>{                                                              
  
      })
      .catch((err)=>{           
        
  })
} }

function verificarConfirmacion(enlace) {
  return (dispatch) => {    
    userService
      .verificarConfirmacion(enlace)
      .then((response) => {
        dispatch(usuariosConfirmar(response.result));
        dispatch(categoriaItem(response.result.Categorium));
      })
      .catch((err) => {
        
      });
  };
}

export function categoriaItem(response) {
  return {
    type: "CATEGORIA_ITEM",
    response: response,
  };
}

export function usuariosConfirmar(response) {
  return {
    type: "CLIENTE_CONFIRMAR",
    cliente: response
  };
}

function usuarioUpdate(usuario) {
  return (dispatch) => {

    userService
      .update(usuario)
      .then((response) => {
        dispatch(usuarioUpd(response.result));

        
      })
      .catch((err) => {
        
      });
  };
}

export function usuarioUpd(response) {
  return {
    type: "CLIENTE_UPDATE",
    cliente: response
  };
}

/*****************/
function verificarUsername(usuario) {
  return (dispatch) => {

    userService
      .verificarUsername(usuario)
      .then((response) => {
        dispatch(usuariosVerificar(response.result));
      })
      .catch((err) => {
        dispatch(usuariosVerificar(false));
        /*dispatch(createNotification(alertActions.error(err)));*/
      });
  };
}

export function usuariosVerificar(response) {
  return {
    type: "CLIENTE_VERIFICAR_USERNAME",
    vusername: response
  };
}

/*****************/

/*****************/
function usuarioCreate(usuario) {
  return (dispatch) => {
  
    userService
      .create(usuario)
      .then((response) => {
        dispatch(usuariosCreate(response));
        
      })
      .catch((err) => {
        
      });
  };
}

export function usuariosCreate(response) {
  return {
    type: "CLIENTE_CREATE",
    response: response
  };
}

/*****************/
function verificarEnlace(enlace) {
  return (dispatch) => {
   
    userService
      .verificarPatrocinador(enlace)
      .then((response) => {
        dispatch(vEnlace(response));
      })
      .catch((err) => {
        
      });
  };
}

export function vEnlace(response) {
  return {
    type: "USUARIO_VERIFICAR_ENLACE",
    message: response.message,
    patrocinador: response.patrocinador
    
  };
}

/******************************************/
function login(user) {
  return (dispatch) => {

    userService
      .login(user)
      .then((response) => {
        console.log(response);
        dispatch(LOGIN(response.cliente.user, response.modulos));
        
        history.push("/admin");
      })
      .catch((err) => {
        
      });
  };
}

export function LOGIN(user, data, billetera, donacion, comision) {
  return {
    type: "LOGIN_SUCCESS",
    user: user,
    items: data
  };
}

function logout() {
  return (dispatch) => {
    userService.logout();
    dispatch(loginOut());
    history.push("/admin");
  };
}

export function loginOut() {
  return {
    type: "LOGIN_LOGOUT",
  };
}
