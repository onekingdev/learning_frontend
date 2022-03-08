import {GUARDIAN_STUDENT} from '../fragments/guardianFragments';
import axios from 'axios';

export const PURCHASE_CARD_PACK = (
  collectibleCategory: number,
  packSize: number,
  student_id: number
) => `
mutation {
  purchaseCollectiblePack(
  collectibleCategory: ${collectibleCategory}, packSize: ${packSize}, student: ${student_id}
  ) {
    collectiblePackPurchaseTransaction{
      collectibles {
          image
      }
    }
  }
}
`;
