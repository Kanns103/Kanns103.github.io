  function showrepo() {
    var myrepo = document.getElementById('addrepo');
    var displaySetting = myrepo.style.display;

    if (displaySetting == 'block') {
      myrepo.style.display = 'none'; // Hide code
    }
    else { // If code is hidden
      myrepo.style.display = 'block';
    }
  }

  function showcontact() {
    var mycontact = document.getElementById('addcontact');
    var displaySetting = mycontact.style.display;

    if (displaySetting == 'block') {
      mycontact.style.display = 'none'; // Hide code
    }
    else { // If code is hidden
      mycontact.style.display = 'block';
    }
  }