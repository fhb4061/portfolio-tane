'use server';

import { auth } from '@/lib/auth/server';
import { redirect } from 'next/navigation';
import z from 'zod';

const signInSchema = z.object({
    email: z.email("Email is required"),
    password: z.string().trim().min(1, "Password is required")
});

type FormState = {
    errors?: {
        email?: string[];
        password?: string[];
    },
    message?: string;
}

export async function signInWithEmail(
    _prevState: FormState | undefined,
    formData: FormData
) {
    const vaildatedFields = signInSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    });

    if (!vaildatedFields.success) {
        return {
            errors: z.flattenError(vaildatedFields.error).fieldErrors,
        }
    }

    const { error } = await auth.signIn.email({
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    });

    if (error) {
        return { message: error.message || 'Failed to sign in. Try again' };
    }

    redirect('/book');
}