import { JWT_SECRET } from './../config/secrets';
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export const jwt = (req: Request, res: Response, next: NextFunction) => {

    const token = <string>req.headers["auth"];
    let payload;

    try {
        payload = <any>jwt.verify(token, JWT_SECRET);
        res.locals.jwtPayload = payload;
    } catch (error) {
        // (unauthorized)
        res.status(401).send();
        return;
    }

    const { userId, email } = payload;
    const novoToken = jwt.sign({ userId, email }, JWT_SECRET, {
        expiresIn: "1h"
    });
    res.setHeader("token", novoToken);

    next();
};