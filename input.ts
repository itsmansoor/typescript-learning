function submit() {
  const name = document.getElementById("username") as HTMLInputElement;
  const username = name.value;
  const age = document.getElementById("age") as HTMLInputElement;
  const userage = age.value;
  const pasword = document.getElementById("password") as HTMLInputElement;
  const userpasword = pasword.value;
  console.log(username, userage, userpasword);
}
submit()