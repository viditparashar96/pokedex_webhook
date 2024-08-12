import { Document, Schema, model, models } from "mongoose";
export interface IUser extends Document {
  clerkId: string;
  name: string;
  email: string;
  password?: string;
  picture: string;
  location?: string;
  portfolioWebsite?: string;
  joined: Date;
}
const UserSchema = new Schema<IUser>({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  picture: { type: String, required: true },
  location: { type: String },
  joined: { type: Date, default: Date.now },
});

const User = models.User || model("User", UserSchema);

export default User;
