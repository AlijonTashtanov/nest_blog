// user.model.ts
import { Column, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { Role } from '../role/role.model';
import { UserRoles } from '../user-roles.model';

@Table
export class User extends Model<User> {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  password: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
