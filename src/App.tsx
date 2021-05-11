import React from 'react';
import {
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
} from './views/atoms/Headline/Headline';

function App() {
  return (
    <div className="App">
      <Headline1 body={'H1 Head'} isDark={true} />
      <Headline2 body={'H1 Head'} isDark={true} />
      <Headline3 body={'H1 Head'} isDark={true} />
      <Headline4 body={'H1 Head'} isDark={true} />
      <Headline5 body={'H1 Head'} isDark={true} />
      <Headline6 body={'H1 Head'} isDark={true} />
    </div>
  );
}

export default App;
