class FetchError extends Error {
  constructor({ path = 'http://localhost', userId }, ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FetchError);
    }

    this.name = 'FetchError';
    // Custom debugging information
    this.path = path;
    this.userId = userId;
    this.timestamp = (new Date()).toLocaleString();
  }
}

export default FetchError;

try {
  throw new FetchError({
    path: 'http://zhike.youdao.com',
    userId: 1621
  }, 'bazMessage');
} catch (e) {
  console.error(e.name);    // CustomError
  console.error(e.path);     // baz
  console.error(e.message); // bazMessage
  console.error(e.stack);   // stacktrace
  console.log(e.userId);
}