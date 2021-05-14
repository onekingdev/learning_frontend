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
import {Battery} from './views/atoms/Battery/Battery';
import {Energy} from './views/molecules/Energy/Energy';
import {AvatarSegment} from './views/atoms/AvatarSegment';
import avatar from './views/assets/avatars/avatar1.svg';

function App() {
  return (
    <div className="App">
      <Headline1 body={'H1 Head'} isDark={true} />
      <Headline2 body={'H1 Head'} isDark={true} />
      <Headline3 body={'H1 Head'} isDark={true} />
      <Headline4 body={'H1 Head'} isDark={true} />
      <Headline5 body={'H1 Head'} isDark={true} />
      <Headline6 body={'H1 Head'} isDark={true} />
      <Wallet balance={10000} />
      <ServiceButton value={'xd'} icon={google} onClick={() => {}} />
      <Battery />
      <Energy />
      <AvatarSegment avatar={avatar} />
    </div>
  );
}

export default App;
