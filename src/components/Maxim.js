import styled from 'styled-components';
import {Player} from 'react-simple-player';


export default function Maxim({ maximQuote, maximText }) {
  return (
    <MaximContainer>
      <MaximStatement>{maximQuote}</MaximStatement>
      <MaximText>{maximText}</MaximText>
    </MaximContainer>
  );
}

const MaximContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  border-top: 1px solid #DCDCDC;
  justify-content: center;
  align-items: center;
  padding: 64px;
`;


const MaximStatement = styled.div`
  font-family: 'Yeseva One', cursive;
  font-size: 36px;
`;

const MaximText = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  padding-top: 24px;
`;
