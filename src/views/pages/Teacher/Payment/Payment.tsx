import { FC, useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { LoadingContext } from 'react-router-loading';
import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentMethod } from 'views/molecules/PaymentMethod/PaymentMethod';
import PackagePanel from 'views/molecules/PackagePanel/TeacherPackagePanel';
import { PackageContainer } from './Style';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import { getPlans } from 'app/actions/paymentActions'

const stripePromise = loadStripe('pk_test_RqGIvgu49sLej0wM4rycOkJh');

interface ProductTypeParam {
  productType: 'Classroom' | 'School';
}

const Payment: FC = () => {
  const loadingContext = useContext(LoadingContext);
  const { enqueueSnackbar } = useSnackbar();
  const { token, language, couponCode } = useSelector((state: any) => state.user);
  const { productType } = useParams<ProductTypeParam>();
  const discount = +(couponCode?.percentage) || 0

  const [plans, setPlans] = useState<any>({
    Gold: {
      currentPrice: 0,
      priceMonth: 0,
      priceYear: 0,
      childCount: 0,
    },
    Combo: {
      currentPrice: 0,
      priceMonth: 0,
      priceYear: 0,
      childCount: 0,
    },
    Sole: {
      currentPrice: 0,
      priceMonth: 0,
      priceYear: 0,
      childCount: 0,
    },
    School: {
      currentPrice: 0,
      priceMonth: 0,
      priceYear: 0,
      childCount: 0,
    },
    Classroom: {
      currentPrice: 0,
      priceMonth: 0,
      priceYear: 0,
      childCount: 0,
    },
  })
  const [sponsorEmail, setSponsorEmail] = useState('')

  const [isSpecialCode, setIsSpecialCode] = useState(false)
  const [showPaymentMethod, setShowPaymentMethod] = useState(true);
  const [offRate, setOffRate] = useState(50);

  const onChangePackage = (count: number, period: string, sponsor: string) => {
    const type = productType === 'School' ? 'School' : 'Classroom'
    if (!plans[type]) return;
    plans[type].childCount = count;
    plans[type].period = period;
    plans[type].currentPrice = (period === 'month' ? plans[type].priceMonth : plans[type].priceYear)
    setSponsorEmail(sponsor)
    setPlans({ ...plans })
  };

  const setPlanData = async () => {
    const result: any = await getPlans(token);
    if (!result.success) {
      enqueueSnackbar(result.msg, { variant: 'error' });
      return;
    }
    const plans_re_object: any = {
      Gold: {},
      Combo: {},
      Sole: {},
      School: {},
      Classroom: {}
    };
    for (const plan of result.data) {
      const name: any = plan.name;
      plans_re_object[name] = plan;
      plans_re_object[name].currentPrice = plan.priceMonth;
      plans_re_object[name].pricePreferentialMonth = plan.pricePreferentialMonth
      plans_re_object[name].quantityPreferentialYear = plan.quantityPreferentialYear - 1
      plans_re_object[name].quantityPreferentialMonth = plan.quantityPreferentialMonth - 1
    }
    setPlans(plans_re_object)
    // setPackPrice(plans_re_object)

    loadingContext.done();
  }

  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();

    if (parseInt(couponCode?.percentage) === 100) setIsSpecialCode(true)
    // else setIsSpecialCode(true) //For always enable special code for first release

    setOffRate(50);
    setPlanData();
  }, []);

  return (
    <TeacherPgContainer onlyLogoImgNav={true}>
      <>
        <PackageContainer>
          <PackagePanel
            type={productType}
            plan={plans[productType]}
            price={plans[productType] ? (plans[productType].currentPrice) : 0}
            onChange={(childrenCount, plan, sponsor) =>
              onChangePackage(childrenCount, plan, sponsor)
            }
            isSpecialCode={isSpecialCode}
            language={language}
            minCount={plans[productType].quantityLowerLimit || 0}
          />
        </PackageContainer>
        <Elements stripe={stripePromise}>
          {showPaymentMethod && (
            <PaymentMethod
              plans={plans}
              offRate={100 - discount}
              isSpecialCode={isSpecialCode}
              sponsorEmail={sponsorEmail}
            />
          )}
        </Elements>
      </>
    </TeacherPgContainer>
  );
};
export default Payment
