import {FC, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import ButtonGroup from '@mui/material/ButtonGroup';
import Alert from '@mui/material/Alert';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useStyles } from './Style';
import * as TYPES from '../../../app/types'
import {MockStore} from '../../../app/configureStore'
import { IStudent } from '../../../app/entities/student';
import { ParentPgStepper } from '../../molecules/ParentPgStepper/ParentPgStepper';
import { PaymentMethod } from '../../molecules/PaymentMethod/PaymentMethod';
import { ParentPgContainer } from '../../molecules/ParentPgContainer/ParentPgContainer'
import { PackagePanel } from '../../molecules/PackagePanel/PackagePanel'
import { TipContainer, FlexColumn, FlexRow, PackageContainer, Subject, SubjectContainer } from './Style'
import math from '../../assets/packageIcons/math_gold.svg'
import ela from '../../assets/packageIcons/ela_gold.svg'
import science from '../../assets/packageIcons/science_gold.svg'
import financial from '../../assets/packageIcons/financial_gold.svg'
import health from '../../assets/packageIcons/health_gold.svg'
import {ButtonColor, shadeColor, BasicColor} from '../../Color';
import Button from '../../molecules/MuiButton'
const stripePromise = loadStripe('pk_test_RqGIvgu49sLej0wM4rycOkJh');

export const Payment: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const language = 'en';
  const classes = useStyles();
  const stripeOptions = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  const [priceGold, setPriceGold] = useState(0);
  const [priceCombo, setPriceCombo] = useState(0);
  const [priceSole, setPriceSole] = useState(0)
  const [childrenCount, setChildrenCount] = useState(1);
  const [packageType, setPackageType] = useState("Gold");
  const [packagePrice, setPackagePrice] = useState(0);
  const [planType, setPlanType] = useState("month");
  const [path, setPath] = useState()
  const [showPaymentMethod, setShowPaymentMethod] = useState(false)

  const setPackPrice = () => {
    /*------------ get package price data from db -S--------------*/
    const gold = 19.99
    const combo = 14.99
    const sole = 5.99;
    /*------------ get package price data from db -E--------------*/

    setPriceGold(gold);
    setPriceCombo(combo);
    setPriceSole(sole);
    setPackagePrice(gold);
  }

  const onPackageSubmit = (type: string, paths: any) => {
    setPackageType(type);
    setPath(paths);
    setShowPaymentMethod(true)
  }

  useEffect(() => {
    setPackPrice();
  }, []);
  return (
        <ParentPgContainer onlyLogoImgNav={true}>
          <>
            <ParentPgStepper step={1}/>
            <TipContainer>
              <Alert severity="info">
                In Socrates, students can get mutiple Areas of Knowledge depend of the package they will have All, Two Areas or a Solo Area! Choose the best package for your kids!
                <br />
                <SubjectContainer>
                    <div className="flex align-center"><Subject src={math} />&nbsp;Math</div>
                    <div className="flex align-center"><Subject src={ela} />&nbsp;ELA + SIGHT WORDS</div>
                    <div className="flex align-center"><Subject src={science} />&nbsp;SCIENCE</div>
                </SubjectContainer>
                <SubjectContainer>
                  <div className="flex align-center"><Subject src={financial} />&nbsp;FINANCIAL LITERACY</div>
                  <div className="flex align-center"><Subject src={health} />&nbsp;HEALTH & SAFETY</div>
                </SubjectContainer>
              </Alert>
            </TipContainer>
            {/* <FlexColumn>
                <b>Choose your plan</b>
                <br />
                <FlexRow style={{flexWrap: 'unset'}}>
                  <Button bgColor={BasicColor.green} fontSize={24} value="Monthly" onClick={()=>{setPlanType("month")}} />
                  <Button fontSize={24} variant="outlined" color="black" borderColor="black" value="Yearly" margin="0 0 0 -64px" onClick={()=>{setPlanType("year")}} />
                </FlexRow>
              </FlexColumn>
              <FlexColumn>
                <b>Number of Children</b>
                <br />
                <FlexRow>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                  <Button variant="outlined" color="black" borderColor="black" radius={0} fontSize={24} height={50} width={50} value="-" onClick={() => childrenCount > 1 && setChildrenCount(childrenCount - 1)} />
                  <Button variant="outlined" color="black" borderColor="black" radius={0} fontSize={24} height={50} width={50} value={""+childrenCount} />
                  <Button variant="outlined" color="black" borderColor="black" radius={0} fontSize={24} height={50} width={50} value="+" onClick={() => setChildrenCount(childrenCount + 1)} />
                </ButtonGroup>
                </FlexRow>
              </FlexColumn> */}
            <PackageContainer>
              <PackagePanel type="Gold" price={priceGold} plan={planType} onSubmit={(paths:any) => onPackageSubmit("Gold", paths) }/>
              <PackagePanel type="Combo" price={priceCombo} plan={planType} onSubmit={(paths:any) => onPackageSubmit("Combo", paths) }/>
              <PackagePanel type="Sole" price={priceSole} plan={planType} onSubmit={(paths:any) => onPackageSubmit("Sole", paths) }/>
            </PackageContainer>
            <Elements stripe={stripePromise}>
              {showPaymentMethod && <PaymentMethod type={packageType} price={packagePrice} path={path} plan={planType} kidNum={childrenCount}/> }
            </Elements>
          </>
        </ParentPgContainer>
  );
};
