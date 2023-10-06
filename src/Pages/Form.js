import React from 'react';
import './Contact.css'

function Form(props) {
    return (
        <div>
            <section id="contact" className="contact">
                <div className="container">
                </div>
                <div>
                    <form method="post" role="form" className="php-email-form" style={{ background: "#f7f5f5" }}>
                        <div className="section-title" style={{ textAlign: "center" }}>
                            <h2><span>Send us a mail</span></h2>

                        </div>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                        </div>
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Form;