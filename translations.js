'use strict';

const TRANSLATIONS = {
  hu: {
    nav: {
      home: 'Kezdőlap', products: 'Termékek', about: 'Rólunk',
      gallery: 'Galéria', contact: 'Kapcsolat'
    },
    theme: { szekely: 'Székelyruha', vadasz: 'Vadászruha' },
    hero: {
      szekely: {
        tagline: 'Hagyományőrző erdélyi székely viselet',
        title1: 'Székelyruha –',
        title2: 'Az Ünnepi Örökség Öltözéke',
        desc: 'Hagyományos <strong>székely népviselet</strong> és ünnepi ruházat azoknak, akik büszkén hordják Erdély kulturális örökségét. Egyedi darabok rendezvényekre, ünnepekre és mindennapi hagyományőrzésre.',
        cta: 'Fedezze fel viseleteinket'
      },
      vadasz: {
        tagline: 'Minőségi kültéri és vadász ruházat',
        title1: 'Vadászruha & Erdészeti Öltözet –',
        title2: 'Természetben Otthon',
        desc: 'Strapabíró, kényelmes és időjárásálló <strong>vadász-, erdészeti</strong>, ruha és terepi öltözet természetjáróknak, vadászoknak és erdőkedvelőknek. Minőség, amely kitart az erdőn is.',
        cta: 'Tekintse meg kínálatunkat'
      }
    },
    about: {
      szekely: {
        heading: 'Az Értékőrző Hagyomány Háza',
        subtitle: 'Hagyományos székely viselet és ünnepi népruha azoknak, akik az örökséget öltözékükben is hordozzák',
        p1: 'A <strong>Diána és Ábel</strong> ruházati üzlet szenvedélyből és hagyománytiszteletből született. Hitvallásunk szerint az erdélyi <strong>székely viselet</strong> nem csupán ruhadarab – élő kulturális örökség, amelyet minden öltözéssel tovább kell adni. Kínálatunkban hagyományos <strong>székelyruhát</strong>, díszes <strong>ünnepi népviseletet</strong> és válogatott <strong>erdélyi népi motívumokkal</strong> díszített darabokat találnak azok, akik egy ünnepi rendezvényre, hagyományőrző eseményre vagy egyszerűen egy különleges alkalomra keresnek autentikus viselete.',
        p2: 'A <strong>hagyományos székely viselet</strong> évszázados üzenetet hordoz: a közösséghez tartozást, az ünnep tiszteletét és az erdélyi kultúra büszke vállalását. Nálunk megtalálja a <strong>székely férfi viselet</strong> és a <strong>hagyományos székely női ruha</strong> széles választékát, ünnepi mellényeket, díszes ingeket és aprólékosan kidolgozott gyermek viseleteket is. Minden darabot gondos odafigyeléssel készítünk el, hogy az igény és a minőség találkozzon.',
        p3: 'Legyen szó <strong>kulturális rendezvényről</strong>, falusi lakodalomról, iskolai ünnepségről vagy egyszerűen az otthoni hagyományőrzésről – nálunk mindig talál megfelelő <strong>székely népviseletet</strong>, amely méltón képviseli az erdélyi népi kultúrát.'
      },
      vadasz: {
        heading: 'Az Erdő Emberének Ruhatára',
        subtitle: 'Minőségi vadász- és erdészeti ruházat, amely kitart a legszigorúbb természeti körülmények között is',
        p1: 'A <strong>Diána és Ábel</strong> üzlet a természet szerelmeseinek kínál megbízható, strapabíró és kényelmes ruházatot. <strong>Vadászruha-kínálatunk</strong> célja, hogy a terepen minden körülmény között a legjobb öltözékben legyenek ügyfeleink – legyen szó hajnali vadlesről, egész napos természetjárásról vagy az erdei munkáról.',
        p2: '<strong>Vadászkabátjaink</strong>, <strong>erdészeti nadrágjaink</strong> és <strong>terepi mellényeink</strong> prémium anyagokból készülnek: vízálló, szél ellen védő, kopásálló szövetek, amelyek ellenállnak az erdő minden kihívásának.',
        p3: 'Termékeinket vadászok, erdészek és természetjárók igényei alapján válogattuk össze. Kínálatunkban megtalálható a könnyű <strong>terepi ing</strong>, a meleg <strong>téli vadászmellény</strong>, a megerősített <strong>vadásznadrág</strong> és a funkcionalitást elegáns megjelenéssel ötvöző <strong>kültéri kabát</strong>.'
      },
      values: {
        quality_title_sz: 'Minőségi kidolgozás', quality_desc_sz: 'Minden egyes székelyruha aprólékos kézimunkával és gondos anyagválasztással készül.',
        quality_title_v: 'Prémium anyagok', quality_desc_v: 'Csak tartós, időjárásálló szövetek, amelyek valóban helytállnak a természetben.',
        tradition_title_sz: 'Hagyománytisztelet', tradition_desc_sz: 'Az erdélyi népi kultúra értékeit őrizzük és adjuk tovább minden egyes viseletben.',
        tradition_title_v: 'Terepi tapasztalat', tradition_desc_v: 'Kínálatunkat vadászok és erdőjárók visszajelzései alapján folyamatosan fejlesztjük.',
        occasion_title_sz: 'Ünnepi alkalmak', occasion_desc_sz: 'Viseleteinket rendezvényekre, ünnepségekre és kulturális eseményekre is ajánljuk.',
        occasion_title_v: 'Kényelmes mozgás', occasion_desc_v: 'Tág szabású, ergonomikus tervezés – hogy a hosszú terepnapok se okozzanak gondot.',
        personal_title: 'Személyes kiszolgálás', personal_desc: 'Kis üzletünkben személyre szabott tanácsadással segítünk megtalálni az önnek való darabot.'
      }
    },
    products: {
      szekely: {
        heading: 'Székelyruha Kínálatunk',
        subtitle: 'Hagyományos erdélyi viselet – ünnepi ruhák, mellények és népi motívumos darabok',
        p1_name: 'Ünnepi Székely Férfi Viselet',
        p1_desc: 'Klasszikus <strong>ünnepi székely férfi viselet</strong>, amely méltón képviseli az erdélyi hagyományokat. Az öltözék hagyományos népi motívumokkal díszített fehér inget, díszes mellényt és viseletnadrágot és székelycsizmát foglal magában. Alkalmas falusi lakodalomra, kulturális rendezvényre, iskolai ünnepségre vagy bármilyen <strong>hagyományőrző eseményre</strong>.',
        p2_name: 'Hagyományos Székely Női Ruha',
        p2_desc: 'A <strong>hagyományos székely női ruha</strong> az erdélyi népviselet egyik legszebb darabja. Kézimunkás hímzésekkel, aprólékos népi motívumokkal díszített ünnepi öltözék, amelyet büszkén hordhatnak azok, akik fontosnak tartják kulturális gyökereiket.',
        p4_name: 'Gyermek Székely Viselet',
        p4_desc: 'Mert a hagyomány a legkisebbektől kezdődik. A <strong>gyermek székely viselet</strong> ugyanolyan gondossággal és <strong>népi motívumokkal</strong> készül, mint a felnőtt darabok. Tökéletes iskolai ünnepségekre, gyermek néptánccsoportba, falusi rendezvényekre.'
      },
      vadasz: {
        heading: 'Vadászruha Kínálatunk',
        subtitle: 'Minőségi kültéri és vadász ruházat – kabátok, nadrágok, mellények, terepi ingek',
        p1_name: 'Fleece Vadászkabát Bőrpanelekkel',
        p1_desc: 'Sűrű szövésű olívazöld <strong>fleece vadászkabát</strong>, amelyet bőrbetétes váll- és könyökpanelek erősítenek meg. Cipzáros mellzsebbel és oldalsó zsebekkel szerelt. Kiváló hőszigetelést nyújt hajnali vadleseken és őszi erdőjáráson.',
        p1_price: 'Ár: érdeklődés alapján',
        p2_name: 'Vadásznadrág Cipzáros Zsebekkel',
        p2_desc: 'Masszív, olívazöld <strong>vadásznadrág</strong> cipzáros combzsebekkel és megerősített térdrésszel. A vastag, kopásálló anyag ellenáll a bokroknak, ágaknak és a nedves terepnek egyaránt.',
        p2_price: 'Ár: érdeklődés alapján',
        p3_name: 'HART Steppelt Vadászmellény',
        p3_desc: 'Prémium <strong>HART</strong> márkájú steppelt <strong>vadász mellény</strong> sötétbarna színben. A vékony, de rendkívül meleg töltet hatékonyan tartja a testhőt. Három cipzáros zsebbel szerelt.',
        p3_price: 'Ár: érdeklődés alapján',
        p4_name: 'Vadászkalap Gyapjúból',
        p4_desc: 'Klasszikus sötét olívazöld <strong>vadászkalap</strong> gyapjúfilcből, fonott bőrpánttal és fém díszgombokkal. Hatékonyan véd eső, szél és napsütés ellen.',
        p4_price: 'Ár: érdeklődés alapján',
        p5_name: 'OS Trachten Kockás Vadászing',
        p5_desc: 'Hagyományos <strong>OS Trachten</strong> vadászing zöld-barna-fehér kockás mintával, slim fit szabásban. Rövid ujjú, könnyű pamutanyagból készült – ideális melegebb terepi napokra.',
        p5_price: 'Ár: érdeklődés alapján'
      }
    },
    gallery: {
      szekely: { heading: 'Képgaléria – Hagyományos Viselet', subtitle: 'Tekintse meg <strong>székelyruha</strong> kínálatunkat képekben – hagyományos erdélyi viselet, ünnepi népi motívumok és kézműves darabok válogatása' },
      vadasz: { heading: 'Képgaléria – Terepi Ruházat', subtitle: 'Böngéssze <strong>vadászruha</strong> és kültéri ruházat képgalériánkat – strapabíró terepi öltözetek, vadászkabátok és erdészeti ruházat bemutatója' }
    },
    benefits: {
      heading: 'Miért Válasszon Minket?',
      subtitle: 'Minőségi viselet, hagyományőrző szemlélet és személyes kiszolgálás – ez a Diána & Ábel garancia',
      b1_title: 'Minőségi Anyagok',
      b1_desc: 'Csak válogatott, tartós anyagokat kínálunk. Székelyruhánk természetes, kellemes tapintású szövetekből készül, vadászruháink prémium, időjárásálló, kopásálló textíliákból.',
      b2_title_sz: 'Hagyománytisztelő Megjelenés', b2_title_v: 'Természetközeli Kialakítás',
      b2_desc_sz: 'Minden <strong>hagyományőrző ruha</strong> darabunkon megjelenik az erdélyi népviselet autentikus jegyei – népi motívumok, ünnepi színek, jellegzetes szabás.',
      b2_desc_v: 'Vadászruháink terepmintái és természetes zöld-barna árnyalatai az erdő esztétikáját idézik.',
      b3_title: 'Kényelmes Viselet',
      b3_desc: 'Az ünnepi viselet is lehet kényelmes. Székelyruhánk bő szabása hosszú rendezvényeken is kényelmes viselést biztosít. Vadászruháink ergonomikus kialakítása szabad mozgást ad terepjáráson is.',
      b4_title_sz: 'Ünnepi & Mindennapi Viselet', b4_title_v: 'Strapabíró Kültéri Ruházat',
      b4_desc_sz: 'Viseleteinket lakodalomra, ünnepségre, néptáncra és kulturális rendezvényre egyaránt ajánljuk.',
      b4_desc_v: 'Vadász- és erdészeti ruháink nem adják meg magukat hamar. Megerősített varratok, tartós cipzárak, kopásálló anyagok.',
      b5_title: 'Személyes Tanácsadás',
      b5_desc: 'Kis üzletünkben minden vásárlónak időt szánunk. Segítünk megtalálni a megfelelő méretet és összeállítani a viselet szettjét.',
      b6_title: 'Széleskörű Kínálat',
      b6_desc: '<strong>Székelyruha és vadászruha egy helyen</strong> – nem kell két üzletet végigjárni. Legyen szó ünnepi erdélyi viseletről vagy strapabíró terepi öltözékről, nálunk megtalálja a keresett darabot.'
    },
    contact: {
      heading: 'Kapcsolat & Elérhetőség',
      subtitle: 'Látogasson el hozzánk személyesen, vagy keressen minket az alábbi elérhetőségeken',
      address_label: 'Cím',
      phone_label: 'Telefon',
      email_label: 'E-mail',
      hours_label: 'Nyitvatartás',
      hours_val: 'Hétfő–Péntek: 09:00–17:00<br />Szombat: 12:00–14:00<br />Vasárnap: zárva',
      social_label: 'Kövessen minket közösségi médiában:',
      social_link: 'Facebook'
    },
    footer: {
      szekely_tagline: 'Hagyományos Erdélyi Viselet',
      vadasz_tagline: 'Minőségi Kültéri Ruházat',
      copy: 'Minden jog fenntartva.',
      note: 'Az oldal tartalma (szöveg, képek, grafikai elemek) a Prodcom Blotar S.R.L. kizárólagos szellemi tulajdona. Engedély nélküli másolása, terjesztése vagy felhasználása tilos.'
    }
  },

  ro: {
    nav: {
      home: 'Acasă', products: 'Produse', about: 'Despre noi',
      gallery: 'Galerie', contact: 'Contact'
    },
    theme: { szekely: 'Costum secuiesc', vadasz: 'Îmbrăcăminte vânătoare' },
    hero: {
      szekely: {
        tagline: 'Port secuiesc tradițional transilvănean',
        title1: 'Costum Secuiesc –',
        title2: 'Veșmântul Moștenirii Festive',
        desc: '<strong>Port popular secuiesc</strong> tradițional și îmbrăcăminte festivă pentru cei care poartă cu mândrie moștenirea culturală a Transilvaniei. Piese unice pentru evenimente, sărbători și păstrarea tradițiilor.',
        cta: 'Descoperiți portul nostru'
      },
      vadasz: {
        tagline: 'Îmbrăcăminte de calitate pentru exterior și vânătoare',
        title1: 'Îmbrăcăminte de Vânătoare –',
        title2: 'Acasă în Natură',
        desc: 'Îmbrăcăminte <strong>rezistentă, confortabilă și impermeabilă</strong> pentru vânători, silvicultori și iubitori ai naturii. Calitate care rezistă și în pădure.',
        cta: 'Vezi oferta noastră'
      }
    },
    about: {
      szekely: {
        heading: 'Casa Tradiției și a Valorilor',
        subtitle: 'Port secuiesc tradițional și costume populare festive pentru cei care poartă moștenirea în îmbrăcăminte',
        p1: '<strong>Diána și Ábel</strong> s-a născut din pasiune și respect pentru tradiție. Credem că <strong>portul secuiesc</strong> nu este doar o haină – este o moștenire culturală vie, care trebuie transmisă mai departe. În oferta noastră găsiți <strong>costume secuiești</strong> tradiționale, <strong>port popular festiv</strong> și piese ornate cu <strong>motive populare transilvănene</strong>.',
        p2: '<strong>Portul secuiesc tradițional</strong> transmite un mesaj secular: apartenența la comunitate, respectul față de sărbătoare și asumarea mândră a culturii transilvănene. La noi găsiți o gamă largă de <strong>port bărbătesc secuiesc</strong> și <strong>costum femeiesc secuiesc tradițional</strong>, veste festive, cămăși ornate și costume pentru copii.',
        p3: 'Fie că este vorba de un <strong>eveniment cultural</strong>, o nuntă la sat, o serbare școlară sau simpla păstrare a tradițiilor acasă – la noi găsiți întotdeauna <strong>portul popular secuiesc</strong> potrivit.'
      },
      vadasz: {
        heading: 'Garderoba Omului Pădurii',
        subtitle: 'Îmbrăcăminte de vânătoare și silvicultură de calitate, care rezistă în cele mai dure condiții naturale',
        p1: '<strong>Diána și Ábel</strong> oferă îmbrăcăminte fiabilă, rezistentă și confortabilă pentru iubitorii naturii. Scopul <strong>ofertei noastre de îmbrăcăminte de vânătoare</strong> este ca clienții noștri să fie echipați optim în orice condiții de teren.',
        p2: '<strong>Jachetele noastre de vânătoare</strong>, <strong>pantalonii forestieri</strong> și <strong>vestele de teren</strong> sunt confecționate din materiale premium: țesături impermeabile, rezistente la vânt și la uzură.',
        p3: 'Produsele noastre au fost selectate în funcție de nevoile vânătorilor, silvicultorilor și turiștilor. Oferta include <strong>cămăși de teren</strong> ușoare, <strong>veste de vânătoare de iarnă</strong> calde și <strong>pantaloni de vânătoare</strong> întăriți.'
      },
      values: {
        quality_title_sz: 'Execuție de calitate', quality_desc_sz: 'Fiecare costum secuiesc este realizat cu migală și materiale atent selectate.',
        quality_title_v: 'Materiale premium', quality_desc_v: 'Doar țesături durabile și impermeabile, care rezistă cu adevărat în natură.',
        tradition_title_sz: 'Respect pentru tradiție', tradition_desc_sz: 'Păstrăm și transmitem valorile culturii populare transilvănene în fiecare piesă vestimentară.',
        tradition_title_v: 'Experiență de teren', tradition_desc_v: 'Oferta noastră este îmbunătățită continuu pe baza feedback-ului vânătorilor și turiștilor.',
        occasion_title_sz: 'Ocazii festive', occasion_desc_sz: 'Recomandăm portul nostru pentru evenimente, sărbători și manifestări culturale.',
        occasion_title_v: 'Mișcare confortabilă', occasion_desc_v: 'Design ergonomic și croială generoasă – pentru ca zilele lungi de teren să nu fie o problemă.',
        personal_title: 'Servire personalizată', personal_desc: 'În micul nostru magazin acordăm timp fiecărui client. Vă ajutăm să găsiți piesa potrivită.'
      }
    },
    products: {
      szekely: {
        heading: 'Oferta Noastră de Costume Secuiești',
        subtitle: 'Port tradițional transilvănean – costume festive, veste și piese cu motive populare',
        p1_name: 'Costum Festiv Bărbătesc Secuiesc',
        p1_desc: 'Costum festiv <strong>bărbătesc secuiesc</strong> clasic, care reprezintă cu demnitate tradițiile transilvănene. Include cămașă albă cu motive populare, vestă ornată, pantaloni și cizme secuiești.',
        p2_name: 'Costum Femeiesc Secuiesc Tradițional',
        p2_desc: '<strong>Costumul femeiesc secuiesc tradițional</strong> este una dintre cele mai frumoase piese ale portului popular transilvănean. Ținută festivă ornată cu broderii și motive populare meticuloase.',
        p4_name: 'Costum Secuiesc pentru Copii',
        p4_desc: 'Pentru că tradiția începe de la cei mai mici. <strong>Costumul secuiesc pentru copii</strong> este realizat cu aceeași grijă și <strong>motive populare</strong> ca și piesele pentru adulți.'
      },
      vadasz: {
        heading: 'Oferta Noastră de Îmbrăcăminte de Vânătoare',
        subtitle: 'Îmbrăcăminte de exterior și vânătoare de calitate – jachete, pantaloni, veste, cămăși de teren',
        p1_name: 'Jachetă de Vânătoare Fleece cu Panouri din Piele',
        p1_desc: '<strong>Jachetă de vânătoare fleece</strong> verde-oliv cu panouri din piele la umeri și coate. Buzunare cu fermoar. Oferă izolare termică excelentă la pândă și plimbări de toamnă.',
        p1_price: 'Preț: la cerere',
        p2_name: 'Pantaloni de Vânătoare cu Buzunare cu Fermoar',
        p2_desc: '<strong>Pantaloni de vânătoare</strong> robuști, verde-oliv, cu buzunare pe coapsă cu fermoar și genunchi întăriți. Materialul gros și rezistent la uzură rezistă tufișurilor și terenului umed.',
        p2_price: 'Preț: la cerere',
        p3_name: 'Vestă de Vânătoare Matlasată HART',
        p3_desc: 'Vestă de vânătoare <strong>HART</strong> matlasată premium, în maro închis. Umplutura subțire dar extrem de caldă păstrează eficient căldura corporală. Trei buzunare cu fermoar.',
        p3_price: 'Preț: la cerere',
        p4_name: 'Pălărie de Vânătoare din Lână',
        p4_desc: '<strong>Pălărie de vânătoare</strong> clasică, verde-oliv închis, din fetru de lână, cu bentiță din piele împletită și nasturi decorativi din metal. Protejează eficient împotriva ploii și vântului.',
        p4_price: 'Preț: la cerere',
        p5_name: 'Cămașă de Vânătoare OS Trachten în Carouri',
        p5_desc: 'Cămașă de vânătoare <strong>OS Trachten</strong> tradițională în carouri verde-maro-alb, croială slim fit. Cu mânecă scurtă, din bumbac ușor – ideală pentru zilele de teren mai calde.',
        p5_price: 'Preț: la cerere'
      }
    },
    gallery: {
      szekely: { heading: 'Galerie Foto – Port Tradițional', subtitle: 'Vizualizați oferta noastră de <strong>costume secuiești</strong> – port tradițional transilvănean, motive populare festive și piese artizanale' },
      vadasz: { heading: 'Galerie Foto – Îmbrăcăminte de Teren', subtitle: 'Răsfoiți galeria noastră de <strong>îmbrăcăminte de vânătoare</strong> și echipament de exterior – ținute de teren rezistente, jachete și îmbrăcăminte forestieră' }
    },
    benefits: {
      heading: 'De Ce Să Ne Alegeți?',
      subtitle: 'Îmbrăcăminte de calitate, spirit tradițional și servire personalizată – garanția Diána & Ábel',
      b1_title: 'Materiale de Calitate',
      b1_desc: 'Oferim doar materiale selectate și durabile. Costumele secuiești sunt din țesături naturale, iar îmbrăcămintea de vânătoare din textile premium impermeabile și rezistente la uzură.',
      b2_title_sz: 'Aspect Tradițional', b2_title_v: 'Design Apropiat de Natură',
      b2_desc_sz: 'Fiecare piesă <strong>tradițională</strong> poartă semnele autentice ale portului popular transilvănean – motive populare, culori festive, croială caracteristică.',
      b2_desc_v: 'Modelele camuflaj și nuanțele naturale verde-maro ale îmbrăcămintei de vânătoare evocă estetica pădurii.',
      b3_title: 'Purtare Confortabilă',
      b3_desc: 'Și portul festiv poate fi confortabil. Croiala generoasă a costumelor secuiești asigură confort la evenimente lungi. Designul ergonomic al îmbrăcămintei de vânătoare oferă libertate de mișcare.',
      b4_title_sz: 'Port Festiv & Cotidian', b4_title_v: 'Îmbrăcăminte de Exterior Rezistentă',
      b4_desc_sz: 'Recomandăm portul nostru pentru nunți, sărbători, dans popular și evenimente culturale.',
      b4_desc_v: 'Îmbrăcămintea de vânătoare și silvicultură nu cedează ușor. Cusături întărite, fermoare durabile, materiale rezistente.',
      b5_title: 'Consultanță Personalizată',
      b5_desc: 'În micul nostru magazin acordăm timp fiecărui client. Vă ajutăm să găsiți mărimea potrivită și să alcătuiți setul vestimentar dorit.',
      b6_title: 'Ofertă Diversificată',
      b6_desc: '<strong>Costume secuiești și îmbrăcăminte de vânătoare într-un singur loc</strong> – nu trebuie să vizitați două magazine. Găsiți piesa căutată pentru întreaga familie, de la copii la adulți.'
    },
    contact: {
      heading: 'Contact & Informații',
      subtitle: 'Vizitați-ne personal sau contactați-ne la datele de mai jos',
      address_label: 'Adresă',
      phone_label: 'Telefon',
      email_label: 'E-mail',
      hours_label: 'Program',
      hours_val: 'Luni–Vineri: 09:00–17:00<br />Sâmbătă: 12:00–14:00<br />Duminică: închis',
      social_label: 'Urmăriți-ne pe rețelele sociale:',
      social_link: 'Facebook'
    },
    footer: {
      szekely_tagline: 'Port Tradițional Transilvănean',
      vadasz_tagline: 'Îmbrăcăminte de Exterior de Calitate',
      copy: 'Toate drepturile rezervate.',
      note: 'Conținutul acestui site (texte, imagini, elemente grafice) este proprietatea intelectuală exclusivă a Prodcom Blotar S.R.L. Copierea, distribuirea sau utilizarea fără permisiune este interzisă.'
    }
  },

  en: {
    nav: {
      home: 'Home', products: 'Products', about: 'About us',
      gallery: 'Gallery', contact: 'Contact'
    },
    theme: { szekely: 'Traditional Dress', vadasz: 'Hunting Wear' },
    hero: {
      szekely: {
        tagline: 'Traditional Transylvanian Székely folk costume',
        title1: 'Székely Dress –',
        title2: 'The Garment of Festive Heritage',
        desc: 'Traditional <strong>Székely folk costume</strong> and festive attire for those who proudly carry Transylvania\'s cultural heritage. Unique pieces for events, celebrations and everyday tradition keeping.',
        cta: 'Explore our costumes'
      },
      vadasz: {
        tagline: 'Quality outdoor and hunting clothing',
        title1: 'Hunting Wear & Forestry Clothing –',
        title2: 'At Home in Nature',
        desc: 'Durable, comfortable and weather-resistant <strong>hunting and forestry</strong> clothing for hikers, hunters and nature lovers. Quality that holds up in the forest.',
        cta: 'View our collection'
      }
    },
    about: {
      szekely: {
        heading: 'A House of Heritage and Tradition',
        subtitle: 'Traditional Székely costume and festive folk dress for those who carry their heritage in their clothing',
        p1: '<strong>Diána és Ábel</strong> was born from passion and respect for tradition. We believe that the Transylvanian <strong>Székely costume</strong> is not merely clothing – it is a living cultural heritage to be passed on. Our range includes traditional <strong>Székely dress</strong>, ornate <strong>festive folk costumes</strong> and pieces decorated with <strong>Transylvanian folk motifs</strong>.',
        p2: 'The <strong>traditional Székely costume</strong> carries a centuries-old message: belonging to the community, respect for celebration and proud embrace of Transylvanian culture. We offer a wide selection of <strong>men\'s Székely dress</strong> and <strong>traditional Székely women\'s costume</strong>, festive waistcoats, ornate shirts and children\'s costumes.',
        p3: 'Whether for a <strong>cultural event</strong>, a village wedding, a school ceremony or simply keeping traditions alive at home – you will always find the right <strong>Székely folk costume</strong> with us.'
      },
      vadasz: {
        heading: 'The Wardrobe of the Forest Person',
        subtitle: 'Quality hunting and forestry clothing that holds up in the harshest natural conditions',
        p1: '<strong>Diána és Ábel</strong> offers reliable, durable and comfortable clothing for nature lovers. Our <strong>hunting clothing range</strong> ensures our customers are optimally equipped in any field conditions.',
        p2: 'Our <strong>hunting jackets</strong>, <strong>forestry trousers</strong> and <strong>field waistcoats</strong> are made from premium materials: waterproof, windproof, abrasion-resistant fabrics that withstand every challenge of the forest.',
        p3: 'Our products have been selected based on the needs of hunters, foresters and hikers. The range includes lightweight <strong>field shirts</strong>, warm <strong>winter hunting waistcoats</strong> and reinforced <strong>hunting trousers</strong>.'
      },
      values: {
        quality_title_sz: 'Quality Craftsmanship', quality_desc_sz: 'Every Székely costume is made with meticulous handwork and careful material selection.',
        quality_title_v: 'Premium Materials', quality_desc_v: 'Only durable, weather-resistant fabrics that truly hold up in nature.',
        tradition_title_sz: 'Respect for Tradition', tradition_desc_sz: 'We preserve and pass on the values of Transylvanian folk culture in every garment.',
        tradition_title_v: 'Field Experience', tradition_desc_v: 'Our range is continuously developed based on feedback from hunters and hikers.',
        occasion_title_sz: 'Festive Occasions', occasion_desc_sz: 'We recommend our costumes for events, ceremonies and cultural celebrations.',
        occasion_title_v: 'Comfortable Movement', occasion_desc_v: 'Generous cut and ergonomic design – so long days in the field are no problem.',
        personal_title: 'Personal Service', personal_desc: 'In our small shop we take time for every customer to help find the right piece for you.'
      }
    },
    products: {
      szekely: {
        heading: 'Our Székely Costume Collection',
        subtitle: 'Traditional Transylvanian dress – festive costumes, waistcoats and folk motif pieces',
        p1_name: 'Festive Men\'s Székely Costume',
        p1_desc: 'Classic <strong>festive men\'s Székely costume</strong> that proudly represents Transylvanian traditions. Includes a white shirt with folk motifs, ornate waistcoat, traditional trousers and Székely boots.',
        p2_name: 'Traditional Székely Women\'s Dress',
        p2_desc: 'The <strong>traditional Székely women\'s dress</strong> is one of the most beautiful pieces of Transylvanian folk costume. A festive outfit decorated with embroidery and intricate folk motifs.',
        p4_name: 'Children\'s Székely Costume',
        p4_desc: 'Because tradition begins with the youngest. The <strong>children\'s Székely costume</strong> is made with the same care and <strong>folk motifs</strong> as the adult pieces. Perfect for school ceremonies, children\'s folk dance groups and village events.'
      },
      vadasz: {
        heading: 'Our Hunting Clothing Collection',
        subtitle: 'Quality outdoor and hunting clothing – jackets, trousers, waistcoats, field shirts',
        p1_name: 'Fleece Hunting Jacket with Leather Panels',
        p1_desc: 'Dense olive-green <strong>fleece hunting jacket</strong> reinforced with leather shoulder and elbow panels. Fitted with a zipped chest pocket and side pockets. Excellent insulation for dawn hunts and autumn hikes.',
        p1_price: 'Price: on request',
        p2_name: 'Hunting Trousers with Zip Pockets',
        p2_desc: 'Sturdy olive-green <strong>hunting trousers</strong> with zip thigh pockets and reinforced knees. The thick, abrasion-resistant fabric withstands bushes, branches and wet terrain.',
        p2_price: 'Price: on request',
        p3_name: 'HART Quilted Hunting Waistcoat',
        p3_desc: 'Premium <strong>HART</strong> brand quilted <strong>hunting waistcoat</strong> in dark brown. The thin but extremely warm fill effectively retains body heat. Fitted with three zip pockets.',
        p3_price: 'Price: on request',
        p4_name: 'Wool Hunting Hat',
        p4_desc: 'Classic dark olive-green <strong>hunting hat</strong> in wool felt, with a braided leather band and metal decorative buttons. Effectively protects against rain, wind and sun.',
        p4_price: 'Price: on request',
        p5_name: 'OS Trachten Checked Hunting Shirt',
        p5_desc: 'Traditional <strong>OS Trachten</strong> hunting shirt in green-brown-white check, slim fit cut. Short-sleeved, lightweight cotton – ideal for warmer days in the field.',
        p5_price: 'Price: on request'
      }
    },
    gallery: {
      szekely: { heading: 'Photo Gallery – Traditional Costume', subtitle: 'View our <strong>Székely costume</strong> collection in pictures – traditional Transylvanian dress, festive folk motifs and handcrafted pieces' },
      vadasz: { heading: 'Photo Gallery – Field Clothing', subtitle: 'Browse our <strong>hunting clothing</strong> and outdoor wear photo gallery – durable field outfits, hunting jackets and forestry clothing' }
    },
    benefits: {
      heading: 'Why Choose Us?',
      subtitle: 'Quality clothing, traditional values and personal service – the Diána & Ábel guarantee',
      b1_title: 'Quality Materials',
      b1_desc: 'We offer only selected, durable materials. Our Székely costumes are made from natural, pleasant fabrics; our hunting clothing from premium, weather-resistant, abrasion-resistant textiles.',
      b2_title_sz: 'Traditional Appearance', b2_title_v: 'Nature-Inspired Design',
      b2_desc_sz: 'Every <strong>traditional</strong> piece carries the authentic hallmarks of Transylvanian folk costume – folk motifs, festive colours, characteristic cut.',
      b2_desc_v: 'The camouflage patterns and natural green-brown tones of our hunting clothing evoke the aesthetics of the forest.',
      b3_title: 'Comfortable Wear',
      b3_desc: 'Festive dress can also be comfortable. The generous cut of our Székely costumes ensures comfort at long events. The ergonomic design of our hunting clothing gives freedom of movement in the field.',
      b4_title_sz: 'Festive & Everyday Wear', b4_title_v: 'Durable Outdoor Clothing',
      b4_desc_sz: 'We recommend our costumes for weddings, celebrations, folk dance and cultural events.',
      b4_desc_v: 'Our hunting and forestry clothing does not give up easily. Reinforced seams, durable zips, abrasion-resistant materials.',
      b5_title: 'Personal Advice',
      b5_desc: 'In our small shop we take time for every customer. We help you find the right size and put together your costume set.',
      b6_title: 'Wide Range',
      b6_desc: '<strong>Székely costumes and hunting clothing in one place</strong> – no need to visit two shops. Find the piece you are looking for for the whole family, from children to adults.'
    },
    contact: {
      heading: 'Contact & Opening Hours',
      subtitle: 'Visit us in person or reach us at the details below',
      address_label: 'Address',
      phone_label: 'Phone',
      email_label: 'E-mail',
      hours_label: 'Opening Hours',
      hours_val: 'Monday–Friday: 09:00–17:00<br />Saturday: 12:00–14:00<br />Sunday: closed',
      social_label: 'Follow us on social media:',
      social_link: 'Facebook'
    },
    footer: {
      szekely_tagline: 'Traditional Transylvanian Costume',
      vadasz_tagline: 'Quality Outdoor Clothing',
      copy: 'All rights reserved.',
      note: 'The content of this site (text, images, graphic elements) is the exclusive intellectual property of Prodcom Blotar S.R.L. Unauthorized copying, distribution or use is prohibited.'
    }
  }
};
