const {z} = require('zod');

const registration = z.object({
    username: z.string({required_error: "Name is required"})
    .trim()
    .min(1, {message: "userame cannot be emplty"}),

    email: z.string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email"}),

    password: z.string({required_error: "Password is required"})
    .min(8, {message: "Password must be atleast 8 characters"})
});


module.exports = registration;
