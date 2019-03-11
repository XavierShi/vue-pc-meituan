// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportVerJWT from '../../../app/middleware/verJWT';

declare module 'egg' {
  interface IMiddleware {
    verJWT: typeof ExportVerJWT;
  }
}
