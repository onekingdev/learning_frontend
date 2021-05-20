import {FC, useEffect} from 'react';
// import {Body} from '../../atoms/Body';
import {Body} from '../../atoms/Body';
// import {Button} from '../../atoms/Button';
import {Button, ButtonColors} from '../../molecules/Button';
import {Button as ButtonText} from '../../atoms/Text/Button';
import {Caption} from '../../atoms/Caption';
import {Headline4, Headline5} from '../../atoms/Headline/Headline';
import {ServiceButton} from '../../atoms/ServiceButton';
import {TextInput} from '../../atoms/TextInput';
// import {BasicColor} from '../../Color';
import {dictionary} from './dictionary';
import google from '../../assets/google-logo.svg';
import greeting from '../../assets/greeting.svg';
import logo from '../../assets/socrates-logo.svg';
import {
  Wrapper,
  SocratesLogo,
  GreetingIllustration,
  LoginContainer,
  Actions,
  Legal,
  LoginHeader,
  LoginHeaderMobile,
  Services,
  ServicesMobile,
  Card,
} from './Style';
import {Divider} from '../../atoms/Divider';
import {BasicColor} from '../../Color';

const validatePassword = (password: string) => {
  return password !== 'test';
};

export const LogIn: FC = () => {
  useEffect(() => {
    console.log(dictionary.en.welcome, 'testy test');
  }, []);
  return (
    <Wrapper>
      <div>
        <SocratesLogo src={logo} alt="Brining education to the 21st century" />
        <GreetingIllustration
          src={greeting}
          alt="Brining education to the 21st century"
        />
        <LoginHeaderMobile>
          <Headline4
            body={dictionary['en'].welcome}
            isBold={true}
            isDark={true}
          />
          <Body value={dictionary['en'].instructions} isDark={true} />
        </LoginHeaderMobile>
      </div>
      <LoginContainer>
        <Card>
          <LoginHeader>
            <Headline4 body={dictionary['en'].welcome} isBold={true} />
            <Body value={dictionary['en'].instructions} />
          </LoginHeader>
          <Headline5 body={dictionary['en'].login} isBold={true} />
          <TextInput label={dictionary['en'].email} />
          <TextInput
            label={dictionary['en'].password}
            isSecret={true}
            validate={validatePassword}
            errMsg={'Your password is incorrect please try again'}
          />
          <Caption value={dictionary['en'].forgot} />
          <ServicesMobile>
            <ServiceButton
              value={dictionary['en'].with_google}
              icon={google}
              onClick={() => {}}
            />
          </ServicesMobile>
          <Actions>
            {/* <Button>
              <ButtonText> Login </ButtonText>
            </Button>
            <Divider value={dictionary['en'].or} />
            <Button>
                <ButtonText> Sign Up </ButtonText>
            </Button> */}
            <Button
              value={'test'}
              // color
            />
            <Button value={'test'} color={ButtonColors.login} />
          </Actions>
          <Services>
            <ServiceButton
              value={dictionary['en'].with_google}
              icon={google}
              onClick={() => {}}
            />
          </Services>
        </Card>
        <Legal>
          <Caption value={dictionary['en'].about} />
          <Caption value={dictionary['en'].privacy} />
          <Caption value={dictionary['en'].children_privacy} />
        </Legal>
      </LoginContainer>
    </Wrapper>
  );
};
