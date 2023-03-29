import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

export default function Practices() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <PracticesContainer>
            <PracticesHeader>Listening Practices</PracticesHeader>
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
`;

const CloseButton = styled.button`
  background-color: white;
  border: 1px solid #212121;
  margin-top: 24px;
  cursor: pointer;
`;

const PracticesContainer = styled.div`
  margin-top: -5%;
  margin-bottom: 5%;
  padding: 10%;
  border: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const PracticesHeader = styled.div`
  font-family: 'Yeseva One', cursive;
  font-size: 32px;
  padding-bottom: 24px;
`;

const CardHeader = styled.div`
  font-family: 'Yeseva One', cursive;
  font-size: 32px;
  padding-bottom: 24px;
  color: #212121;
`;

const CardContentStyle = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: #212121;
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
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;
`;

const Card = styled.div`
  border: 0.25px solid #DCDCDC;
  padding: 0.5rem 2rem 2rem 2rem;
  background-color: #FDFDFD;
  transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  color: #212121;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transform: translateY(-4px);
    background-color: #FFFFFF;
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
  { title: "Establishing Intent", content: "Clarify the reason for the conversations you want to have with people" },
  { title: "Conversation Starters", content: "Explore different ways to start a meaningful conversation" },
  { title: "Structured Questions", content: "Structure questions to explore a particular experience someone has" },
  { title: "Noting Categories", content: "Take note the ways that people talk about the world" },
  { title: "Story Map", content: "Map the story of how someone experiences what you are interested in" },
  { title: "Hearing Needs", content: "Learn to listen for the met and unmet needs that someone has" },
  { title: "Exploring Ideas", content: "Explore ideas with someone in a way that also helps you explore their experience" },
  { title: "Engaging Groups", content: "Participate in a group in a way that explores how they form meaning together" }
];

