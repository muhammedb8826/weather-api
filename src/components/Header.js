import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { getWeather, searchByCountryName } from '../redux/weather/weatherSlice';

export default function Header() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  const handleClick = (e) => {
    setName(e.target.value);
    dispatch(searchByCountryName(name));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            Weather API
          </Navbar.Brand>
          <Form className="d-flex w-50">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
              value={name}
            />
            <Button variant="outline-success" onClick={handleClick}>Search</Button>
          </Form>
        </Container>
      </Navbar>
    </header>
  );
}
