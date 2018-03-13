'use strict';

//Dependencies
const express = require('express');
const superagent = require('superagent');

const app = express();

const GOOGLE_OAUTH_URL = 'https://www.googleapis.com/oauth2/v4/token';
const OPEN_ID_URL = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';

require('dotenv').config();

app.get('/oauth/google', (request, response) => {
    // (step 3) Expecting CODE from Google 

    if(!request.query.code){
        response.redirect(process.env.CLIENT_URL);
    } else {
        console.log('__CODE__',request.query.code);
        // (step 3.1) Send CODE back to Google
        return superagent.post(GOOGLE_OAUTH_URL)
            .type('form')
            .send({
                code: request.query.code,
                grant_type: 'authorization_code',
                client_id: process.env.GOOGLE_OAUTH_ID,
                client_secret: process.env.GOOGLE_OAUTH_SECRET,
                redirect_uri: `${process.env.API_URL}/oauth/google`,
            })
            .then(tokenResponse => {
                // (step 3.2I Receive Token
                console.log('Step 3.2 - GOOGLE TOKEN');
        
                if(!tokenResponse.body.access_token)
                    response.redirect(process.env.CLIENT_URL); 
                // TODO: Add error configuration
        
                // (step 4)
                const token = tokenResponse.body.access_token;
                return superagent.get(OPEN_ID_URL)
                    .set('Authorization', `Bearer ${token}`);
            })
            .then(openIDResponse => {
                console.log('Back from OpenID');
                console.log(openIDResponse.body);
                // (step 5) Where user would create a profile
                // TODO : Create our token / account / find account
                // TODO : Create cookie, send cookie / token
                response.cookie('X-401d21-OAuth-Token','My Token!');
                response.redirect(process.env.CLIENT_URL);
                // TODO: Add error configuration
            })
            .catch(error => {
                console.log('__ERROR__',error.message);
                response.cookie('X-401d21-OAuth-Token','');
                response.redirect(process.env.CLIENT_URL + '?error=oauth'); 
                // TODO: Add error configuration
            });
    }
});

app.listen(process.env.PORT, () => {
    console.log('Listening on ', process.env.PORT);
});