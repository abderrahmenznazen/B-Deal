import Mainscreen from "../component/mainScreen"
import { Form, Button } from 'react-bootstrap'
import { useState } from "react"

const LogIn = ()=>{

const [email , setEmail]= useState("")
const [password , setPassword]= useState("")   
const [error , setError]= useState(false)    

const submitHandler =(e)=>{
    e.preventDefault()
    console.log(email, password)
}

    return( 
            <Mainscreen title='Log In'>
                <Form onSubmit={submitHandler }>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email"    
                            value={email} 
                            onChange={(e)=> setEmail(e.target.value)} 
                            placeholder="Enter email"
                            />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            value={password} 
                            placeholder="Password" 
                            onChange={(e)=> setPassword(e.target.value)} 
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Mainscreen>
         
    )

}
export default LogIn