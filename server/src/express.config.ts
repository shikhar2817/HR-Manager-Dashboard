import express, { Application } from "express";

const expressConfig = (): Application => {
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    return app;
};

export default expressConfig;
