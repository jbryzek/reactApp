import React, {useState} from "react";
import {Modal, Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {Rotate} from "./Button/styled/Rotate";
import Emoji from "react-emoji-render";
import {LoginForm} from "./Forms/LoginForm";
import {SignUpForm} from "./Forms/SignUpForm";
import {Presentations} from "./Lists/Presentations";
import {useHistory} from "react-router-dom";

export const NavBar = ()  =>{
    const [count, setCount] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
    const handleShowSignUp = () => setShowSignUp(true);
    const handleCloseSignUp = () => setShowSignUp(false);

    const search=()=>{
        if(textIn.current.value.length>0) {
            console.log(textIn.current.value);
        }
    };
    const textIn=React.createRef();

    return(
         <Navbar bg="dark" variant="dark">
             {/*<Navbar fixed="top" />  <Navbar sticky="top" />*/}
            {/*<Navbar.Brand href="/">Rooms</Navbar.Brand>*/}

            <Nav fill className="mr-auto">
                <Nav.Link href="/">Monday</Nav.Link>
                <Nav.Link href="/schedules?day=Tuesday">Tuesday</Nav.Link>
                <Nav.Link href="/presentations">Wednesday</Nav.Link>
                <Nav.Link href="/rooms">Thursday</Nav.Link>
                <Nav.Link href="/sessions">Friday</Nav.Link>
                <Nav.Link href="/sessions">Reminders</Nav.Link>
            </Nav>
            <Form inline controlId="search">
                <FormControl ref={textIn} type="text" placeholder="Search (tittle, author, keywords)" className="mr-sm-2" onChange={search} />
                {/*<Button variant="outline-info">Search</Button>*/}
            </Form>
             <Rotate>
                 <Emoji text=":key: "/>
             </Rotate>
             <Button variant="outline-info" onClick={handleShowLogin}> {/*jesli dobrze logowanie to setCount(!count);   */}
                 {count ? 'Log out' : 'Log in'}
             </Button>
             <Button variant="outline-info" onClick={handleShowSignUp}>  {/*jesli dobrze logowanie to moze zniknac   */}
                 Sign up
             </Button>

             <Modal show={showLogin} onHide={handleCloseLogin}>
                 <Modal.Header closeButton>
                     <Modal.Title>Log in form</Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                     <LoginForm/>
                 </Modal.Body>
             </Modal>

             <Modal show={showSignUp} onHide={handleCloseSignUp}>
                 <Modal.Header closeButton>
                     <Modal.Title>Sign up form</Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                     <SignUpForm/>
                 </Modal.Body>
             </Modal>
        </Navbar>
    )
};
