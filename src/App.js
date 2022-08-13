import React, {useState} from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [mobile, setMobile] = useState();
  const [mobileError, setMobileError] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e, field) => {
    console.log(field, e.target.value)
    if(field === 'email'){
      setEmail(e.target.value)
    } else if(field === 'name'){
      setName(e.target.value)
    } else if(field === 'mobile'){
      setMobile(e.target.value)
    }
  }
  const handleBlur = (e, field) => {
    if(field === 'email'){
      if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        setEmailError('')
      } else{
        setEmailError('InValid Email Address')
      }
    } else if(field === 'name'){
      if(name.length >= 0 && name.length < 5){
        setNameError('Name should have atleast 5 characters')
      } else{
        setNameError('')
      }
    } else if(field === 'mobile'){
      if(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(mobile)){
        setMobileError('')
      } else{
        setMobileError('Please enter the valid mobile number')
      }
    }
  }
  const onSubmit = () => {
    if(email && name && mobile && !nameError && !emailError && !mobileError){
      setSuccessMessage('Successfully Form Submitted');
      setName('')
      setEmail('')
      setMobile('')
      setCountry('')
      setCity('')
      setState('')
      setMessage('')
    }
    else{
      if(!name){
        setNameError('Please fill name')
      }
      if(!email){
        setEmailError('Please fill email address')
      }
      if(!mobile){
        setMobileError('Please enter your mobile number')
      }
      setSuccessMessage('')
    }
  }

  return (
    <Form className='container'>
      <h3 className='header'> Form</h3>
      {
        successMessage && <span className='success'>{successMessage}</span>
      }
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        {nameError && <span className='error' >{nameError} </span>}
        <Form.Control type="text" value={name} placeholder="Name" onChange={e => handleChange(e, 'name')} onBlur={e => handleBlur(e, 'name')}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        {emailError && <span className='error' >{emailError} </span>}
        <Form.Control type="email" value={email} placeholder="Enter email" onChange={e => handleChange(e, 'email')} onBlur={e => handleBlur(e, 'email')}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile Number</Form.Label>
        {mobileError && <span className='error' >{mobileError} </span>}
        <Form.Control type="text" value={mobile} placeholder="Mobile Number" onChange={e => handleChange(e, 'mobile')} onBlur={e => handleBlur(e, 'mobile')}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" value={country} placeholder="Country" onChange={e => setCountry(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" value={city} placeholder="City" onChange={e => setCity(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" value={state} placeholder="State" onChange={e => setState(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" value={message} placeholder="State" onChange={e => setMessage(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" onClick={onSubmit}>
        Submit
      </Button>
      <br/>
      
    </Form>
  );
}

export default BasicExample;