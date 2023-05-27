import styled from 'styled-components';


export default function Header() {
  return (
    <HeaderContainer>
      <h1>Venture</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  font-family: 'Yeseva One', cursive;
  font-size: 36px;
  color: #172743;
  @media only screen and (max-width: 900px) {
    font-size: 24px;
  }
`;
