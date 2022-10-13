import styled from 'styled-components';
import Header from './components/Header';
import Maxim from './components/Maxim';
import maxims from './maxims';


export default function App() {
  return (
    <AppContainer>
      <Header />
      {maxims.map((item, i) => (
            <Maxim key={i} maximQuote={item.maximQuote} maximText={item.maximText} />
      ))}
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
