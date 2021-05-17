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
import {Battery} from './views/atoms/Battery/Battery';
import {Energy} from './views/molecules/Energy/Energy';
import {UserIcon} from './views/atoms/UserIcon';
import avatar from './views/assets/avatars/avatar1.svg';
import {UserProgressBar} from './views/atoms/UserProgressBar';
import {UserProgress} from './views/molecules/UserProgress';
import {Subtitle} from './views/atoms/Subtitle';
import {Header} from './views/organisms/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Headline1 body={'H1 Head'} isDark={true} />
      <Headline2 body={'H1 Head'} isDark={true} />
      <Headline3 body={'H1 Head'} isDark={true} />
      <Headline4 body={'H1 Head'} isDark={true} />
      <Headline5 body={'H1 Head'} isDark={true} />
      <Headline6 body={'H1 Head'} isDark={true} />
      <Wallet balance={10000} />
      <Battery />
      <Energy />
      <UserIcon avatar={avatar} />
      <UserProgressBar progress={20} />
      <Subtitle value={'Tony'} />
      <UserProgress
        rank={10}
        level={3}
        exp={20}
        expMax={200}
        icon={avatar}
        userName={'Elliot Alderson'}
        progress={10}
      />
    </div>
  );
}

export default App;
