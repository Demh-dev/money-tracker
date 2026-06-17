export const usernameRules = (value) => {
    if (!value) return 'Username is required';

    const trimmedValue = value.trim();

    if (/\s/.test(trimmedValue)) return 'Username cannot contain spaces';
    if (trimmedValue.length < 6) return 'Username must be at least 6 characters long';
    if (!/[a-zA-Z]/.test(trimmedValue)) return `Username must contain at least one letter`;
    if (!/[0-9]/.test(trimmedValue)) return `Username must contain at least one number`;

    return null;
};

export const emailRules = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; // Simple email regex for basic validation, it covers 95% of real-world email formats

    if (!value) return 'Email is required';

    const trimmedValue = value.trim();

    if (!emailRegex.test(trimmedValue)) return 'Invalid email format';

    return null;
};

export const passwordRules = (value, fieldName) => {
    if (!value) return `${fieldName} is required`;

    if (/\s/.test(value)) return `${fieldName} cannot contain spaces`;
    if (value.length < 8) return `${fieldName} must be at least 8 characters long`;
    if (!/[a-zA-Z]/.test(value)) return `${fieldName} must contain at least one letter`;
    if (!/[0-9]/.test(value)) return `${fieldName} must contain at least one number`;
    if (!/[!@#$^&*]/.test(value)) return `${fieldName} must contain at least one symbol`;

    return null;
};