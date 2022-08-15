import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Note, NoteSchema } from "src/schemas/note.schema";
import { NoteService } from "./servics/note/note.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]),
  ],
  providers: [NoteService],
  exports: [NoteService],
})
export class NotesModule {}
