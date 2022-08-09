import { PLAN_QUERY } from 'api/queries/payments'
import queryFetch, { fetchQuery } from 'api/queries/get';
import {
    CREATE_ORDER,
    CONFIRM_PAYMENT_ORDER,
    CREATE_ORDER_WITH_OUT_PAY,
    FETCH_PAYMENT_METHOD,
    CHANGE_PAYMENT_METHOD_INFO
} from 'api/mutations/payments';
import { sendRawQuery } from 'api/queries/get';
import mutationFetch from 'api/mutations/get';
import { CANCEL_GUARDIAN_BOUGHT_PLAN, CANCEL_ORDERDETAIL } from 'api/mutations/guardians';
import { PLAN_RAW } from 'api/fragments/paymentFragments';

export const createOrder = async (
    cardCvc: string,
    cardExpMonth: string,
    cardExpYear: string,
    cardFirstName: string,
    cardLastName: string,
    cardNumber: string,
    address1: string,
    address2: string,
    city: string,
    state: string,
    postCode: string,
    country: string,
    phone: string,
    guardianId: number | undefined,
    teacherId: number | undefined,
    schoolId: number | undefined,
    orderDetailInput: {},
    paymentMethod: string,
    returnUrl: string,
    token: string,
) => {
    const res: any = await mutationFetch(
        CREATE_ORDER(
            cardCvc,
            cardExpMonth,
            cardExpYear,
            cardFirstName,
            cardLastName,
            cardNumber,
            address1,
            address2,
            city,
            state,
            postCode,
            country,
            phone,
            guardianId,
            teacherId,
            schoolId,
            orderDetailInput,
            paymentMethod,
            returnUrl
        ),
        token
    ).catch(() => ({ success: false }));

    if (res.success === false) {
        return { success: false, msg: 'Network Error!' };
    }

    const result: any = await res.json();

    if (result.errors) {
        return { success: false, msg: result.errors[0].message };
    }

    const { status } = result.data.createOrder;

    // dispatch({
    //     type: TYPES.GUARDIAN_SET_DATA,
    //     payload: guardian,
    // });
    // dispatch({
    //     type: TYPES.GUARDIAN_SET_GUEARDIAN_STUDENT_PLAN,
    //     payload: order.orderdetailSet.guardianstudentplanSet || []
    // });
    if (status !== 'success')
        return { success: false, msg: 'Failed', data: result.data.createOrder }
    return { success: true, msg: 'Success', data: result.data.createOrder }
}

export const createOrderWithOutPay = async (
    cardFirstName: string,
    cardLastName: string,
    address1: string,
    address2: string,
    city: string,
    state: string,
    postCode: string,
    country: string,
    phone: string,
    guardianId: number | null,
    teacherId: number | null,
    schoolId: number | null,
    orderDetailInput: {},
    token: string,
) => {
    const res: any = await mutationFetch(
        CREATE_ORDER_WITH_OUT_PAY(cardFirstName, cardLastName, address1, address2, city, state, postCode, country, phone, guardianId, teacherId, schoolId, orderDetailInput),
        token
    ).catch(() => ({ success: false }));

    if (res.success === false) {
        return { success: false, msg: 'Network Error!' };
    }

    const result: any = await res.json();

    if (result.errors) {
        return { success: false, msg: result.errors[0].message };
    }
    const { status } = result.data.createOrderWithOutPay;
    // dispatch({
    //     type: TYPES.GUARDIAN_SET_DATA,
    //     payload: guardian,
    // });

    // This is not used in new kids page
    // dispatch({
    //     type: TYPES.GUARDIAN_SET_GUEARDIAN_STUDENT_PLAN,
    //     payload: order.orderdetailSet.guardianstudentplanSet || []
    // });
    if (status !== 'success')
        return { success: false, msg: 'Failed', data: result.data.createOrderWithOutPay }
    return { success: true, msg: 'Success', data: result.data.createOrderWithOutPay }
}

export const confirmPaymentOrder = async (
    orderId: number,
    token: string,
) => {
    const res: any = await mutationFetch(
        CONFIRM_PAYMENT_ORDER(orderId),
        token
    ).catch(() => ({ success: false }));

    if (res.success === false) {
        return { success: false, msg: 'Network Error!' };
    }

    const result: any = await res.json();

    if (result.errors) {
        return { success: false, msg: result.errors[0].message };
    }

    const { status } = result.data.confirmPaymentOrder;

    if (status !== 'success')
        return { success: false, msg: 'Cofirmation Failed' }

    if (status === 'success')
        return { success: true, msg: 'Success', data: result.data.confirmPaymentOrder }
    else
        return { success: false, msg: 'Failed' }
}

export const getPlans = async (token: string) => {
    const res: any = await queryFetch(
        'plans',
        PLAN_QUERY,
        token
    ).catch(() => ({ success: 'false' }));

    if (res.success === false) {
        return { success: false, msg: 'Network Error!' };
    }

    const result: any = await res.json();

    if (result.errors) {
        return { success: false, msg: result.errors[0].message };
    }

    const plans = result.data.plans;

    // dispatch({
    //     type: TYPES.GUARDIAN_SET_DATA,
    //     payload: guardian,
    // });
    // dispatch({
    //     type: TYPES.USER_SET_DATA,
    //     payload: {...user, token: token, refreshToken: refreshToken},
    // });

    return { success: true, msg: 'Success', data: plans }
}

export const doFetchPaymentMethod = async (guradianId: number, token: string) => {
    try {
        const res: any = await sendRawQuery(
            FETCH_PAYMENT_METHOD(guradianId),
            token
        );
        return res.msg ? null : res.data.guardianById.paymentMethod;
    } catch {
        return null
    }
}

export const doChangePaymentMethod = async (guradianId: number, paymentInfo: any, token: string) => {
    try {
        const res: any = await sendRawQuery(
            CHANGE_PAYMENT_METHOD_INFO(guradianId, paymentInfo),
            token
        );
        return res.msg ? { status: false, msg: res.msg } : res.data.changePaymentMethod;
    } catch (e: any) {
        return { status: false, msg: e.message }
    }
}


export const doCancelOrderDetail = async (
    orderDetailId: number | string,
    reason: string,
    token: string
) => {
    const res: any = await fetchQuery(
        CANCEL_ORDERDETAIL(orderDetailId, reason),
        token)
    return res.data?.cancelOrderdetailById || res.errors[0]; // when django returns error message on fail
};


// ! This is for teacher now, need to update to be common
export const doUpgradeOrderdetailById = async (
    orderDetailId: number | string,
    period: 'YEARLY' | 'MONTHLY',
    returnUrl: string,
    token: string,
    schoolId?: number | string, // For the teacher, schoolId is omitted.
) => {
    const res: any = await fetchQuery(
        `
            mutation {
                updateOrderdetailById(
                    orderDetailId: ${orderDetailId},
                    period: "${period}",
                    returnUrl: "${returnUrl}",
                    ${schoolId ? 'schoolId: "' + schoolId + '",' : ''}
                ) {
                    teacher {
                        orderSet {
                            orderdetailSet {
                                id
                                plan {
                                    ${PLAN_RAW}
                                }
                                paymentMethodPlanId
                                subscriptionId
                                quantity
                                period
                                updateFromDetailId
                                status
                                onDiscount
                                discount
                                expiredAt
                                isPaid
                                cancelReason
                                isCancel
                                slug
                                total
                            }
                        }
                    }
                }
            }
        `,
        token)
    return res.data?.updateOrderdetailById || res.errors[0]; // when django returns error message on fail
};
