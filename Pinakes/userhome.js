window.onload = function () {
  var element = document.getElementById("foo");
  console.log(element);
  var title = "Mi bibliotek";
  element.innerHTML=title;

  var a = ["fer", "miguel"];
  for (var i=0; i<a.length; i++) {
    console.log(a[i]);
  }

}
