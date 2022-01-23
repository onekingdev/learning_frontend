import {FC, useEffect} from 'react';
import { ParentPgContainer } from '../../../views/molecules/ParentPgContainer/ParentPgContainer'
import { PackagePanel } from '../../../views/molecules/PackagePanel/PackagePanel'
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useStyles } from './Style';
import * as TYPES from '../../../app/types'
import {MockStore} from '../../../app/configureStore'
import { IStudent } from '../../../app/entities/student';
import { ParentPgStepper } from '../../molecules/ParentPgStepper/ParentPgStepper';
import { PaymentMethod } from '../../molecules/PaymentMethod/PaymentMethod';

import { SettingContainer, FlexColumn, FlexRow, PackageContainer } from './Style'
export const Account: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const language = 'en';
  const classes = useStyles();

  useEffect(() => {
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
                    onClick={()=>{}}
                  >
                    Monthly
                  </Button>
                  <Button
                    variant="outlined"
                    className={classes.yearButton}
                    color="success"
                    onClick={()=>{}}
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
                  <Button className={classes.groupButton} color="success">-</Button>
                  <Button className={classes.groupButton} color="success">1</Button>
                  <Button className={classes.groupButton} color="success">+</Button>
                </ButtonGroup>
                </FlexRow>
              </FlexColumn>
            </SettingContainer>
            <PackageContainer>
              <PackagePanel type="Gold" price={19.99} plan="month"/>
              <PackagePanel type="Combo" price={14.99} plan="month"/>
              <PackagePanel type="Sole" price={5.99} plan="month"/>
            </PackageContainer>
            <PaymentMethod method="paypal" type="Gold" price={19.99}/>
          </>
        </ParentPgContainer>
  );
};
