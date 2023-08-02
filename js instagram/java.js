function kayitol(){
    document.getElementById("kayitol").style.display ="block";
    document.getElementById("girisyap").style.display ="none";
    document.getElementById("kapat").style.display = "none";
    
}
function kayitbasarili(){
    document.getElementById("girisyap").style.display = "none";
     document.getElementById("h3").value;
    document.getElementById("h3").innerHTML = "Kaydınız oluşturuldu lütfen giriş yapınız";
    document.getElementById("girisyap").style.display = "flex";
    document.getElementById("kayitbasarili").style.display = "none";
    let isim  = document.getElementById("isim").value;
    localStorage.setItem("Kullanıcıismi", isim);
    let soyad = document.getElementById("soyisim").value;
    localStorage.setItem("kullanıcısoyadı" , soyad)
    let email = document.getElementById("email").value;
    localStorage.setItem("kullanıcıemail" , email);
    let kadi = document.getElementById("kadi").value;
    localStorage.setItem("kadi " , kadi);

}
function girisyap(){
    document.getElementById("kayitol").style.display ="none";
    document.getElementById("girisyapp").style.display ="block";
    document.getElementById("kapat").style.display = "none";
    document.getElementById("girisyap").style.display = "none";
    document.getElementById("kabul").style.display = "block";
    

}
function giris(){
    
    document.getElementById("girisyapp").style.display = "none";
    document.getElementById("kabul").style.display = "none";
    document.getElementById("yazi").value;
    document.getElementById("yazi").innerHTML = "Hoşgeldiniz";
    

}