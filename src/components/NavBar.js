import React, {useEffect, useState} from "react";
import {Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {Rotate} from "./styled/Rotate";
import Emoji from "react-emoji-render";
import {LoginForm} from "./Forms/LoginForm";
import {SignUpForm} from "./Forms/SignUpForm";
import {Link} from 'react-router-dom'
import API from "./api";
import {useHistory} from "react-router-dom";

const Search = ({keywordd, title}) => {
    if (title === keywordd || title.includes(keywordd))
        console.log(title);
    //return <span>{title}</span>;
    return <span/>
};

export const NavBar = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [presentation, setPresentation] = useState([]);
    const [token, setToken] = useState(false);
    const history = useHistory();

    useEffect(() => {
        API.get('/presentations')
            .then((result) => {
                setPresentation(result.data);
            })
            .catch((err) => console.error(err))
    }, []);

    const search = () => {
        if (textIn.current.value.length > 0) {
            console.log(textIn.current.value);
            return (
                <span>
                {presentation.map(pres => <Search key={pres.id} title={pres.title} keywordd={textIn.current.value}/>)}
            </span>
            )
        }
    };
    const textIn = React.createRef();

    const isLoggedIn = () => {
        return localStorage.getItem('token') == null;
    };

    const logOut = () => {
        setToken(false);
        localStorage.removeItem('token');
        if (window.location.pathname.includes('reminders'))
            history.push("/schedules?day=Monday");
    };

    return (
        <Navbar expand={'lg'} bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav fill className="mr-auto">
                    <Nav.Link as={Link} to="/schedules?day=Monday">Monday</Nav.Link>
                    <Nav.Link as={Link} to="/schedules?day=Tuesday">Tuesday</Nav.Link>
                    <Nav.Link as={Link} to="/schedules?day=Wednesday">Wednesday</Nav.Link>
                    <Nav.Link as={Link} to="/schedules?day=Thursday">Thursday</Nav.Link>
                    <Nav.Link as={Link} to="/schedules?day=Friday">Friday</Nav.Link>
                    {isLoggedIn() ? <></> :
                        <Nav.Link as={Link} to="/reminders">Reminders</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>

            <div className="d-flex justify-content-end">
                <Form inline>
                    <FormControl ref={textIn} type="text" placeholder="Search (tittle, author, keywords)"
                                 className="mr-sm-2" onChange={search}/>
                </Form>
                {isLoggedIn() && token===false ?
                    <>
                        <Button variant="outline-info "
                                onClick={() => setShowLogin(true)}>
                            <Rotate>
                                <Emoji text=":key: "/>
                            </Rotate> Log in
                        </Button>
                        < Button variant="outline-info"
                                 onClick={() => setShowSignUp(true)}>
                            Sign up
                        </Button>
                    </>
                    :
                    < Button variant="outline-info"
                             onClick={logOut}>
                        <Rotate>
                            <Emoji text=":key: "/>
                        </Rotate> Log out
                    </Button>
                }
            </div>

            <LoginForm show={showLogin} onHide={() => {setShowLogin(false); if(localStorage.getItem('token')!= null) setToken(true)}}/>
            <SignUpForm show={showSignUp} onHide={() => {setShowSignUp(false); if(localStorage.getItem('token')!= null) setToken(true)}}/>
        </Navbar>
    )
};
