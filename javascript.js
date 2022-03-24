function cek() {
  if (document.login.nama.value == '') {
    alert('Nama harus diisi');
    document.login.nama.focus();
    return false;
  } else {
    return true;
  }
}

function next(event, id) {
  if (event.key == 'Enter') {
    event.preventDefault();
    document.getElementById(id).focus();
  }
}
