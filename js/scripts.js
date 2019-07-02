function UserDetails(name, initialDeposit) {
  this.name = name
  this.initialDeposit = initialDeposit
};

UserDetails.prototype.Adjust = function () {
  return this.currentBalance += (this.newDeposit - this.newWithdrawal);
};

function resetFields() {
  $("#new-deposit").val("");
  $("#new-withdrawal").val("");
};

var myUserDetails = new UserDetails();

$(document).ready(function() {
    $("form#register").submit(function(event) {
            // debugger
      event.preventDefault();
      var initialDeposit = $("input#initial-deposit").val();
      var currentBalance = initialDeposit

      $("#currentBalance").text(currentBalance);

      console.log(initialDeposit)
    })

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
