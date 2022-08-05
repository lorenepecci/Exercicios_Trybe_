import express, { NextFunction, Request, Response } from "express";

const mid = ((err: Error, req: Request, res: Response, next: NextFunction) => {
  const { message, status } = err as any;
  console.log(`message: ${message}`);
  res.status(status).json({ message: message });
  console.error(err);

  next();
});

export default mid;