localStorage.setItem("bakiye", 900000000)

let bakiye = localStorage.getItem("bakiye")
$("#bakiye").html(`Bakiye: ${bakiye}`);

$("#kytBtn").click(function (e) {
    e.preventDefault();
    let kytisim = $("#kytisim").val();
    let kytsifre = $("#kytsifre").val();
    localStorage.setItem("kadi", kytisim);
    localStorage.setItem("sifre", kytsifre);
    window.location.href = "login.html"
});


$("#lgnBtn").click(function (e) {
    e.preventDefault();
    let kadi = localStorage.getItem("kadi");
    let sifre = localStorage.getItem("sifre");
    let lgnisim = $("#lgnisim").val();
    let lgnsifre = $("#lgnsifre").val();
    if (kadi == lgnisim && sifre == lgnsifre) {
        window.location.href = "anasayfa.html"
    }
    else {
        $("#hata").html("Kullanıcı adı veya şifre hatalı");
    }
});

$("#cekBtn").click(function (e) {
    e.preventDefault();
    $("#miktar").show();
    $("#gonderBtn").hide();
    $(".geriBtn").show();
    $("#yeniHesap").hide();
    let miktar = $("#miktar").val();
    let bakiye = localStorage.getItem("bakiye");
    let sonuc = bakiye -= miktar;
    

    if (miktar <= bakiye && miktar != 0) {
        localStorage.setItem("bakiye", sonuc);
        $("#bakiye").html(`Bakiye: ${bakiye}`);   
        $("#info").html("İşlem Başarılı");
    }
   
    else if(miktar == 0){
        $("#info").html("Lütfen Tutar Giriniz!");
    }
});




$("#gonderBtn").click(function (e) { 
    e.preventDefault();
    $("#cekBtn").hide();
    $("#miktar").show();
    $("#iban").show();
    $("#gonderBtn").hide();
    $("#ibanBtn").show();
    $(".geriBtn").show();
    $("#yeniHesap").hide();
});


$("#ibanBtn").click(function (e) { 
    e.preventDefault();
    let miktar = $("#miktar").val();
    let bakiye = localStorage.getItem("bakiye");
    let sonuc = bakiye -= miktar;
    let iban = $("#iban").val();

    if (miktar <= bakiye && miktar >= 0 && iban.length == 24) {
        localStorage.setItem("bakiye", sonuc);
        $("#bakiye").html(`Bakiye: ${bakiye}`);
        $("#info").html("İşlem Başarılı");
    }
    else if (miktar == 0){
        $("#info").html("Yetersiz Bakiye");
    }
    else if(iban != 24){
        $("#info").html("İban Eksik Veya Hatalı");
    }
    
});


$(".geriBtn").click(function (e) { 
    e.preventDefault();
    window.location.href ="anasayfa.html"
});
$("#yeniHesap").click(function (e) { 
    e.preventDefault();
    window.location.href ="yenihesap.html"
});
$("#vadesizHesap").click(function (e) { 
    e.preventDefault();
    window.location.href ="vadesizhesap.html"
});

$("#btnOlustur").click(function (e) { 
    e.preventDefault();
    let miktar = $("#miktar").val();
    let bakiye = localStorage.getItem("bakiye");
    let sonuc = bakiye -= miktar;
    let hesap = $("#hesapAdi").val();
    localStorage.setItem("hesabinadi", hesap);
    let turk = $("try").val("try");
    let usd = $("usd").val("usd");
    let euro = $("eur").val("eur");
    
    



    localStorage.setItem("try" , turk);
    localStorage.setItem("usd" , usd);
    localStorage.setItem("euro" , euro);

    if (miktar <= bakiye && miktar > 0 ) {
        localStorage.setItem("bakiye", sonuc);
        $("#bakiye").html(`Bakiye: ${bakiye}`);
        $("#info").html("Hesabınız Oluşturuldu Anasayfaya Yönlendiriliyorsunuz");
        window.setTimeout(function(){location.href = 'anasayfa.html';}, 1500);                        ;
    }
    else if(hesap == 0){
        $("#info").html("Lütfen Hesap Adı Giriniz.");
    }
    else if (miktar == 0){
        $("#info").html("Yetersiz Bakiye");
    }
    
});

