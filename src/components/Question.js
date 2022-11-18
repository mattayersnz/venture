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
      <p>
        I'm trying to figure out
        <Focal value={focal} onChange={handleFocalChange}/>
        and so far I've figured out
        <Subsidiary value={subsidiary} onChange={handleSubsidiaryChange}/>
      </p>
    </QuestionContainer>
  );
}

const QuestionContainer = styled.div`
  margin-top: -5%;
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
  border: 0.25px solid #DCDCDC;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  width: 60%;
`;

const Focal = styled.input`
  outline: none;
  font-family: 'Yeseva One', cursive;
  font-size: 36px;
  width: 30%;
  margin: 0px 14px 0px 14px;
  @media only screen and (max-width: 900px) {
    font-size: 24px;
  }
  border: 0;
  border-bottom: 0.25px solid #DCDCDC;
  background: -webkit-linear-gradient(200deg, #FFBF00 7.39%, #FF4F47 24.79%, #6A27BF 56.55%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subsidiary = styled.input`
  outline: none;
  font-family: 'Yeseva One', cursive;
  font-size: 36px;
  width: 40%;
  margin: 0px 14px 0px 14px;
  @media only screen and (max-width: 900px) {
    font-size: 24px;
  }
  border: 0;
  border-bottom: 0.25px solid #DCDCDC;
  margin-bottom: -10px;
  background: -webkit-linear-gradient(200deg, #FFBF00 7.39%, #FF4F47 24.79%, #6A27BF 56.55%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
