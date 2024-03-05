//encapsulation

class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }


deposit(amount) {
    this.balance += amount;
}

widrawal(amount) {
    if (this.balance >= amount) {
        this.balance -= amount;     
    } else {
        console.log('Insufficient balance!');
    }
}

getAccountInfo(){
    // return `Your account number is ${this.accountNumber}, your balance is ${this.balance}`
    return 'your account number is ' + this.accountNumber + ', your balance is '+ this.balance;
    //与上列等效
}
}

const myAccount = new BankAccount('123456789',1000);
const regelAccount = new BankAccount('987654321',6000);

regelAccount.deposit(500);
console.log(regelAccount.getAccountInfo());
regelAccount.widrawal(6501);
console.log(regelAccount.getAccountInfo());