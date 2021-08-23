import Mainscreen from "../component/mainScreen"
import { Link } from "react-router-dom"
import { Accordion, AccordionCollapse, Button, Card } from "react-bootstrap"
import { useEffect, useState } from "react"
import axios from 'axios'


const Dashboard = ()=>{


const [produitList, setProduitList] = useState([])

const fetchProduit = async() =>{
    const {data}=await axios.get('/app/product')
    setProduitList(data)
    console.log(data)
}


useEffect(()=>{
    fetchProduit()
},[])

    return(
        <Mainscreen title= 'Bienvenue chez B-Deal....'>
            <Link to="dashboard/addProduct">
              <Button variant="primary"> Ajouter Prodiut </Button>
            </Link>
            {produitList.map(produit=>(
                <Accordion key={produit._id}>
                    <Card style={{margin:10}}>
                        <Card.Header style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <h3><Accordion.Toggle as={Card.Text} variant="link" eventKey="0">{produit.name} &#10146;</Accordion.Toggle></h3>
                            <div>
                                <Button variant="outline-primary" size="sm" style={{margin:2}} href={`/dashboard/produit/${produit._id}`}> Editer Prodiut </Button>
                                <Button variant="outline-danger" size="sm"style={{margin:2}}> supprimer Produit </Button>
                            </div>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>{produit.produit_id}</p>
                                    <footer className="blockquote-footer">
                                          cree en date --/--/----
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Accordion.Collapse>   
                    </Card>
                </Accordion> 
            )
            )}
            
        </Mainscreen>
    )
}
export default Dashboard