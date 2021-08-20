
export const initialAuthState = {
    loading:false,
    data:{},
    errors:[]
}

export const authReducer = (state = initialAuthState,action)=>{
    switch(action.type)
    {
    case "LOADING":
    {
       return {
           ...state,
           loading:true
       }
    }
    case "SUCCESS":
    {
        localStorage.setItem("username",action.payload.username)
       return {
           ...state,
           loading:false,
           data:action.payload
       }
    }
    case "FAILURE":
    {
        return {
            ...state,
            loading:false,
            errors:action.payload
        }
    }
}
}
