(function() {
    "use strict"

    let bank = new Bank()

    describe("Bank Unit Testing", function() {
        it("Add Account", function() {
            let account = bank.addAccount(2304)
            if (account instanceof Object) {
                assert.ok(true)
            }

        })

        it("Add Savings Account", function() {
            let savingsAccount = bank.addSavingsAccount(2345,90)
            if (savingsAccount instanceof Object) assert.ok(true)
        })

        it("Add Checking Account", function() {
            let checkingAccount = bank.addCheckingAccount(23421,100)
            if (checkingAccount instanceof Object) assert.ok(true)
        })

        it("Close Account", function() {
            bank.closeAccount(2304)
            assert.ok(true)
        })

        it("Account Report", function() {
            bank.accountReport()
            assert.ok(true)
        })
    })

})()