import styled from 'styled-components';


export default function Invite() {
  return (
    <InviteContainer>
      <InviteStatement>Venture Invitation</InviteStatement>
      <InviteText>Details to come...</InviteText>
      <InviteButton>Get in Touch</InviteButton>
    </InviteContainer>
  );
}

const InviteContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 80%;
  padding: 64px;
  border-top: 1px solid #DCDCDC;
  justify-content: center;
  align-items: center;
`;

const InviteStatement = styled.div`
  font-family: 'Yeseva One', cursive;
  font-size: 36px;
`;

const InviteText = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  padding-top: 24px;
`;

const InviteButton = styled.button`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  margin-top: 48px;
  padding: 14px;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
`;
