import { userService } from '../services';
export const usuActions = {
    usuData,

    modalView,
    usuReset
};




function modalView(estado){
    return dispatch => {       
    dispatch(modalViews(estado));      
    }
}

function usuReset(){
    return dispatch => {       
    dispatch(ususReset());      
    }
}

export function ususReset(){
    return{        
        type: 'USU_RESET'
    }
}



export function modalViews(state){
    return{        
        type: 'USU_MODAL_VIEW',
        state:state
    }
}



function usuData(page,numPages){
    return dispatch => {                
        userService.getData(page,numPages)
        .then((response)=>{                              
          dispatch(ususData(response.usuarios));
      })
        .catch((err)=>{ 
            
        })
    };
}

export function ususData(response){
    return{        
        type: 'USU_DATA',
        response: response
    }
}

export function inicial(){
    return{        
        type: 'INICIO'
    }
}

export function final(){
    return{        
        type: 'FINAL'
    }
}