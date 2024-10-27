// role.model.ts
import { Column, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { UserRoles } from '../user-roles.model';

@Table
export class Role extends Model<Role> {
  @Column
  name: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
