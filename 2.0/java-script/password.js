var goodURL  = "#"  //이곳에 인증이 되었을때 이동할 페이지  입력
    alert("패스워드를 입력하셔야 합니다.")

var password =  prompt("PASSWD 입력","")

    if (password == null)  {
        alert("패스워드가 일치하지 않습니다.")
        location  = "http://seojin1.kro.kr"         // 실패시 이동 주소       history.back();를 넣어도 됨
    }
    else  {
        var  combo =  password
        var  total =  combo.toLowerCase()

    if  (total == "100322")  {                // 비밀번호
        alert("안녕하세요...어서오십시요...")
        location  =  goodURL
    }
    else  {
        alert("패스워드가 일치하지 않습니다.")
        location  = "http://seojin1.kro.kr"    // 실패시 이동 주소      history.back();를 넣어도 됨
    }
}
