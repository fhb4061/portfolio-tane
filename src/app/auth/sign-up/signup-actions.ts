'use server';

import { auth } from '@/lib/auth/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import z from 'zod';
import bcrypt from 'bcrypt';

const signupSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.email("Email is required"),
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/[a-z]/, "Password must have at least one lowercase character")
        .regex(/[A-Z]/, "Password must have at least one uppercase character")
        .regex(/[0-9]/, "Password must have at least one number")
        .regex(/[^a-zA-Z0-9]/, "Password must have at least one special character")
        .trim()
});

const FormSchema = signupSchema.required();

type FormState = {
    errors?: {
        email?: string[];
        name?: string[];
        passowrd?: string[];
    }
    message?: string;
}

export async function signUpWithEmail(
    _prevState: FormState | undefined,
    formData: FormData
) {
    const validatedFields = FormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
    });

    if (!validatedFields.success) {
        return {
            errors: z.flattenError(validatedFields.error).fieldErrors,
        }
    }

    const { name, email, password } = validatedFields.data;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const { error, data } = await auth.signUp.email({
        email,
        name,
        password: encryptedPassword,
    });

    if (error) {
        return {
            message: error.message || 'Failed to create account'
        };
    }

    if (data.user && !data.user.emailVerified) {
        (await cookies()).set("pending_email", email, {
            httpOnly: true,
            maxAge: 60 * 10,
            path: '/'
        });

        redirect('/auth/sign-up/verify');
    } else {
        redirect('/auth/sign-in');
    }
}