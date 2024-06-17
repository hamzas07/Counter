let count=0;
function inc() {
  count++;
  document.getElementById('panel').innerHTML=count;
}
function reset() {
  count=0;
  document.getElementById('panel').innerHTML=count;
}
function dec() {
  count--;
  document.getElementById('panel').innerHTML=count;
}