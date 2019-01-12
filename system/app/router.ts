import { Application } from "egg"
import { EggShell } from "egg-shell-decorators"

// export default (app: Application) => {
//   const { controller, router } = app;

//   router.get('/', controller.home.index);
// };

export default (app: Application) => {
  EggShell(app, {
    prefix: "/",
    quickStart: true,
    swaggerOpt: {
      open: true,
      title: "美团网Api接口文档",
      version: "1.0.0",
      host: "127.0.0.1",
      port: 7001,
      schemes: ["http"],
      paths: {
        outPath: "./api-docs/public/json/main.json",
        definitionPath: "app/definitions",
        swaggerPath: "app/swagger"
      },
      tokenOpt: {
        default: "manager",
        tokens: {
          manager: "123",
          user: "321"
        }
      }
    }
  })
}
