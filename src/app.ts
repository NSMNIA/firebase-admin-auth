import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { UserRoutesConfig } from './routes/Users/config';
const port = 3001;

admin.initializeApp();

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: true }));

UserRoutesConfig(app);

export const api = functions.https.onRequest(app);

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
