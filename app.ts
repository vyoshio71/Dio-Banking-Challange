import { CompanyAccount } from './class/CompanyAccount'
import { NewDioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10, 6000, 3000, 1000)
console.log(peopleAccount)
peopleAccount.setName('Victor')
peopleAccount.getName()
peopleAccount.deposit()
peopleAccount.withdraw()
peopleAccount.getBalance()
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20, 30000, 15000, 1000, 10000)
console.log(companyAccount)
companyAccount.deposit()
companyAccount.withdraw()
companyAccount.getBalance()
companyAccount.getLoan()
const newDioAccount: NewDioAccount = new NewDioAccount('Yoshio', 30, 10000 + 10, 5000, 500)
console.log(newDioAccount)
newDioAccount.deposit()
newDioAccount.withdraw()
newDioAccount.getBalance()