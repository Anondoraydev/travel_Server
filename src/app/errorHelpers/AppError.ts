class AppError extends Error {
  public statusCode: number;

<<<<<<< HEAD
  constructor(statusCode: number, message: string, stark = "") {
    super(message); //thow new error ("sending error message");
    this.statusCode = statusCode;

    if (stark) {
      this.stack = stark;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default AppError;
=======
  constructor(statusCode: number, message: string, stack="") {
    super(message);
      this.statusCode = statusCode;

      if (stack) {
          this.stack= stack
      }
      else {
          Error.captureStackTrace(this, this.constructor);
      }
  }
}

export default AppError
>>>>>>> 1c39634 (globale error handaling added)
