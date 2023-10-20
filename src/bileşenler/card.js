const Card = (makale) => {
  const div = document.createElement("div");
  div.className = "card";

  const divHeadline = document.createElement("div");
  divHeadline.className = "headline";
  divHeadline.textContent = makale.anabaslik;
  div.append(divHeadline);

  const divAuthor = document.createElement("div");
  divAuthor.className = "author";
  div.append(divAuthor);

  const divImgCont = document.createElement("div");
  divImgCont.className = "img-container";
  divAuthor.append(divImgCont);

  const img = document.createElement("img");
  img.src = makale.yazarFoto;
  divImgCont.append(img);

  const span = document.createElement("span");
  span.textContent = makale.yazarAdi + "tarafından";
  divAuthor.append(span);
  return div;
};
// GÖREV 5
// ---------------------
// Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
// Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
// Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
//
// <div class="card">
//   <div class="headline">{ anabaslik }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ yazarFoto }>
//     </div>
//     <span>{ yazarAdı } tarafından</span>
//   </div>
// </div>
//

const cardEkleyici = (secici) => {
  const axios = require("axios").default;

  axios
    .get("http://localhost:5001/api/makaleler")
    .then((response) => {
      console.log(response.data.makaleler);
      const articleList = response.data.makaleler;
      for (let i in articleList) {
        articleList[i].map((article) => {
          document.querySelector(secici).append(Card(article));
        });
      }
    })
    .catch((error) => {
      console.log("hata", error);
    });
};

// GÖREV 6
// ---------------------
// Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
// Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
// Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
// Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
// Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//

export { Card, cardEkleyici };
