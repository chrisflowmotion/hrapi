import crypto from "crypto";

const DIGEST = 'sha256';
const ITERATIONS = 12000;
const KEY_LENGTH = 32;

/**
 * Generate salts to encrypt passwords
 */
export const generateSalt = () => {
    return crypto.randomBytes(KEY_LENGTH).toString("base64");
};

/**
 * Encrypt passwords
 */
export const encrypt = (password: string, salt: string) => {
    return crypto.pbkdf2Sync(password, salt, ITERATIONS, KEY_LENGTH, DIGEST).toString("base64");
};