/*
declare namespace Express {
    export interface Request {
      user: {
        userId: string;
      };
        
    }
}*/
export default interface ICustomRequest extends Request {
  userId: string;
}