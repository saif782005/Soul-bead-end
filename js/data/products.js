const CATEGORIES = [
  {
    "id": "decor",
    "name": "ديكور ✦"
  },
  {
    "id": "bags",
    "name": "شنط"
  },
  {
    "id": "accessories",
    "name": "إكسسوارات"
  }
];

const PRODUCTS = [
  {
    "id": 1,
    "img": "21",
    "name": "شنطة اللؤلؤ الكلاسيك",
    "price": 350,
    "cat": "bags",
    "tag": "bestseller",
    "desc": "شنطة كروس فاخرة من اللؤلؤ الأبيض مع سلسلة ذهبية"
  },
  {
    "id": 2,
    "img": "22",
    "name": "طوق الرأس اللؤلؤي",
    "price": 120,
    "cat": "accessories",
    "tag": "new",
    "desc": "طوق رأس أنيق باللؤلؤ الأسود والأبيض على إطار ذهبي"
  },
  {
    "id": 3,
    "img": "17",
    "name": "حامله كروت حمراء",
    "price": 420,
    "cat": "bags",
    "tag": "hot",
    "desc": "شنطة كريستال أحمر مع حمالة خرز وإكسسوار ذهبي"
  },
  {
    "id": 4,
    "img": "10",
    "name": "ميدالية الخرز الملون",
    "price": 65,
    "cat": "accessories",
    "tag": "new",
    "desc": "ميداليات خرز ملونة علي شكل فانوس رمضان "
  },
  {
    "id": 6,
    "img": "24",
    "name": "حافظة البطاقات",
    "price": 150,
    "cat": "bags",
    "tag": "new",
    "desc": "حافظة بطاقات من الخرز الأبيض مع حمالة يد "
  },
  {
    "id": 7,
    "img": "30",
    "name": "شنطة السواريه الأسود",
    "price": 380,
    "cat": "bags",
    "tag": "hot",
    "desc": "شنطة سواريه من الخرز الأسود للمناسبات الراقية"
  },
  {
    "id": 9,
    "img": "16",
    "name": "شنطة كريستال ابيض",
    "price": 180,
    "cat": "bags",
    "tag": "new",
    "desc": "شنطة كريستال بيضاء مع سلسله "
  },
  {
    "id": 10,
    "img": "26",
    "name": "شنطة اللؤلؤ الاحمر ",
    "price": 400,
    "cat": "bags",
    "tag": null,
    "desc": "شنطة لؤلؤ فاخرة مع مقبض ذهبي وسلسله"
  },
  {
    "id": 12,
    "img": "32",
    "name": "شنطه بيضاء",
    "price": 95,
    "cat": "bags",
    "tag": null,
    "desc": "شنطه بيضه مع سوار للكتف"
  },
  {
    "id": 13,
    "img": "7",
    "name": "فانوس رمضان",
    "price": 450,
    "cat": "accessories",
    "tag": "hot",
    "desc": "فانوس رمضان خرز"
  },
  {
    "id": 15,
    "img": "1",
    "name": "شنطه صغيره ",
    "price": 110,
    "cat": "bags",
    "tag": null,
    "desc": "شنطه بيضه صغيره مع سلسله كتف"
  },
  {
    "id": 16,
    "img": "new/- (1)",
    "name": "Product 1",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 17,
    "img": "new/- (2)",
    "name": "Product 2",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 18,
    "img": "new/- (3)",
    "name": "Product 3",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 19,
    "img": "new/- (4)",
    "name": "Product 4",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 20,
    "img": "new/- (5)",
    "name": "Product 5",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 21,
    "img": "new/- (6)",
    "name": "Product 6",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 22,
    "img": "new/- (7)",
    "name": "Product 7",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 23,
    "img": "new/- (8)",
    "name": "Product 8",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 24,
    "img": "new/- (9)",
    "name": "Product 9",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 25,
    "img": "new/- (10)",
    "name": "Product 10",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 26,
    "img": "new/- (11)",
    "name": "Product 11",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 27,
    "img": "new/- (12)",
    "name": "Product 12",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 28,
    "img": "new/- (13)",
    "name": "Product 13",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 29,
    "img": "new/- (14)",
    "name": "Product 14",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 30,
    "img": "new/- (15)",
    "name": "Product 15",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 31,
    "img": "new/- (16)",
    "name": "Product 16",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 32,
    "img": "new/- (17)",
    "name": "Product 17",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 33,
    "img": "new/- (18)",
    "name": "Product 18",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 34,
    "img": "new/- (19)",
    "name": "Product 19",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 35,
    "img": "new/- (20)",
    "name": "Product 20",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 36,
    "img": "new/- (21)",
    "name": "Product 21",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 37,
    "img": "new/- (22)",
    "name": "Product 22",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 38,
    "img": "new/- (23)",
    "name": "Product 23",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 39,
    "img": "new/- (24)",
    "name": "Product 24",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 40,
    "img": "new/- (25)",
    "name": "Product 25",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  },
  {
    "id": 41,
    "img": "new/- (26)",
    "name": "Product 26",
    "price": 250,
    "cat": "decor",
    "tag": "new",
    "desc": "قطعه ديكور مصنوعه بحب"
  }
];
