import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { UserRoutesConfig } from './routes/Users/config';
import Config from './Config';

admin.initializeApp(Config.firebase);

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: true }));

UserRoutesConfig(app);

export const api = functions.https.onRequest(app);