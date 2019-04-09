// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMenu from '../../../app/model/menu';
import ExportPoi from '../../../app/model/poi';
import ExportSlide from '../../../app/model/slide';
import ExportStyle from '../../../app/model/style';
import ExportTopsearch from '../../../app/model/topsearch';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Menu: ReturnType<typeof ExportMenu>;
    Poi: ReturnType<typeof ExportPoi>;
    Slide: ReturnType<typeof ExportSlide>;
    Style: ReturnType<typeof ExportStyle>;
    Topsearch: ReturnType<typeof ExportTopsearch>;
    User: ReturnType<typeof ExportUser>;
  }
}
