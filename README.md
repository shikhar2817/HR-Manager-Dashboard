# Juntrax Assignment

## Frontend

-   Technology used: `React`, `Typescript`, `Material UI`, `Material Tables`.

### How to setup Frontend locally

-   Open terminal
-   move to client directory (`cd client`)
-   run the command: `npm install` (make sure node is already installed on your system).
-   run the command to start the server: `npm start`. Client will start on [http://localhost:3000/](http://localhost:3000/)
-   create an `.env` file inside client directory and add the following values:
    `REACT_APP_SERVER_URL: <Your backend server url here>`

## Backend

-   Technology used: `Node`, `Typescript`, `Express`, `JWT` (for authentication).

### How to setup Frontend locally

-   Open terminal
-   move to client directory (`cd server`)
-   run the command: `npm install` (make sure node is already installed on your system).
-   run the command to start the server: `npm run dev`. Client will start on [http://localhost:5000/](http://localhost:5000/)
-   create an `.env` file inside server directory and add the following values:

```
PORT: <Your custom port, by default it's 5000>
MONGO_DB_URL: <Your database url>
JWT_SECRET_KET: <Secret key for encrypting jwt tokens>
ZOHO_MAIL_NOREPLY: <email address of the smtp service email>
ZOHO_MAIL_NOREPLY_PASSWORD: <password for the email>
```

> Note that i have used the Zoho smtp for sending emails.

## Database

-   `MongoDB`
