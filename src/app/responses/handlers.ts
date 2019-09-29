import { Request, Response, ErrorRequestHandler, NextFunction } from "express";

class Handler {
  constructor() {}

  errorHandlerApi(
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ): Response {
    console.error(`Api error handler: ${err}`);
    return res.status(500).json({
      errorCode: "ERR-001",
      message: "Internal server error"
    });
  }
}

export default new Handler();
