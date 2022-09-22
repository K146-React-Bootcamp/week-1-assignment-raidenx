// ---- Cookie'ler Nedir? 
// Cookie, kullanıcının bilgisayarında az miktarda veri depolamanıza izin veren küçük bir metin dosyasıdır.
// Sitenin alabileceği kullanıcı tercihleri ​​gibi bilgileri takip etmek için kullanılırlar.


// ---- JavaScript'te Cookie Oluşturma
// document.cookie, bu özellik ile çerezler oluşturabilir, okuyabilir ve silebilirsiniz.
// Bu özellik, bir belgeyle ilişkili tüm tanımlama bilgilerini temsil eder.

var firstName = document.cookie = "name = Enes";
console.log(firstName)

// ---- JavaScript'te Cookie Okumak
// JavaScript ile çerezler şu şekilde okunabilir
var x = document.cookie;
console.log(x);


// ---- JavaScript ile Cookie Güncelleme
//  Eski çerezin üzerine yazılır.
var firstName = document.cookie = "name = Enes Solmaz";
console.log(firstName)

// ---- JavaScript ile Cookie Silme
// “max-age” özelliğini kullanarak çerezi silebilmek için özelliğe ‘0’ değerini vermek yeterli.

document.cookie = "name = Enes Solmaz; max-age=0;";
console.log(document.cookie)



// ---- Session Nedir?
// Web tarayıcısında sekme kapanana kadar bilgiyi saklar, sekme kapandıktan sonra silinir.

// ---- Session oluşturma
var createSession = sessionStorage.setItem('name', 'enes')

// ---- Session'a Erişmek 
var getSession = sessionStorage.getItem('name')
console.log(getSession)

// ---- Session silmek
var deleteSession = sessionStorage.removeItem('name');
if(sessionStorage.getItem("name")){
  console.log(sessionStorage.getItem('name'));
}
else{
  console.log("Session Silindi")
}
