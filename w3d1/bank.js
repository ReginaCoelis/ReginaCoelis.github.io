class Bank {
    constructor(){
       this.accounts = []
    }
    addAccount(acct){
        this.accounts.push(acct);
    }

    addSavingsAccount(number,interest){
      return this.accounts.push(new SavingsAccount(number, interest)).length
    }

    addCheckingAccount(number,overdraft){
        return this.accounts.push(new CheckingAccount(number, overdraft)).length
    }

    closeAccount(number){
        let acnt = this.accounts.find((value) => value === number);
        if(acnt){
            this.accounts.splice(acnt,1)
        }
    }
    accountReport(){
        this.accounts.forEach(acnt=>{
            console.log(acnt.toString())
        })
    }

    endOfMonth(){
        this.accounts.forEach((account) =>{
            console.log(account.endOfMonth())
        })
    }

    static nextNumber(){
        const account = this.accounts[this.accounts.length-1]
        let accountNum = account.number;
        return accountNum+1
    }
    
}