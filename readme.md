# Movie Node Server

## Overview

The Movie Node Service is a simple example of a Node.js server. 
This application serves static JSON data located in the 'data' 
directory under the 'source' folder. The technologies used in 
this application include **TypeScript** for static typing, **Inversify** 
as a lightweight IoC (Inversion of Control) container, 
a N0-SQL database with **Mongoose**, and TypeScript class models 
created with **Typegoose**. Additionally, **Swagger** is used for 
interactive API documentation, **CORS** is implemented for secure 
access from other domains, and **JEST** is utilized for 
testing the core functionality of the application.


## Runing the Applicaiton

1. Install the packages
            
        npm install

2. Run the server

        npm start

3. To open Swagger navigate to the following:

        http://localhost:3005/api-docs


## Env Variables

All environment variables can be found in the .ENV file located in the root directory of this application.

1. PORT: the port this application runs on
2. CORS_PORT: only outside applications running on this port will have access to this application's endpoints
3. CONNECTION_STRING: the location of the static data within this application
4. SWAGGER_ENDPOINT: the endpoint for swagger
