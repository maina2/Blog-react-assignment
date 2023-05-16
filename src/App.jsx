import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Title() {
  return (
    <div className="head">
      <h2>A blog from a sample campus students</h2>
    </div>
  );
}

function Blogs({ name, blog, county }) {
  return (
    <div className="blog">
      <h2>{name}</h2>
      <p>{blog}</p>
      <h4>{county}</h4>
    </div>
  );
}

function Highlights({ first, description}){

  return(
    <div className="highlights">
      <h5>{first}</h5>

      <p>{description}</p>


    </div>

  );

}

function Footer() {
  return(
    <div className="footer">
      <p>Simon maina</p> <input type="date"></input>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Title />
      <Blogs
        name="Maria"
        blog="The MEd MESA program was an excellent addition to my primary PhD program in Literacy, Language, and Culture and has opened up so many new career possibilities to me in educational research."
        county="Nairobi"
      />
      <Blogs
        name="Jamiel"
        blog="his program has been great so far. The faculty is supportive and readily available. The courses and individual lessons have been clear and coherent"
        county="Kisumu"
      />
      <Blogs
        name="Athman"
        blog="The MEd MESA program is exactly the type of program I was looking for: It could be completed at distance, the course offerings are comprehensive in nature, but the material is presented in a very practical way"
        county="Taita"
      />
      

      <Blogs />

      <Highlights first="Maria" description="Pedeatrics student"/>
      {/* <Highlights first="Jamiel" description="Orthopedic student"/>
      <Highlights first="Athman" description="Physiotherapy student"/> */}
      <Highlights/>
      <Footer />
    </div>
  );
}

export default App;
