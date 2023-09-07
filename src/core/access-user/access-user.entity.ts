import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('access_user')
export class AccessUserEntity {
    @PrimaryColumn({ name: 'id' })
    id: string;

    @Column({ name: 'creation_date' })
    creationDate: Date;

    @Column({ name: 'update_date' })
    updateDate: Date;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'email' })
    email: string;

    @Column({ name: 'username' })
    username: string;

    @Column({ name: 'password' })
    password: string;

    constructor(
        name: string,
        email: string,
        username: string,
        password: string
    ) {
        this.id = uuidv4();
        this.creationDate = new Date();
        this.updateDate = new Date();
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
    }
}
