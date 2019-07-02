function UserDetails(name, initialDeposit) {
  this.name = name
  this.initialDeposit = initialDeposit
}

var myUserDetails = new UserDetails();

$(document).ready(function() {
    $("form#register").submit(function(event) {
            debugger
      event.preventDefault();
      var initialDeposit = $("input#initial-deposit").val();
      var currentBalance = initialDeposit

      console.log(initialDeposit)
    })


    function displayCurrentBalance(currentBalance) {
      var  = $("ul#contacts");
      var htmlForContactInfo = "";
      addressBookToDisplay.contacts.forEach(function(contact) {

      });
      contactsList.html(htmlForContactInfo);
  });
});
