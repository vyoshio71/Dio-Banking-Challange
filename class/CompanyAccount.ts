import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  private loanAmmount: number
  private loanStatus: boolean = true
  private balanceCompany: number

  constructor(name: string, accountNumber: number, depositAmmount: number, withdrawAmmount: number, balanceCompany: number, loanAmmount: number){
    super(name, accountNumber, depositAmmount, withdrawAmmount, balanceCompany)
    this.loanAmmount = loanAmmount
    this.balanceCompany = balanceCompany + depositAmmount - withdrawAmmount
  }

  getLoan = (): void => {
    if(this.validateLoan()) {
      console.log(`Voce pegou um empréstimo de ${this.loanAmmount}`)
      console.log(`Seu saldo agora é de ${this.loanAmmount+this.balanceCompany}`)
    }
    
  }

  validateLoan = () => {
    if(this.loanStatus) {
      return this.loanStatus
    }

    throw new Error('Empréstimo recusado')
  }
}
