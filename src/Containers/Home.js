import React, {useState} from 'react';
import Request from './Request'
import Modal from 'react-modal'
import firebase from './../firebase';
import { Col, Row, Tab, Nav, Container, Jumbotron, Card, ListGroup, Form, Button, CardDeck } from "react-bootstrap";

export default function Home(props) {
  const [requestWindow, setRW] = useState(false)
  const [matchWindow, setMW] = useState(false)
  const [contactWindow, setCW] = useState(false)
  
  
  
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1>You have logged in.</h1>
          <div><button onClick={()=>setRW(true)}>Check Received Request</button></div>
          <div><button onClick={()=>setCW(true)}>Check My Contact</button></div>
          <div><button onClick={()=>setMW(true)}>Let's Match!</button></div>
        </Container>

        <Modal isOpen={requestWindow} onRequestClose={() => setRW(false)}>
          <Request/>
          <button onClick = {()=>setRW(false)}>Close</button>
        </Modal>

        <Modal isOpen={matchWindow} onRequestClose={() => setMW(false)}>
          <h1>Opps!</h1>
          <p>The Match Functionality is still under deverlopment!</p>
          <button onClick = {()=>setMW(false)}>Close</button>
        </Modal>

        <Modal isOpen={contactWindow} onRequestClose={() => setCW(false)}>
          <h1>Opps!</h1>
          <p>You have no friends!</p>
          <button onClick = {()=>setCW(false)}>Close</button>
        </Modal>

      </Jumbotron>
    </div>
  );
}