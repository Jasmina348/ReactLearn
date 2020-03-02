//Composing and extracting the components 
//React components must act like the pure function ,its input must not change and output must remain same without change in the input
import React from 'react';
import './App.css';
import namaste from "./namaste.svg";

function formatDate(date) {
  return date.toLocaleDateString();
}
function User(props) {
  return(
      <img src={props.user.image}/>
  )
  
}

function ImageInfo(props) {
  return(
    <div className="image-info smaller-image">
      <User user={props.info}/>
      <div>{props.info.imagename}</div>
    </div>
  )
  
}

function Welcome(props) {
  
  return (
    <div className="welcome">
      <div>
     <ImageInfo info={props.imageinfo}/>
     </div>
     <div>{props.text}</div>
     <div>{props.information}</div>
     <div>{formatDate(props.date)}</div>
    </div>

  );
}
const welcomeinfo = {
  date: new Date(),
  text: "Hello Everyone",
  information: "This app is called Nepal",
  imageinfo: {
    imagename: "Namaste",
    image: namaste,
  },
};

var element = <Welcome
  date={welcomeinfo.date}
  text={welcomeinfo.text}
  information={welcomeinfo.information}
  imageinfo={welcomeinfo.imageinfo}
/>

function App() {
  return (
element
  )
}

export default App;
