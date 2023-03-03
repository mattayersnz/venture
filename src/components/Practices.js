import styled from 'styled-components';


export default function Practices() {

  return (
    <PracticesContainer>
      <PracticesHeader>Practices</PracticesHeader>
      <PracticesGrid>
        <p>Card</p>
      </PracticesGrid>
    </PracticesContainer>
  );
}

const PracticesContainer = styled.div`
  margin-top: -5%;
  margin-bottom: 10%;
  padding: 10%;
  border: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
`;

const PracticesHeader = styled.p`
  font-family: 'Yeseva One', cursive;
  font-size: 36px;
  @media only screen and (max-width: 900px) {
    font-size: 24px;
  }
`;

const PracticesGrid = styled.p`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;