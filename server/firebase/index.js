var admin = require("firebase-admin");

var serviceAccount = require("../config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://myjucecoomerce-default-rtdb.firebaseio.com/",
});

module.exports = admin;
