document.getElementById("subit").addEventListener('click', function() {
    var money = document.getElementById("money").value
    var balance = document.getElementById("balance").value
    var gold = document.getElementById("gold").value
    var silver = document.getElementById("silver").value
    var assets = document.getElementById("assets").value
    var currency = " Rupee"

    money = parseInt(money)
    balance = parseInt(balance)
    gold = parseInt(gold)
    silver = parseInt(silver)
    assets = parseInt(assets)

    var resultmoney = money * 40 / 100
    var resulbalance = balance * 40 / 100
    var resultgold = gold * 190392
    var resulsilver = silver * 2466
    var resultassets = assets * 40 / 100
    var finalresult = Number(resultmoney + resulbalance + resultgold + resulsilver + resultassets);

    if (money == 0 && balance == 0 && gold == 0 && silver == 0 && assets == 0) {
        var result = document.getElementById("result").innerHTML = "Please enter the amount of your wealth"

    } else {
        var result = document.getElementById("result").innerHTML = "Your Total Zakat is=" + finalresult + currency
    }
})