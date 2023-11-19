import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ unique: true})
    username: string;

    @Column()
    password: string;

    @Column()
    created_at: Date;

    @Column({ nullable: true })
    authStrategy: string;
}