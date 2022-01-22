import {FC, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useStyles } from './Style';
import * as TYPES from '../../../app/types'
import {MockStore} from '../../../app/configureStore'
import { IStudent } from '../../../app/entities/student';
import { ParentPgStepper } from '../../molecules/ParentPgStepper/ParentPgStepper';
import { PaymentMethod } from '../../molecules/PaymentMethod/PaymentMethod';
import { ParentPgContainer } from '../../../views/molecules/ParentPgContainer/ParentPgContainer'
import { PackagePanel } from '../../../views/molecules/PackagePanel/PackagePanel'
import { SettingContainer, FlexColumn, FlexRow, PackageContainer } from './Style'

const stripePromise = loadStripe('pk_test_RqGIvgu49sLej0wM4rycOkJh');

export const Account: FC = () => {
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

  useEffect(() => {
    setPackPrice();
  }, []);
  return (
        <ParentPgContainer onlyLogoImgNav={true}>
          <>
            <ParentPgStepper step={1}/>
            <SettingContainer>
              <FlexColumn>
                <b>Choose your plan</b>
                <br />
                <FlexRow style={{flexWrap: 'unset'}}>
                  <Button
                    variant="contained"
                    className={classes.monthButton}
                    color="success"
                    onClick={()=>{setPlanType("year")}}
                  >
                    Monthly
                  </Button>
                  <Button
                    variant="outlined"
                    className={classes.yearButton}
                    color="success"
                    onClick={()=>{setPlanType("month")}}
                  >
                    Yearly
                  </Button>
                </FlexRow>
              </FlexColumn>
              <FlexColumn>
                <b>Number of Children</b>
                <br />
                <FlexRow>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                  <Button className={classes.groupButton} color="success" onClick={() => childrenCount > 1 && setChildrenCount(childrenCount - 1)}>-</Button>
                  <Button className={classes.groupButton} color="success">{childrenCount}</Button>
                  <Button className={classes.groupButton} color="success" onClick={() => setChildrenCount(childrenCount + 1)}>+</Button>
                </ButtonGroup>
                </FlexRow>
              </FlexColumn>
            </SettingContainer>
            <PackageContainer>
              <PackagePanel type="Gold" price={priceGold} plan={planType} onSubmit={(paths:any) => {setPackageType("Gold"); setPath(paths) }}/>
              <PackagePanel type="Combo" price={priceCombo} plan={planType} onSubmit={(paths:any) => {setPackageType("Combo"); setPath(paths)}  }/>
              <PackagePanel type="Sole" price={priceSole} plan={planType} onSubmit={(paths:any) => {setPackageType("Sole");  setPath(paths)} }/>
            </PackageContainer>
            <Elements stripe={stripePromise}>
              <PaymentMethod type={packageType} price={packagePrice} path={path} plan={planType}/>
            </Elements>
          </>
        </ParentPgContainer>
  );
};
