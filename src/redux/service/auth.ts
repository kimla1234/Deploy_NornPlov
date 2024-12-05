import { normPlovApi } from "../api";
export const authApi = normPlovApi.injectEndpoints({
    endpoints:(builder)=>({
        //register user
        register: builder.mutation<any, { data: object}>({
            query: ({ data }) => ({
                url: `auth/register`,
                method: "POST",
                body: data,
            }),
        }),

        // VerifyCode For Register
        VerifyCodeRegister:builder.mutation<any,{ email: string, verification_code: string }>({
            query: ({ email, verification_code}) => ({
                url: `auth/verify`,
                method: "POST",
                body: { email, verification_code }
            }),
        }),

        // Resend VerifyCode for Register
        ResendVerifyCodeRegister:builder.mutation<any, { email: string }>({
            query: ({ email }) => ({
                url: `auth/resend-verification-code`,
                method: "POST",
                body: { email },
            }),
        }),

        // forgot password
        forgotPassword: builder.mutation<any, { email: object}>({
            query: ({ email }) => ({
                url: `auth/password-reset-request`,
                method: "POST",
                body: email,
            }),
        }),
        
        // restet password
        resetPassword: builder.mutation<any, { email:string,token: string; newPassword:string,confirmedPassword:string}>({
            query: ({email, token, newPassword,confirmedPassword}) => ({
                url: `auth/reset-password`,
                method: "POST",
                body: {email,token,newPassword,confirmedPassword}
            }),
        }),

    })
})
export const{
    useRegisterMutation,
    useVerifyCodeRegisterMutation,
    useResendVerifyCodeRegisterMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
}=authApi