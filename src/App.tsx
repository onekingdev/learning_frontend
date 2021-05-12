import React from 'react';
import {
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
} from './views/atoms/Headline/Headline';
import {Wallet} from './views/molecules/Wallet/Wallet';
import {ServiceButton} from './views/atoms/ServiceButton';
import google from './views/assets/google-logo.svg';
import {Battery} from './views/atoms/Battery';

function App() {
  return (
    <div className="App">
      <Headline1 body={'H1 Head'} isDark={true} />
      <Headline2 body={'H1 Head'} isDark={true} />
      <Headline3 body={'H1 Head'} isDark={true} />
      <Headline4 body={'H1 Head'} isDark={true} />
      <Headline5 body={'H1 Head'} isDark={true} />
      <Headline6 body={'H1 Head'} isDark={true} />
      <Wallet money={10000} />
      <ServiceButton value={'xd'} icon={google} onClick={() => {}} />
      <Battery />
    </div>
  );
}

export default App;
