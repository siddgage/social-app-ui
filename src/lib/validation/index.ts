import z from "zod"


const complexity = 'Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
const passwordValidation = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);


export const SignupFormValidation = z.object(
    {
        username: z.string().min(5, { message: "Username must be at least 5 characters" }),
        name: z.string().min(2, { message: "Please enter name" }),
        email: z.string().email(),
        password: z.string().min(8, { message: "Password must be atleast 5 character long" })
            .regex(passwordValidation, { message: complexity }),
        confirmPassword: z.string().min(8),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"]
    })
