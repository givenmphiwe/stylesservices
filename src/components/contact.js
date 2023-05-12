import { useNavigate } from "react-router-dom"
import "./styles/contact.css"
import { FaEnvelope, FaMapMarker, FaPhone} from "react-icons/fa"

export const Contact = () => {
    const navigate = useNavigate()
    return (
        <body>
            <section className="contact">
                <div className="content">
                    <h2>Contact us</h2>
                    <p>
                        Lorem ipsum dolor
                    </p>
                </div>
                <div className="container">
                    <div className="contactInfo">
                        <div className="box">
                            <div className="icon"><FaMapMarker /></div>
                                <div className="text">
                                    <h3>Address</h3>
                                    <p>Bld rivonia</p>
                                </div>
                        </div>

                        <div className="box">
                            <div className="icon"><FaPhone/></div>
                                <div className="text">
                                    <h3>Phone</h3>
                                    <p>0714675197</p>
                                </div>
                        </div>

                        <div className="box">
                            <div className="icon"><FaEnvelope/></div>
                                <div className="text">
                                    <h3>Email</h3>
                                    <p>Info@StylesServicesGroup.com</p>
                                </div>
                        </div>
                    </div>

                    <div className="contactForm">
                        <form>
                            <h2>Send Message</h2>
                            <div className="inputBox">
                                <input type="text" name="" required/>
                                <span>Full Name</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="" required/>
                                <span>Email</span>
                            </div>
                            <div className="inputBox">
                                <textarea required></textarea>
                                <span>Type your Message..</span>
                            </div>
                            <div className="inputBox">
                                <input type="submit" name=""/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </body>
    )
}