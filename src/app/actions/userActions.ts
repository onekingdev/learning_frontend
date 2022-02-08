import mutation from '../../api/mutations/get'
import { TOKEN_AUTH } from '../../api/mutations/users'
import query from '../../api/queries/get'
import {WHOAMI_QUERY} from '../../api/queries/users'
import * as TYPES from '../../app/types'

export const login = async (username: string, password: string, dispatch: any) => {

    const res:any = await mutation(TOKEN_AUTH( username, password )).catch(e => ({success: false}));
    if(res.success === false) {
        return {success: false, msg: "Network Error"};
    }

    const result:any = await res.json();

    if(result.errors) {
        return {success: false, msg: result.errors[0].message};
    }

    const { token } = result.data.tokenAuth

    const res_who:any = await query("whoami", WHOAMI_QUERY, token).catch(e => ({success: false}));

    if(res_who.success === false) {
      return {success: false, msg: "Network Error!"};
    }

    const result_who:any = await res_who.json();

    console.log(result_who);
    if(result_who.errors && !result_who.data) {
      return {success: false, msg: result_who.errors[0].message};
    }

    const user = result_who.data.whoami;
    const user_redux:any = (({lastLogin, isSuperuser, username, firstName, lastName, email , isStaff, isActive, dateJoined, language,profile }) => ({lastLogin, isSuperuser, username, firstName, lastName, email , isStaff, isActive, dateJoined, language, profile}))(user)
    dispatch({ type: TYPES.USER_SET_DATA, payload: {...user_redux, token: token} })
    const {guardian, student} = result_who.data.whoami;
    if(student) {
        dispatch({ type: TYPES.USER_SET_DATA, payload: {...user_redux, token: token} })
        dispatch({ type: TYPES.STUDENT_SET_DATA, payload: student })
        dispatch({ type: TYPES.EARNING_SET_DATA, payload: {
          rank: 1,
          level: 1,
          exp: 1,
          expMax: 5,
          progress: 1,
          energyCharge: 1,
          balance: 1,
        }})
        return {success: true, msg: 'Successfully Logined!', userType: "student"}
      }
      else if(guardian) {
        // dispatch({ type: TYPES.PARENT_SET_DATA, payload: guardian })
        return {success: true, msg: 'Successfully Logined!', userType: "guardian"}
      }
      else {
        // dispatch({ type: TYPES.TEACHER_SET_DATA, payload: teacher })
        return {success: true, msg: 'Successfully Logined!', userType: "teacher"}
      }
}
