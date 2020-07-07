class SavingsAccount extends Account{

    constructor(number, interest){
        super(number);
        this._interest = interest;
    }
     setInterest(interest){
         this._interest = interest;
     }

     getInterest(){
         return this._interest;
     }

     addInterest(interst){
        return this.balance*(interst / 100)
     }

     toString(){
        return "SavingsAccount 1: balance: " + this._balance + " interest: " + this._interest
     }
     endOfMonth(){
        let intre = this.addInterest()
        console.log(intre)
    }

}