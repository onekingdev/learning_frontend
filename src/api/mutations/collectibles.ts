import { GUARDIAN_STUDENT } from "../fragments/guardianFragments";

export const PURCHASE_CARD_PACK = (
    collectibleCategory: number,
    packSize: number,
    student_id: number
) => `
purchaseCollectiblePack(
    collectibleCategory: ${collectibleCategory}, packSize: ${packSize}, student: ${student_id}
    ) {
        collectiblePackPurchaseTransaction{
            amount
           }
    }
`;
