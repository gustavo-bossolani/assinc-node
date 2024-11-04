import { Request, Response, NextFunction } from 'express';

const ONE_SECONDS = 1000;
const THREE_SECONDS = 3000;
const FIVE_SECONDS = 5000;

export const delay1s = (request: Request, response: Response, next: NextFunction) => {
  setTimeout(() => next(), ONE_SECONDS);
};

export const delay3s = (request: Request, response: Response, next: NextFunction) => {
  setTimeout(() => next(), THREE_SECONDS);
};

export const delay5s = (request: Request, response: Response, next: NextFunction) => {
  setTimeout(() => next(), FIVE_SECONDS);
};