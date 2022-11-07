import React from 'react'

const About = () => {
  return (
    <div className='generalStyle'>
      <h2> About</h2>
      <p>This is the second semester Altschool assignment.</p>
      <p><b>It is about:</b></p>

      <ul>
        <li>Setup react-router</li>
        <li>Implement Nested routes</li>
        <li>404 page</li>
        <li> Error boundary</li>
        <li>Set up fake userAuthContext using the context API to always carry out a fake authentication</li>
        <li>Extract out a custom hook to get the currently logged-in user</li>
        <li>Implement SEO and Navigation menu that will show on each page</li>
      </ul>
    </div>
  )
}

export default About