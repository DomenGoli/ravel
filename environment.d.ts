declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_SUPABASE_URL: string;
            NEXT_PUBLIC_SUPABASE_KEY: string;
            NEXT_PUBLIC_SUPABASE_BUCKET: string;
            AUTH_SECRET: string;
            AUTH_TRUST_HOST: string
        }
    }
}

export {}
