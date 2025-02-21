/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

interface ImportMetaEnv {
  VITE_REGION: string;
  VITE_BUCKET_NAME: string;
  VITE_ACCESS_KEY: string;
  VITE_SECRET_KEY: string;
  VITE_IMAGE_NAME: string;
  VITE_RESUME_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
