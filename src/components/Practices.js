import React from 'react';
import styled from 'styled-components';

export default function Practices() {
  return (
    <PracticesContainer>
      <PracticesHeader>Listening Practices</PracticesHeader>
      <PracticesGrid />
    </PracticesContainer>
  );
}

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
  font-size: 36px;
  padding-bottom: 2rem;
  @media only screen and (max-width: 900px) {
    font-size: 24px;
  }
`;

const PracticesGrid = () => {
  return (
    <GridContainer>
      {cardContentData.map((cardContent, index) => (
        <Card key={index}>
          <CardContent title={cardContent.title} content={cardContent.content} />
        </Card>
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
  background-color: #FAFAFA;
  transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease;

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
