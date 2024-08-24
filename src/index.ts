import { bearer } from "@elysiajs/bearer";
import { Elysia } from "elysia";
import { cookie } from "@elysiajs/cookie";
import { cors } from "@elysiajs/cors";
import { html } from "@elysiajs/html";
import { jwt } from "@elysiajs/jwt";
import { staticPlugin } from "@elysiajs/static";
import { swagger } from "@elysiajs/swagger";

const PORT = process.env.PORT || 3000;
const app = new Elysia()
  .use(
    swagger({
      path: '/v1/swagger',
      documentation: {
        info: {
          title: "Elysia documentation",
          version: "0.1.0",
        },
      },
    })
  )
  // .use(securitySetup)
  // .use(docsSetup)
  // .use(logger())
  // .use(staticPlugin())
  // .use(
  //   jwt({
  //     name: "jwt",
  //     secret: process.env.JWT_SECRET!,
  //   })
  // )
  // .use(html())
  // .use(cors())
  // .use(cookie())
  // .use(bearer())
  // .use(bearer()).onBeforeHandle(async ({ bearer }) => {
  //   if (!bearer) throw new Error("Unauthorized");
  //   const isAuthorized = bearer === "12345678";
  //   if (!isAuthorized) {
  //     throw new Error("Unauthorized");
  //   }
  // }).
  .get("/", (a) => {
    // console.log(a)
    // return { resule: JSON.stringify(a) }
    return 'V1 ok'
  })
  .listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
