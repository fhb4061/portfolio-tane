'use server';

import { auth } from '@/lib/auth/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import z from 'zod';

const verifySchema = z.object({
    otp: z.string().trim().min(1, "Code is required")
})

type VerifyFormState = {
    errors?: {
        otp?: string[];
    }
}

export async function handleVerifyEmail(
    _prevState: VerifyFormState | undefined,
    formData: FormData
) {
    const validatedFeilds = verifySchema.safeParse({
        otp: formData.get('otp')
    });

    if (!validatedFeilds.success) {
        return {
            errors: z.flattenError(validatedFeilds.error).fieldErrors
        }
    }

    const { otp } = validatedFeilds.data;
    const email = (await cookies()).get('pending_email')!.value;

    const { error } = await auth.emailOtp.verifyEmail({
        email,
        otp
    });

    if (error) {
        return { message: error.message }
    }

    (await cookies()).delete("pending_email");
    redirect('/book');

}