import { EggAppConfig, EggAppInfo, PowerPartial } from "egg"
import ignoreRouter from "../app/routes"

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1547087481623_4594"

  // add your egg config in here
  config.middleware = ["verJWT"]

  config.verJWT = {
    ignore: ignoreRouter
  }

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  }

  config.security = {
    csrf: false,
    domainWhiteList: ["http://127.0.0.1:7001", "http://192.168.1.101:7001"]
  }

  // cors
  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH"
  }

  // mongo
  config.mongoose = {
    client: {
      url: "mongodb://127.0.0.1/meituan",
      options: {}
    }
  }

  // redis
  config.redis = {
    client: {
      port: 6379, // Redis port
      host: "127.0.0.1", // Redis host
      password: "auth",
      db: 0
    }
  }

  // passport
  config.passportLocal = {
    // usernameField: 'username',
    // passwordField: 'password',
  }

  // validate
  config.validate = {
    // convert: false,
    // validateRoot: false,
  }

  // jwt
  config.jwt = {
    secret: "meituan" //自己设置的值
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  }
}
