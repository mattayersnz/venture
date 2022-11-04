import styled from 'styled-components';


export default function Question({ focal, setFocal, subsidiary, setSubsidiary }) {

  const handleFocalChange = (event) => {
    setFocal(event.target.value);
  }

  const handleSubsidiaryChange = (event) => {
    setSubsidiary(event.target.value);
  }

  return (
    <QuestionContainer>
      <p>I'm exploring how to <Focal value={focal} onChange={handleFocalChange}/> with <Subsidiary value={subsidiary} onChange={handleSubsidiaryChange}/></p>
    </QuestionContainer>
  );
}

const QuestionContainer = styled.div`
  margin-top: -10%;
  margin-bottom: 10%;
  padding: 10%;
  border: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Yeseva One', cursive;
  font-size: 36px;
  @media only screen and (max-width: 900px) {
    font-size: 24px;
  }
  border: 2px solid black;
  box-shadow: 5px 5px #888888;
  width: 60%;
`;

const Focal = styled.input`
  outline: none;
  font-family: 'Yeseva One', cursive;
  font-size: 36px;
  width: 60%;
  @media only screen and (max-width: 900px) {
    font-size: 24px;
    width: 40%;
  }
  border: 0;
  border-bottom: 2px solid black;
  background: -webkit-linear-gradient(200deg, #FFBF00 7.39%, #FF4F47 24.79%, #6A27BF 56.55%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subsidiary = styled.input`
  outline: none;
  font-family: 'Yeseva One', cursive;
  font-size: 36px;
  width: 80%;
  @media only screen and (max-width: 900px) {
    font-size: 24px;
    width: 60%;
  }
  border: 0;
  border-bottom: 2px solid black;
  margin-bottom: -10px;
  background: -webkit-linear-gradient(200deg, #FFBF00 7.39%, #FF4F47 24.79%, #6A27BF 56.55%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
