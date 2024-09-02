export const environment = {
    production: false,
    keycloak: {
        clientId: 'your-client-id',
        bearerOnly: true,
        serverUrl: 'https://your-keycloak-server.com/auth',
        realm: 'your-realm',
        credentials: {
            secret: process.env.KEYCLOAK_CLIENT_SECRET
        }
    }
};