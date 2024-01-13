import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class User {
    @Prop()
    id: string

    @Prop()
    firstname: string

    @Prop()
    lastname: string

    @Prop()
    email: string

    @Prop()
    password: string

    @Prop()
    chats: []
}

export const UserSchema = SchemaFactory.createForClass(User)