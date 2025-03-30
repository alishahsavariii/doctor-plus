import { UserModel } from "./use.model";

export type CommentModel = {
  id: string;
  user: UserModel;
  date: Date;
  rating: number;
  text: string;
};