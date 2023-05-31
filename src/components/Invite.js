import styled from 'styled-components';


export default function Invite() {
  return (
    <InviteContainer>
      <InviteStatement>Come and practice this with us</InviteStatement>
      <InviteText>Join a six week course with a small group of founders, leaders, designers and entreprenuers where we will get a deeper skill in the practices of listening, framing and prototyping.</InviteText>
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
  color: #172743;
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
  text-align: center;
  width: 70%;
  @media only screen and (max-width: 900px) {
    font-size: 12px;
    width: 100%;
  }
`;

const InviteButton = styled.button`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: white;
  margin-top: 48px;
  padding: 14px;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: #172743;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

