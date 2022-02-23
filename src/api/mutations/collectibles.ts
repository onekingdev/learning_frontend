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

export const sendMutaion = async (mutation: string, token?: string) => {
  try {
    const response = await axios.post(
      process.env.NODE_ENV === 'development'
        ? '/graphql/'
        : 'https://api.withsocrates.com/graphql/',
      {
        query: `mutation {
            ${mutation}
          }`,
      },
      token
        ? {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        : {
            headers: {
              'Content-Type': 'application/json',
            },
          }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
