import { Body, Controller, Get, Post, Query, Request } from "@nestjs/common";
import { _Note } from "src/models/note.model";
import { NoteService } from "src/notes/servics/note/note.service";

@Controller("notes")
export class NotesController {
  constructor(private noteService: NoteService) {}

  @Get("/")
  async getNoteById(@Request() req:any) {
    console.log('req by: ', req.user.uid);
    return await this.noteService.getNoteById(req.user.uid);
  }

  @Post("/delete")
  async deleteNote(@Body() note: _Note, @Request() req:any) {
    console.log(note + "test");
    note.uid = req.user.uid;
    return await this.noteService.deleteNote(note);
  }

  @Post("/create")
  async createNote(@Body() note: _Note, @Request() req:any) {
    note.uid = req.user.uid;
    return await this.noteService.createNote(note);
  }

  @Get("/all")
  async getNotes(@Request() req:any) {
    return await this.noteService.getNotes(req.user.uid);
  }
}
