import { sign, SignOptions, verify } from "jsonwebtoken";
import { IUser } from "../auth/auth.model";
import dotenv from "dotenv";

export interface Payload {
    username: IUser['username'];
    userID: IUser['id'],
    accessTypes: string[];
};

interface TokenPayload extends Payload {
    exp: number;
}

let SECRET_KEY = '';

export const init = () => {
    SECRET_KEY = process.env.TOKEN_KEY;
}

export const generateToken = (payload: Payload) => {
    const OPTIONS: SignOptions = { expiresIn: '1h' };

    return sign(payload, SECRET_KEY, OPTIONS);
};

export const validateToken = (token: string): Promise<TokenPayload> => {
    return new Promise((resolve, reject) => {
        verify(token, SECRET_KEY, {}, (error, decoded: TokenPayload) => {
            if (error) return reject(error);
            resolve(decoded);
        });
    });
};