import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends Component {
  render() {
    return (
        <div className="container-fluid bg-dark">
          <div className="row">
            <div className="py-3 mx-auto px-4">
              <p className="text-light text-center mr-1 d-block d-sm-inline mb-2 mb-sm-0">
                Fale conosco
              </p>
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/" className="col">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/" className="col">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/" className="col">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/" className="col">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="row justify-content-center pb-5 pt-4 px-4" style={{ backgroundColor: 'black' }}>
            <p className="text-light text-center">Copyright © 2019 Aprova Já todos direitos reservados</p>
          </div>
        </div>
    )
  }
}
