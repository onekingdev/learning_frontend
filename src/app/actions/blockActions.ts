import {
    FINISH_BLOCK_PRESENTATION,
    CREATE_AI_BLOCK_PRESENTATION,
    CREATE_PATH_BLOCK_PRESENTATION
}                  from 'api/mutations/block'
import mutation    from 'api/mutations/get'
import * as TYPES  from '../types'

export const finishBlock = async (block_presentation_id: string, hits: number, errors: number, bonusCoins: number, earning: object, questionResults: any, token: string, dispatch: any) => {
    const res: any = await mutation(FINISH_BLOCK_PRESENTATION(block_presentation_id, hits, errors, bonusCoins, questionResults), token).catch(() => ({ success: false }));
    if (res.success === false) {
        return { success: false, msg: 'Network Error' };
    }

    const result: any = await res.json();

    if (result.errors) {
        return { success: false, msg: result.errors[0].message };
    }

    const { student } = result.data.finishBlockPresentation
    dispatch({ type: TYPES.STUDENT_SET_DATA, payload: student })
    dispatch({
        type: TYPES.EARNING_SET_DATA, payload: {
            ...earning,
            level_name: student.level.name,
            level: student.level.amount,
            exp: parseInt(student.points),
            expMax: student.level.pointsRequired,
            balance: student.coinWallet.balance,
        }
    })
    return { success: true, msg: 'Success!' }
}

export const createAiBlockPresentation = async (aokId: number, token: string, dispatch?: any) => {
    // export const createAiBlockPresentation = async (aokId: number, token: string) => {
    const res: any = await mutation(CREATE_AI_BLOCK_PRESENTATION(aokId), token).catch(() => ({ success: false }));
    if (res.success === false) {
        return { success: false, msg: 'Network Error' };
    }

    const result: any = await res.json();

    if (result.errors) {
        return { success: false, msg: result.errors[0].message };
    }

    const { blockPresentation } = result.data.createAiBlockPresentation
    // dispatch({ type: TYPES.STUDENT_SET_DATA, payload: student })
    // dispatch({ type: TYPES.EARNING_SET_DATA, payload: {
    //     ...earning,
    //     level_name: student.level.name,
    //     level: student.level.amount,
    //     exp: parseInt(student.points),
    //     expMax: student.level.pointsRequired,
    //     balance: student.coinWallet.balance,
    // }})
    return { success: true, msg: 'Success!', data: blockPresentation }
}

export const createPathBlockPresentation = async (studentId: number, topicId: number, token: string, dispatch: any) => {
    // export const createPathBlockPresentation = async (studentId: number, topicId: number, token: string) => {
    const res: any = await mutation(CREATE_PATH_BLOCK_PRESENTATION(studentId, topicId), token).catch(() => ({ success: false }));
    if (res.success === false) {
        return { success: false, msg: 'Network Error' };
    }

    const result: any = await res.json();

    if (result.errors) {
        return { success: false, msg: result.errors[0].message };
    }

    const { blockPresentation } = result.data.createPathBlockPresentation
    // dispatch({ type: TYPES.STUDENT_SET_DATA, payload: student })
    // dispatch({ type: TYPES.EARNING_SET_DATA, payload: {
    //     ...earning,
    //     level_name: student.level.name,
    //     level: student.level.amount,
    //     exp: parseInt(student.points),
    //     expMax: student.level.pointsRequired,
    //     balance: student.coinWallet.balance,
    // }})
    return { success: true, msg: 'Success!', data: blockPresentation }
}
