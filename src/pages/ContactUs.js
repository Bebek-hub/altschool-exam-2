/* eslint-disable no-template-curly-in-string */
import {Link, Outlet} from "react-router-dom"

const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>

      <ul>
        {['number', 'address'].map((contact) => (
          <li>
            <Link to={'/contactUs/${contact}'}>{contact}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>

  )
}

export default ContactUs