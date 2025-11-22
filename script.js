// maslala-1
let parol = "Xu san Boy 2004"
console.log(parol.replaceAll( " " ,"").toLowerCase());

// masala-2
let helloworld = " Salom Dunyo "
console.log(helloworld.trim().padEnd(12, "!" ));
// masala-3
let java = "Javascript"
console.log(java.slice(4).toUpperCase());
// masala-4
let matn = "Assalomu Aleykum meninig ismim Xusan. Guten Tag Mein Name ist Xusan"
console.log(matn.replace("Xusan" , "XUSAN"));
// masala-5
let uzunMatn = " Assalomu aleykum bugungi mavzu kim haqida "
console.log(uzunMatn.slice(1 , 23).padEnd(25 , "..."));
// masala-6
let indextop = "Mening ismim Xusan. Men 21 yoshdaman !"
console.log(indextop.indexOf(21));
// masala-7
let ism =  prompt("Ismingizni kiriting (Katta harflar bilan)")
ism = ism.toLowerCase()
ism = ism.charAt(0).toUpperCase() + ism.slice(1)
console.log(ism);

// masala-8
let matncha = "salom nima gaplar ishlar bolayaptimi ?"
console.log(matncha.slice(0 ,10).padEnd(15 , "*"));

//masala-9
let matncha2 = "894654874548"
console.log(matncha2.slice(4, ).padStart(15 , "*"));
//masala-10
let havola = prompt("Havola kiriting")
    console.log("https:// " + havola.toLowerCase())
// maslal-11
let text = "Men dasturlashni juda yaxshi ko'raman";
let uzun = text
  .split(" ")
  .sort((a, b) => b.length - a.length)[0];
   uzun = uzun.toUpperCase()
console.log(uzun);
// masala-12
let boshjoy = "zayniddin,azizbek,husniddin,muhammadaziz"
console.log(boshjoy.replaceAll(",", ", "));
// masala-13
let Nuqta = "12.04.2025"
console.log(Nuqta.replaceAll(".", ""));
//masala-14
let telefon = prompt("Telefon rqamingizni kirgizing (plussiz)")
if (!telefon.startsWith("+")) {
telefon = "+" + telefon;
}
console.log( telefon);
// masala-15
let gmail = prompt("Gmailingizni kiriting")
let res = gmail.search(/@gmail/g)
console.log( res >= 0 ?"Email topildi" : "email topilmadi");
// masala-16
let  image = prompt("rasmni formati bilan yozing")
let resalt = /\.(png|jpg)$/i.test(image)
console.log( resalt >= 0 ?"True" : "False");
// masala-17
let arr = [ "salom", "yaxsimisiz", "mening" , "ismim" , "Xusanboy"]
let words = arr.join('-')
console.log(words);
// // masala-18
let sozlar = "ismnigizni bilsam bilsam "
let miqdori = sozlar.split( " ");
console.log(miqdori.length);
// masala-19
let begonalar = " salom@ nima54 gap;?"
let faqatmatn = begonalar.replace(/[^a-zA-Z\s]/g, "");
console.log(faqatmatn);
// masala-20
let ismingiz = prompt("Ismingizni kiriting")
let familiya = prompt("Familiyangizni iriting ")
let natija = ismingiz +"." + familiya.charAt(0).toUpperCase()
console.log(natija);



 









