import { DoctorModel } from "@/models/doctor.model";
import { CommentModel } from "./commnet.model";

export type DetailedDoctorModel = DoctorModel & {
  experience: number;
  mcNumber: number;
  about: string;
  consultations: number;
  membershipDuration: string;
  price: number;
  phone: string;
  comments: CommentModel[];
};
