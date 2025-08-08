function copy() {
  // 복사문구값 가져오기
  var copyTxt = document.getElementById("copyTxt");

  // 복사문구 선택
  copyTxt.select();
  copyTxt.setSelectionRange(0, 99999); // Mobile 대응

   // 복사
  navigator.clipboard.writeText(copyTxt.value);
}
//contact copy




