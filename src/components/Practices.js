import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import deepLoves from '../images/deepLoves.jpg';
import humanTensions from '../images/humanTensions.jpg';
import conversationCategories from '../images/conversationCategories.jpg';
import busyStreet from '../images/busyStreet.jpg';
import market from '../images/market.jpg';
import storyboard from '../images/storyboard.jpg';
import challenges from '../images/challenges.jpg';
import prototype from '../images/prototype.jpg';


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
      <CardPageHeader>{card.title}</CardPageHeader>
      <CardPageContent>{card.content}</CardPageContent>
      { card.image ? <CardPageImage src={card.image} alt={card.altImage} /> : null }
      { card.step1 ? <CardPageContent>{card.step1}</CardPageContent> : null }
      { card.step2 ? <CardPageContent>{card.step2}</CardPageContent> : null }
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
  position: fixed;
  top: 10%; // Add this for the 10% top margin
  left: 50%;
  transform: translateX(-50%); // Centers the container horizontally
  width: 60%;
  height: 90vh; // Set the height so it fills 90% of the screen
  overflow-y: auto; // Enable scrolling for contents inside it
  z-index: 1000;
  
  @media (max-width: 768px) {
    padding: 10%;
    width: 80vw;
  }

  &::-webkit-scrollbar {
    display: none;  // Hide scrollbar for Chrome, Safari, and Opera
  }
  scrollbar-width: none;  // Hide scrollbar for Firefox
  -ms-overflow-style: none;  // Hide scrollbar for IE 10+
`;

const CardPageHeader = styled.div`
  font-family: 'Yeseva One', cursive;
  font-size: 34px;
  padding-bottom: 28px;
  color: #212121;
  @media (max-width: 768px) {
    font-size: 28px;
    padding-bottom: 14px;
  }
`;

const CardPageImage = styled.img`
  padding-bottom: 32px;
  width: 100%;
`;

const CardPageContent = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: #212121;
  padding-bottom: 32px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding-bottom: 14px;
  }
`;

const CloseButton = styled.button`
  background-color: white;
  border: 1px solid #212121;
  color: #212121;
  margin-top: 24px;
  margin-bottom: 48px;
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
    font-size: 14px;
    margin-left: 10%;
    margin-right: 10%;
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
    font-size: 14px;
  }
`;

const cardContentData = [

  { 
    title: "Deep Loves", 
    content: "Explore different ways to start a meaningful conversation about what people care about",
    step1: "Start with an aspect of life that you are interested in and ask a question of someone about it in a way that can only be answered with a story. Something like 'tell me about that last time you experienced { what you are interested in }?' or 'walk me through what { what you are interested in } is like for you?",
    step2: "As people talk through their experience, explore the scenes of what they are telling you about. Ask about who was involved, what they were thinking or feeling, what they were hoping, and what they really cared about",
    image: deepLoves,
    altImage: "mug on table"
  },
  { 
    title: "Human Tensions", 
    content: "Discover aspects of humanity in tension that need to be created for",
    step1: "Reflect on the question 'what aspect of humanity would I like to evoke in what I am building?', then start conversations about people's current experience of this aspect of humanity. In what settings to they experience it? When and how do they experience it?",
    step2: "Always structure your questions to evoke stories. Then ask people to reflect on how their stories make sense to them when you find tensions in what they are saying. Explore their struggles and hopes in experience that the aspect of humanity that you would like to help to evoke.",
    image: humanTensions,
    altImage: "people helping each other"
  },
  { 
    title: "Noting Categories", 
    content: "Take note the ways that people talk about the world",
    step1: "Take your notebook into a conversation or a physical setting that your are interested in. As people talk note down some of the key phrase, categories or metaphors that they are using as they speak.",
    step2: "Take particular notice of how people make sense of themselves. How they speak about their interests, fears, hopes, or troubles? How they tell their stories, and what they tell stories about?",
    image: conversationCategories,
    altImage: "people in conversation"
  },
  { 
    title: "Exploring Experience", 
    content: "Structure questions to explore a particular experience someone has" ,
    step1: "Identify the experience that people have that you are interested in exploring. Then start with a question that asks people to put themselves in the scene of a recent time that they had that experience. A question could be 'when did you last experience { what you are interested in exploring }?', 'walk me through what happened for you?'",
    step2: "Often people will quickly give you the outline of their experience in a 10 or 20 seconds. Then start with the beginning and ask them to step you through the experience that they have outlined, exploring the people involved, the tensions they held, the decisions they made, and how they made sense of what was happening.",
    image: busyStreet,
    altImage: "a busy street of people"
  },
  { 
    title: "Immersion", 
    content: "Explore situations that help you understand elements to include in what you create",
    step1: "Identify a situation that you would like to explore and take your camera, notebook and pen to a time when this situation is occuring. If possible find someone that experiences this situation that you could join and reflect with them what is happening.",
    step2: "Take note of the different scenes in the situation, explore the objects that populate the scenes. Notice the activities that are happening, and the people that are involved. What are the patterns that you are noticing? What surprises you?",
    image: market,
    altImage: "saturday market"
  },
  { 
    title: "Storyboards", 
    content: "Map the story of how someone experiences what you are interested in",
    step1: "Identify an experience that you would like to play out in a storyboard. Start with five squares on a sheet of page to provide the general structure of the storyboard. To begin, in the first squad sketch a simple scene of what happens in someones life that triggers them to enter the experience that you are mapping out.",
    step2: "In the second square sketch scene of how the person explores how they want to navigate the experience. In the third square sketch how they engage with how they navigate the experience, or what they default to. In the forth square sketch how they actually navigate the experience in the way they have chosen. Finally in the fifth square, sketch how they reflect on their experience.",
    image: storyboard,
    altImage: "storyboard"
  },
  { 
    title: "Creative Challenges", 
    content: "Frame challenges in a way that positions people to explore their potential",
    step1: "Start with the challenge that you would like to address and begin to write down as many statements that you can think of about the challenge that start with 'How might we...?'",
    step2: "Keep developing the statements to try and place them at a level of abstraction where there is not too many potential solutions within their scope, but more than one or two.",
    image: challenges,
    altImage: "design challenges on post-its"
  },
  { 
    title: "Prototyping", 
    content: "Create physical objects to help bring your ideas into reality",
    step1: "Start with an idea that you would like to explore, then think about the most important aspects of the idea to you would like to test and learn about. Then consider a range of different ways that you could bring the aspect you are considering into physical form.",
    step2: "There could be simple ways to play out the aspect of your idea in an activity or interaction. There could be a physical object that represents the idea, there could be sketch or 3D model, there could be a represenation of the idea formed with a basic material like wood, metal or paper.",
    image: prototype,
    altImage: "prototyping materials"
  }
];

