import { sign, SignOptions, verify } from 'jsonwebtoken';
import { IUser } from '../auth/auth.model';
import jwt_decode from 'jwt-decode';

export interface Payload {
  username: IUser['username'];
  userID: IUser['id'];
  accessTypes: string[];
}

interface TokenPayload extends Payload {
  exp: number;
}

let SECRET_KEY = '';

export const init = () => {
  SECRET_KEY = process.env.TOKEN_KEY;
};

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

const getDecodedTokenAttribute = (
  token: string,
  attribute: 'userID' | 'username' | 'accessTypes'
):
  | Payload['username']
  | Payload['userID']
  | Payload['accessTypes']
  | boolean => {
  try {
    const decodedToken: Payload = jwt_decode(token);
    return decodedToken[attribute];
  } catch (error) {
    // tslint:disable:no-console
    console.error(`Error accessing ${attribute} in auth token`);
    return false;
  }
};

export const getTokenUserId = (token: string): Payload['userID'] | boolean => {
  const id = getDecodedTokenAttribute(token, 'userID');
  if (typeof id === 'number') {
    return id;
  }
  return false;
};

export const getTokenUsername = (
  token: string
): Payload['username'] | boolean => {
  const username = getDecodedTokenAttribute(token, 'username');
  if (typeof username === 'string') {
    return username;
  }
  return false;
};

export const getTokenAccessTypes = (
  token: string
): Payload['accessTypes'] | boolean => {
  const accessTypes = getDecodedTokenAttribute(token, 'accessTypes');
  if (Array.isArray(accessTypes)) {
    return accessTypes;
  }
  return false;
};
