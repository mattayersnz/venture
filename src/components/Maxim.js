import styled from 'styled-components';
import Audio from './Audio';


export default function Maxim({ maximQuote, maximText }) {
  return (
    <MaximContainer>
      <Audio />
      <TextContainer>
        <MaximStatement>{maximQuote}</MaximStatement>
        <MaximText>{maximText}</MaximText>
      </TextContainer>
    </MaximContainer>
  );
}

const MaximContainer = styled.div`
  display: flex;
  width: 80%;
  border-top: 1px solid #DCDCDC;
  justify-content: center;
  align-items: center;
  padding: 64px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 92px;
  align-items: right;
`;

const MaximStatement = styled.div`
  font-family: 'Yeseva One', cursive;
  font-size: 36px;
`;

const MaximText = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  padding-top: 24px;
  padding-left: 48px;
`;
