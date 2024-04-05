import React, { Component } from 'react'
import Image from 'react-bootstrap/Image';
import img1 from './../image/7566.jpg'

export default class Home extends Component {
          render() {
                    return (
                              <>
                              <Image src={img1} fluid />  
                              </>
                    )
          }
}
