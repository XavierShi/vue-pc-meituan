import { EggPlugin } from "egg"

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  // security: {
  //   enable: true,
  //   package: "egg-security"
  // },
  cors: {
    enable: true,
    package: "egg-cors"
  },
  mongoose: {
    enable: true,
    package: "egg-mongoose"
  },
  redis: {
    enable: false,
    package: "egg-redis"
  },
  passport: {
    enable: true,
    package: "egg-passport"
  },
  passportLocal: {
    enable: true,
    package: "egg-passport-local"
  }
}

export default plugin
