import {
  Table,
  Column,
  Model,
  UpdatedAt,
  CreatedAt,
  PrimaryKey,
  IsUUID,
  DataType,
  Default,
} from 'sequelize-typescript';

@Table
class Client extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column
  id: string;

  @Column
  cpf: string;

  @Column
  email: string;

  @Column
  postal_code: string;

  @Column
  city: string;

  @Column
  neighborhood: string;

  @Column
  street: string;

  @Column
  street_number: string;

  @Column
  complement: string;

  @CreatedAt
  public readonly created_at: Date;

  @UpdatedAt
  public readonly updated_at: Date;
}

export default Client;
