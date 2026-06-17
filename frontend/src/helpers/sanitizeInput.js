export const sanitizeUsername = (value) => {
    return value.replace(/[-`'".,<>|\[\]{}=+\/():;%~_?!@#$^&*\\]/g, ''); // Replace certain special characters with an empty string
}

export const sanitizeEmail = (value) => {
    return value.replace(/[-`'",<>|\[\]{}=+\/():;%~_?!#$^&*\\]/g, ''); // Replace certain special characters with an empty string
}

export const sanitizePassword = (value) => {
    return value.replace(/[-`'".,<>|\[\]{}=+\/():;%~_?\\]/g, ''); // Replace certain special characters with an empty string
}

export const cleanRawAmount = (value) => {
    return value
        .replace(/,/g, "") // remove commas first
        .replace(/[^0-9.]/g, "") // digits + dot
        .replace(/(\..*)\./g, "$1") // only one dot
        .replace(/^(\d+)(\.\d{0,2})?.*$/, "$1$2"); // only two numbers after dot
};

export const formatWithCommas = (value) => {
    if (value === "") return "";

    const [integer, decimal] = value.split(".");

    const formattedInt = integer ? Number(integer).toLocaleString("en-US") : "0";

    return decimal != null
        ? `${formattedInt}.${decimal}`
        : formattedInt;
};

export const adjustCursor = (e, value, formatted) => {
    const diff = formatted.length - value.length;
    const newCursorPos = e.target.selectionStart + diff;
    requestAnimationFrame(() => {
        e.target.setSelectionRange(newCursorPos, newCursorPos);
    });
};