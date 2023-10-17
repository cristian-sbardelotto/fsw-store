declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;

    GOOGLE_CLIENT_SECRET: string;
    GOOGLE_CLIENT_ID: string;
  }
}
