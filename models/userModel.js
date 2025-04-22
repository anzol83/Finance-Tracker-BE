import userSchema from '../schema/userSchema.js';

export const createUser = (userObj)=>{
    return UserModel(userObj).save();
}

export const getUserbyEmail = (email)=>{
    return UserModel.findOne({email})
}