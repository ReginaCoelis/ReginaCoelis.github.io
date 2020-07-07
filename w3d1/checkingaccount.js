class CheckingAccount extends Account{

    constructor(number,  overdraftLimit=100.00){
        super(number);
        this.overdraftLimit = overdraftLimit;
    }

    setOverdraftLimit(overdraftLimit){
        this.overdraftLimit = overdraftLimit
    }
     getOverdraftLimit(){
         return this.overdraftLimit
     }
     withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount >= this._balance && amount >= overdraftLimit) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }
     toString(){
        return 'Account Number: ' + this._number +
        '\nAccount Type: Checking Account' +
        '\nBalance: ' + this._balance
     }
     endOfMonth() {
        if (super.getBalance() === 0) {
            return "Warning, low balance CheckingAccount 3:" + this._balance + " overdraft limit:" + this._overdraft
        } else {
            return ""
        }

    }

}