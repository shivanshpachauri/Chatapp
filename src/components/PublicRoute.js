import React from 'react'
import { Redirect,Route } from 'react-router-dom/cjs/react-router-dom.min';
import { useProfile } from '../context/profile.context';

const PublicRoute = ({children,...routeProps}) => {
    const profile=useProfile();
    if(profile){
        return <Redirect to="/"/>
    }
  return (
    <Route {...routeProps}>
    {children}  
    </Route>
  )
}

export default PublicRoute;
