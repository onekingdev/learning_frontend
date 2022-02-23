import mutation from '../../api/mutations/get';
import query from 'api/queries/get';
import {WITHDRAW, DEPOSIT} from '../../api/mutations/bank';
import {COLLECTIBLE_CATEGORY_QUERY, OWNED_CARDS_QUERY} from 'api/queries/collectibles';
import { PURCHASE_CARD_PACK, sendMutaion } from 'api/mutations/collectibles';
import { sendQuery } from 'api/queries/collectibles';

import * as TYPES from '../types';

/**
 * @author Bruce Lee
 * @description get card category infos from graphql server
 * @returns response obj
 */
export const getCardPacksInfo = async (token: string) => {

  try {
    const res: any = await sendQuery(
      'collectiblesCategory',
      COLLECTIBLE_CATEGORY_QUERY,
      token
    );
    return res.data.collectiblesCategory;
  } catch (e) {
    return {msg: e};
  }

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

/**
 * @author Bruce Lee
 * @description get a pack of 3 card names from graphql server
 * @returns response obj
 */
export const purchaseCardPack = async (pack_id: number, student_id: number, token: string) => {

  try {
    const res: any = await sendMutaion(PURCHASE_CARD_PACK(pack_id, 3, student_id), token);
    return res.data.purchaseCollectiblePack.collectiblePackPurchaseTransaction.collectibles;
  } catch (e) {
    return {msg: e};
  }
};

/**
 * @author Bruce Lee
 * @description get all of user owned cards from graphql server
 * @returns response obj
 */
 export const getUserOwnedCards = async (student_id: number,token: string) => {

  try {
    const res: any = await sendQuery(
      `studentById(id: ${student_id})`,
      OWNED_CARDS_QUERY,
      token
    );
    console.log(res)
    return res.data.studentById.studentcollectibleSet;
  } catch (e) {
    return {msg: e};
  }
};
