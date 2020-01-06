import React from 'react'
import { Redirect, Route} from "react-router-dom";

export default function ProtectedComponent({component : Component, isLoggedIn, loggedInUser, ...rest}){
    return(<Route {...rest} render={(props) => (
        isLoggedIn
          ? <Component {...props} />
          : <Redirect to='/login' />
      )} />);
}