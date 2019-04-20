// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMaoyan from '../../../app/model/maoyan';
import ExportMenu from '../../../app/model/menu';
import ExportPoi from '../../../app/model/poi';
import ExportRecommend from '../../../app/model/recommend';
import ExportSlide from '../../../app/model/slide';
import ExportStyle from '../../../app/model/style';
import ExportTopsearch from '../../../app/model/topsearch';
import ExportUser from '../../../app/model/user';
import ExportZhenguo from '../../../app/model/zhenguo';

declare module 'egg' {
  interface IModel {
    Maoyan: ReturnType<typeof ExportMaoyan>;
    Menu: ReturnType<typeof ExportMenu>;
    Poi: ReturnType<typeof ExportPoi>;
    Recommend: ReturnType<typeof ExportRecommend>;
    Slide: ReturnType<typeof ExportSlide>;
    Style: ReturnType<typeof ExportStyle>;
    Topsearch: ReturnType<typeof ExportTopsearch>;
    User: ReturnType<typeof ExportUser>;
    Zhenguo: ReturnType<typeof ExportZhenguo>;
  }
}
