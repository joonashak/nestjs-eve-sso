import { Module } from "@nestjs/common";
import { EveAuthModule } from "nestjs-eve-auth";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    AuthModule,
    EveAuthModule.forRoot({
      clientId: process.env.CLIENT_ID,
      secretKey: process.env.SECRET_KEY,
      callbackUrl: "http://localhost:3000/callback",
      global: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
