
export default {
    logIn :user=>{
        return fetch ('/app/user/login', {
            method : "post",
            body :JSON.stringify(user),
            header :{
                'Contenent-type' : 'application/json'
            }
        }).then(res=>res.json())
        .then(data => data)
    },
    regiter :user=>{
        return fetch ('/app/user/register', {
            method : "post",
            body : JSON.stringify(user),
            header :{
                'Contenent-type' : 'application/json'
            }
        }).then(res=>res.json())
        .then(data => data)
    },
    logout : ()=>{
        return fetch ('/app/user/logout')
        .then(res=>res.json())
        .then(data=>data);
    },
    isAutheticated : ()=>{
        return fetch ('/app/user/authenticated')
        .then(res=>{
            if (res.status !== 401)
                return res.json().then(data => data)
            else
                return { isAutheticated : false, user : {username:"", isAdmin:""}}
        })
    },
}