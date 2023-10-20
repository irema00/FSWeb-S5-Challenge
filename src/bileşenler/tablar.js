const Tablar = (konu) => {
  const topics = document.createElement("div");
  topics.className = "topics";

  konu.forEach((konuAdi) => {
    const tab = document.createElement("div");
    tab.className = "tab";
    tab.textContent = konuAdi;
    topics.append(tab);
  });
  return topics;
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
};

const tabEkleyici = (secici) => {
  const axios = require("axios").default;

  axios.get(`http://localhost:5001/api/konular`).then((response) => {
    console.log(response.data.konular);
    const secilen = document.querySelector(secici);
    const tabs = Tablar(response.data.konular);
    secilen.appendChild(tabs);
  });

  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
};

export { Tablar, tabEkleyici };
