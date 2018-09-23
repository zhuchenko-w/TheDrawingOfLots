var valueLists = {
	allStates: [
		"Айдахо",
		"Айова",
		"Алабама",
		"Аляска",
		"Аризона",
		"Арканзас",
		"Вайоминг",
		"Вашингтон",
		"Вермонт",
		"Вирджиния",
		"Висконсин",
		"Гавайи",
		"Делавэр",
		"Джорджия",
		"Западная Вирджиния",
		"Иллинойс",
		"Индиана",
		"Калифорния",
		"Канзас",
		"Кентукки",
		"Колорадо",
		"Коннектикут",
		"Луизиана",
		"Массачусетс",
		"Миннесота",
		"Миссисипи",
		"Миссури",
		"Мичиган",
		"Монтана",
		"Мэн",
		"Мэриленд",
		"Небраска",
		"Невада",
		"Нью-Гэмпшир",
		"Нью-Джерси",
		"Нью-Йорк",
		"Нью-Мексико",
		"Огайо",
		"Оклахома",
		"Орегон",
		"Пенсильвания",
		"Род-Айленд",
		"Северная Дакота",
		"Северная Каролина",
		"Теннесси",
		"Техас",
		"Флорида",
		"Южная Дакота",
		"Южная Каролина",
		"Юта"
	],
	allCountries: [
		"Афганистан",
		"Австралия",
		"Австрия",
		"Азербайджан",
		"Албания",
		"Алжир",
		"Ангола",
		"Андорра",
		"Антигуа и Барбуда",
		"Аргентина",
		"Армения",
		"Багамы",
		"Бангладеш",
		"Барбадос",
		"Бахрейн",
		"Белиз",
		"Белоруссия",
		"Бельгия",
		"Бенин",
		"Бирма/Мьянма",
		"Болгария",
		"Боливия",
		"Босния и Герцеговина",
		"Ботсвана",
		"Бразилия",
		"Бруней",
		"Буркина-Фасо",
		"Бурунди",
		"Бутан",
		"Вануату",
		"Ватикан",
		"Венгрия",
		"Венесуэла",
		"Восточный Тимор",
		"Вьетнам",
		"Габон",
		"Гаити",
		"Гайана",
		"Гамбия",
		"Гана",
		"Гватемала",
		"Гвинея",
		"Гвинея-Бисау",
		"Германия",
		"Гондурас",
		"Гренада",
		"Греция",
		"Дания",
		"Джибути",
		"Джорджия",
		"Доминика",
		"Доминиканская Республика",
		"Египет",
		"Замбия",
		"Западная Сахара",
		"Зимбабве",
		"Израиль",
		"Индия",
		"Индонезия",
		"Иордания",
		"Ирак",
		"Иран",
		"Ирландия",
		"Исландия",
		"Испания",
		"Италия",
		"Йемен",
		"Кабо-Верде",
		"Казахстан",
		"Камбоджа",
		"Камерун",
		"Канада",
		"Катар",
		"Кения",
		"Кипр",
		"Кирибати",
		"Китай",
		"Колумбия",
		"Коморские острова",
		"Конго",
		"Конго, демократическая республика",
		"Корея, север",
		"Корея, юг",
		"Коста-Рика",
		"Кот-д'Ивуар / Кот-д'Ивуар",
		"Куба",
		"Кувейт",
		"Кыргызстан",
		"Лаос",
		"Латвия",
		"Лесото",
		"Либерия",
		"Ливан",
		"Ливия",
		"Литва",
		"Лихтенштейн",
		"Люксембург",
		"Маврикий",
		"Мавритания",
		"Мадагаскар",
		"Македония",
		"Малави",
		"Малайзия",
		"Мали",
		"Мальдивы",
		"Мальта",
		"Марокко",
		"Маршалловы Острова",
		"Мексика",
		"Микронезия",
		"Мозамбик",
		"Молдова",
		"Монако",
		"Монголия",
		"Намибия",
		"Науру",
		"Непал",
		"Нигер",
		"Нигерия",
		"Нидерланды",
		"Никарагуа",
		"Новая Зеландия",
		"Норвегия",
		"Объединенные Арабские Эмираты",
		"Оман",
		"Пакистан",
		"Палау",
		"Палестина",
		"Панама",
		"Папуа - Новая Гвинея",
		"Парагвай",
		"Перу",
		"Польша",
		"Португалия",
		"Российская Федерация",
		"Руанда",
		"Румыния",
		"Сальвадор",
		"Самоа",
		"Сан-Марино",
		"Сан-Томе и Принсипи",
		"Саудовская Аравия",
		"Свазиленд",
		"Сейшельские острова",
		"Сенегал",
		"Сент-Винсент и Гренадины",
		"Сент-Китс и Невис",
		"Сент-Люсия",
		"Сербия",
		"Сингапур",
		"Сирия",
		"Словакия",
		"Словения",
		"Соединенное Королевство",
		"Соединенные Штаты",
		"Соломоновы Острова",
		"Сомали",
		"Судан",
		"Суринам",
		"Сьерра-Леоне",
		"Таджикистан",
		"Таиланд",
		"Танзания",
		"Того",
		"Тонга",
		"Тринидад и Тобаго",
		"Тувалу",
		"Тунис",
		"Туркмения",
		"Турция",
		"Уганда",
		"Узбекистан",
		"Украина",
		"Уругвай",
		"Фиджи",
		"Филиппины",
		"Финляндия",
		"Франция",
		"Хорватия",
		"Центральноафриканская Республика",
		"Чад",
		"Черногория",
		"Чешская Республика",
		"Чили",
		"Швейцария",
		"Швеция",
		"Шри-Ланка",
		"Эквадор",
		"Экваториальная Гвинея",
		"Эритрея",
		"Эстония",
		"Эфиопия",
		"Южная Африка",
		"Южный Судан",
		"Ямайка",
		"Япония"
	]
};