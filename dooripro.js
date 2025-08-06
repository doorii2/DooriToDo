function copy() {
  // 복사문구값 가져오기
  var copyTxt = document.getElementById("copyTxt");

  // 복사문구 선택
  copyTxt.select();
  copyTxt.setSelectionRange(0, 99999); // Mobile 대응

   // 복사
  navigator.clipboard.writeText(copyTxt.value);

  // 복사완료에 대해 Alert으로 띄우기
  alert("복사되었습니다.");
}
//contact copy
