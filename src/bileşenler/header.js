const Header = (baslik, tarih, yazi) => {
  const header = document.createElement("div");
  header.className = "header";

  const date = document.createElement("span");
  date.className = "date";
  date.textContent = tarih;
  header.append(date);

  const h1 = document.createElement("h1");
  h1.textContent = baslik;
  header.append(h1);

  const temp = document.createElement("span");
  temp.className = "temp";
  temp.textContent = yazi;
  header.append(temp);
  return header;

  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
};

const headerEkleyici = (secici) => {
  const secilen = document.querySelector(secici);
  const header = Header();
  secilen.append(header);
};
// GÖREV 2
// ---------------------
// Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
// Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
// Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
//
// İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
// fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

export { Header, headerEkleyici };
