import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

export default function PrototypingPractices() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <PracticesContainer>
            <PracticesHeader>Prototyping Practices</PracticesHeader>
            <PracticesDescription>These are some practices to help you bring your venture into reality.</PracticesDescription>
            <PracticesGrid />
          </PracticesContainer>
        } />
        <Route path="/card/:title" element={
          <>
            <BackgroundDiv />
            <CardPage />
          </>
        } />
      </Routes>
    </Router>
  );
}

const CardPage = () => {
  const { title } = useParams();
  const card = cardContentData.find(c => c.title === title);

  return (
    <CardPageContainer>
      <CardHeader>{card.title}</CardHeader>
      <CardContentStyle>{card.content}</CardContentStyle>
      <CloseButton onClick={() => window.history.back()}>Close</CloseButton>
    </CardPageContainer>
  );
};

const BackgroundDiv = styled.div`
  background-color: white;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const CardPageContainer = styled.div`
  background-color: white;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 10%;

  @media (max-width: 768px) {
    padding: 10%;
    width: 80vw;
  }
`;

const CloseButton = styled.button`
  background-color: white;
  border: 1px solid #212121;
  margin-top: 24px;
  cursor: pointer;
`;

const PracticesContainer = styled.div`
  margin-top: -10%;
  padding: 10%;
  padding-bottom: 10%;
  border: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    padding: 5%;
  }
`;

const PracticesHeader = styled.div`
  font-family: 'Yeseva One', cursive;
  font-size: 32px;
  padding-bottom: 24px;
  @media (max-width: 768px) {
    font-size: 24px;
    padding-top: 24px;
  }
`;

const PracticesDescription = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 200;
  padding-bottom: 14px;
  @media only screen and (max-width: 900px) {
    font-size: 12px;
    margin-left: 10%;
    margin-right: 10%;
  }
`;

const CardHeader = styled.div`
  font-family: 'Yeseva One', cursive;
  font-size: 12px;
  padding-bottom: 24px;
  color: #212121;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const CardContentStyle = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  color: #212121;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const PracticesGrid = () => {
  return (
    <GridContainer>
      {cardContentData.map((cardContent, index) => (
        <Link to={`/card/${cardContent.title}`} key={index}>
          <Card>
            <CardContent title={cardContent.title} content={cardContent.content} />
          </Card>
        </Link>
      ))}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
  padding: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;



const Card = styled.div`
  border: 0.25px solid #DCDCDC;
  padding: 0.5rem 2rem 2rem 2rem;
  background-color: #728E78;
  border-radius: 10px;
  transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  color: white;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px);
    background-color: #728E78;
    cursor: pointer;
  }
`;

const CardContent = ({ title, content }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const cardContentData = [
  { title: "Generate Ideas", content: "Use specific design challenges to generate a range of ideas to prototype" },
  { title: "Identify Key Questions", content: "Define the key questions you want to know from your prototypes" },
  { title: "Storyboard", content: "Create a storyboard of your proposed solution" },
  { title: "Paper Prototype", content: "Create a paper based version of your prototype" },
  { title: "Digital Prototype", content: "Start with a low fidelity version of a digital prototype, then enhance over time  " },
  { title: "Focused Prototype", content: "Create a prototype of a small aspect of your design to learn somethign you need to know" },
  { title: "Gather Feedback", content: "Structure the feedback you get from your prototype testing" },
  { title: "Iterate Prototype", content: "Make updates to your prototype based on specific types of feedback from your testing" }
];

