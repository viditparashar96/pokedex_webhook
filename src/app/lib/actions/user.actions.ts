import User from "@/app/models/user.model";
import { connectToDatabase } from "../mongoose";

export async function createUser(UserData: any) {
  try {
    connectToDatabase();
    const user = await User.create(UserData);

    return user;
  } catch (error) {
    console.log(error);
  }
}
