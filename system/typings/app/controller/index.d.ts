// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportGeo from '../../../app/controller/geo';
import ExportHome from '../../../app/controller/home';
import ExportMenu from '../../../app/controller/menu';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    geo: ExportGeo;
    home: ExportHome;
    menu: ExportMenu;
    user: ExportUser;
  }
}
