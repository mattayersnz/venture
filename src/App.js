import { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Question from './components/Question';
import Maxim from './components/Maxim';
import Invite from './components/Invite';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0i_JQnZomjIWwGRKoR3TC2LSC_AvpML4",
  authDomain: "venture-bab13.firebaseapp.com",
  projectId: "venture-bab13",
  storageBucket: "venture-bab13.appspot.com",
  messagingSenderId: "300212525037",
  appId: "1:300212525037:web:4806821bcf4d36b58ff9e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default function App() {

  const [focal, setFocal] = useState('');
  const [subsidiary, setSubsidiary] = useState('');

  const maxims = [
    {
      maximQuote: `"To truely know ${focal} you need to love ${focal}."`,
      maximText: "Description"
    },
    {
      maximQuote: `"You need to embody ${subsidiary} in order to know ${focal}."`,
      maximText: "Description"
    },
    {
      maximQuote: `"Learning ${focal} can't be done just by gathering information."`,
      maximText: "Description"
    }
  ]

  return (
    <AppContainer>
      <Header />
      <Question
        focal={focal}
        setFocal={setFocal}
        subsidiary={subsidiary}
        setSubsidiary={setSubsidiary}
      />
      {(focal.length && subsidiary.length) ? maxims.map((item, i) => (
          <Maxim key={i} maximQuote={item.maximQuote} maximText={item.maximText} />
      )) : null }
      <Invite />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
