
// Application-wide constants

// Authentication
export const AUTH_TOKEN_KEY = 'token';
export const AUTH_USER_KEY = 'user';

// UI Constants
export const TOAST_DURATION = 5000; // 5 seconds
export const PAGE_SIZE = 10;
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// Validation
export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
