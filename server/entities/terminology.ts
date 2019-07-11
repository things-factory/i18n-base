import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('terminologies')
@Index('ix_term_0', (term: Terminology) => [term.domain, term.locale, term.category, term.name], { unique: true })
@Index('ix_term_1', (term: Terminology) => [term.domain])
@Index('ix_term_2', (term: Terminology) => [term.domain, term.locale])
@Index('ix_term_3', (term: Terminology) => [term.domain, term.locale, term.name])
export class Terminology {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column()
  name: string

  @Column({
    nullable: true
  })
  description: string

  @Column()
  locale: string

  @Column()
  category: string

  @Column()
  display: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(type => User, {
    nullable: true
  })
  creator: User

  @ManyToOne(type => User, {
    nullable: true
  })
  updater: User
}
