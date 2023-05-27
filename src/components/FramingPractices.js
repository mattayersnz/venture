import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

export default function FramingPractices() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <PracticesContainer>
            <PracticesHeader>Framing Practices</PracticesHeader>
            <PracticesDescription>These are some practices to help you make sense of your venture.</PracticesDescription>
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
  }
`;

const PracticesDescription = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 200;
  padding-bottom: 14px;
  @media only screen and (max-width: 900px) {
    font-size: 24px;
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
  background-color: #6A82AA;
  border-radius: 10px;
  transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
  text-decoration: none;
  color: white;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transform: translateY(-4px);
    background-color: #6A82AA;
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
  { title: "Frame Challenges", content: "Define the specific challenges that you are aiming to address" },
  { title: "Map the Journey", content: "Show how the experience of a challenge plays out over time" },
  { title: "Customer Insights", content: "Define a set of insights from the notes you have gathered from conversations" },
  { title: "Business Model Canvas", content: "Define the way you can meet what people need in a sustained way" },
  { title: "Explore Analogies", content: "Find ways that different people in other settings has addressed the challenge" },
  { title: "Potential Customers", content: "List the different types of scenarios that you could serve people within" },
  { title: "Create Framework", content: "Generate new frameworks specific to the challenge you are exploring" },
  { title: "Design Principles", content: "Define the ways in which you will assess which designs to continue with" }
];

