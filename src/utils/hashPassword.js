
import bcrypt from "bcrypt";

export const hashPassword = async (userData) => {
  if (userData.password) {
    const saltRounds = 10;  
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
    userData.password = hashedPassword;  
  }
};
