import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

export default function Practices() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <PracticesContainer>
            <PracticesHeader>Practices</PracticesHeader>
            <PracticesDescription>These are some practices to help you engage in the world and serve people well.</PracticesDescription>
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
  font-size: 38px;
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
    font-size: 13px;
    margin-left: 10%;
    margin-right: 10%;
  }
`;

const CardHeader = styled.div`
  font-family: 'Yeseva One', cursive;
  font-size: 12px;
  padding-bottom: 28px;
  color: #212121;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const CardContentStyle = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  color: #212121;
  @media (max-width: 768px) {
    font-size: 13px;
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
  transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  text-decoration: none;
  color: #212121;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transform: translateY(-4px);
    cursor: pointer;
  }
`;

const CardContent = ({ title, content }) => {
  return (
    <div>
      <CardTitle>{title}</CardTitle>
      <CardBody>{content}</CardBody>
    </div>
  );
};

const CardTitle = styled.h3`
  font-family: 'Yeseva One', cursive;
  font-size: 20px;
  font-weight: 200;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CardBody = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 200;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const cardContentData = [
  { title: "Deep Loves", content: "Explore different ways to start a meaningful conversations about what people care about" },
  { title: "Human Tensions", content: "Discover aspects of humanity in tension that need to be created for" },
  { title: "Noting Categories", content: "Take note the ways that people talk about the world" },
  { title: "Exploring Experience", content: "Structure questions to explore a particular experience someone has" },
  { title: "Immersion", content: "Explore situations that help you understand elements to include in what you create" },
  { title: "Storyboards", content: "Map the story of how someone experiences what you are interested in" },
  { title: "Creative Challenges", content: "Frame challenges in a way that positions people to explore their potential" },
  { title: "Prototyping", content: "Create physical objects to help bring your ideas into reality"}
];

