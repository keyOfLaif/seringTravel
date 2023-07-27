import React from 'react';
import './newsletter.css';

import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const Newsletter = () => {
  return (
  <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe now to get useful travelling information</h2>

                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' />
                        <button className='btn newsletter_btn'>
                            Subscribe
                        </button>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cumque, quisquam laborum aspernatur tempora suscipit? Numquam, illo mollitia suscipit, veritatis, corrupti nisi magnam magni itaque harum cupiditate voluptates laborum doloribus.</p>
                    </div>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default Newsletter