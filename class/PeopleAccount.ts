import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number, depositAmmount: number, withdrawAmmount: number, balance: number){
    super(name, accountNumber, depositAmmount, withdrawAmmount, balance)
    this.doc_id = doc_id
  }
}