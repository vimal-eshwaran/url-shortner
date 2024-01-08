import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CreateShortUrl } from '../Services/apiService';

function MyVerticallyCenteredModal(props) {
const [longUrl,setLongUrl]=useState({})

const handleCreate=async()=>{
    props.onHide();
try {
  const token=localStorage.getItem('token');
console.log(token,longUrl)
  const response=await CreateShortUrl(longUrl,token);
  
  console.log(response);
} catch (error) {
  console.log(error)
}

}

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Short Url
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Long Url</Form.Label>
        <Form.Control type="text" placeholder="https://www.google.com/" name='longUrl' onChange={(e)=>{setLongUrl({[e.target.name]:e.target.value})}}/>
      </Form.Group>
    
    </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={handleCreate}>Create</Button>
        <Button onClick={props.onHide} variant='danger'>Close</Button>
        
      </Modal.Footer>
    </Modal>
  );
}

function Model() {
    const [modalShow, setModalShow] = useState(false);  


  return (
    <>
      <Button variant="success" onClick={() => setModalShow(true)}>
        Create Short Url
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export {Model}