function validateInput(data) {
    if (!data.name || !data.email || !data.password) {
        return 'All fields are required.';
    }
    if (data.password.length < 6) {
        return 'Password must be at least 6 characters long.';
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) {
        return 'Invalid email format.';
    }
    return null;
}

module.exports = { validateInput };
