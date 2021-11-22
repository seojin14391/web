function GetIEVersion() {
var sAgent = window.navigator.userAgent;
var Idx = sAgent.indexOf("MSIE");
// If IE, return version number.
if (Idx > 0)
return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));
// If IE 11 then look for Updated user agent string.
else if (!!navigator.userAgent.match(/Trident\/7\./))
return 11;
else
return 0; //It is not IE
}
if (GetIEVersion() > 0)
alert("IE " + GetIEVersion() + " 로 감지 되었습니다. chrome 브라우저 이용을 권장합니다.\n인터넷 익스플로어는 마이크로소프트도 버렸습니다.\n핸드폰, 태블릿 사용도 좋습니다.");
GetIEVersion();
