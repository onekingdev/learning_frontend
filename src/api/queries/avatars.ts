import { _AVATAR } from "api/fragments/schemas";

export const FETCH_USER_OWNED_AVATAR_ITEMS = (studentId: number) => `
  query {
    avatarsByStudentId(studentId: ${studentId}){
      avatar {
        id
      }
    }
  }
`;

export const FETCH_USER_FAVORITE_AVATARS = (studentId: number) => `
  query {
    studentById(id: ${studentId}){
      favoriteavatarcollectionSet{
        id
        avatarAccessorie {
          ${_AVATAR}
        }
        avatarHead {
          ${_AVATAR}
        }
        avatarClothes {
          ${_AVATAR}
        }
        avatarPants {
          ${_AVATAR}
        }
        skinTone
      }
    }
  }
`;

export const SET_CURRENT_USER_AVATAR_SET = (
  studentId: number,
  favoriteId: number
  ) => `
  mutation {
    setCurrentFavoriteAvatarCollection(favoriteAvatarCollectionId: ${favoriteId}, studentId: ${studentId}) {
      favoriteAvatarCollection {
        id
        avatarAccessorie{
          ${_AVATAR}
        }
        avatarHead{
          ${_AVATAR}
        }
        avatarClothes{
          ${_AVATAR}
        }
        avatarPants{
          ${_AVATAR}
        }
        skinTone
      }
    }
  }
`;
