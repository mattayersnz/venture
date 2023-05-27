import styled from 'styled-components';
import Header from './components/Header';
import Essay from './components/Essay';
import ListeningPractices from './components/ListeningPractices';
import FramingPractices from './components/FramingPractices';
import PrototypingPractices from './components/PrototypingPractices';
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
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);


export default function App() {

  return (
    <AppContainer>
      <Header />
      <Essay />
      <ListeningPractices />
      <FramingPractices />
      <PrototypingPractices />
      <Invite />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
