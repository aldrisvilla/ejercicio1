import React from "react";
import "../Login/Login.css";
import Title from './Components/Title/Title';
import Label from "./Components/Label/Label"
import Input  from "./Components/Input/Input";



const Login=()=>{

    // const[user,setUser]=useState("");
    // const[password,setPassword]=useState("");

    // function handleChange(name,value){
    //     if(name==="usuario"){
    //         setUser(value)

    //     }else{
    //         if(name==="password"){
    //             setPassword(value)
    //         }
    //     }
    // };
    // console.log("usuario: ",user)
    // console.log("password:",password)

    // function hanledSubmit(){
    //     let account={user,password}
    //     if(account){
    //         console.log("account: ",account)
    //     }

    // }
    return(
        <div className="container-login ">
            <div className="sub-container-login">
            <h1>Quick Delivery</h1>
            
            <hr/>


            <strong><Title text="Login" className="login-titulo"></Title></strong>
            <Label text="Usuario"></Label>
            <Input 
            attribute={{
                id:"usuario",
                name:"usuario",
                type:"text",
                placeholder:"Digite su usuario"
            }}
            // handleChange={handleChange} 
            />
            <Label text="Contraseña"></Label>
            <Input 
            attribute={{
                id:"password",
                name:"password",
                type:"password",
                placeholder:"Digite su contraseña"


            }}
            // handleChange={handleChange}
            />

            <br/>

            <button className="btn btn-primary" 
            
            >Ingresar
            
            </button>

            

            <button className="btn btn-primary" 
             
            >Registrarse
            
            </button>
            <br/>
            <br/>
            <br/>

            <p><small>Diseñado por, GP2 Systems © 2021</small></p>


            

            


            

             </div>

        </div>
    )
};

export default Login;

