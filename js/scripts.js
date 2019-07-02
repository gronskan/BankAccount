function Account(name, balance) {
  this.name = name;
  this.balance = balance;
};

Account.prototype.Adjust = function () {
  return this.balance += (this.newDeposit - this.newWithdrawal);
};

function resetFields() {
  $("#new-deposit").val("");
  $("#new-withdrawal").val("");
};

$(document).ready(function() {
  $("form#new-client").submit(function() {
    event.preventDefault();

    var inputtedName = $("#new-name").val();
    var initialDeposit = parseInt($("#initial-deposit").val());
    initialDeposit = initialDeposit || 0
    var userAccount = new Account(inputtedName, initialDeposit);
    $("#new-client").hide();
    $("#transactions").show();
  })
})

// $(document).ready(function() {
//     $("form#register").submit(function(event) {
//             // debugger
//       event.preventDefault();
//       var initialDeposit = $("input#initial-deposit").val();
//       var currentBalance = initialDeposit
//
//       $("#currentBalance").text(currentBalance);
//
      console.log(initialDeposit)
//     })
$("form#account-update").submit(function() {
  event.preventDefault();

      var deposit = parsInt($("#new-deposit").val());
      var withdrawal = parseInt($("#new-withdrawal").val());
      deposit = deposit || 0
      withdrawal = withdrawal || 0
      userAccount.newDeposit = deposit;
      userAccount.newWithdrawal = withdrawal;

      userAccount.Adjust();

      $("#account-balance").text(userAccount.balance);

      resetFields();
    });

    $("#account-name").text(userAccount.name);
    $("#account-balance").text(userAccount.balance);

  });
});
