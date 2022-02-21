import mutation from '../../api/mutations/get';
import query from 'api/queries/get';
import {WITHDRAW, DEPOSIT} from '../../api/mutations/bank';
import {COLLECTIBLE_CATEGORY_QUERY} from 'api/queries/collectibles';
import { PURCHASE_CARD_PACK } from 'api/mutations/collectibles';

import * as TYPES from '../types';

export const getCardPacksInfo = async (token: string) => {
  // const res:any = await mutation(WITHDRAW( amount ), token).catch(e => ({success: false}));
  // if(res.success === false) {
  //     return {success: false, msg: 'Network Error'};
  // }

  try {
    const res: any = await query(
      'collectiblesCategory',
      COLLECTIBLE_CATEGORY_QUERY,
      token
    );
    const result: any = await res.json();
    return result.data.collectiblesCategory;
  } catch (e) {
    return {msg: e};
  }

  // if(result.errors) {
  //     return {success: false, msg: result.errors[0].message};
  // }

  // const { student, bankMovement } = result.data.BankAccountWithdraw
  // dispatch({ type: TYPES.STUDENT_SET_DATA, payload: student })
  // dispatch({ type: TYPES.EARNING_SET_DATA, payload: {
  //     rank: 1,
  //     level_name: student.level.name,
  //     level: student.level.amount,
  //     exp: parseInt(student.points),
  //     expMax: student.level.pointsRequired,
  //     progress: 0,
  //     energyCharge: 0,
  //     balance: student.coinWallet.balance,
  // }})
  // return {success: true, msg: 'Success!'}
};

export const purchaseCardPack = async (pack_id: number, student_id: number, token: string) => {
  try {
    const res: any = await mutation(PURCHASE_CARD_PACK(pack_id, 3, student_id), token);
    const result: any = await res.json();
    return result.data.purchaseCollectiblePack.collectiblePackPurchaseTransaction.collectibles;
  } catch (e) {
    return {msg: e};
  }
};
