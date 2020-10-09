const firebaseShion1 = (client, firebase, tokens) => {

    var firebaseConfig = {
        apiKey: `${tokens.apiKey}`,
        authDomain: `${tokens.authDomain}`,
        databaseURL: `${tokens.databaseURL}`,
        projectId: `${tokens.projectId}`,
        storageBucket: `${tokens.storageBucket}`,
        messagingSenderId: `${tokens.messagingSenderId}`,
        appId: `${tokens.appId}`,
        measurementId: `${tokens.measurementId}`
    };
    
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    return client.database = database;
}


const firebaseShion2 = (client) => {

    const firebase2 = require('firebase-admin')

    var serviceAccount = require("../token/adminShionFirebase.json");

    firebase2.initializeApp({
        credential: firebase2.credential.cert(serviceAccount),
        databaseURL: "https://shionbot2.firebaseio.com"
    });
    const databasePerfis = firebase2.database();

    return client.databasePerfis = databasePerfis;
}

module.exports = {
    firebaseShion1,
    firebaseShion2
}