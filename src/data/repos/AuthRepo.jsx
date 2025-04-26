import { storeUser } from "../apis/store_user";

export const AuthRepo = {
    register: async (values)=>{
        return  storeUser(values);

    }
}