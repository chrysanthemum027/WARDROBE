import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Wall_Carousel(props){ 
return(<Carousel>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1545007805-a44ee83438fa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
      alt="First slide"
    />

    <Carousel.Caption>
      <h3>Explore the Store!</h3>
      <p>Discover the widest collection of wardrobe collections</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1571018741658-49d3bdb201f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80umbor/NAIBeN0yZTu_JsdblTjszWLi0eA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19490489/closets_x_1.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Fashion is the Armour!</h3>
      <p>A wide variety of clothes from different brands</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80om/2016/10/201609-omag-4-things-in-every-womans-closet-promo-r2-949x534.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Lookout for latest Trends!</h3>
      <p>We don't design clothes, we design dreams</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
)};