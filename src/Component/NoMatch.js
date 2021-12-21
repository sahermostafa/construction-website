import React,{useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "./NoMatch.css";
import{Button,Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const NoMatch = () => {
  const navigate = useNavigate();
  useEffect( () => {
    setTimeout( () =>{
      navigate("/");
    },1000);
  },[])

    return (
      <div className="main">
        <div className="center">
        <Button variant="dark" disabled>
         <Spinner
         as="span"
         animation="border"
         size="xl"
         role="status"
         aria-hidden="true"
         />
         <span className="visually-hidden">Loading...</span>
        </Button>{' '}
        <Button variant="dark" disabled>
         <Spinner
         as="span"
         animation="grow"
         size="xl"
         role="status"
         aria-hidden="true"
        />
        Loading...
        </Button>
        </div>
      </div>
      
    );
  };
  
  export default NoMatch;