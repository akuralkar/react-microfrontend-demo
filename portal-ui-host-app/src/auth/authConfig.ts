import { PublicClientApplication } from "@azure/msal-browser";

export interface msalConfig {
    auth: {
        clientId: string;
        authority: string;
        redirectUri: string;
    };
    cache: {
        cacheLocation: "localStorage" | "sessionStorage";
        storeAuthStateInCookie: boolean;
    };
}
interface LoginRequest {
    scopes: string[];
}
const msalConfig: msalConfig = {
    auth:{
        clientId: import.meta.env.VITE_AZURE_CLIENT_ID,
        authority: `https://login.microsoftonline.com/${import.meta.env.VITE_AZURE_TENANT_ID}`,
        redirectUri: import.meta.env.VITE_AZURE_REDIRECT_URI
    },
    cache:{
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
    }
}
const loginRequest: LoginRequest = {
    scopes: ["User.Read"]
}
const msalInstance= new PublicClientApplication(msalConfig);

export { msalConfig, loginRequest, msalInstance };