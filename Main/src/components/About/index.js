import React from 'react';
import photo from '../../assets/cover/profile-photo.jpg'

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="my-5">
        <img className="profile-img" src={photo} alt="Brianna Pappas profile"></img>
        {/* <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i> */}
        </div>
        <p>Hi! I'm Brianna Pappas. I am a Roger Williams University Bachelor's Degree graduate and experienced Contract Specialist with a demonstrated history of working in the Information Technology and Services industry.</p>
        <p>Additionally, I am a current student of the UNH Coding Bootcamp where I will receive a certificate in Full Stack Web Development with skills in HTML, CSS, Javascript, React, SQL and more. I am eager to join a web development team where I can share these skills and also contribute my real life and corporate experience.</p>
      </div>
    </section>
  );
}

export default About;
