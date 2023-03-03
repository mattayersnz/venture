import styled from 'styled-components';


export default function Essay() {

  return (
    <EssayContainer>
      <EssayHeader>Essay</EssayHeader>
      <p>Details to come...</p>
    </EssayContainer>
  );
}

const EssayContainer = styled.div`
  margin-top: -5%;
  margin-bottom: 10%;
  padding: 10%;
  border: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 0.25px solid #DCDCDC;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  width: 60%;
`;

const EssayHeader = styled.p`
  font-family: 'Yeseva One', cursive;
  font-size: 36px;
  @media only screen and (max-width: 900px) {
    font-size: 24px;
  }
`;