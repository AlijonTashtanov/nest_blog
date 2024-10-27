// user-roles.model.ts
import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { User } from './user/user.model';
import { Role } from './role/role.model';

@Table
export class UserRoles extends Model<UserRoles> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Role)
  @Column
  roleId: number;
}
