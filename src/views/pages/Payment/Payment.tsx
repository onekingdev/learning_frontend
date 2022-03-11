import { FC, useEffect, useState, useContext } from 'react';
import Alert from '@mui/material/Alert';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { ParentPgStepper } from 'views/molecules/ParentPgStepper/ParentPgStepper';
import { PaymentMethod } from 'views/molecules/PaymentMethod/PaymentMethod';
import { ParentPgContainer } from 'views/molecules/ParentPgContainer/ParentPgContainer';
import { PackagePanel } from 'views/molecules/PackagePanel/PackagePanel';
import {
  TipContainer,
  PackageContainer,
  Subject,
  SubjectContainer,
} from './Style';
import math from 'views/assets/packageIcons/math_gold.svg';
import ela from 'views/assets/packageIcons/ela_gold.svg';
import science from 'views/assets/packageIcons/science_gold.svg';
import financial from 'views/assets/packageIcons/financial_gold.svg';
import health from 'views/assets/packageIcons/health_gold.svg';
const stripePromise = loadStripe('pk_test_RqGIvgu49sLej0wM4rycOkJh');
import { LoadingContext } from 'react-router-loading';

export const Payment: FC = () => {
  const loadingContext = useContext(LoadingContext);

  const [prices, setPrices] = useState({
    Gold: {
      month: 0,
      year: 0,
    },
    Combo: {
      month: 0,
      year: 0,
    },
    Sole: {
      month: 0,
      year: 0,
    },
  });

  const [childrenCount, setChildrenCount] = useState({
    Gold: 0,
    Sole: 0,
    Combo: 0,
  });

  const [planType, setPlanType] = useState({
    Gold: 'month',
    Sole: 'month',
    Combo: 'month',
  });

  const [showPaymentMethod, setShowPaymentMethod] = useState(false);
  const [offRate, setOffRate] = useState(50);

  const setPackPrice = () => {
    /*------------ get package price data from db -S--------------*/
    const gold_m = 19.99;
    const gold_y = 19.99;
    const combo_m = 14.99;
    const combo_y = 14.99;
    const sole_m = 5.99;
    const sole_y = 5.99;
    /*------------ get package price data from db -E--------------*/

    setPrices({
      Gold: {
        month: gold_m,
        year: gold_y,
      },
      Combo: {
        month: combo_m,
        year: combo_y,
      },
      Sole: {
        month: sole_m,
        year: sole_y,
      },
    });
  };

  const onChangePackage = (type: string, count: number, plan: string) => {
    console.log('package is changing', type, count, plan);
    let temp: any = {...childrenCount};
    temp[type] = count;
    if (JSON.stringify(temp) !== JSON.stringify(childrenCount))
      setChildrenCount(temp);

    temp = {...planType};
    temp[type] = plan;
    if (JSON.stringify(temp) !== JSON.stringify(planType)) setPlanType(temp);

    setShowPaymentMethod(true);
  };

  useEffect(() => {
    setPackPrice();
    setOffRate(50);
    loadingContext.done();
  }, []);
  return (
    <ParentPgContainer onlyLogoImgNav={true}>
      <>
        <ParentPgStepper step={1} />
        <TipContainer>
          <Alert severity="info">
            In Socrates, students can get mutiple Areas of Knowledge depend of
            the package they will have All, Two Areas or a Solo Area! Choose the
            best package for your kids!
            <br />
            <SubjectContainer>
              <div className="flex align-center">
                <Subject src={math} />
                &nbsp;Math
              </div>
              <div className="flex align-center">
                <Subject src={ela} />
                &nbsp;ELA + SIGHT WORDS
              </div>
              <div className="flex align-center">
                <Subject src={science} />
                &nbsp;SCIENCE
              </div>
            </SubjectContainer>
            <SubjectContainer>
              <div className="flex align-center">
                <Subject src={financial} />
                &nbsp;FINANCIAL LITERACY
              </div>
              <div className="flex align-center">
                <Subject src={health} />
                &nbsp;HEALTH & SAFETY
              </div>
            </SubjectContainer>
          </Alert>
        </TipContainer>
        <PackageContainer>
          <PackagePanel
            type="Gold"
            price={prices.Gold}
            onChange={(childrenCount, plan) =>
              onChangePackage('Gold', childrenCount, plan)
            }
          />
          <PackagePanel
            type="Combo"
            price={prices.Combo}
            onChange={(childrenCount, plan) =>
              onChangePackage('Combo', childrenCount, plan)
            }
          />
          <PackagePanel
            type="Sole"
            price={prices.Sole}
            onChange={(childrenCount, plan) =>
              onChangePackage('Sole', childrenCount, plan)
            }
          />
        </PackageContainer>
        <Alert severity="info" className="m-b-35" style={{width: '72%'}}>
          Add 2nd kid with {offRate}% off
        </Alert>
        <Elements stripe={stripePromise}>
          {showPaymentMethod && (
            <PaymentMethod
              prices={{
                Gold: prices.Gold[planType.Gold === 'month' ? 'month' : 'year'],
                Combo:
                  prices.Combo[planType.Combo === 'month' ? 'month' : 'year'],
                Sole: prices.Sole[planType.Sole === 'month' ? 'month' : 'year'],
              }}
              plans={planType}
              childrenCounts={childrenCount}
              offRate={offRate}
            />
          )}
        </Elements>
      </>
    </ParentPgContainer>
  );
};
