const admin = require('firebase-admin');

require('dotenv').config();

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.TYPE_FIREBASE,
    project_id: process.env.PROJECT_ID_FIREBASE,
    private_key_id: process.env.PRIVATE_KEY_ID_FIREBASE,
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCMdPaj5JBqKY0a\nJslBlwTGc6ycB24Jk1MwhOA0Xj/2hTZe/GI4TGa5mTasryWZFY7C5pjQxqtitgHk\nzdP5yoT3y9L4cSM3ydSDiKPkcI7kAwHeXqRXDiWiQY4rKPAJRBJ7W9UyXx+m3giv\nNt4p0DRCBH4fGoFFss3akp7uQ6bAP8FT7UZNq8ijRtanBI/U/+Sm94tJPVAKLcp+\nqMTAnMGnENXQLwMHgrWJHAxmSYm/El2q2yC5XKK5Mqn1X+/tXjnREA9CqK664chD\nee8b6L127lGaTcUma9v+8NkyJIvkk1ul8iN5iTIU5t7oMU5Ok6BYR9dGFU47Buyo\nQ47HpK7fAgMBAAECggEABUY7IMprdeEbkFjWg+UE4+LiH3XT9v4WSKMkvDKx2jME\naKq3kX+k9+E+AVwOYGJD2yPHp0deljVZetsT07R8K8X2pSeyd9zXYx0VcnWbmApY\n3p3VNAOu/BnUGeDOqrpoq0M2jU6vJJf/4XyA+Tb9T2FVzxsysYhWXJfW6gGWWG++\nNNxKyEaI2yfof9zg4VQ4d2T64DwBdR85vbfSHhQ3AmrqR86IE2nAxyPsrdIPpv+k\nv8UDhgTZOqZ8sp3uHmhLTMH1mAEvg6caMkp2RuoCBCe9+R0kWMW5Vc/WuQRR8onz\nFVwH0vcyJNMt39LDqFxX0ZU/JidZx0HL1pInR6ligQKBgQDFngyJmo2h49o/ULn/\ndWUjCqVOe/IDY88ExQ+mIVAXt7FsNjUJO1zjb63a9L3bTJ8Wt4Kq6cq9oWVN32G7\nR37fU0b5aJti5ZkYUweMa5Pf7rwR8yxwbme7WToovQZ6DW1O+VPEO7nssCaJP/mI\nqJw/49aEoFCwq6qpUPXhwVvQnwKBgQC189LV0GtSktKsX50vTHQvZQnp351NKB6a\nxPtwL8Cj1f++M235LdfIpPS2noKvsGrGBf2DidYBBfCWU+zcgWvrLn5Bpirjg9++\ndibOUC9SBUG8FDzz/I9MfTsN/Sy9mL7l8hgPP5NyVEg4N+kvUoo8/aRSZdiYS6+T\nS9yeYGc5wQKBgBje40UOJnURcA434rC73ZajaFqQTs0Oaqd3BZkq6CGUBMhRqisX\nRYF6NK8xzhMjeYIqZk+MTO/AuDcsvegL/3Orz2rkN2oi6zmceX66q0mrig/YQueD\nfZqeiCtIXuBNgExIJLq1qZiYMsFjQ8xnLAL+cakPZBhYAop8nfVjmGKRAoGAS/8c\nB5w2x1V10vNYpsHLIWSVQG7at7hTGBfAYXpAfu3KFLpMa7A/GZn0cDZCpXkND8q+\nuWsfzGubsl45Z1xTI/bWWzs5XK/fCyE0UiXhreNuMk1NrCbH/42q1cvyHPqoeUil\nzfCi+DTFuV148wAJpzHVqWjKj8nE+sPL0Qa49sECgYBN/GN/MhP6y2C0GqIZeK+o\nnjJRu5/LkAktd+3J2NUnCoflr8LfXM6t7GvR929QXj9+AVzWA1IC4CK9T72/aFzw\nedJoq2/uU+/z4/lZRVLJtZXlpyIfomro4/asaROhg/qhSpsSHz2E6/cNkMBIRl94\nNAoSMaquSyOnnILLPtFCBw==\n-----END PRIVATE KEY-----\n',
    client_email: process.env.CLIENT_EMAIL_FIREBASE,
    client_id: process.env.CLIENT_ID_FIREBASE,
    auth_uri: process.env.AUTH_URI_FIREBASE,
    token_uri: process.env.TOKEN_URI_FIREBASE,
    auth_provider_x509_cert_url:
      process.env.AUTH_PROVIDER_X509_CERT_URL_FIREBASE,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL_FIREBASE,
    universe_domain: process.env.UNIVERSE_DOMAIN_FIREBASE,
  }),
});

module.exports = firebaseApp;
