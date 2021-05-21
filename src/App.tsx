// import {LogIn} from './views/pages/Login/Login';

import {UserIcon} from './views/atoms/UserIcon';
import {TopicProgress} from './views/molecules/TopicProgress';

function App() {
  return (
    <div className="App">
      {/* <LogIn /> */}
      <TopicProgress
        points={5}
        maxPoints={12}
        title={'test'}
        color={'#FF0000'}
      />
      <UserIcon src={'https://picsum.photos/200'} />
    </div>
  );
}

export default App;
