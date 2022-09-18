import React from "react";

const createH1 = "Matheus Lopes";
const createP = "Futuro Dev, empreendedor, cozinheiro, poliglota e instrutor de yoga";
const createH2 = "Minhas habilidades";
const skills = ['JavaScript', 'React', 'HTML', 'CSS', 'Jest', 'Bootstrap', 'Git', 'GitHub'];
const createLi = skills.map((skill) => <li>{skill}</li>)

class About extends React.Component {
  //componente About
  render() {
    return (
      <div>
        <h1>{createH1}</h1>
        <p>{createP}</p>
        <h2>{createH2}</h2>
        <ul>
            {createLi}
        </ul>
      </div>
    );
  }
}

export default About;
