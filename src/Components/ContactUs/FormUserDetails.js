import React from 'react'
import BlueButton from '../Re-usable/Button/BlueButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Form.css';
import Header from './header/header';
export default function FormUserDetails({nextStep,handleChange,name,email,number,message}) {

const Continue=e=>{
e.preventDefault();
nextStep();
}


    return (
      <div>
          <Header/>

        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="message-color">Send us a message</h1>
                <p style={{ color: "#989899", margin: "10px" }}>
                  You can contact us with anything related to our products.
                  We'll get in touch with you as soon as possible.
                </p>

                <form >
                  <div class="form-group">
                    <label for="exampleInputEmail1">Your name *</label>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      value={name}
                      class="form-control"
                      placeholder="Enter email"
                    />

                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputPassword1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={email}
                      class="form-control"
                      placeholder="Enter name"
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputPassword1">Phone Number *</label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={handleChange}
                      name="number"
                      value={number}
                      placeholder="+27792808529"
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea
                      class="form-control"
                      rows="3"
                      name="message"
                      onChange={handleChange}
                      value={message}
                      placeholder="e.g ........"
                    ></textarea>
                  </div>

                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <BlueButton
                      type="submit"
                      class="btn"
                      onClick={Continue}
                    >
                      CONTACT US
                    </BlueButton>
                  </div>
                </form>
              </div>
              <div className="col">
                <div style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title message-color">
                      {" "}
                      <FontAwesomeIcon icon="phone" /> Contact
                    </h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      <b>Phone:</b> + 61 7 4963 7777
                    </h6>
                    <h6 class="card-subtitle mb-2 text-muted">
                      <b>Tenders:</b> tenders@g-s.com.au
                    </h6>
                    <h6 class="card-subtitle mb-2 text-muted">
                      <b>Careers:</b> recruitment@g-s.com.au
                    </h6>
                    <h6 class="card-subtitle mb-2 text-muted">
                      <b>Enquiries: </b>controls@g-s.com.au
                    </h6>
                  </div>
                </div>

                <div style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title message-color">  <FontAwesomeIcon icon="map-marker" />Mackay</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      G&S Engineering Services 27 Len Shield Street Mackay,
                      Queensland 474
                    </h6>
                    <h6 class="card-subtitle mb-2 text-muted">
                      <b>Phone:</b> +61 7 4963 7777
                    </h6>
                    <h6 class="card-subtitle mb-2 text-muted">
                      <b>Postal Address:</b> PO Box 5774, Mackay Mail Centre,
                      Queensland 4741
                    </h6>
                  </div>
                </div>

                <div style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title message-color"><FontAwesomeIcon icon="map-marker" />Brisbane</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      G&S Engineering Services Level 4, 145 Eagle Street
                      Brisbane, Queensland 4000
                    </h6>
                    <h6 class="card-subtitle mb-2 text-muted">
                      <b>Phone:</b> +61 7 3236 4157
                    </h6>
                  </div>
                </div>

                <div style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title message-color"><FontAwesomeIcon icon="map-marker" />Biloela</h5>
                    <h6 class="card-subtitle mb-2 text-muted">G&S Engineering Services 41395 Burnett Highway Biloela, Queensland 4715</h6>
                    <h6 class="card-subtitle mb-2 text-muted">
                      <b>Phone:</b> +61 7 4992 4922
                    </h6>
                    <h6 class="card-subtitle mb-2 text-muted">
                      <b>Postal Address:</b> PO Box 754, Biloela, Queensland
                      4715
                    </h6>
                  </div>
                </div>

                <div style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title message-color"><FontAwesomeIcon icon="map-marker" />Perth</h5>
                    <p class="card-subtitle mb-2 text-muted">G&S Engineering Services Level 7, 256 Adelaide Tce, Perth, WA 6000</p>
                    <p class="card-text">
                      <b>Phone:</b> Phone: +61 8 9221 5005
                      
                      </p>
                  </div>
                </div>

                <div style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title message-color"><FontAwesomeIcon icon="map-marker"/>Karratha</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      G&S Engineering Services 2578 Augustus Drive, Karratha, WA
                      6714 Phone: +61 8 9186 7900
                    </h6>
                    <h6 class="card-subtitle mb-2 text-muted">
                      <b>Phone:</b> +61 8 9186 7900
                    </h6>
                    <h6 class="card-subtitle mb-2 text-muted">
                      <b>Postal Address:</b> PO BOX 725, Karratha, WA 6714
                    </h6>
                  </div>
                </div>

                <div style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title message-color">
                    <FontAwesomeIcon icon="phone" />    DRA Global Whistleblower Service
                    </h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                      <b>Phone:</b> 1800 717 559
                    </h6>
                    <h6 class="card-subtitle mb-2 text-muted">
                      <b>Website:</b>{" "}
                      www.DRAwhistleblowerservice.deloitte.com.au
                    </h6>
                    <h6 class="card-subtitle mb-2 text-muted">
                      <b>Email:</b> DRAwhistleblowerservice@deloitte.com.au
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}
