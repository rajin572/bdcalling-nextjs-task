import mongoose from "mongoose";

export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Must provide a username."],
      unique: [true, "Must be unique."],
    },
    email: {
      type: String,
      required: [true, "Must provide an email."],
      unique: [true, "Must be unique."],
    },
    password: {
      type: String,
      required: [true, "Must provide a password."],
    },
    address: {
      type: String,
      required: [true, "Must provide a permanent address."],
    },
    contactNumber: {
      type: String,
      required: [true, "Must provide a contact number."],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
