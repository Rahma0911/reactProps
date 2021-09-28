import React from "react";
import picture from "./profile/picture.jpg";
import ProfileComponent from "./profile/ProfileComponent";

const App = () => {
  return (
  <div>
    <ProfileComponent imageURL={picture} fullName="Rahma Ismail" bio="I’m a web developer. I spend my whole day, practically every day, 
    experimenting with HTML, CSS, and JavaScript. I build websites that delight and inform. I do it well. I’m 
    curious, and I enjoy work that challenges me to learn something new and stretch in a different direction." 
    profession="Web Developer" />
  </div>
  )
};

export default App;