import bcrypt from 'bcrypt';

export const hashPass = async (password) => {
    const hashedPass = await bcrypt.hash(password,10);
    return hashedPass; 
};