import styled from 'styled-components';


export default function Essay() {

  return (
    <EssayContainer>
      <EssayBody>
      Modernity, with its focus on information, can blind us to the beauty and wonder of the astounding world around us. To counter this while creating new ventures, we need a different way to think about what we know, something closer to how plumbers and carpenters make sense of what to do - things must line up. <br /><br />

      We create from our embodied sense of what we know about the world, similar to riding a bike - a lived, skilled awareness. We can't just decide want to create by merely answering questions, but rather must provoke a deeper exploration of reality. Authoritative guides must be followed, committing to the tools, methods and journey of creating our venture. <br /><br />

      Embracing constraints, we can come to appreciate the beauty of a generous world in which we can be transformed, just as an artist appreciates the vibrancy of their canvas. Design in this sense submits to the constraints of the real, trusting that different parts will come together in ways we don't expect. <br /><br />

      The challenge of modernity is to unlearn the blindness of pure information, reconnecting with our innate wonder and communion with the world. We should foster a way of creating ventures that encourages this childlike engagement, inviting an understanding of the real that aligns with Simone Weil's belief that by this trusting act of knowing we are implicitly loving God.
      </EssayBody>
    </EssayContainer>
  );
}

const EssayContainer = styled.div`
  margin-top: -5%;
  margin-bottom: 15%;
  padding: 10%;
  border: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 0.25px solid #DCDCDC;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  width: 60%;
`;

const EssayBody = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 42px;
  font-weight: 200;
  @media only screen and (max-width: 900px) {
    font-size: 12px;
    line-height: 24px;
  }
`;