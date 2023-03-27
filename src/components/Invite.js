import styled from 'styled-components';


export default function Invite() {
  return (
    <InviteContainer>
      <InviteStatement>Invitation</InviteStatement>
      <InviteText>Details to come...</InviteText>
      <InviteButton>Get in Touch</InviteButton>
    </InviteContainer>
  );
}

const InviteContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 70%;
  padding: 64px;
  border-top: 1px solid #DCDCDC;
  justify-content: center;
  align-items: center;
`;

const InviteStatement = styled.div`
  font-family: 'Yeseva One', cursive;
  font-size: 36px;
  text-align: center;
  @media only screen and (max-width: 900px) {
    font-size: 28px;
  }
`;

const InviteText = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  padding-top: 24px;
`;

const InviteButton = styled.button`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: black;
  margin-top: 48px;
  padding: 14px;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out, box-shadow 0.5s ease-in-out;

  &:hover {
    color: white;
    background-color: black;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
`;

