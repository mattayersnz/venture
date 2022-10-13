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
`;
