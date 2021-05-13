import {FC, useEffect} from 'react';
import styled from 'styled-components';
import {Body} from '../../atoms/Body';
import {Button} from '../../atoms/Button';
import {Caption} from '../../atoms/Caption';
import {Headline4, Headline5} from '../../atoms/Headline/Headline';
import {ServiceButton} from '../../atoms/ServiceButton';
import {TextInput} from '../../atoms/TextInput';
import {BasicColor} from '../../Color';
import {dictionary} from './dictionary';
import google from '../../assets/google-logo.svg';

export const LogIn = () => {
  useEffect(() => {
    console.log(dictionary.en.welcome, 'testy test');
  }, []);
  return (
    <Wrapper>
      <GreetWrapper>test</GreetWrapper>
      <LoginWrapper>
        <Headline4 body={dictionary['en'].welcome} isBold={true} />
        <Body value={dictionary['en'].instructions} />
        <Headline5 body={dictionary['en'].login} isBold={true} />
        <TextInput label={dictionary['en'].email} />
        <TextInput label={dictionary['en'].password} isSecret={true} />
        <Caption value={dictionary['en'].forgot} />
        <Button value={dictionary['en'].login} />
        <Button value={dictionary['en'].create} color={BasicColor.orange} />
        <ServiceButton
          value={dictionary['en'].with_google}
          icon={google}
          onClick={() => {}}
        />
        <Caption value={dictionary['en'].about} />
        <Caption value={dictionary['en'].privacy} />
        <Caption value={dictionary['en'].children_privacy} />
      </LoginWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 57% 43%;
  height: 100vh;
`;
const LoginWrapper = styled.div`
  background-color: ${BasicColor.blue};
`;
const GreetWrapper = styled.div``;
