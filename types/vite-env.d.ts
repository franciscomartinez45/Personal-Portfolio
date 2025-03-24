/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

interface ImportMetaEnv {
  VITE_AWS_REGION: string;
  VITE_AWS_BUCKET_NAME: string;
  VITE_AWS_ACCESS_KEY: string;
  VITE_AWS_SECRET_KEY: string;
  VITE_IMAGE_NAME: string;
  VITE_RESUME_NAME: string;
  VITE_SUPABASE_URL: string;
  VITE_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
