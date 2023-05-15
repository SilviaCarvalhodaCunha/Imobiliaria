import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./users.entity";
import RealEstate from "./realEstate.entity";

@Entity('schedules')
class Schedule{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: "date"})
    date: string;

    @Column({type: "time"})
    hour: string;
    
    @ManyToOne(() => RealEstate)
    realEstate: RealEstate

    @ManyToOne(() => User)
    user: User
}

export default Schedule