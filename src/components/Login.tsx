import React from 'react'
import { gql, useMutation } from "@apollo/client";

interface SignInInput{
  email?: string;
  password?: string;
}

const SIGN_IN = gql`
mutation signIn($input: signInInput!){
    signIn(input: $input){
        email
        password
    }
}`

const Login = ({email, password} : SignInInput) => {

  const [signIn] = useMutation(SIGN_IN)

  return  ( 
    <form onSubmit={e =>{
      e.preventDefault();
      signIn({variables: {email: email, password: password}})
    }}>
        <label htmlFor="Email">Email</label>
        <input type = 'input' placeholder = "Email..." className="email_box" value ={email}
          onChange= {(e) => {email = e.target.value}}/>
        <br/>
        <label htmlFor="Email">Password</label>
        <input type = 'password' placeholder = "Password..." className="password_box" value ={password}
          onChange= {(e) => {password = e.target.value}}/>
        <button className = 'input_submit' type="submit">
          Login
        </button>
    </form>
    );
}

export default Login
