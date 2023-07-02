export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number
  depositAmmount: number
  private status: boolean = true
  whithdrawAmmount: number 

  constructor(name: string, accountNumber: number, depositAmmount: number, withDrawAmmount: number, balance: number){
    this.name = name
    this.accountNumber = accountNumber
    this.depositAmmount = depositAmmount
    this.balance = balance + depositAmmount
    this.whithdrawAmmount = withDrawAmmount
  }

  setName = (name: string): void => {
    this.name = name
    console.log(`Nome alterado com sucesso! ${this.name}`)
  }

  getName = (): string => {
    return this.name
  }

  deposit = (): void => {
    if(this.validateStatus()){
      console.log(`Depositado com sucesso ${this.depositAmmount}`)
    }
  }

  withdraw = (): void => {
    if(this.validateStatus() && this.balance >= this.whithdrawAmmount){
      console.log(`Voce sacou ${this.whithdrawAmmount}`)
    } else {
      console.log('Saldo insuficiente para realizar o saque!')
    }
  }

  getBalance = (): void => {
    if(this.whithdrawAmmount < this.balance) {
      console.log(`Seu saldo é ${this.balance - this.whithdrawAmmount}`)
    } else {
      console.log(`Seu saldo é de ${this.balance}`)
    } 
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}

export class NewDioAccount extends DioAccount {
  constructor(name: string, accountNumber: number, depositAmmount: number, withdrawAmmount: number, balance: number){
    super(name, accountNumber, depositAmmount, withdrawAmmount, balance)
  }
}

