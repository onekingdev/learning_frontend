import mutation from '../../api/mutations/get'
import { FINISH_BLOCK_PRESENTATION } from '../../api/mutations/block'
import query from '../../api/queries/get'
import {WHOAMI_QUERY} from '../../api/queries/users'
import {INTEREST_QUERY} from '../../api/queries/interests'

import * as TYPES from '../types'

export const finishBlock = async (block_presentation_id: string, hits: number, errors: number, token: string, dispatch: any) => {
    const res:any = await mutation(FINISH_BLOCK_PRESENTATION( block_presentation_id, hits, errors ), token).catch(e => ({success: false}));
    if(res.success === false) {
        return {success: false, msg: 'Network Error'};
    }

    const result:any = await res.json();

    if(result.errors) {
        return {success: false, msg: result.errors[0].message};
    }

    const { blockPresentation, student } = result.data.finishBlockPresentation
    dispatch({ type: TYPES.STUDENT_SET_DATA, payload: student })
    dispatch({ type: TYPES.EARNING_SET_DATA, payload: {
        rank: 1,
        level_name: student.level.name,
        level: student.level.amount,
        exp: parseInt(student.points),
        expMax: student.level.pointsRequired,
        progress: 0,
        energyCharge: 0,
        balance: student.coinWallet.balance,
    }})
    return {success: true, msg: 'Success!'}
}
