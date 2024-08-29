import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this Project</h1>
        <p>This is a react app to leave feedback for a product or service</p>
        <p>
          This app was built following the original one made by Brad Traversy.
        </p>

        <p>Version 0.2</p>
        <p>
          <Link to='/'>Back to home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
