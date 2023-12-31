import { FC, useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { ParentPgStepper } from 'views/molecules/ParentPgStepper/ParentPgStepper';
import { PaymentMethod } from 'views/molecules/PaymentMethod/PaymentMethod';
import { ParentPgContainer } from 'views/molecules/ParentPgContainer/ParentPgContainer';
import { PackagePanel } from 'views/molecules/PackagePanel/PackagePanel';
import {
  TipContainer, PackageContainer,
  Subject, SubjectContainer,
} from './Style';
import math from 'views/assets/math-elements.svg';
import ela from 'views/assets/ela-elements.svg';
import science from 'views/assets/science-elements.svg';
import financial from 'views/assets/financial_elements.svg';
import health from 'views/assets/health-elements.svg';
import { LoadingContext } from 'react-router-loading';
import { getPlans } from 'app/actions/paymentActions'
import { useSnackbar } from 'notistack';
import { dictionary } from './dictionary';
import { Box } from '@mui/material';

const stripePromise = loadStripe('pk_test_RqGIvgu49sLej0wM4rycOkJh');

export const Payment: FC = () => {
  const loadingContext = useContext(LoadingContext);
  const { enqueueSnackbar } = useSnackbar();
  const { language, couponCode, token } = useSelector((state: any) => state.user);
  const discount = +(couponCode?.percentage) || 0

  const [plans, setPlans] = useState<any>({
    Gold: {
      currentPrice: 0,
      priceMonth: 0,
      priceYear: 0
    },
    Combo: {
      currentPrice: 0,
      priceMonth: 0,
      priceYear: 0
    },
    Sole: {
      currentPrice: 0,
      priceMonth: 0,
      priceYear: 0
    }
  })
  const [isSpecialCode, setIsSpecialCode] = useState(false)
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);

  const onChangePackage = (type: string, count: number, period: string) => {
    plans[type].childCount = count;
    plans[type].period = period;
    plans[type].currentPrice = (period === 'month' ? plans[type].priceMonth : plans[type].priceYear)
    setPlans({ ...plans })
    setShowPaymentMethod(true);
  };

  const setPlanData = async () => {
    const result: any = await getPlans(token);
    if (!result.success) {
      enqueueSnackbar(result.msg, { variant: 'error' });
      return;
    }
    const plans_re_object: any = {
      Gold: [],
      Combo: [],
      Sole: []
    };
    for (const plan of result.data) {
      const name: any = plan.name;
      plans_re_object[name] = plan;
      plans_re_object[name].currentPrice = plan.priceMonth;
    }
    setPlans(plans_re_object)
    // setPackPrice(plans_re_object)

    loadingContext.done();
  }

  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();

    if (discount === 100) setIsSpecialCode(true)
    // else setIsSpecialCode(true) //For always enable special code for first release

    setPlanData();
  }, []);
  return (
    <ParentPgContainer onlyLogoImgNav={true}>
      <Box display='flex' flexDirection={'column'} alignItems='center'>
        <ParentPgStepper step={2} />
        <TipContainer>
          <Alert severity='info'>
            {dictionary[language]?.choosePackageInfo}
            <br />
            <SubjectContainer>
              <div className='flex align-center'>
                <Subject src={math} />
                &nbsp;{dictionary[language]?.math}
              </div>
              <div className='flex align-center'>
                <Subject src={ela} />
                &nbsp;{dictionary[language]?.elaSgithWords}
              </div>
              <div className='flex align-center'>
                <Subject src={science} />
                &nbsp;{dictionary[language]?.science}
              </div>
            </SubjectContainer>
            <SubjectContainer>
              <div className='flex align-center'>
                <Subject src={financial} />
                &nbsp;{dictionary[language]?.financialLiteracy}
              </div>
              <div className='flex align-center'>
                <Subject src={health} />
                &nbsp;{dictionary[language]?.healthAndSafety}
              </div>
            </SubjectContainer>
          </Alert>
        </TipContainer>
        <PackageContainer>
          <PackagePanel
            type='Gold'
            price={plans.Gold.currentPrice}
            onChange={(childrenCount, plan) =>
              onChangePackage('Gold', childrenCount, plan)
            }
            isSpecialCode={isSpecialCode}
          />
          <PackagePanel
            type='Combo'
            price={plans.Combo.currentPrice}
            onChange={(childrenCount, plan) =>
              onChangePackage('Combo', childrenCount, plan)
            }
            disabled={isSpecialCode}
            isSpecialCode={false}
          />
          <PackagePanel
            type='Sole'
            price={plans.Sole.currentPrice}
            onChange={(childrenCount, plan) =>
              onChangePackage('Sole', childrenCount, plan)
            }
            disabled={isSpecialCode}
            isSpecialCode={false}
          />
        </PackageContainer>
        {/* {!isSpecialCode &&
          <Alert severity='info' className='m-b-35' style={{width: '72%', fontSize: '40px', justifyContent: 'center', alignItems: 'center', maxWidth: '1414px'}}>
            {dictionary[language]?.receive} {offRate}% {dictionary[language]?.offThesePricesForEachAdditionalChildOnYourAccount}
          </Alert>
        } */}
        <Elements stripe={stripePromise}>
          {showPaymentMethod && (
            <PaymentMethod
              plans={plans}
              // offRate={100}
              offRate={100 - discount}
              isSpecialCode={isSpecialCode}
            />
          )}
        </Elements>
      </Box>
    </ParentPgContainer>
  );
};
