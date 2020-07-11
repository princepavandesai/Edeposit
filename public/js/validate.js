$(document).ready(function(){

var today = new Date();
var date1 = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();//var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
document.getElementById("checkdate").value = date1;

$("button[name='resetBtn']").click(function(){
  $("input").not("input[name='TDate']").val("");
});

$("button[name='submitBtn']").click(function(){
  $("#form1").submit();
});

$( "input[name^='customer']" ).keyup(function(){
    var accNum = "";
    for(var ac=1; ac<=10; ac++){
      var nm = "customer"+ac;
      var inVal = $( "input[name="+nm+"]").val();
      accNum = accNum+inVal;
      if (this.previousSibling.tagName == "INPUT" && this.previousSibling.value == "") {
        //alert(p);
        this.previousSibling.focus();
        this.previousSibling.select();
      }
      else if (this.nextSibling.tagName == "INPUT") {
        this.nextSibling.focus();
        this.nextSibling.select();
          $( "input[name='Acct_number']").val(accNum);
      }
      else if(inVal == ""){
        this.focus();
        this.select();
      }
      else {
        $( "input[name='Acct_number']").val(accNum);
      }
    };
  });

  var cashAmount = "",checkAmount= "",backAmount ="";
  $( "input[name^='currency']" ).on('keyup',function(){
    var amount ="";
      for(var ac=1; ac<=7; ac++){
        var nm = "currency"+ac;
        var inVal = $( "input[name="+nm+"]").val();
        if(ac == 6 && inVal != ""){
          inVal = "."+inVal;
        }
        else if(ac == 6 && inVal == ""){
          inVal = ".0";
        }
        amount = amount+inVal;
          cashAmount = amount;
        if (this.previousSibling.tagName == "INPUT" && this.previousSibling.value == "") {
          //alert(p);
          this.previousSibling.focus();
          this.previousSibling.select();
        }
        else if (this.nextSibling.tagName == "INPUT") {
          this.nextSibling.focus();
          this.nextSibling.select();
        }
        else if(inVal == ""){
          this.focus();
          this.select();
        }
      };
      calculateTotal();
    });

    $( "input[name^='checks']" ).on('keyup',function(){
      var amount ="";
      for(var ac=1; ac<=7; ac++){
        var nm = "checks"+ac;
        var inVal = $( "input[name="+nm+"]").val();
        if(ac == 6 && inVal != ""){
          inVal = "."+inVal;
        }
        else if(ac == 6 && inVal == ""){
          inVal = ".0";
        }
        amount = amount+inVal;
          checkAmount = amount;
        if (this.previousSibling.tagName == "INPUT" && this.previousSibling.value == "") {
          //alert(p);
          this.previousSibling.focus();
          this.previousSibling.select();
        }
        else if (this.nextSibling.tagName == "INPUT") {
          this.nextSibling.focus();
          this.nextSibling.select();
        }
        else if(inVal == ""){
          this.focus();
          this.select();
        }
      };
      calculateTotal();
      });

        $( "input[name^='checks']" ).on('focus',function(){
          printCash();
        });
        $( "input[name^='backtotal']" ).on('focus',function(){
            printChecks();
        });

      $( "input[name^='backtotal']" ).on('keyup',function(){
        var amount ="";
        for(var ac=1; ac<=7; ac++){
          var nm = "backtotal"+ac;
          var inVal = $( "input[name="+nm+"]").val();
          if(ac == 6 && inVal != ""){
            inVal = "."+inVal;
          }
          else if(ac == 6 && inVal == ""){
            inVal = ".0";
          }
          amount = amount+inVal;
          if (this.previousSibling.tagName == "INPUT" && this.previousSibling.value == "") {
            //alert(p);
            this.previousSibling.focus();
            this.previousSibling.select();
          }
          else if (this.nextSibling.tagName == "INPUT") {
            this.nextSibling.focus();
            this.nextSibling.select();
          }
          else if(inVal == ""){
            this.focus();
            this.select();
          }
        };
          backAmount = amount;
        calculateTotal();
        });

        function printCash(){
          var subTotalStr  = cashAmount;
          var subTotalString = subTotalStr.replace(".","");
          if(subTotalStr.indexOf(".") > 0){
          var dotLoc = subTotalStr.indexOf(".")-1;
          }
          else{
            var dotLoc = subTotalStr.length-1;
          }
          var po = 5 - dotLoc;
          $( "input[name^='currency']").val("");
          for(var i=1; i<=subTotalString.length;i++){
            var nm = "currency"+po;
            var subTotalChar = subTotalString.charAt(i-1);
            $( "input[name="+nm+"]").val(subTotalChar);
            po++;
          }
        }

        function printChecks(){
          var subTotalStr  = checkAmount;
          var subTotalString = subTotalStr.replace(".","");
          if(subTotalStr.indexOf(".") > 0){
          var dotLoc = subTotalStr.indexOf(".")-1;
          }
          else{
            var dotLoc = subTotalStr.length-1;
          }
          var po = 5 - dotLoc;
          $( "input[name^='checks']").val("");
          for(var i=1; i<=subTotalString.length;i++){
            var nm = "checks"+po;
            var subTotalChar = subTotalString.charAt(i-1);
            $( "input[name="+nm+"]").val(subTotalChar);
            po++;
          }
        }

      function calculateTotal(){
        var cash=0,check=0,cashback=0;
          if (cashAmount.length){
            cash = parseFloat(cashAmount);
              $( "input[name='Cash_Deposit']").val(cash);
          }
          if (checkAmount.length) {
            check = parseFloat(checkAmount);
              $( "input[name='Check_Deposit']").val(check);
          }
          if (backAmount.length){
            cashback = parseFloat(backAmount);
              $( "input[name='Cash_back']").val(cashback);
          }

          if(cash > 0 && check > 0 && cashback <=0){
            var subTotal = cash+check;
            $( "input[name='Subtotal']").val(subTotal);
            var subTotalStr  = subTotal.toString();
            var subTotalString = subTotalStr.replace(".","");
            if(subTotalStr.indexOf(".") > 0){
            var dotLoc = subTotalStr.indexOf(".")-1;
            }
            else{
              var dotLoc = subTotalStr.length-1;
            }
            var po = 5 - dotLoc;
            $( "input[name^='coin']").val("");
            for(var i=1; i<=subTotalString.length;i++){
              var nm = "coin"+po;
              var subTotalChar = subTotalString.charAt(i-1);
              $( "input[name="+nm+"]").val(subTotalChar);
              po++;
            }
            var pos = 7-dotLoc;
            $( "input[name^='totaldeposit']").val("");
            for(var j=1; j<=subTotalString.length;j++){
              var nm = "totaldeposit"+pos;
              var subTotalChar = subTotalString.charAt(j-1);
              $( "input[name="+nm+"]").val(subTotalChar);
              pos++;
            }
          }

          if(cash > 0 && check > 0 && cashback > 0){
            var subTotal = cash+check;
            $( "input[name='Subtotal']").val(subTotal);
            var subTotalStr  = subTotal.toString();
            var subTotalString = subTotalStr.replace(".","");
            if(subTotalStr.indexOf(".") > 0){
            var dotLoc = subTotalStr.indexOf(".")-1;
            }
            else{
              var dotLoc = subTotalStr.length-1;
            }
            var po = 5 - dotLoc;
            $( "input[name^='coin']").val("");
            for(var i=1; i<=subTotalString.length;i++){
              var nm = "coin"+po;
              var subTotalChar = subTotalString.charAt(i-1);
              $( "input[name="+nm+"]").val(subTotalChar);
              po++;
            }

            var depositTotal = (cash+check)-cashback;
            $( "input[name='Total']").val(depositTotal);
            var depositTotalStr  = depositTotal.toString();
            var depositTotalString = depositTotalStr.replace(".","");
            if(depositTotalStr.indexOf(".") > 0){
            var dotLoc = depositTotalStr.indexOf(".")-1;
            }
            else{
              var dotLoc = depositTotalStr.length-1;
            }
            var pos = 7-dotLoc;
            $( "input[name^='totaldeposit']").val("");
            for(var j=1; j<=depositTotalString.length;j++){
              var nm = "totaldeposit"+pos;
              var depoTotalChar = depositTotalString.charAt(j-1);
              $( "input[name="+nm+"]").val(depoTotalChar);
              pos++;
            }
          }

        }
/*function myFunction0(){
        var a=0,b=0;
        if(document.getElementById('cashtxt').value!=="")
        {
            a=parseFloat(document.getElementById('cashtxt').value)
        }
        if(document.getElementById('checktxt').value!=="")
        {
            b=parseFloat(document.getElementById('checktxt').value)
        }
        if(a>=0 || b>=0)
        {
            const c=a+b
            document.getElementById('subtotaltxt').value=parseFloat(c)
        }
        else
        {
            alert("Amount must be positive.")
        }

        const d=parseFloat(document.getElementById('subtotaltxt').value)
        var e=0;
        if(document.getElementById('cashbacktxt').value!=="")
        {
            e=parseFloat(document.getElementById('cashbacktxt').value)
        }
        if(e<d/2 && e>=0)
        {
            const f=d-e
            document.getElementById('totalxt').value=parseFloat(f)
        }
        else
        {
            alert('Cashback can be availaed less than 50% of subtotal.')
            document.getElementById('cashbacktxt').value=""
        }

    }
*/
});
