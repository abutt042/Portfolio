import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
        <Card
            Icon={CgWebsite}
            title={"web Applications"}
            disc={`Having developed web applications, I bring a wealth of experience in creating innovative and functional digital solutions. My skill set includes proficiency in web development technologies such as HTML, CSS, and JavaScript, with a particular focus on utilizing frameworks like React.js to build dynamic and interactive user interfaces. I am dedicated to delivering high-quality applications that meet user needs and business objectives.`}
          />
        </Slide>
        <Slide direction="up">
        
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"E-commerce sites"}
            disc={`As an experienced web developer, I specialize in designing and implementing robust e-commerce solutions tailored to meet the unique needs of businesses in the digital marketplace. With a keen understanding of user experience and a focus on creating seamless online shopping journeys, I leverage technologies such as HTML, CSS, JavaScript, and frameworks like React.js to build dynamic and visually appealing e-commerce websites.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
