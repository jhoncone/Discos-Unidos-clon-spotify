/*
declare namespace Express {
    export interface Request {
        userId: string;
    }
}
import { User } from '../models/user'
*/
import { Request } from "express"

declare global {
  namespace Express {
    export interface Requestinterface  extends Request {
      userId : string;
    }
  }
}