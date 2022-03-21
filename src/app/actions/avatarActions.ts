import { sendRawQuery } from 'api/queries/get';
import {
    FETCH_USER_OWNED_AVATAR_ITEMS,
    FETCH_USER_FAVORITE_AVATARS,
    SET_CURRENT_USER_AVATAR_SET
} from 'api/queries/avatars';
import { PURCHASE_AN_AVATAR_ITEM, SET_FAVORITE } from 'api/mutations/collectibles';

export const doFetchOwnedAvatars = async (studentId: number, token: string) => {

    const res: any = await sendRawQuery(
        FETCH_USER_OWNED_AVATAR_ITEMS(studentId),
        token
    );
    return res.msg ? { msg: res.msg } : res.data.avatarsByStudentId;
}

export const doPurchaseAvatarItem = async (avatarId: number, studentId: number, token: string) => {
    const res: any = await sendRawQuery(
        PURCHASE_AN_AVATAR_ITEM(avatarId, studentId),
        token
    );
    // if(res.msg){
    //     console.log(res.msg)
    // }
    return res.msg ? console.log(res.msg) : true;
}

export const doSetFavoriteAvatar = async (studentId: number, accessoryId: number, headId: number, clothesId: number, footerId: number, skinTone: string, token: string) => {
    const res: any = await sendRawQuery(
        SET_FAVORITE(accessoryId, headId, clothesId, footerId, skinTone, studentId),
        token
    );

    return res.msg ? false : true;
}

export const doFetchFavoriteAvatars = async (studentId: number, token: string) => {

    const res: any = await sendRawQuery(
        FETCH_USER_FAVORITE_AVATARS(studentId),
        token
    );
    return res.msg ? { msg: res.msg } : res.data.studentById.favoriteavatarcollectionSet;
}

export const doSetUserAvatar = async (studentId: number, favoriteId: number, token: string) => {

    try {
        const res: any = await sendRawQuery(
            SET_CURRENT_USER_AVATAR_SET(studentId, favoriteId),
            token
        );
        return res.msg ?
            { msg: res.msg, status: false } :
            { ...res.data.studentById.favoriteavatarcollectionSet, status: true }
    } catch {
        return { msg: 'Set user avatar action error!', status: false }
    }
}
