import { Container, Row } from "react-bootstrap"



const Mainscreen = ({title, children}) =>{
    return(
        <div>
            <Container>
                <Row>
                    
                        {title && (
                        <>
                        <h1>{title}</h1>
                        <hr/>
                        </>
                        )}
                        {children}
                    
                </Row>
            </Container>
        </div>
    )
}
export default Mainscreen