import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BsChevronLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {
  getAstronomy,
  getCurrent, getForecast, getFuture, getSearch, getSports, getTimeZone, searchByCountryName,
} from '../redux/weather/weatherSlice';

export default function Header() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent());
    dispatch(getForecast());
    dispatch(getSearch());
    dispatch(getFuture());
    dispatch(getAstronomy());
    dispatch(getTimeZone());
    dispatch(getSports());
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
      <Navbar className="nav" expand="lg">
        <Container className="">
          <Link to="/" className="go-back">
            <BsChevronLeft />
          </Link>

          <Form className="d-flex search-input">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
              value={name}
            />
            <Button variant="outline-success search-btn border border-1" onClick={handleClick}>Search</Button>
          </Form>
        </Container>
      </Navbar>
    </header>
  );
}
