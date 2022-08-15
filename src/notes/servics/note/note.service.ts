import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { _Note } from "src/models/note.model";
import { Note, NoteDocument } from "src/schemas/note.schema";

@Injectable()
export class NoteService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}

  async createNote(note: _Note) {
    if (note.id === undefined || note.id === null || note.id === "") {
      note.id = Date.now().toString();
    }
    note.createdAt = Date.now();
    let newNote = new this.noteModel(note);
    return await newNote.save();
  }

  async deleteNote(note: _Note) {
    return await this.noteModel.deleteOne({id: note.id}).exec();
  }

  async getNotes(uid: string) {
    return await this.noteModel.find({uid : uid}).exec();
  }

  async getNoteById(uid: string) {
    return await this.noteModel.find({ uid: uid }).exec();
  }
}
