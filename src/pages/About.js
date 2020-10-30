import React from "react";

const About = () => {
  return (
    <div className="about">
      <h3>
        Welcome to The Recipe Rolodex<i class="fas fa-search"></i>
      </h3>
      <p>
        Simply type in what you're looking for and immediately be prompted with
        the top ten results. This app is built with React.js and uses components
        such as React Router, the Context API and React Hooks. Finally, the data
        is pulled from the Edamam public food API which produces thousands of
        recipes. Simple yet effective for quickly looking up all of your
        favorite recipes!
      </p>
    </div>
  );
};

export default About;
