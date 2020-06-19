import { FiArrowUp } from 'react-icons/fi'
import {
  FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaYoutubeSquare, FaInstagram, FaMedium
} from 'react-icons/fa'

const About = () => {
  return (
    <div className="about">
      <a href="#"><span className="scroll-to-top"></span><FiArrowUp className="arrow" /></a>
      <div className="content">
        <div className="links">
          <ul className="link-group">
            <li className="link-title">Products</li>
            <li className="link">PubSub+ Platform</li>
            <li className="link">PubSub+ Event Broker</li>
            <li className="link">PubSub+ Event Broker: Software</li>
            <li className="link">PubSub+ Event Broker: Appliance</li>
            <li className="link">PubSub+ Event Broker: Cloud</li>
            <li className="link">PubSub+ Event Portal</li>
          </ul>
          <ul className="link-group">
            <li className="link-title">Company</li>
            <li className="link">Careers</li>
            <li className="link">Leaderships</li>
            <li className="link">Customers</li>
            <li className="link">Partners</li>
            <li className="link">Events</li>
            <li className="link">Legal</li>
          </ul>
          <ul className="link-group">
            <li className="link-title">Developers</li>
            <li className="link">Docs</li>
            <li className="link">Blog</li>
            <li className="link">Community</li>
            <li className="link">Support</li>
            <li className="link">Contact</li>
            <li className="link">Log In</li>
          </ul>
        </div>
        <div className="newsletter">
          <img src="/solace.png" alt="" className="footer-logo" />
          <p className="signup-title">Newsletter Signup</p>
          <p className="signup-text">Join 3,000 others receiving product updates + insights into the event-driven future.</p>
          <input type="email" className="form-input" placeholder="Email" />
          <select className="form-input select" placeholder="Country">
            <option value="India">India</option>
            <option value="US">United States</option>
            <option value="Canada">Canada</option>
            <option value="Germany">Germany</option>
          </select>
          <div className="signup-button">Sign Up</div>
          <div className="social-media">
            <FaFacebookSquare className="icon" />
            <FaLinkedin className="icon" />
            <FaTwitterSquare className="icon" />
            <FaYoutubeSquare className="icon" />
            <FaInstagram className="icon" />
            <FaMedium className="icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About