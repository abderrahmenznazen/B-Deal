import React, { createContext, useEffect, useState } from "react";
import AuthService from "./authservice";


export const AuthContext = createContext();

export default ({ children })=>{
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoaded , setIsLoaded] = useState(false)

    useEffect(()=>{
        AuthService.isAutheticated().then(data =>{
            setUser(data.user)
            setIsAuthenticated(data.isAuthenticated)
            setIsLoaded(true)
        })
    },[]);

    return (
        <div>
            {!isLoaded ? <h1>Loading</h1> :
                <AuthContext.Provider value={user,setUser,isAuthenticated,setIsAuthenticated}>
                    {children}
                </AuthContext.Provider>}
        </div>
    )
}