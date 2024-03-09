import z from 'zod'

export const signupInput  = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 character long"),
    name: z.string().optional(),
})

export type signupType = z.infer<typeof signupInput>;

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 character long")
})

export type signinType = z.infer<typeof signinInput>;

export const createPostInput = z.object({
    title: z.string(),
    content: z.string(),
});

export type CreatePostType = z.infer<typeof createPostInput>;

export const updatePostInput = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
});

export type UpdatePostType = z.infer<typeof updatePostInput>;