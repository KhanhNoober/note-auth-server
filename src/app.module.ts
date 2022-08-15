import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NotesModule } from './notes/notes.module';
import { NotesController } from './apis/notes/notes.controller';
import { NoteService } from '../src/notes/servics/note/note.service'
import { AuthMiddleware } from "./middlewares/auth.middleware";
import { AuthService } from './services/auth/auth.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://GoldenFealla:GoldenFealla2402@cluster0.6go5l4u.mongodb.net/?retryWrites=true&w=majority",
    ),
    NotesModule,
  ],
  controllers: [AppController, NotesController],
  providers: [AppService, AuthService],
})
export class AppModule {
  configure(comsumer: MiddlewareConsumer) {
    comsumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL
    })
  }
}
