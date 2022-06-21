const admin = require('firebase-admin');

//firebase service account pk
const type = "service_account";
const project_id = "courso-reducted";
const private_key_id = "reducted";
const private_key = "reducted";
const client_email = "reducted";
const client_id = "reducted";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url = "reducted";

// credential grants access to Firebase services
admin.initializeApp({
    credential: admin.credential.cert({
        type,
        project_id,
        private_key_id,
        private_key:
          private_key.replace(/\\n/g,'\n'),
        client_email,
        client_id,
        auth_uri,
        token_uri,
        auth_provider_x509_cert_url,
        client_x509_cert_url
    }),
});

module.exports = admin;