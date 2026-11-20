// Swiss Strategic Center – laufendes Lage-Update
// Diese Datei wird vom geplanten Task «Swiss Strategic Center – Lage-Update» neu geschrieben.
// Die App lädt sie beim Start und danach alle 10 Minuten nach (funktioniert auch per Doppelklick/file://).
// FORMAT: Nach «window.SSC_UPDATE = » folgt striktes JSON (doppelte Anführungszeichen, keine Kommentare, kein abschliessendes Komma).
// Schema:
//   updated    ISO-Zeitstempel mit Zeitzone (Pflicht; neuer Wert = neue Version)
//   conflicts  [{ id, status?, intensity?, summary?, tote2026?, updates: [{ date "YYYY-MM-DD", tag, text, src? }] }]
//              unbekannte id = neuer Konflikt (dann zusätzlich name, region, type, intensity, since, parties[], countries[ISO3], center[lng,lat])
//   events     [{ c (Konflikt-id), t (luft|drohne|flughafen|schiff|gefecht|anschlag|unruhen|epidemie|abfang), d "YYYY-MM-DD", coords [lng, lat], title, txt, cas?, src? }]
//   news       [{ tag, c (Konflikt-id oder null), text }]  – ersetzt den Ticker, wenn nicht leer
//   countries  { ISO3: { now: [..], dom?, for?, r?, x?, ch?, head?, gov? } } – überschreibt Felder des Länderdossiers
//   swiss      { news?, indicators?, radar?, votes?, gov?, succession?, bilateral?, stand? } – ersetzt die jeweiligen Schweiz-Felder
//   chImpact   { Konflikt-id: "Bedeutung für die Schweiz" }
window.SSC_UPDATE = {
 "updated": "2026-11-20T17:55:19+01:00",
 "conflicts": [
  {
   "id": "gaza",
   "updates": [
    {
     "date": "2026-11-19",
     "tag": "Front",
     "text": "Die Gesundheitsministerin von Gaza meldet, dass in den letzten 24 Stunden durch israelische Angriffe zwei Menschen getötet und zwei weitere an ihren Verletzungen gestorben sind.",
     "src": "https://aje.news/r003u9?update=5168071",
     "via": "lokal"
    },
    {
     "date": "2026-11-19",
     "tag": "Politik",
     "text": "Ein israelischer Gerichtshof verlängert die Haft des Gazastreifens Hospitalleiters Hussam Abu Safiya um sechs Monate.",
     "src": "https://aje.news/r003u9?update=5168110",
     "via": "lokal"
    },
    {
     "date": "2026-11-18",
     "tag": "Front",
     "text": "Die israelische Armee startet ihre erste Operation im zentralen Gazastreifen, während Familien aus der Region vertrieben werden, zum ersten Mal seit dem Inkrafttreten des Waffenruhesvertrages im Oktober 2025.",
     "src": "https://www.bbc.com/news/articles/cw8r7510degno",
     "via": "lokal"
    },
    {
     "date": "2026-11-17",
     "tag": "Front",
     "text": "Fünf Palästinenser, darunter ein Kind, sterben und andere werden verletzt, als Israëler in verschiedenen Teilen des Gazastreifens Luftangriffe starten. Es handelt sich um einen weiteren Angriff während des Gazakrieges.",
     "src": "https://www.aa.com.tr/en/middle-east/israeli-army-kills-palestinian-blows-up-homes-in-gaza-despite-ceasefire/4127526",
     "via": "lokal"
    },
    {
     "date": "2026-11-17",
     "tag": "Front",
     "text": "Ein 72-jähriger Palästinenserweiblicher wird getötet und zehn weitere verletzt, als Settler in der westjordanlandischen Dorfgemeinde Ein ad-Duyuk westlich von Jericho Palästinenserhäuser angriffen.",
     "src": "https://www.aljazeera.com/news/2026/11/17/israeli-settler-pogrom-kills-palestinian-woman-wounds-10-people",
     "via": "lokal"
    },
    {
     "date": "2026-11-17",
     "tag": "Politik",
     "text": "Der britische Aussenminister Ed Miliband verkündet, dass das Vereinigte Königreich Sanktionen gegen acht Unternehmen verhängen wird, die an der Errichtung von Siedlungen im besetzten Westjordanland beteiligt sind, sowie gegen Tzav 9 wegen seiner Rolle im Blockieren der humanitären Hilfe für den Gazastreifen.",
     "src": "https://apnews.com/article/britain-israel-sanctions-west-bank-construction-8e4de81ef0b6fdbf0fd5f687e95de163",
     "via": "lokal"
    },
    {
     "date": "2026-11-15",
     "tag": "Politik",
     "text": "Die israelische Armee meldet den Tod des Rafah-Brigadekommandeurs Samir Abu Younis der Al-Qassam-Brigade in einem Luftangriff im südlichen Gazastreifen, was von Hamas bestätigt wird.",
     "src": "https://www.middleeasteye.net/live-blog/live-blog-update/hamas-commander-samir-abu-younis-killed-israeli-strike-khan-younis",
     "via": "lokal"
    },
    {
     "date": "2026-11-15",
     "tag": "Front",
     "text": "In der Gazastreifen werden Palästinenser getötet und andere verletzt durch Schiessereien und Artillerieschüsse der israelischen Truppen. Dies ist eine Verletzung des Waffenruhesabkommens, das im Oktober 2025 unterzeichnet wurde.",
     "src": "https://www.aa.com.tr/en/middle-east/3-palestinians-killed-in-israeli-attacks-across-gaza-medical-sources/4126079",
     "via": "lokal"
    },
    {
     "date": "2026-11-11",
     "tag": "Angriff",
     "text": "Israel startet Luftangriffe auf das Nasser-Medizinzentrum in Khan Younis, tötet sechs Palästinenser, darunter einen Chirurgen, und verletzt weitere 20 Menschen. Zwei weitere Tote in anderen Angriffen im Gazastreifen.",
     "src": "https://www.aljazeera.com/news/2026/11/11/israeli-strikes-hit-tent-camp-as-five-killed-in-gaza",
     "via": "lokal"
    },
    {
     "date": "2026-11-08",
     "tag": "Humanitär",
     "text": "Mindestens fünf Menschen, darunter vier Kinder, wurden getötet, während mehrere Verletzte gerettet wurden, nachdem ein Sandbank bei starkem Regen und Überschwemmungen zusammenbrach.",
     "src": "https://www.aljazeera.com/news/2026/11/8/floods-in-gaza-leave-tens-of-thousands-without-shelter",
     "via": "lokal"
    },
    {
     "date": "2026-11-08",
     "tag": "Proteste",
     "text": "Drei Menschen werden verhaftet, als pro-Palästinensische Proteste in Rittenhouse Square, Philadelphia, Pennsylvania, von pro-Israelischen Gegenprotesten konfrontiert werden, während ein Radrennverein sechs jüdisch besitzene Restaurants wegen Unterstützung Israels boykottiert.",
     "src": "https://www.nbcnews.com/news/us-news/billboards-urge-boycott-boycott-jewish-owned-businesses-rcna608119",
     "via": "lokal"
    },
    {
     "date": "2026-11-08",
     "tag": "Proteste",
     "text": "Mehr als 200'000 Menschen marschieren in Amsterdam, Niederlande, gegen das angebliche Genozid Israels im Gazastreifen und die Unterstützung des israelischen Militärs durch die niederländische Regierung.",
     "src": "https://www.aljazeera.com/news/2026/11/8/hundreds-of-thousands-protesters-storm-amsterdam",
     "via": "lokal"
    }
   ]
  },
  {
   "id": "nga",
   "updates": [
    {
     "date": "2026-11-15",
     "tag": "Proteste",
     "text": "In Rabah, Sokoto State, werden drei Menschen getötet und mehrere andere entführt in einem Viehraub.",
     "src": "https://punchng.com/bandits-kill-three-abduct-residents-in-sokoto/",
     "via": "lokal"
    },
    {
     "date": "2026-11-07",
     "tag": "Katastrophe",
     "text": "Ein Angriff mit Arson tötet ein Familienmitglied von zwölf in Maradun, Zamfara State, Nigeria. Sieben weitere Menschen werden entführt.",
     "src": "https://www.nigeriainfo.fm/news/homepageabuja/bandits-kill-12-family-members-in-zamfara-abduct-residents/",
     "via": "lokal"
    }
   ]
  },
  {
   "id": "ukr",
   "updates": [
    {
     "date": "2026-11-20",
     "tag": "Angriff",
     "text": "Ein russischer Kh-101-Kreuzermissil traf einen Feld bei Nowy Lipowiec im Lublin-Voivodship, Polen, etwa 60 Meilen südöstlich eines US-Allianz-Trainings. Luftalarmwarnungen wurden in Lublin und Podkarpackie-Voivodship ausgelöst.",
     "src": "https://www.aol.co.uk/articles/suspected-russian-projectile-lands-poland-095529000.html",
     "via": "lokal"
    },
    {
     "date": "2026-11-20",
     "tag": "Angriff",
     "text": "Ein russischer Kh-101-Kreuzermissile traf einen Feld in der Nähe des Dorfes Nowy Lipowiec im Lublin-Voivodship in Polen, etwa 60 Meilen südlich einer Ausbildungsaufgabe der Coalition of the Willing. Luftalarmwarnungen wurden in Lublin und dem Podkarpackie-Voivodship ausgelöst.",
     "src": "https://www.aol.co.uk/articles/suspected-russian-projectile-lands-poland-095529000.html",
     "via": "lokal"
    },
    {
     "date": "2026-11-18",
     "tag": "Front",
     "text": "Die ukrainische Armee bombardiert zum dritten Mal in vier Tagen die Brücke, die Taman in Russland mit der russisch besetzten Kerch in Krim verbindet. Russische Behörden schliessen die Brücke für alle Verkehrsmittel.",
     "src": "https://apnews.com/article/russia-ukraine-war-bridge-crimea-drones-missiles-df4b867cf8f70e88843d8fefea5d643c",
     "via": "lokal"
    },
    {
     "date": "2026-11-17",
     "tag": "Katastrophe",
     "text": "Die Krim-Brücke wird erneut von ukrainischen Drohnen getroffen, was die russischen Behörden zur Wiederholung der Schliessung der Fahrtrichtung führt. Offenlegung: Eine Strecke der Brücke ist gestern zusammengebrochen.",
     "src": "https://www.reuters.com/world/europe/ukraine-strikes-crimean-bridge-second-day-russia-pounds-kyiv-bridges-2026-11-17/",
     "via": "lokal"
    },
    {
     "date": "2026-11-17",
     "tag": "Angriff",
     "text": "Die Krim-Brücke wurde erneut von ukrainischen Drohnen getroffen, was zwei Tote verursachte und die Russischen Behörden zur Wiederholung der Schliessung der Fahrtrichtungen führte. Offenlegte Quellen berichten, dass ein Teil der Brücke gestern beschädigt wurde und nun in den Kerchestrait zusammengebrochen ist.",
     "src": "https://www.reuters.com/world/europe/ukraine-strikes-crimean-bridge-second-day-russia-pounds-kyiv-bridges-2026-11-17/",
     "via": "lokal"
    },
    {
     "date": "2026-11-17",
     "tag": "Proteste",
     "text": "In Comilla, Bangladesh, setzten Mitglieder des Swechhasevak Dal das Büro der Awami-League und das Wohnhaus von AKM Bahauddin Bahar in Brand, nachdem das Zuhause von BNP-Führer S M Jilani angegriffen wurde.",
     "src": "https://www.tbsnews.net/bangladesh/awami-league-office-former-mp-bahars-house-set-fire-cumilla-1606191",
     "via": "lokal"
    },
    {
     "date": "2026-11-12",
     "tag": "Politik",
     "text": "Ukrainischer Präsident Volodymyr Zelenskyy und US-Sondergesandter Jared Kushner verkünden, dass europäische Vertreter zukünftige Friedensverhandlungen mit Russland begleiten werden, was Russischer Präsident Vladimir Putin zustimmt, während er seine Territorialforderungen beibehält und ausländische Friedenswachtruppen in der Ukraine ablehnt.",
     "src": "https://www.nst.com.my/amp/world/world/2026/11/1576502/us-ukraine-say-europe-join-russia-talks-putin-sticks-hardline-stance",
     "via": "lokal"
    }
   ]
  },
  {
   "id": "irn",
   "updates": [
    {
     "date": "2026-11-19",
     "tag": "Maritim",
     "text": "Irans Marine meldet, dass ein Ölfrachter in der Nähe des Strahl von Hormus Feuer gefangen hat, nachdem er eine Seemine getroffen hatte.",
     "src": "https://aje.news/r003u9?update=5169046",
     "via": "lokal"
    },
    {
     "date": "2026-11-19",
     "tag": "Angriff",
     "text": "Die israelische Luftwaffe hat eine Huthi-Untergrundbasis im Bekaa-Tal in Libanon getroffen.",
     "src": "https://www.timesofisrael.com/air-force-bombs-entrances-to-underground-hezbollah-missile-site-in-east-lebanon-idf/",
     "via": "lokal"
    },
    {
     "date": "2026-11-19",
     "tag": "Angriff",
     "text": "Zwei israelische Drohnen explodieren in Nabatieh, Lebanon, verursachen jedoch keine Verletzten.",
     "src": "https://aje.news/r003u9?update=5168425",
     "via": "lokal"
    },
    {
     "date": "2026-11-17",
     "tag": "Politik",
     "text": "Das Militär von Bahrain blockiert mehrere Drohnen, die vom iranischen Revolutionsgarden (IRGC) aus in Richtung Sheikh Isa Flugland geschossen wurden.",
     "src": "https://www.lemonde.fr/en/international/article/2026/11/17/iran-claims-attack-on-us-base-in-bahrain_6782812_4.html",
     "via": "lokal"
    },
    {
     "date": "2026-11-17",
     "tag": "Politik",
     "text": "Die US-Luftwaffe führt eine Reihe von mindestens sechs Angriffen auf Qeshm-Insel durch, während der iranische Revolutionsgarden (IRGC) eine General Atomics MQ-9 Reaper Drohne südlich der Insel abstellt.",
     "src": "https://news.am/en/news/1075422",
     "via": "lokal"
    },
    {
     "date": "2026-11-17",
     "tag": "Maritim",
     "text": "Die US-Luftwaffe hat eine Reihe von mindestens sechs Angriffen auf Qeshm-Insel durchgeführt. Die IRGC berichtet, dass sie südlich der Insel eine General Atomics MQ-9 Reaper Drohne abgeschossen haben.",
     "src": "https://www.reuters.com/world/middle-east/us-strikes-iranian-missile-launch-site-qeshm-island-us-official-says-2026-11-17/",
     "via": "lokal"
    },
    {
     "date": "2026-11-17",
     "tag": "Front",
     "text": "Die US-Air Force führt eine Reihe von mindestens sechs Angriffen auf Qeshm-Insel durch. Die IRGC gibt bekannt, dass sie südlich der Insel eine General Atomics MQ-9 Reaper Drohne abgeschossen haben.",
     "src": "https://www.reuters.com/world/middle-east/us-strikes-iranian-missile-launch-site-qeshm-island-us-official-says-2026-11-17/",
     "via": "lokal"
    },
    {
     "date": "2026-11-16",
     "tag": "Politik",
     "text": "Bahrain verurteilt 64 Shia, hauptsächlich Geistliche, zu Leben inhaft für die Gründung eines terroristischen Netzwerks, das mit Irans Revolutionsgarden verbunden ist.",
     "src": "https://www.bbc.com/news/articles/cmx20pyew3zxo",
     "via": "lokal"
    },
    {
     "date": "2026-11-15",
     "tag": "Maritim",
     "text": "Die iranische Revolutionsgarden melden, dass ein Supertanker mit zwei Millionen Barren Öl in der Strasse von Hormuz versenkt wurde, nachdem er eine Mine getroffen hat.",
     "src": "https://www.arabnews.com/middle-east/iran-says-supertanker-with-2-million-barrels-of-oil-sank-in-gulf-3012053",
     "via": "lokal"
    },
    {
     "date": "2026-11-15",
     "tag": "Maritim",
     "text": "Die iranische Revolutionsgarde meldet, dass ein Supertanker mit zwei Millionen Barrel Öl in der Strasse von Hormus gesunken ist, nachdem er eine Seemine gestossen ist.",
     "src": "https://www.arabnews.com/middle-east/iran-says-supertanker-with-2-million-barrels-of-oil-sank-in-gulf-3012053",
     "via": "lokal"
    },
    {
     "date": "2026-11-14",
     "tag": "Angriff",
     "text": "Die iranische Armee hat Drohnen und Raketen gegen eine amerikanische Militärbasis in Bahrain abgefeuert, einer der grössten Angriffe auf das Land in Monaten.",
     "src": "https://www.thenationalnews.com/news/gulf/2026/11/15/bahrain-issues-first-nationwide-alert-in-months-as-iran-claims-attack-on-base-hosting-us-helicopters/",
     "via": "lokal"
    },
    {
     "date": "2026-11-14",
     "tag": "Angriff",
     "text": "Die iranische Armee hat Drohnen und Raketen gegen ein US-Militärziel in Bahrain abgefeuert, einer der grössten Angriffe auf das Land in Monaten.",
     "src": "https://www.thenationalnews.com/news/gulf/2026/11/15/bahrain-issues-first-nationwide-alert-in-months-as-iran-claims-attack-on-base-hosting-us-helicopters/",
     "via": "lokal"
    }
   ]
  },
  {
   "id": "yem",
   "updates": [
    {
     "date": "2026-11-19",
     "tag": "Angriff",
     "text": "Die Huthi kämpfen schiessen Raketen auf den King Abdullah Finanzdistrikt in Riad, Saudi-Arabien, was Gebäude beschädigt, verursacht aber keine Verletzten.",
     "src": "https://www.middleeastmonitor.com/20261119-houthi-attack-damages-tower-in-riyadhs-financial-district-saudi-civil-defense/",
     "via": "lokal"
    },
    {
     "date": "2026-11-19",
     "tag": "Angriff",
     "text": "Die jemenitische Regierung meldet, dass ihre Truppen während neuer Operationen in Taiz, Marib und Al-Jawf 144 Huthi-Kämpfer getötet oder verletzt haben und einen Angriff in der Tur Al Bahah Region abgewehrt haben.",
     "src": "https://aje.news/r003u9?update=5168467",
     "via": "lokal"
    },
    {
     "date": "2026-11-19",
     "tag": "Angriff",
     "text": "Die Huthi behaupten, dass die von Saudi-Arabien geführte Kriegspartei in den letzten beiden Tagen in Sanaa, Jemen, 10 Menschen getötet haben.",
     "src": "https://aje.news/r003u9?update=5168933",
     "via": "lokal"
    },
    {
     "date": "2026-11-08",
     "tag": "Front",
     "text": "Ein Huthi-Raketenangriff auf die Stadt Riad in Saudi-Arabien wurde von der Luftverteidigung des Landes abgefangen. Mehrere Stockwerke des Aramco-Towers in der King Abdullah Finanzdistrikte sind beschädigt, aber keine Todesopfer oder Verletzten wurden gemeldet.",
     "src": "https://www.aljazeera.com/news/2026/11/8/saudi-arabia-intercepts-houthi-missiles-targeting-riyadh-eastern-province",
     "via": "lokal"
    },
    {
     "date": "2026-11-08",
     "tag": "Angriff",
     "text": "Ein Huthi-Raketenangriff über dem Saudi-Arabischen Stadtteil Riyadh trifft mehrere Stockwerke des Aramco-Turms, der von Saudi Aramco besessen wird. Es wurden keine Tote oder Verletzten gemeldet.",
     "src": "https://www.aljazeera.com/news/2026/11/8/saudi-arabia-intercepts-houthi-missiles-targeting-riyadh-eastern-province",
     "via": "lokal"
    },
    {
     "date": "2026-11-07",
     "tag": "Front",
     "text": "Saudi-Airstrikes trafen Häuser in der Nähe von Sanaa, Jemen, und töteten mindestens 27 Menschen, verletzten 36 weitere.",
     "src": "https://apnews.com/article/yemen-houthi-saudi-attacks-1b5aef5b86be2e96e1cd8a18165afaf6",
     "via": "lokal"
    },
    {
     "date": "2026-11-06",
     "tag": "Angriff",
     "text": "Saudi-Arabien startet einen Luftangriff auf einen Markt im Taiz-Gouvernement, Jemen, bei dem 30 Menschen getötet und acht weitere verletzt werden.",
     "src": "https://apnews.com/article/yemen-airstrikes-market-houthis-bcc2409ada0398125173d84261bd1fff",
     "via": "lokal"
    }
   ]
  },
  {
   "id": "hti",
   "updates": [
    {
     "date": "2026-11-18",
     "tag": "Politik",
     "text": "Die Salvadoranische Streitkräfte zerstören ein Haus, das dem Anführer der Taliban-Organisation Jeff Larose gehört, in Canaan, Haiti. Die Gang Suppression Force erklärt, dass sie nicht beteiligt war.",
     "src": "https://apnews.com/article/haiti-bukele-jeff-canaan-gangs-attack-home-4397ab6847be1d1dcc9c5bc600a4953f",
     "via": "lokal"
    },
    {
     "date": "2026-11-17",
     "tag": "Politik",
     "text": "Hunderte Haitianer marschieren in Städten des Landes, um die Bereitstellung von Salvadoraner Truppen zur Bekämpfung von Gangkriminalität zu unterstützen.",
     "src": "https://www.aljazeera.com/news/2026/11/17/haitians-protest-in-support-of-el-salvadors-anti-gang-troop-deployment",
     "via": "lokal"
    },
    {
     "date": "2026-11-12",
     "tag": "Politik",
     "text": "Haitianische und salvadoranische Soldaten übernehmen die Kontrolle des Stadions Sylvio Cator in Port-au-Prince, nachdem zwei Jahre lang Gangs das Gelände kontrolliert haben.",
     "src": "https://www.france24.com/en/americas/20261113-haitian-police-retake-national-stadium-from-gangs-after-two-years",
     "via": "lokal"
    },
    {
     "date": "2026-11-10",
     "tag": "Politik",
     "text": "El Salvador startet eine gemeinsame Militäroperation mit der haitianischen Polizei gegen den 400 Mawozo Gang. Dabei sterben 20 Menschen, darunter der Führungsansässige Wilson Joseph.",
     "src": "https://www.aljazeera.com/news/2026/11/10/salvadoran-troops-target-haitian-gang-leaving-20-dead",
     "via": "lokal"
    },
    {
     "date": "2026-11-10",
     "tag": "Politik",
     "text": "El Salvador startet eine gemeinsame militärische Operation mit der haitianischen Polizei gegen die 400 Mawozo Bande, bei der 20 Menschen getötet und ein Haus des Anführers Wilson Joseph zerstört wurden.",
     "src": "https://www.aljazeera.com/news/2026/11/10/salvadoran-troops-target-haitian-gang-leaving-20-dead",
     "via": "lokal"
    }
   ]
  },
  {
   "id": "sdn",
   "updates": [
    {
     "date": "2026-11-14",
     "tag": "Politik",
     "text": "Ahmed Abdallah Bishr, der Generaalchef der Gathering of Sudan Liberation Forces (GSLF), wurde in einem Drohnenangriff auf seinem Haus in Nyala im sudanesischen Südarabischen Dafur getroffen.",
     "src": "https://sudantribune.com/article/321241",
     "via": "lokal"
    },
    {
     "date": "2026-11-14",
     "tag": "Politik",
     "text": "Ahmed Abdallah Bishr, der allgemeine Chef des Generalstabs der Versammlung der Befreiungssoldaten des Sudan (GSLF), stirbt an den Wunden, die er bei einem Anschlag durch Drohne in seiner Heimatstadt Nyala, Südarabisch, erlitten hat, einen Monat zuvor.",
     "src": "https://sudantribune.com/article/321241",
     "via": "lokal"
    },
    {
     "date": "2026-11-08",
     "tag": "Politik",
     "text": "Der ehemalige National Congress Party Politiker Ahmed Haroun, der vom Internationalen Strafgerichtshof wegen Völkermords im Sudan in der Region Dafur verfolgt wird, wird von der sudanesischen Armee verhaftet.",
     "src": "https://www.arabnews.com/middle-east/sudan-detains-chairman-of-former-ruling-party-ahmed-haroun-two-party-officials-say-3010516",
     "via": "lokal"
    },
    {
     "date": "2026-11-07",
     "tag": "Front",
     "text": "Die sudanesischen Streitkräfte (SAF) haben die West-Kordofan-Stadt Iyal Bakhit zurückgewonnen. Zudem haben sie eine Drohne der RSF-Miliz abgeschossen.",
     "src": "https://sudantribune.com/article/320981",
     "via": "lokal"
    },
    {
     "date": "2026-11-07",
     "tag": "Front",
     "text": "Die sudanesische Armee (SAF) meldet, dass sie die Stadt Iyal Bakhit in West Kordofan zurückgewonnen haben. Darüber hinaus meldet sich die SAF, dass sie eine Drohne der RSF-Miliz abgeschossen haben.",
     "src": "https://sudantribune.com/article/320981",
     "via": "lokal"
    }
   ]
  },
  {
   "id": "col",
   "updates": [
    {
     "date": "2026-11-11",
     "tag": "Angriff",
     "text": "Zwei Menschen wurden verhaftet, weil sie mit einem Explosivangriff auf das Hauptquartier der kolumbianischen Senderfirma RCN Televisión in Kali, Valle del Cauca, in Verbindung gebracht werden.",
     "src": "https://gulfnews.com/world/americas/colombian-media-outlet-attacked-with-explosives-1.500744157",
     "via": "lokal"
    },
    {
     "date": "2026-11-07",
     "tag": "Maritim",
     "text": "Ein von unbekannter Quelle gestarteter Drohneangriff traf eine Militärbasis in Santa Rosa del Sur, Bolívar-Department, Kolumbien, und tötete drei Menschen, verletzte 16 weitere.",
     "src": "https://apnews.com/article/colombia-drone-attack-military-base-7eb8bd82e98900f790b6d4e35eb702ec",
     "via": "lokal"
    },
    {
     "date": "2026-11-07",
     "tag": "Angriff",
     "text": "Ein unbekannten Ursprungsdrohnenangriff tritt auf eine Militärbasis in Santa Rosa del Sur, Bolívar Department, Kolumbien, zu. Drei Soldaten sterben und 16 weitere werden verletzt.",
     "src": "https://apnews.com/article/colombia-drone-attack-military-base-7eb8bd82e98900f790b6d4e35eb702ec",
     "via": "lokal"
    }
   ]
  },
  {
   "id": "ebola",
   "updates": [
    {
     "date": "2026-11-11",
     "tag": "Epidemie",
     "text": "Die kenianische Gesundheitsministerin meldet, dass der letzte Ebola-Fall in Nairobi aus dem Krankenhaus entlassen wurde. Falls bis zum 23. Dezember niemand weitere Symptome zeigt, wird Kenia Ebola-frei erklärt.",
     "src": "https://www.dw.com/en/kenya-ebola-free-patient-leaves-hospital/a-79921240",
     "via": "lokal"
    },
    {
     "date": "2026-11-11",
     "tag": "Epidemie",
     "text": "In der Demokratischen Republik Kongo übertreffen die bestätigten Ebola-Fälle die 11'000, mit mindestens 5'387 Todesfällen. Acht der 26 Provinzen des Landes sind betroffen.",
     "src": "https://www.aljazeera.com/news/2026/11/11/ebola-cases-in-dr-congo-pass-11000-with-5387-deaths",
     "via": "lokal"
    }
   ]
  },
  {
   "id": "som",
   "updates": [
    {
     "date": "2026-11-16",
     "tag": "Politik",
     "text": "Das US-Aussendepartment entscheidet sich, die Finanzierung des UN-Support-Offices für Somalia zu beibehalten und unterstützt eine Verlängerung seines Mandats sowie des militärischen Auftrags der afrikanischen Union gegen Al-Shabaab um ein Jahr.",
     "src": "https://www.afp.com/en/reversal-us-fund-un-military-support-somalia-another-year",
     "via": "lokal"
    },
    {
     "date": "2026-11-15",
     "tag": "Politik",
     "text": "Die Afrikanische Union-Sondermission in Somalia überträgt die Kontrolle von fünf Basen in Barawe, Lower Shabelle, an die somalischen Streitkräfte.",
     "src": "https://www.hiiraan.com/security4/2026/Nov/206784/somali_army_takes_control_of_five_aussom_bases_in_barawe_as_security_transition_advances.aspx",
     "via": "lokal"
    },
    {
     "date": "2026-11-10",
     "tag": "Proteste",
     "text": "Mindestens acht Menschen, darunter zwei Polizeireservisten, werden von verdächtigen al-Shabaab-Militanten in Mandera County, Kenia, getötet, nahe der Grenze zu Somaliland.",
     "src": "https://aa.com.tr/en/africa/suspected-al-shabaab-militants-kill-8-in-northeastern-kenya-ambush/4119429",
     "via": "lokal"
    },
    {
     "date": "2026-11-10",
     "tag": "Angriff",
     "text": "Acht Menschen, darunter fünf Arbeitnehmer und zwei PolizeireservistInnen, wurden bei einem Anschlag durch angebliche Al-Shabaab-Militanten in der Mandera-County, nahe der Grenze zu Somalien, getötet. Die Anschläge zielten auf ein Fahrzeug.",
     "src": "https://aa.com.tr/en/africa/suspected-al-shabaab-militants-kill-8-in-northeastern-kenya-ambush/4119429",
     "via": "lokal"
    }
   ]
  },
  {
   "id": "mex",
   "updates": [
    {
     "date": "2026-11-18",
     "tag": "Politik",
     "text": "Eine Operation gegen Kartele der Jalisco Nueva Generacion in Zapopan, Jalisco, führte zu drei Todesfällen und drei Festnahmen, darunter eines Ringführers. Die Behörden beendeten die Aktion nach sieben Stunden Schiesserei.",
     "src": "https://www.nmas.com.mx/jalisco/seguridad/foro-tv-video-operativo-en-zapopan-deja-3-presuntos-delincuentes-muertos-y-3-detenidos-entre-ellos-el-topo/",
     "via": "lokal"
    },
    {
     "date": "2026-11-18",
     "tag": "Politik",
     "text": "Der US-Verteidigungsminister Pete Hegseth überreicht während einer Besuchsreise in Kolumbien einen Lockheed C-130 Hercules und bespricht mit kolumbianischen Behörden die militärische Zusammenarbeit, insbesondere gegen Drogenkartelle.",
     "src": "https://thehill.com/policy/defense/6230698-hegseth-delivers-c130-colombia/",
     "via": "lokal"
    },
    {
     "date": "2026-11-13",
     "tag": "Politik",
     "text": "Das US-Aussenministerium klassifiziert drei guatemaltekische kriminelle Gruppen als fremde terroristische Organisationen, da sie materielle Unterstützung für mexikanische Drogenkartellen liefern.",
     "src": "https://macaubusiness.com/us-imposes-terrorist-designations-on-three-guatemala-groups/",
     "via": "lokal"
    },
    {
     "date": "2026-11-08",
     "tag": "Politik",
     "text": "Mexikanische Marinepersonal, zusammen mit Informationen des Nationalen Intelligenzcenters und der US-DEA, verhafteten Rafael Álvarez Ayala, den angeblichen Anführer der Zelle \"Los Rs\" des Jalisco New Generation Kartells, in Zapopan, Jalisco, Mexiko. Er wurde während des Auffalls verletzt und wird wegen schweren Mordes in Michoacán gesucht.",
     "src": "https://www.aljazeera.com/news/2026/11/9/mexico-arrests-major-leader-of-jalisco-cartel",
     "via": "lokal"
    },
    {
     "date": "2026-11-08",
     "tag": "Politik",
     "text": "Mexikanische Marinebeamte, unterstützt von der Nationalen Intelligenzbehörde und dem US-Drogenzuständigtenamt, verhaften Rafael Álvarez Ayala, den angeblichen Anführer der \"Los Rs\"-Zelle des Jalisco New Generation Kartells, in Zapopan, Jalisco. Er wird verletzt, als er sich wehrt, und wird wegen schweren Mordes in Michoacán gesucht.",
     "src": "https://www.aljazeera.com/news/2026/11/9/mexico-arrests-major-leader-of-jalisco-cartel",
     "via": "lokal"
    },
    {
     "date": "2026-11-06",
     "tag": "Angriff",
     "text": "Drei Angreifer wurden bei einem Konflikt mit den Behörden in der Ejido Las Trancas, Navolato, Sinaloa, Mexiko, getötet.",
     "src": "https://www.eluniversal.com.mx/estados/enfrentamiento-deja-tres-civiles-armados-muertos-en-navolato-sinaloa-aseguran-un-vehiculo-armas-cargadores-y-equipo-tactico/",
     "via": "lokal"
    },
    {
     "date": "2026-11-06",
     "tag": "Angriff",
     "text": "Edgar Aarón Vázquez, Gründer und Anführer des Kartells Nuevo Imperio, wurde in einer Aktion in Naucalpan, Staat Mexiko, getötet. Er wurde an der Ermordung eines Bundesbeamten, Kidnapping, Erpressung, Mord, Enteignung, Geldwäsche, Benzinraub und Drogenhandel nach den USA und Kanada verdächtigt.",
     "src": "https://www.excelsior.com.mx/nacional/abaten-lider-cartel-nuevo-imperio-eu-acuso-proteger-capo-exatleta",
     "via": "lokal"
    }
   ]
  },
  {
   "id": "drc",
   "updates": [
    {
     "date": "2026-11-11",
     "tag": "Front",
     "text": "Islamic State-zugehörige Rebellen Allied Democratic Forces töteten mindestens 22 Menschen in acht Orten im Territorium Mambasa, Provinz Ituri, Demokratische Republik Kongo.",
     "src": "https://apnews.com/article/congo-islamic-state-group-mambasa-attack-kidnapping-c1c568db3a670679818aa426cf28fc80",
     "via": "lokal"
    },
    {
     "date": "2026-11-10",
     "tag": "Justiz",
     "text": "Im Militärgericht in Goma, Nord-Kivu, Demokratische Republik Kongo, werden 66 Soldaten wegen Mangel an Mut, Mordverschwörung und Verweigerung der Befehle zum Tode verurteilt. Sie wurden nach Kämpfen mit Rebellen der Front für die Wiedergeburt des Volkes verhaftet.",
     "src": "https://www.dw.com/en/dr-congo-66-soldiers-sentenced-to-death-for-cowardice-in-conflict-with-frn-rebels/a-79906794",
     "via": "lokal"
    },
    {
     "date": "2026-11-10",
     "tag": "Justiz",
     "text": "Ein Militärgericht in Goma, Nord-Kivu, Demokratische Republik Kongo, verurteilt 66 Soldaten zum Tode wegen Mangel an Tapferkeit, Mordversuch und Verweigerung von Befehlen. Sie wurden nach Kämpfen mit Rebellen des Front für die Wiederaufbaunation verhaftet.",
     "src": "https://www.dw.com/en/dr-congo-66-soldiers-sentenced-to-death-for-cowardice-in-conflict-with-frn-rebels/a-79906794",
     "via": "lokal"
    },
    {
     "date": "2026-11-06",
     "tag": "Angriff",
     "text": "Ein Angriff gestern durch verdächtigte Angehörige der Alliierten Demokratischen Forces auf mehrere Dörfer in Nord-Kivu, Ost-Konstantinopel, hat 33 Tote verursacht.",
     "src": "https://www.aa.com.tr/en/africa/death-toll-from-adf-attack-in-dr-congo-rises-to-33/4114820",
     "via": "lokal"
    },
    {
     "date": "2026-11-06",
     "tag": "Angriff",
     "text": "Der Todeszahlenbericht über einen Angriff gestern von verdächtigen Rebellen der Allied Democratic Forces auf mehrere Dörfer in Nord-Kivu, Ost-Konstantinopel, steigt auf 33.",
     "src": "https://www.aa.com.tr/en/africa/death-toll-from-adf-attack-in-dr-congo-rises-to-33/4114820",
     "via": "lokal"
    }
   ]
  },
  {
   "id": "blacksea",
   "updates": [
    {
     "date": "2026-11-09",
     "tag": "Politik",
     "text": "Ein 24-jähriger Mann, der vor zwei Tagen im Hauptplatz von Krakau in Polen einen Schusswechsel mit der Polizei begonnen hat, starb im Krankenhaus.",
     "src": "https://www.aljazeera.com/news/2026/11/9/poland-mass-shooting-assailant-dies-in-hospital-police-say",
     "via": "lokal"
    },
    {
     "date": "2026-11-09",
     "tag": "Politik",
     "text": "Ein 24-jähriger Mann, der vor zwei Tagen in der Hauptplatz von Krakau in Polen schiesst, stirbt nach einer Schiesserei mit der Polizei im Krankenhaus.",
     "src": "https://www.aljazeera.com/news/2026/11/9/poland-mass-shooting-assailant-dies-in-hospital-police-say",
     "via": "lokal"
    },
    {
     "date": "2026-11-09",
     "tag": "Justiz",
     "text": "Ein 24-jähriger Mann, der am Marktplatz in Krakau, Polen, vor zwei Tagen einen durchfahrenden Mordanschlag verübte, der sechs Menschen tötete und 16 verletzte, stirbt im Krankenhaus nach einem Schiessduell mit der Polizei.",
     "src": "https://www.aljazeera.com/news/2026/11/9/poland-mass-shooting-assailant-dies-in-hospital-police-say",
     "via": "lokal"
    },
    {
     "date": "2026-11-09",
     "tag": "Proteste",
     "text": "Ein 24-jähriger Mann, der vor zwei Tagen einen Drive-by-Shooting auf dem Hauptplatz in Krakau, Polen, verübte, bei dem sechs Menschen getötet und 16 Verletzte wurden, stirbt im Krankenhaus nach einem Schiessduell mit der Polizei.",
     "src": "https://www.aljazeera.com/news/2026/11/9/poland-mass-shooting-assailant-dies-in-hospital-police-say",
     "via": "lokal"
    },
    {
     "date": "2026-11-07",
     "tag": "Proteste",
     "text": "Sechs Menschen wurden bei einem Drive-by-Massenschuss im Zentrum von Kraków, Polen, getötet. Der Täter, der auch seine Eltern und seine Schwester in Ostrowiec Świętokrzyski getötet hatte, wurde von der Polizei verletzt und festgenommen.",
     "src": "https://www.reuters.com/world/europe/two-kiled-least-10-injured-shooting-polish-city-krakow-tvn24-reports-2026-11-07/",
     "via": "lokal"
    }
   ]
  },
  {
   "id": "pak",
   "updates": [
    {
     "date": "2026-11-11",
     "tag": "Angriff",
     "text": "Zehn Polizeibeamte, darunter zwei Oberbeamte, werden bei einem Gefecht getötet, nachdem Insurgenten Polizeifahrzeuge in der Kohat District, Khyber Pakhtunkhwa, Pakistan, angegriffen haben.",
     "src": "https://apnews.com/article/pakistan-militants-attack-kohat-afghanistan-police-ttp-260c8876601c767a4111b17fa9dd255c",
     "via": "lokal"
    },
    {
     "date": "2026-11-11",
     "tag": "Angriff",
     "text": "Die türkische Taliban greift Polizeipersonal in der Kohat District im Khyber Pakhtunkhwa, Pakistan, mit einem Anschlag an und tötet zehn Beamte. In der anschliessenden Schiesserei sterben auch 18 Angreifer.",
     "src": "https://apnews.com/article/pakistan-militants-attack-kohat-afghanistan-police-ttp-260c8876601c767a4111b17fa9dd255c",
     "via": "lokal"
    }
   ]
  },
  {
   "id": "kas",
   "updates": [
    {
     "date": "2026-11-18",
     "tag": "Politik",
     "text": "Ein militärischer Kommandeur der indischen Streitkräfte wurde in einem Mosque in der Distrikthauptstadt Kullgam, indisch verwalteter Jammu und Kashmir, getötet. Er war zwei Tage zuvor in einem Nachbardorf entkommen, wo sein Assistent getötet wurde.",
     "src": "https://apnews.com/article/kashmir-india-pakistan-fighting-militant-4c8bb73e494d85b769d85a8c98ea1baf",
     "via": "lokal"
    },
    {
     "date": "2026-11-18",
     "tag": "Politik",
     "text": "Ein militärischer Kommandeur der indischen Streitkräfte wurde in einem Mosque in Kullgam district getötet, nachdem er zwei Tage zuvor in einem Nachbardorf mit Truppen in einem Schiessduell entkommen war, wo sein Partner getötet wurde.",
     "src": "https://apnews.com/article/kashmir-india-pakistan-fighting-militant-4c8bb73e494d85b769d85a8c98ea1baf",
     "via": "lokal"
    },
    {
     "date": "2026-11-11",
     "tag": "Angriff",
     "text": "Drei Polizisten der Central Reserve Police Force werden verletzt, als Terroristen auf einem Kontrollpunkt in Mir Bazar, Kulgam, Jammu und Kashmir, Indien, schiessen. Sicherheitskräfte starten eine Suchaktion, um die Angreifer zu finden.",
     "src": "https://gulfnews.com/world/asia/india/india-terrorists-attack-crpf-personnel-in-jk-3-hurt-1.500743618",
     "via": "lokal"
    }
   ]
  },
  {
   "id": "ssd",
   "updates": [
    {
     "date": "2026-11-14",
     "tag": "Politik",
     "text": "Das südsudanische Wahlkomitee verschiebt die ersten Präsidenten- und Parlamentswahlen seit der Unabhängigkeit 2011 um mehr als drei Monate, von 22. Dezember 2026 auf 11. Februar 2027, aufgrund politischer Spannungen und weiterer Gewalt.",
     "src": "https://www.rfi.fr/en/international-news/20261114-south-sudan-postpones-first-national-elections-until-february",
     "via": "lokal"
    }
   ]
  }
 ],
 "events": [
  {
   "c": "irn",
   "t": "schiff",
   "d": "2026-11-19",
   "coords": [
    56.2154,
    27.1427
   ],
   "title": "Feuer auf Ölfrachter im Strahl von Hormus",
   "txt": "Irans Marine meldet, dass ein Ölfrachter in der Nähe des Strahl von Hormus Feuer gefangen hat, nachdem er eine Seemine getroffen hatte.",
   "cas": "",
   "src": "https://aje.news/r003u9?update=5169046",
   "via": "lokal"
  },
  {
   "c": "irn",
   "t": "luft",
   "d": "2026-11-19",
   "coords": [
    36.1453,
    34.0089
   ],
   "title": "Luftangriff auf Huthi-Untergrundbasis in Libanon",
   "txt": "Die israelische Luftwaffe hat eine Huthi-Untergrundbasis im Bekaa-Tal in Libanon getroffen.",
   "cas": "",
   "src": "https://www.timesofisrael.com/air-force-bombs-entrances-to-underground-hezbollah-missile-site-in-east-lebanon-idf/",
   "via": "lokal"
  },
  {
   "c": "irn",
   "t": "drohne",
   "d": "2026-11-19",
   "coords": [
    35.506,
    33.3079
   ],
   "title": "Drohnen explodieren in Nabatieh",
   "txt": "Zwei israelische Drohnen explodieren in Nabatieh, Lebanon, verursachen jedoch keine Verletzten.",
   "cas": "",
   "src": "https://aje.news/r003u9?update=5168425",
   "via": "lokal"
  },
  {
   "c": "yem",
   "t": "luft",
   "d": "2026-11-19",
   "coords": [
    46.715,
    24.6383
   ],
   "title": "Huthi-Raketen in Riad",
   "txt": "Die Huthi kämpfen schiessen Raketen auf den King Abdullah Finanzdistrikt in Riad, Saudi-Arabien, was Gebäude beschädigt, verursacht aber keine Verletzten.",
   "cas": "",
   "src": "https://www.middleeastmonitor.com/20261119-houthi-attack-damages-tower-in-riyadhs-financial-district-saudi-civil-defense/",
   "via": "lokal"
  },
  {
   "c": "yem",
   "t": "anschlag",
   "d": "2026-11-19",
   "coords": [
    44.0167,
    13.5667
   ],
   "title": "Regierungstruppen in Taiz",
   "txt": "Die jemenitische Regierung meldet, dass ihre Truppen während neuer Operationen in Taiz, Marib und Al-Jawf 144 Huthi-Kämpfer getötet oder verletzt haben und einen Angriff in der Tur Al Bahah Region abgewehrt haben.",
   "cas": "",
   "src": "https://aje.news/r003u9?update=5168467",
   "via": "lokal"
  },
  {
   "c": "yem",
   "t": "luft",
   "d": "2026-11-19",
   "coords": [
    44.2,
    15.35
   ],
   "title": "Huthi-Angriffe in Sanaa",
   "txt": "Die Huthi behaupten, dass die von Saudi-Arabien geführte Kriegspartei in den letzten beiden Tagen in Sanaa, Jemen, 10 Menschen getötet haben.",
   "cas": "",
   "src": "https://aje.news/r003u9?update=5168933",
   "via": "lokal"
  },
  {
   "c": "kas",
   "t": "anschlag",
   "d": "2026-11-18",
   "coords": [
    75.02,
    33.64
   ],
   "title": "Militanter Kommandeur getötet in Kullgam, Indisch verwalteter Jammu und Kashmir",
   "txt": "Ein militärischer Kommandeur der indischen Streitkräfte wurde in einem Mosque in der Distrikthauptstadt Kullgam, indisch verwalteter Jammu und Kashmir, getötet. Er war zwei Tage zuvor in einem Nachbardorf entkommen, wo sein Assistent getötet wurde.",
   "cas": "13 Tot, 16 Verletzte",
   "src": "https://apnews.com/article/kashmir-india-pakistan-fighting-militant-4c8bb73e494d85b769d85a8c98ea1baf",
   "via": "lokal"
  },
  {
   "c": "mex",
   "t": "anschlag",
   "d": "2026-11-18",
   "coords": [
    -103.4,
    20.7167
   ],
   "title": "Operation gegen Kartele in Zapopan, Mexiko",
   "txt": "Eine Operation gegen Kartele der Jalisco Nueva Generacion in Zapopan, Jalisco, führte zu drei Todesfällen und drei Festnahmen, darunter eines Ringführers. Die Behörden beendeten die Aktion nach sieben Stunden Schiesserei.",
   "cas": "3 Tote, 3 Festgenommene",
   "src": "https://www.nmas.com.mx/jalisco/seguridad/foro-tv-video-operativo-en-zapopan-deja-3-presuntos-delincuentes-muertos-y-3-detenidos-entre-ellos-el-topo/",
   "via": "lokal"
  },
  {
   "c": "irn",
   "t": "abfang",
   "d": "2026-11-17",
   "coords": [
    55.8477,
    26.7687
   ],
   "title": "US-Luftwaffe bombardiert Qeshm-Insel",
   "txt": "Die US-Luftwaffe führt eine Reihe von mindestens sechs Angriffen auf Qeshm-Insel durch, während der iranische Revolutionsgarden (IRGC) eine General Atomics MQ-9 Reaper Drohne südlich der Insel abstellt.",
   "cas": "",
   "src": "https://news.am/en/news/1075422",
   "via": "lokal"
  },
  {
   "c": "ukr",
   "t": "drohne",
   "d": "2026-11-17",
   "coords": [
    36.5,
    45.25
   ],
   "title": "Krim-Brücke bombardiert erneut",
   "txt": "Die Krim-Brücke wird erneut von ukrainischen Drohnen getroffen, was die russischen Behörden zur Wiederholung der Schliessung der Fahrtrichtung führt. Offenlegung: Eine Strecke der Brücke ist gestern zusammengebrochen.",
   "cas": "",
   "src": "https://www.reuters.com/world/europe/ukraine-strikes-crimean-bridge-second-day-russia-pounds-kyiv-bridges-2026-11-17/",
   "via": "lokal"
  },
  {
   "c": "gaza",
   "t": "anschlag",
   "d": "2026-11-17",
   "coords": [
    35.46,
    31.8561
   ],
   "title": "Westjordanland: Settler greifen Palästinenser an",
   "txt": "Ein 72-jähriger Palästinenserweiblicher wird getötet und zehn weitere verletzt, als Settler in der westjordanlandischen Dorfgemeinde Ein ad-Duyuk westlich von Jericho Palästinenserhäuser angriffen.",
   "cas": "1 Tod, 10 Verletzte",
   "src": "https://www.aljazeera.com/news/2026/11/17/israeli-settler-pogrom-kills-palestinian-woman-wounds-10-people",
   "via": "lokal"
  },
  {
   "c": "gaza",
   "t": "luft",
   "d": "2026-11-15",
   "coords": [
    34.36,
    31.4432
   ],
   "title": "Gazastreifen: Palästinenser getötet",
   "txt": "In der Gazastreifen werden Palästinenser getötet und andere verletzt durch Schiessereien und Artillerieschüsse der israelischen Truppen. Dies ist eine Verletzung des Waffenruhesabkommens, das im Oktober 2025 unterzeichnet wurde.",
   "cas": "3 Tote, mehrere Verletzte",
   "src": "https://www.aa.com.tr/en/middle-east/3-palestinians-killed-in-israeli-attacks-across-gaza-medical-sources/4126079",
   "via": "lokal"
  },
  {
   "c": "nga",
   "t": "gefecht",
   "d": "2026-11-15",
   "coords": [
    5.7945,
    13.002
   ],
   "title": "Nigeria: Viehraub in Sokoto",
   "txt": "In Rabah, Sokoto State, werden drei Menschen getötet und mehrere andere entführt in einem Viehraub.",
   "cas": "3 Tote, mehrere entführt",
   "src": "https://punchng.com/bandits-kill-three-abduct-residents-in-sokoto/",
   "via": "lokal"
  },
  {
   "c": "sdn",
   "t": "drohne",
   "d": "2026-11-14",
   "coords": [
    24.8164,
    12.0107
   ],
   "title": "Generaalchef der Liberation Forces getroffen in Nyala",
   "txt": "Ahmed Abdallah Bishr, der Generaalchef der Gathering of Sudan Liberation Forces (GSLF), wurde in einem Drohnenangriff auf seinem Haus in Nyala im sudanesischen Südarabischen Dafur getroffen.",
   "cas": "",
   "src": "https://sudantribune.com/article/321241",
   "via": "lokal"
  },
  {
   "c": "irn",
   "t": "luft",
   "d": "2026-11-13",
   "coords": [
    50.5345,
    26.1551
   ],
   "title": "Iran bombardiert Bahrain",
   "txt": "Iran behauptet, es habe einen frühwarnenden Radar in Bahrain zerstört, als Reaktion auf einen US-Angriff auf Telekommunikationsinfrastruktur auf Sirik-Insel.",
   "cas": "",
   "src": "https://www.turkiyetoday.com/region/irgc-claims-strike-on-us-early-warning-radar-in-bahrain-after-sirik-attack-3232293?s=1",
   "via": "lokal"
  },
  {
   "c": "irn",
   "t": "luft",
   "d": "2026-11-13",
   "coords": [
    57.1017,
    26.5164
   ],
   "title": "Iran zerstört Radar in Bahrain",
   "txt": "Iran hat ein frühwarnendes Radar in Bahrain zerstört, als Reaktion auf einen US-Angriff auf Telekommunikationsinfrastruktur in Sirik.",
   "cas": "",
   "src": "https://www.turkiyetoday.com/region/irgc-claims-strike-on-us-early-warning-radar-in-bahrain-after-sirik-attack-3232293?s=1",
   "via": "lokal"
  },
  {
   "c": "pak",
   "t": "gefecht",
   "d": "2026-11-11",
   "coords": [
    71.1667,
    33.3333
   ],
   "title": "Insurgentenambush in Kohat District",
   "txt": "Zehn Polizeibeamte, darunter zwei Oberbeamte, werden bei einem Gefecht getötet, nachdem Insurgenten Polizeifahrzeuge in der Kohat District, Khyber Pakhtunkhwa, Pakistan, angegriffen haben.",
   "cas": "10 Tote",
   "src": "https://apnews.com/article/pakistan-militants-attack-kohat-afghanistan-police-ttp-260c8876601c767a4111b17fa9dd255c",
   "via": "lokal"
  },
  {
   "c": "gaza",
   "t": "luft",
   "d": "2026-11-11",
   "coords": [
    34.3031,
    31.3444
   ],
   "title": "Airstrike in Khan Younis",
   "txt": "Israel startet Luftangriffe auf das Nasser-Medizinzentrum in Khan Younis, tötet sechs Palästinenser, darunter einen Chirurgen, und verletzt weitere 20 Menschen. Zwei weitere Tote in anderen Angriffen im Gazastreifen.",
   "cas": "6 Tote, 20 Verletzte",
   "src": "https://www.aljazeera.com/news/2026/11/11/israeli-strikes-hit-tent-camp-as-five-killed-in-gaza",
   "via": "lokal"
  },
  {
   "c": "drc",
   "t": "anschlag",
   "d": "2026-11-11",
   "coords": [
    29.5,
    1.8333
   ],
   "title": "Anschlag in Mambasa",
   "txt": "Islamic State-zugehörige Rebellen Allied Democratic Forces töteten mindestens 22 Menschen in acht Orten im Territorium Mambasa, Provinz Ituri, Demokratische Republik Kongo.",
   "cas": "22 Tote",
   "src": "https://apnews.com/article/congo-islamic-state-group-mambasa-attack-kidnapping-c1c568db3a670679818aa426cf28fc80",
   "via": "lokal"
  },
  {
   "c": "kas",
   "t": "anschlag",
   "d": "2026-11-11",
   "coords": [
    75.02,
    33.64
   ],
   "title": "Anschlag in Jammu und Kashmir",
   "txt": "Drei Polizisten der Central Reserve Police Force werden verletzt, als Terroristen auf einem Kontrollpunkt in Mir Bazar, Kulgam, Jammu und Kashmir, Indien, schiessen. Sicherheitskräfte starten eine Suchaktion, um die Angreifer zu finden.",
   "cas": "3 Verletzte",
   "src": "https://gulfnews.com/world/asia/india/india-terrorists-attack-crpf-personnel-in-jk-3-hurt-1.500743618",
   "via": "lokal"
  },
  {
   "c": "ebola",
   "t": "epidemie",
   "d": "2026-11-11",
   "coords": [
    36.8172,
    -1.2864
   ],
   "title": "Kenia Ebola-Fall abgeschlossen",
   "txt": "Die kenianische Gesundheitsministerin meldet, dass der letzte Ebola-Fall in Nairobi aus dem Krankenhaus entlassen wurde. Falls bis zum 23. Dezember niemand weitere Symptome zeigt, wird Kenia Ebola-frei erklärt.",
   "cas": "0 Tote, 11 Kontaktfälle",
   "src": "https://www.dw.com/en/kenya-ebola-free-patient-leaves-hospital/a-79921240",
   "via": "lokal"
  },
  {
   "c": "drc",
   "t": "gefecht",
   "d": "2026-11-10",
   "coords": [
    29,
    -0.6
   ],
   "title": "Verurteilungen in Goma",
   "txt": "Im Militärgericht in Goma, Nord-Kivu, Demokratische Republik Kongo, werden 66 Soldaten wegen Mangel an Mut, Mordverschwörung und Verweigerung der Befehle zum Tode verurteilt. Sie wurden nach Kämpfen mit Rebellen der Front für die Wiedergeburt des Volkes verhaftet.",
   "cas": "66 Tote",
   "src": "https://www.dw.com/en/dr-congo-66-soldiers-sentenced-to-death-for-cowardice-in-conflict-with-frn-rebels/a-79906794",
   "via": "lokal"
  },
  {
   "c": "som",
   "t": "anschlag",
   "d": "2026-11-10",
   "coords": [
    40.6667,
    3.4167
   ],
   "title": "Anschlag in Kenia",
   "txt": "Mindestens acht Menschen, darunter zwei Polizeireservisten, werden von verdächtigen al-Shabaab-Militanten in Mandera County, Kenia, getötet, nahe der Grenze zu Somaliland.",
   "cas": "8 Tote",
   "src": "https://aa.com.tr/en/africa/suspected-al-shabaab-militants-kill-8-in-northeastern-kenya-ambush/4119429",
   "via": "lokal"
  },
  {
   "c": "blacksea",
   "t": "anschlag",
   "d": "2026-11-09",
   "coords": [
    19.9371,
    50.0615
   ],
   "title": "Mann im Krakauer Marktplatz erschossen",
   "txt": "Ein 24-jähriger Mann, der am Marktplatz in Krakau, Polen, vor zwei Tagen einen durchfahrenden Mordanschlag verübte, der sechs Menschen tötete und 16 verletzte, stirbt im Krankenhaus nach einem Schiessduell mit der Polizei.",
   "cas": "6 Tote, 16 Verletzte",
   "src": "https://www.aljazeera.com/news/2026/11/9/poland-mass-shooting-assailant-dies-in-hospital-police-say",
   "via": "lokal"
  },
  {
   "c": "yem",
   "t": "abfang",
   "d": "2026-11-08",
   "coords": [
    46.715,
    24.6383
   ],
   "title": "Missile in Riad abgefangen",
   "txt": "Ein Huthi-Raketenangriff auf die Stadt Riad in Saudi-Arabien wurde von der Luftverteidigung des Landes abgefangen. Mehrere Stockwerke des Aramco-Towers in der King Abdullah Finanzdistrikte sind beschädigt, aber keine Todesopfer oder Verletzten wurden gemeldet.",
   "cas": "",
   "src": "https://www.aljazeera.com/news/2026/11/8/saudi-arabia-intercepts-houthi-missiles-targeting-riyadh-eastern-province",
   "via": "lokal"
  },
  {
   "c": "sdn",
   "t": "abfang",
   "d": "2026-11-07",
   "coords": [
    28.15,
    12
   ],
   "title": "SAF recaptieren Iyal Bakhit",
   "txt": "Die sudanesischen Streitkräfte (SAF) haben die West-Kordofan-Stadt Iyal Bakhit zurückgewonnen. Zudem haben sie eine Drohne der RSF-Miliz abgeschossen.",
   "cas": "",
   "src": "https://sudantribune.com/article/320981",
   "via": "lokal"
  },
  {
   "c": "blacksea",
   "t": "anschlag",
   "d": "2026-11-07",
   "coords": [
    21.4,
    50.9333
   ],
   "title": "Massenschuss in Kraków",
   "txt": "Sechs Menschen wurden bei einem Drive-by-Massenschuss im Zentrum von Kraków, Polen, getötet. Der Täter, der auch seine Eltern und seine Schwester in Ostrowiec Świętokrzyski getötet hatte, wurde von der Polizei verletzt und festgenommen.",
   "cas": "6 Tot, 15 Verletzt",
   "src": "https://www.reuters.com/world/europe/two-kiled-least-10-injured-shooting-polish-city-krakow-tvn24-reports-2026-11-07/",
   "via": "lokal"
  },
  {
   "c": "yem",
   "t": "luft",
   "d": "2026-11-07",
   "coords": [
    44.2,
    15.35
   ],
   "title": "Saudi-Airstrike in Sanaa",
   "txt": "Saudi-Airstrikes trafen Häuser in der Nähe von Sanaa, Jemen, und töteten mindestens 27 Menschen, verletzten 36 weitere.",
   "cas": "27 Tot, 36 Verletzt",
   "src": "https://apnews.com/article/yemen-houthi-saudi-attacks-1b5aef5b86be2e96e1cd8a18165afaf6",
   "via": "lokal"
  },
  {
   "c": "col",
   "t": "drohne",
   "d": "2026-11-07",
   "coords": [
    -75.5,
    10.4
   ],
   "title": "Drohneangriff in Santa Rosa del Sur",
   "txt": "Ein von unbekannter Quelle gestarteter Drohneangriff traf eine Militärbasis in Santa Rosa del Sur, Bolívar-Department, Kolumbien, und tötete drei Menschen, verletzte 16 weitere.",
   "cas": "",
   "src": "https://apnews.com/article/colombia-drone-attack-military-base-7eb8bd82e98900f790b6d4e35eb702ec",
   "via": "lokal"
  },
  {
   "c": "nga",
   "t": "gefecht",
   "d": "2026-11-07",
   "coords": [
    6.25,
    12.1667
   ],
   "title": "Arsonattentat in Maradun",
   "txt": "Ein Angriff mit Arson tötet ein Familienmitglied von zwölf in Maradun, Zamfara State, Nigeria. Sieben weitere Menschen werden entführt.",
   "cas": "12 Tot, 7 Entführte",
   "src": "https://www.nigeriainfo.fm/news/homepageabuja/bandits-kill-12-family-members-in-zamfara-abduct-residents/",
   "via": "lokal"
  },
  {
   "c": "drc",
   "t": "anschlag",
   "d": "2026-11-06",
   "coords": [
    29,
    -0.6
   ],
   "title": "Angriff in Nord-Kivu",
   "txt": "Ein Angriff gestern durch verdächtigte Angehörige der Alliierten Demokratischen Forces auf mehrere Dörfer in Nord-Kivu, Ost-Konstantinopel, hat 33 Tote verursacht.",
   "cas": "33 Tote",
   "src": "https://www.aa.com.tr/en/africa/death-toll-from-adf-attack-in-dr-congo-rises-to-33/4114820",
   "via": "lokal"
  },
  {
   "c": "yem",
   "t": "luft",
   "d": "2026-11-06",
   "coords": [
    44.0167,
    13.5667
   ],
   "title": "Flughafen Riad getroffen",
   "txt": "Saudi-Arabien startet einen Luftangriff auf einen Markt im Taiz-Gouvernement, Jemen, bei dem 30 Menschen getötet und acht weitere verletzt werden.",
   "cas": "30 Tote, 8 Verletzte",
   "src": "https://apnews.com/article/yemen-airstrikes-market-houthis-bcc2409ada0398125173d84261bd1fff",
   "via": "lokal"
  },
  {
   "c": "mex",
   "t": "anschlag",
   "d": "2026-11-06",
   "coords": [
    -107.5,
    25
   ],
   "title": "Anschlag in Navolato",
   "txt": "Drei Angreifer wurden bei einem Konflikt mit den Behörden in der Ejido Las Trancas, Navolato, Sinaloa, Mexiko, getötet.",
   "cas": "",
   "src": "https://www.eluniversal.com.mx/estados/enfrentamiento-deja-tres-civiles-armados-muertos-en-navolato-sinaloa-aseguran-un-vehiculo-armas-cargadores-y-equipo-tactico/",
   "via": "lokal"
  }
 ],
 "news": [
  {
   "tag": "POLEN",
   "c": "ukr",
   "text": "Luftangriff in Polen"
  },
  {
   "tag": "POLEN",
   "c": "ukr",
   "text": "Russischer Cruise-Missile-Angriff in Polen"
  },
  {
   "tag": "IRAN",
   "c": "irn",
   "text": "Feuer auf Ölfrachter im Strahl von Hormus"
  },
  {
   "tag": "LIBANON",
   "c": "irn",
   "text": "Luftangriff auf Huthi-Untergrundbasis in Libanon"
  },
  {
   "tag": "SAUDI-ARABIEN",
   "c": "yem",
   "text": "Huthi-Raketen in Riad"
  },
  {
   "tag": "WELT",
   "c": "yem",
   "text": "Regierungstruppen in Taiz"
  },
  {
   "tag": "PALÄSTINA",
   "c": "gaza",
   "text": "Gaza: Tote durch israelische Angriffe"
  },
  {
   "tag": "EL SALVADOR",
   "c": "hti",
   "text": "Salvadoranische Streitkräfte zerstören Häuser in Haiti"
  },
  {
   "tag": "ISRAEL",
   "c": "gaza",
   "text": "Israels erste Operation in Gaza"
  },
  {
   "tag": "WELT",
   "c": "mex",
   "text": "Operation gegen Kartele in Zapopan, Mexiko"
  },
  {
   "tag": "INDIEN",
   "c": "kas",
   "text": "Militanter Kommandeur getötet in Kullgam, Indisch verwalteter Jammu und Kashmir"
  },
  {
   "tag": "INDIEN",
   "c": "kas",
   "text": "Militanter Kommandeur getötet in Kullgam, Indien"
  },
  {
   "tag": "HAITI",
   "c": "hti",
   "text": "Haitianer in Port-au-Prince"
  },
  {
   "tag": "KOLUMBIEN",
   "c": "mex",
   "text": "US-Verteidigungsminister in Kolumbien"
  }
 ],
 "countries": {
  "POL": {
   "now": [
    "20.11.: Ein russischer Kh-101-Kreuzermissil traf einen Feld bei Nowy Lipowiec im Lublin-Voivodship, Polen, etwa 60 Meilen südöstlich eines US-Allianz-Trainings. Luftalarmwarnungen wurden in Lublin und Podkarpackie-Voivodship ausgelöst.",
    "20.11.: Ein russischer Kh-101-Kreuzermissile traf einen Feld in der Nähe des Dorfes Nowy Lipowiec im Lublin-Voivodship in Polen, etwa 60 Meilen südlich einer Ausbildungsaufgabe der Coalition of the Willing. Luftalarmwarnungen wurden in Lublin und dem Podkarpackie-Voivodship ausgelöst.",
    "11.11.: Der polnische Präsident Karol Nawrocki und mindestens 500'000 Menschen nehmen am jährlichen patriotischen Marsch zum Nationalen Unabhängigkeitstag in Warschau teil.",
    "9.11.: Ein 24-jähriger Mann, der vor zwei Tagen im Hauptplatz von Krakau in Polen einen Schusswechsel mit der Polizei begonnen hat, starb im Krankenhaus."
   ]
  },
  "IRN": {
   "now": [
    "19.11.: Irans Marine meldet, dass ein Ölfrachter in der Nähe des Strahl von Hormus Feuer gefangen hat, nachdem er eine Seemine getroffen hatte.",
    "17.11.: Das Militär von Bahrain blockiert mehrere Drohnen, die vom iranischen Revolutionsgarden (IRGC) aus in Richtung Sheikh Isa Flugland geschossen wurden.",
    "16.11.: Bahrain verurteilt 64 Shia, hauptsächlich Geistliche, zu Leben inhaft für die Gründung eines terroristischen Netzwerks, das mit Irans Revolutionsgarden verbunden ist.",
    "15.11.: Die iranische Revolutionsgarden melden, dass ein Supertanker mit zwei Millionen Barren Öl in der Strasse von Hormuz versenkt wurde, nachdem er eine Mine getroffen hat."
   ]
  },
  "LBN": {
   "now": [
    "19.11.: Die israelische Luftwaffe hat eine Huthi-Untergrundbasis im Bekaa-Tal in Libanon getroffen."
   ]
  },
  "ISR": {
   "now": [
    "19.11.: Zwei israelische Drohnen explodieren in Nabatieh, Lebanon, verursachen jedoch keine Verletzten.",
    "18.11.: Die israelische Armee startet ihre erste Operation im zentralen Gazastreifen, während Familien aus der Region vertrieben werden, zum ersten Mal seit dem Inkrafttreten des Waffenruhesvertrages im Oktober 2025.",
    "15.11.: Die israelische Armee meldet den Tod des Rafah-Brigadekommandeurs Samir Abu Younis der Al-Qassam-Brigade in einem Luftangriff im südlichen Gazastreifen, was von Hamas bestätigt wird.",
    "15.11.: In der Gazastreifen werden Palästinenser getötet und andere verletzt durch Schiessereien und Artillerieschüsse der israelischen Truppen. Dies ist eine Verletzung des Waffenruhesabkommens, das im Oktober 2025 unterzeichnet wurde."
   ]
  },
  "SAU": {
   "now": [
    "19.11.: Die Huthi kämpfen schiessen Raketen auf den King Abdullah Finanzdistrikt in Riad, Saudi-Arabien, was Gebäude beschädigt, verursacht aber keine Verletzten.",
    "19.11.: Die Joint Organisations Data Initiative meldet, dass die Ölexporte Saudi-Arabiens im September 2026 zu ihrem höchsten Niveau seit dem Beginn des Krieges im Februar aufgenommen wurden, trotz der Angriffe der Huthi auf Hafen- und Infrastrukturanlagen im Rotes Meer.",
    "8.11.: Ein Huthi-Raketenangriff auf die Stadt Riad in Saudi-Arabien wurde von der Luftverteidigung des Landes abgefangen. Mehrere Stockwerke des Aramco-Towers in der King Abdullah Finanzdistrikte sind beschädigt, aber keine Todesopfer oder Verletzten wurden gemeldet.",
    "8.11.: Ein Huthi-Raketenangriff über dem Saudi-Arabischen Stadtteil Riyadh trifft mehrere Stockwerke des Aramco-Turms, der von Saudi Aramco besessen wird. Es wurden keine Tote oder Verletzten gemeldet."
   ]
  },
  "YEM": {
   "now": [
    "19.11.: Die Huthi behaupten, dass die von Saudi-Arabien geführte Kriegspartei in den letzten beiden Tagen in Sanaa, Jemen, 10 Menschen getötet haben.",
    "7.11.: Saudi-Airstrikes trafen Häuser in der Nähe von Sanaa, Jemen, und töteten mindestens 27 Menschen, verletzten 36 weitere.",
    "6.11.: Saudi-Arabien startet einen Luftangriff auf einen Markt im Taiz-Gouvernement, Jemen, bei dem 30 Menschen getötet und acht weitere verletzt werden."
   ]
  },
  "PSX": {
   "now": [
    "19.11.: Die Gesundheitsministerin von Gaza meldet, dass in den letzten 24 Stunden durch israelische Angriffe zwei Menschen getötet und zwei weitere an ihren Verletzungen gestorben sind.",
    "18.11.: Die israelische Armee startet ihre erste Operation im zentralen Gazastreifen, während Familien aus der Region vertrieben werden, zum ersten Mal seit dem Inkrafttreten des Waffenruhesvertrages im Oktober 2025.",
    "17.11.: Fünf Palästinenser, darunter ein Kind, sterben und andere werden verletzt, als Israëler in verschiedenen Teilen des Gazastreifens Luftangriffe starten. Es handelt sich um einen weiteren Angriff während des Gazakrieges.",
    "17.11.: Ein 72-jähriger Palästinenserweiblicher wird getötet und zehn weitere verletzt, als Settler in der westjordanlandischen Dorfgemeinde Ein ad-Duyuk westlich von Jericho Palästinenserhäuser angriffen."
   ]
  },
  "BGD": {
   "now": [
    "19.11.: In Gopalganj District, Bangladesch, plündern und brennen Angehörige des verbotenen Awami League mehrere Eigentumsrechte, darunter das Heim des BNP-Abgeordneten Md. Selimuzzaman Mollah, eine Polizeestation und einen Grameen Bank Zweig. Einzelne Angriffe zerschneiden die Häuser von ehemaligen Politikern in verschiedenen Bezirken.",
    "19.11.: Die Grenztruppen von Bangladesch verstärken ihre Präsenz in sieben Bezirken mit 97 Platoon und halten fünf weitere in Bereitschaft, während der politischen Gewalt und der Arbeitskämpfe weiterhin andauern.",
    "19.11.: In Bangladesh bleiben 341 Textilfabriken geschlossen, während Polizei in Ashulia Tornasgas und Stun-Grenaden einsetzt, um Demonstranten zu vertreiben und Blockaden auf der Dhaka–Mymensingh-Highway in Gazipur zu beseitigen. Mitglieder der Senatorenpartei nehmen Positionen entlang der Strasse ein, während die Sicherheitskräfte im Gefängnis von Kashimpur verstärkt patrouillieren.",
    "18.11.: Tausende von Textilarbeitern in Gazipur, Savar und Ashulia, Bangladesch, fordern eine Mindestlöhnerhöhung von ৳12'500 (US$100) auf ৳30'000 ($240) und blockieren die Dhaka–Mymensingh-Hochstrasse, während 55 Fabriken schliessen. Polizei schiesst Tränengas und Stun-Grenaden ab, es werden etwa 300 Menschen verhaftet."
   ]
  },
  "SEN": {
   "now": [
    "19.11.: Der Präsident von Senegal, Bassirou Diomaye Faye, verordnet das überarbeitete 2026-Budget durch Dekret, nachdem das Parlament es abgelehnt hatte. Er plant, damit einen Kreditprogramm von 2,2 Milliarden US-Dollar bei der Internationalen Währungsorganisation zu verhandeln, um die Staatsverschuldung zu bekämpfen.",
    "17.11.: Ein kleines Boot mit etwa hundert Menschen, hauptsächlich Migranten, kenterte vor Yenne, Senegal. Verschiedene Quellen berichten, dass entweder mindestens vier oder weniger Leichen gefunden wurden, da mehrere andere noch immer fehlen. Die Behörden starteten Suchaktionen.",
    "8.11.: Mindestens 34 Menschen sterben, als ein Boot, das Migranten transportiert, vor der Küste von Kébémer, Louga, Senegal, umkippt.",
    "8.11.: Die Zahl der Toten bei der Schiffsuntergang vor der Küste von Kébémer, Louga, Senegal, steigt auf 39 Personen."
   ]
  },
  "PHL": {
   "now": [
    "19.11.: Die Philippinen und Chile unterzeichnen ein Freihandelsabkommen während des 33. APEC-Wirtschaftskonferenz-Gipfels in Shenzhen, China. Dies ist das erste solche Abkommen der Philippinen mit einem lateinamerikanischen Land.",
    "15.11.: Australien und die Philippinen haben in Manila ein Abkommen zur Verteidigungskooperation unterzeichnet, das die Verfahren für gemeinsame Militämanöver vereinfacht und die Maritimüberwachung, die Informationensteilung, die Ausbildung und die Katastrophenhilfe erweitert.",
    "15.11.: Die philippinische Polizei hat während einer nationalen Protestbewegung gegen den möglichen Vertrag mit den USA, der mit dem 49. ASEAN-Gipfel zusammenfällt, mindestens 287 Menschen verhaftet. Zudem meldeten die Polizei, dass 15 Polizisten während der Demonstrationen verletzt wurden.",
    "14.11.: Der kanadische Premierminister Mark Carney verkündet, dass die Verhandlungen für ein freihandelsabgeschlossenes Abkommen (FTA) mit den Philippinen abgeschlossen wurden, mit der Erwartung, dass das Abkommen 2027 unterzeichnet werden soll. Es würde über 90% der Zollkategorien beseitigen."
   ]
  },
  "CHL": {
   "now": [
    "19.11.: Die Philippinen und Chile unterzeichnen ein Freihandelsabkommen während des 33. APEC-Wirtschaftskonferenz-Gipfels in Shenzhen, China. Dies ist das erste solche Abkommen der Philippinen mit einem lateinamerikanischen Land.",
    "7.11.: Mindestens 12 Menschen, hauptsächlich Buspassagiere, sterben und 13 weitere werden verletzt, als mehrere Fahrzeuge in der Nähe von Atalaya, Region Valparaíso, Chile, in einen Unfall verwickelt werden."
   ]
  },
  "RUS": {
   "now": [
    "19.11.: Bei der APEC-Summit in Shenzhen treffen chinesischer Staatspräsident Xi Jinping, russischer Präsident Vladimir Putin und amerikanischer Präsident Donald Trump zum ersten Mal trilaterale Verhandlungen und erlassen eine gemeinsame Erklärung zu Nuklearkriegen, Erdölproduktion und Reformen der Vereinten Nationen.",
    "18.11.: Die ukrainische Armee bombardiert zum dritten Mal in vier Tagen die Brücke, die Taman in Russland mit der russisch besetzten Kerch in Krim verbindet. Russische Behörden schliessen die Brücke für alle Verkehrsmittel.",
    "17.11.: Die Krim-Brücke wird erneut von ukrainischen Drohnen getroffen, was die russischen Behörden zur Wiederholung der Schliessung der Fahrtrichtung führt. Offenlegung: Eine Strecke der Brücke ist gestern zusammengebrochen.",
    "17.11.: Ein russisches Flugzeug Antonov An-12 der Luftwaffe stürzte nördlich von Kemerovo, Russland, ab und führte zu dem Tod aller 17 Personen an Bord."
   ]
  },
  "USA": {
   "now": [
    "19.11.: Bei der APEC-Summit in Shenzhen treffen chinesischer Staatspräsident Xi Jinping, russischer Präsident Vladimir Putin und amerikanischer Präsident Donald Trump zum ersten Mal trilaterale Verhandlungen und erlassen eine gemeinsame Erklärung zu Nuklearkriegen, Erdölproduktion und Reformen der Vereinten Nationen.",
    "18.11.: Der US-Verteidigungsminister Pete Hegseth und die provisorische venezolanische Präsidentin Delcy Rodríguez unterzeichnen eine militärische Zusammenarbeit, die gemeinsame Ausbildung und die Austausch von Informationen zwischen den US- und venezolanischen Streitkräften umfasst.",
    "17.11.: Die US-Luftwaffe führt eine Reihe von mindestens sechs Angriffen auf Qeshm-Insel durch, während der iranische Revolutionsgarden (IRGC) eine General Atomics MQ-9 Reaper Drohne südlich der Insel abstellt.",
    "17.11.: Die US-Luftwaffe hat eine Reihe von mindestens sechs Angriffen auf Qeshm-Insel durchgeführt. Die IRGC berichtet, dass sie südlich der Insel eine General Atomics MQ-9 Reaper Drohne abgeschossen haben."
   ]
  },
  "PAK": {
   "now": [
    "19.11.: Pakistan und Qatar haben eine Vereinbarung über die Zusammenarbeit zwischen ihren Federal Constabulary und Internal Security Force unterzeichnet.",
    "12.11.: Ein Passagierwagen fällt von der Strasse ab in Gilgit-Baltistan, Pakistan, und tötet elf Menschen, verletzt drei weitere.",
    "11.11.: Zehn Polizeibeamte, darunter zwei Oberbeamte, werden bei einem Gefecht getötet, nachdem Insurgenten Polizeifahrzeuge in der Kohat District, Khyber Pakhtunkhwa, Pakistan, angegriffen haben.",
    "11.11.: Die türkische Taliban greift Polizeipersonal in der Kohat District im Khyber Pakhtunkhwa, Pakistan, mit einem Anschlag an und tötet zehn Beamte. In der anschliessenden Schiesserei sterben auch 18 Angreifer."
   ]
  },
  "QAT": {
   "now": [
    "19.11.: Pakistan und Qatar haben eine Vereinbarung über die Zusammenarbeit zwischen ihren Federal Constabulary und Internal Security Force unterzeichnet.",
    "13.11.: Katar und Turkey unterzeichnen ein Verteidigungsabkommen in Istanbul."
   ]
  },
  "SOM": {
   "now": [
    "19.11.: Somalia entbietet die Botschafterin der Vereinigten Arabischen Emirate, da diese das Landes Souveränität gefährdet habe.",
    "16.11.: Das US-Aussendepartment entscheidet sich, die Finanzierung des UN-Support-Offices für Somalia zu beibehalten und unterstützt eine Verlängerung seines Mandats sowie des militärischen Auftrags der afrikanischen Union gegen Al-Shabaab um ein Jahr.",
    "15.11.: Die Afrikanische Union-Sondermission in Somalia überträgt die Kontrolle von fünf Basen in Barawe, Lower Shabelle, an die somalischen Streitkräfte.",
    "10.11.: Mindestens acht Menschen, darunter zwei Polizeireservisten, werden von verdächtigen al-Shabaab-Militanten in Mandera County, Kenia, getötet, nahe der Grenze zu Somaliland."
   ]
  },
  "ARE": {
   "now": [
    "19.11.: Somalia entbietet die Botschafterin der Vereinigten Arabischen Emirate, da diese das Landes Souveränität gefährdet habe.",
    "12.11.: Vierzehn Menschen sterben und weitere dreissig werden verletzt, als 18 Autos und fünf Lastwagen in einem Mehrfachunfall im Emirat Fujairah, Vereinigte Arabische Emirate, zusammenstossen."
   ]
  },
  "MMR": {
   "now": [
    "19.11.: Das International Court of Justice hat festgestellt, dass Myanmar einen Genozid an den Rohingya begehen soll."
   ]
  },
  "SLV": {
   "now": [
    "19.11.: Der amtierende Präsident von El Salvador, Nayib Bukele, präsentiert seine Präsidentschaftskandidatur beim Supreme Electoral Court, um sich für die Wahlen 2027 zu registrieren. Er bewirbt sich um einen dritten Präsidentschaftswahlkampf, der sechs Jahre andauern wird.",
    "18.11.: Die Salvadoranische Streitkräfte zerstören ein Haus, das dem Anführer der Taliban-Organisation Jeff Larose gehört, in Canaan, Haiti. Die Gang Suppression Force erklärt, dass sie nicht beteiligt war.",
    "17.11.: Hunderte Haitianer marschieren in Städten des Landes, um die Bereitstellung von Salvadoraner Truppen zur Bekämpfung von Gangkriminalität zu unterstützen.",
    "12.11.: Haitianische und salvadoranische Soldaten übernehmen die Kontrolle des Stadions Sylvio Cator in Port-au-Prince, nachdem zwei Jahre lang Gangs das Gelände kontrolliert haben."
   ]
  },
  "MNG": {
   "now": [
    "19.11.: Der Staatsrat Great Khural nimmt die Rücktrittsanträge des mongolischen Präsidenten Ukhnaagiin Khürelsükh an. Der Vorsitzende des Kammernchambers, Sandagiin Byambatsogt, übernimmt die Amtsführung bis zur Wiederwahl innerhalb von vier Monaten.",
    "17.11.: Der mongolische Präsident Ukhnaagiin Khürelsükh hat seine Amtsenthebung erklärt, drei Tage nachdem der ehemalige Bürgermeister von Ulaanbaatar, Khishgeegiin Nyambaatar, ihn wegen vergangener Ermittlungen an einem Bahnhofsbauprojekt während seiner Amtszeit als Premierminister beschuldigt hat. Die Grosse Nationalversammlung muss die Entlassung anerkennen, damit sie wirksam wird."
   ]
  },
  "IND": {
   "now": [
    "18.11.: Ein militärischer Kommandeur der indischen Streitkräfte wurde in einem Mosque in der Distrikthauptstadt Kullgam, indisch verwalteter Jammu und Kashmir, getötet. Er war zwei Tage zuvor in einem Nachbardorf entkommen, wo sein Assistent getötet wurde.",
    "18.11.: Ein militärischer Kommandeur der indischen Streitkräfte wurde in einem Mosque in Kullgam district getötet, nachdem er zwei Tage zuvor in einem Nachbardorf mit Truppen in einem Schiessduell entkommen war, wo sein Partner getötet wurde.",
    "13.11.: Ein Bus und ein Trucker fahren in Golaghat, Indien, in einen Zusammenstoss. 24 Menschen sterben, 11 werden verletzt.",
    "13.11.: In Golaghat, Indien, kommt es zu einem Bus–LKW-Unfall, bei dem 26 Menschen tödlich verunglückt und 11 weitere verletzt werden."
   ]
  },
  "UKR": {
   "now": [
    "18.11.: Die ukrainische Armee bombardiert zum dritten Mal in vier Tagen die Brücke, die Taman in Russland mit der russisch besetzten Kerch in Krim verbindet. Russische Behörden schliessen die Brücke für alle Verkehrsmittel.",
    "17.11.: Die Krim-Brücke wird erneut von ukrainischen Drohnen getroffen, was die russischen Behörden zur Wiederholung der Schliessung der Fahrtrichtung führt. Offenlegung: Eine Strecke der Brücke ist gestern zusammengebrochen.",
    "12.11.: Ukrainischer Präsident Volodymyr Zelenskyy und US-Sondergesandter Jared Kushner verkünden, dass europäische Vertreter zukünftige Friedensverhandlungen mit Russland begleiten werden, was Russischer Präsident Vladimir Putin zustimmt, während er seine Territorialforderungen beibehält und ausländische Friedenswachtruppen in der Ukraine ablehnt.",
    "10.11.: Eine dritte Runde angetretener Verhandlungen zwischen ukrainischen und russischen Delegationen beginnt in Abu Dhabi, Vereinigte Arabische Emirate, mit dem Fokus auf die humanitäre Auswirkung des Krieges, Kriegsgefangene und Sicherheitsgarantien. Vorher führten amerikanische und ukrainische Teams eine getrennte Sitzung mit Vertretern von Frankreich, Deutschland, Italien, dem Vereinigten Königreich, der EU-Kommission und NATO durch."
   ]
  },
  "HTI": {
   "now": [
    "18.11.: Die Salvadoranische Streitkräfte zerstören ein Haus, das dem Anführer der Taliban-Organisation Jeff Larose gehört, in Canaan, Haiti. Die Gang Suppression Force erklärt, dass sie nicht beteiligt war.",
    "17.11.: Hunderte Haitianer marschieren in Städten des Landes, um die Bereitstellung von Salvadoraner Truppen zur Bekämpfung von Gangkriminalität zu unterstützen.",
    "12.11.: Haitianische und salvadoranische Soldaten übernehmen die Kontrolle des Stadions Sylvio Cator in Port-au-Prince, nachdem zwei Jahre lang Gangs das Gelände kontrolliert haben.",
    "10.11.: El Salvador startet eine gemeinsame Militäroperation mit der haitianischen Polizei gegen den 400 Mawozo Gang. Dabei sterben 20 Menschen, darunter der Führungsansässige Wilson Joseph."
   ]
  },
  "COL": {
   "now": [
    "18.11.: Der US-Verteidigungsminister Pete Hegseth überreicht während einer Besuchsreise in Kolumbien einen Lockheed C-130 Hercules und bespricht mit kolumbianischen Behörden die militärische Zusammenarbeit, insbesondere gegen Drogenkartelle.",
    "14.11.: Ein Bus fährt über den Garzón–Neiva Highway in Kolumbien um und trifft sechs Menschen tödlich und verletzt elf weitere.",
    "14.11.: Vier Arbeiter sterben bei einem Methanexplosionen in einem Bergwerk in Kita, Boyacá, Kolumbien.",
    "11.11.: Zwei Menschen wurden verhaftet, weil sie mit einem Explosivangriff auf das Hauptquartier der kolumbianischen Senderfirma RCN Televisión in Kali, Valle del Cauca, in Verbindung gebracht werden."
   ]
  },
  "BHR": {
   "now": [
    "17.11.: Das Militär von Bahrain blockiert mehrere Drohnen, die vom iranischen Revolutionsgarden (IRGC) aus in Richtung Sheikh Isa Flugland geschossen wurden.",
    "16.11.: Bahrain verurteilt 64 Shia, hauptsächlich Geistliche, zu Leben inhaft für die Gründung eines terroristischen Netzwerks, das mit Irans Revolutionsgarden verbunden ist.",
    "14.11.: Die iranische Armee hat Drohnen und Raketen gegen eine amerikanische Militärbasis in Bahrain abgefeuert, einer der grössten Angriffe auf das Land in Monaten.",
    "14.11.: Die iranische Armee hat Drohnen und Raketen gegen ein US-Militärziel in Bahrain abgefeuert, einer der grössten Angriffe auf das Land in Monaten."
   ]
  },
  "CAN": {
   "now": [
    "17.11.: Die Kanadische Premierministerin Mark Carney und der chinesische Führer Xi Jinping vereinbaren nach den APEC-Gesprächen in Shenzhen weitere Zollsenkungen. China senkt Zölle auf 400 Millionen Kanadawährung (1,8 Milliarden Yuan) der kanadischen Exporte, während Kanada Zölle für chinesischen Stahl und Aluminium reduziert.",
    "14.11.: Der kanadische Premierminister Mark Carney verkündet, dass die Verhandlungen für ein freihandelsabgeschlossenes Abkommen (FTA) mit den Philippinen abgeschlossen wurden, mit der Erwartung, dass das Abkommen 2027 unterzeichnet werden soll. Es würde über 90% der Zollkategorien beseitigen.",
    "10.11.: Die British Columbia Conservation Officer Service tötete eine weibliche Grizzlybärin und ihre drei Jungen, nachdem DNA-Evidenz bestätigte, dass die Bären eine Mutter und ihre Tochter in der Nähe von Bella Coola getötet hatten, Kanada.",
    "10.11.: Die British Columbia Conservation Officer Service tötet eine weibliche Grizzlybärin und ihre drei Jungen in Bella Coola, British Columbia, nach DNA-Erkenntnissen, die den Bären für den Mord an zwei Menschen verantwortlich machen."
   ]
  },
  "CHN": {
   "now": [
    "17.11.: Die Kanadische Premierministerin Mark Carney und der chinesische Führer Xi Jinping vereinbaren nach den APEC-Gesprächen in Shenzhen weitere Zollsenkungen. China senkt Zölle auf 400 Millionen Kanadawährung (1,8 Milliarden Yuan) der kanadischen Exporte, während Kanada Zölle für chinesischen Stahl und Aluminium reduziert.",
    "12.11.: Jensen Huang tritt als CEO und Präsident von Nvidia zurück und verlässt das Vorstandsmitglied, nachdem Berichte von zwei Affären auftauchten, darunter eine mit einem verdächtigten chinesischen Geheimdienstagenten. Die Finanzchefin Colette Kress übernimmt vorläufig die Leitung.",
    "11.11.: Das deutsche Verteidigungsministerium verkündet, dass die Bundeswehr chinesisch-fertige Drohnen für militärische Ausbildung und Übungen aufgeben und stattdessen deutsche oder andere europäische Modelle einsetzen wird, um Sicherheitsbesorgnisse zu adressieren.",
    "11.11.: Deutschland verkündet, dass seine Militärtrainer und Übungen in Zukunft keine chinesischen Drohnen mehr verwenden werden, sondern deutsche oder andere europäische Modelle, um Sicherheitsbesorgnisse zu berücksichtigen."
   ]
  },
  "CZE": {
   "now": [
    "17.11.: Vierzig sechs Menschen werden verletzt, als zwei Züge in Prag, Tschechische Republik, zusammenstossen."
   ]
  },
  "BOL": {
   "now": [
    "17.11.: Die Pan American Health Organization entzieht Bolivien, Mexiko und den Vereinigten Staaten die Measles-Eliminationsstatus. Für die USA zitiert die Organisation kontinuierliche inländische Übertragungen über mehr als 12 Monate, während mehr als 5'700 Fälle und mehrere Todesfälle in 2026 gemeldet wurden."
   ]
  },
  "MEX": {
   "now": [
    "17.11.: Die Pan American Health Organization entzieht Bolivien, Mexiko und den Vereinigten Staaten die Measles-Eliminationsstatus. Für die USA zitiert die Organisation kontinuierliche inländische Übertragungen über mehr als 12 Monate, während mehr als 5'700 Fälle und mehrere Todesfälle in 2026 gemeldet wurden.",
    "14.11.: Die mexikanische Regierung führt Strafen und Fines ein, um den missbräuchlichen kommerziellen Einsatz von Regierungslogos, offiziellen Dokumenten und institutionellen Identitäten zu verhindern. Obwohl die Regierung betonte, dass die Reform vor Fraust und Verstellung und nicht vor Satire gerichtet sei, warnten Kritiker, dass der breite Wortlaut die Meinungsfreiheit gefährden könnte, und nannten sie die \"Anti-Meme-Gesetz\".",
    "8.11.: Mexikanische Marinepersonal, zusammen mit Informationen des Nationalen Intelligenzcenters und der US-DEA, verhafteten Rafael Álvarez Ayala, den angeblichen Anführer der Zelle \"Los Rs\" des Jalisco New Generation Kartells, in Zapopan, Jalisco, Mexiko. Er wurde während des Auffalls verletzt und wird wegen schweren Mordes in Michoacán gesucht.",
    "8.11.: Mexikanische Marinebeamte, unterstützt von der Nationalen Intelligenzbehörde und dem US-Drogenzuständigtenamt, verhaften Rafael Álvarez Ayala, den angeblichen Anführer der \"Los Rs\"-Zelle des Jalisco New Generation Kartells, in Zapopan, Jalisco. Er wird verletzt, als er sich wehrt, und wird wegen schweren Mordes in Michoacán gesucht."
   ]
  },
  "FRA": {
   "now": [
    "17.11.: Frankreich und Malaysia schliessen eine strategische Partnerschaft, unterzeichnen Abkommen zur Verteidigung, Energie und Technologie Zusammenarbeit während des Staatsbesuchs von Präsident Emmanuel Macron. Malaysia stimmt zudem zu, unverarbeitete Seltenmetalle für Frankreich zu exportieren, im Austausch für Unterstützung bei der Metallverarbeitung.",
    "11.11.: Russland verbietet den französischen Abgeordneten Arthur Delaporte und Sacha Houlié sowie den Journalisten Ariane Chemin und Paul Gogo, das Land zu betreten, da sie angeblich Xenia Fedorova, die Chefin von RT France, seit 2017 bis 2023 belästigt haben.",
    "6.11.: Ein Bus kollidiert mit einem Baum in Lent, Frankreich, und tötet zwei Menschen, verletzt 16 weitere.",
    "6.11.: Ein Bus kollidiert in Lent, Frankreich, mit einem Baum und fährt ab, was zwei Tote und 16 Verletzte verursacht."
   ]
  },
  "MYS": {
   "now": [
    "17.11.: Frankreich und Malaysia schliessen eine strategische Partnerschaft, unterzeichnen Abkommen zur Verteidigung, Energie und Technologie Zusammenarbeit während des Staatsbesuchs von Präsident Emmanuel Macron. Malaysia stimmt zudem zu, unverarbeitete Seltenmetalle für Frankreich zu exportieren, im Austausch für Unterstützung bei der Metallverarbeitung.",
    "6.11.: Die malaysische Partei UMNO zahlt eine Strafe von 50 Millionen Ringgit (12 Millionen US-Dollar) für den ehemalige Premierminister Najib Razak, der wegen des 1MDB-Skandals verurteilt wurde. Die Staatsanwaltschaft plant, die Übertragung des Verurteilten in Haft im eigenen Haus zu verzögern."
   ]
  },
  "GBR": {
   "now": [
    "17.11.: Der britische Aussenminister Ed Miliband verkündet, dass das Vereinigte Königreich Sanktionen gegen acht Unternehmen verhängen wird, die an der Errichtung von Siedlungen im besetzten Westjordanland beteiligt sind, sowie gegen Tzav 9 wegen seiner Rolle im Blockieren der humanitären Hilfe für den Gazastreifen.",
    "13.11.: Die Metropolitische Polizei in Grossbritannien meldet eine kriminelle Ermittlung gegen den Schauspieler David Walliams wegen angeblicher schwerer sexueller Vergehen. Die Ermittlungen sind unabhängig von denen, die von ITN und The Guardian durchgeführt werden.",
    "12.11.: Ein britischer Gerichtshof verurteilt zwei iranische Männer für das Spionieren von Journalisten einer London-basierten Sender. Ein dritter Angeklagter wird freigesprochen.",
    "10.11.: Die britische Gerichtskommission des Privy Council bestätigt die Rechte der LGBTQ-Community in Trinidad und Tobago, indem sie Bestimmungen, die zwingende Strafbarkeit von erwachsenen, zustimmender gleichgeschlechtlichen sexuellen Handlungen verordnen, für unverfassungsmässig erklärt."
   ]
  },
  "GIN": {
   "now": [
    "17.11.: Ein Gericht in Konakry, Guinee, verurteilt mehr als 1'000 angebliche kleingoldgräber aus der Region Siguiri wegen illegaler Goldgewinnung. 22 ehemalige Regionalverwaltungsbeamte und 202 andere erhalten verschiedene Haftstrafen.",
    "11.11.: Zehn Menschen sterben und 13 weitere werden verletzt, als Polizei und Demonstranten in Balato, Guinee, in Konflikt geraten, nachdem eine Patrouille gegen illegales Goldgewinnung durchgeführt wurde."
   ]
  },
  "MKD": {
   "now": [
    "17.11.: Die mazedonische Agentur für nationale Sicherheit verhaftet fünf mazedonische Staatsbürger, die angeblich an einem Mordanschlag in Griechenland beteiligt waren, darunter Naji Sharifi-Zindashti, der von der US-Federal Bureau of Investigation gesucht wird. Ein sechster Verdächtiger ist noch auf der Flucht."
   ]
  },
  "GRC": {
   "now": [
    "17.11.: Die mazedonische Agentur für nationale Sicherheit verhaftet fünf mazedonische Staatsbürger, die angeblich an einem Mordanschlag in Griechenland beteiligt waren, darunter Naji Sharifi-Zindashti, der von der US-Federal Bureau of Investigation gesucht wird. Ein sechster Verdächtiger ist noch auf der Flucht."
   ]
  },
  "CRI": {
   "now": [
    "17.11.: Der Investigativjournalist Camilo Rodríguez wurde in seinem Fahrzeug in Santo Domingo, Heredia, Costa Rica erschossen. Es ist das erste Mordopfer an einem Journalisten in dem Land in mindestens 25 Jahren."
   ]
  },
  "ITA": {
   "now": [
    "16.11.: Die EU-Kommission und die US-Federal Reserve genehmigen den 45 Milliarden Euro teuren Erwerb der italienischen Bank UniCredit der deutschen Commerzbank. Die EU-Kommission erteilt unbedingte Wettbewerbsfreigabe.",
    "11.11.: In mehr als 300 Schulen in Italien werden nach Drohnenangriffen Schüler und Lehrer evakuiert.",
    "11.11.: In Italien werden mehr als 6'000 Schulen aufgrund von Drohnenangriffen evakuiert.",
    "11.11.: Leonardo Bertulazzi, ein ehemaliger Mitglied der Roten Brigaden, entkam während seiner Haft im Haus in Buenos Aires, Argentinien, und wurde von argentinischen Sicherheitskräften gesucht, da er ausgeliefert werden soll, um eine 27-jährige Haftstrafe für Entführung und Mitgliedschaft in einer bewaffneten Gruppe in Italien zu absolvieren."
   ]
  },
  "THA": {
   "now": [
    "16.11.: Ein Feuer in einem vierstöckigen Gebäude in Patong, Phuket, verursacht 11 Tote und 16 Verletzte.",
    "10.11.: Der thailändische Kabinett beschliesst neue Umweltgesetze für Datenzentren, einschliesslich Lärm- und Temperaturbegrenzungen, Anforderungen zur Wasserrecycling und Prüfung sowie Industriezonen für Anlagen mit einer Energieverbrauch von mehr als 20 Megawatt."
   ]
  },
  "TGO": {
   "now": [
    "16.11.: Der ehemalige Togolese Ministerpräsident Gilbert Houngbo wird zum neuen Direktor der Internationalen Arbeitsorganisation gewählt."
   ]
  },
  "PRY": {
   "now": [
    "16.11.: Ein paraguayischer Gerichtshof befiehlt dem ehemaligen Präsidenten Santiago Peña inhaftierung im Viñas Cué Militärgefängnis, während seines Prozesses wegen Verdachts von Verbrechen der organisierten Kriminalität, Missbrauch von Vertrauen und Missbrauch von Amtsgenüssen im Zusammenhang mit dem Zusammenbruch der Ueno Bank.",
    "11.11.: Die Zentralbank von Paraguay meldet, dass sie 1'812'348 Ueno-Bank-Kreditnehmern teilweise Rückerstattungen gewährt hat, nachdem die Bank zusammengebrochen ist.",
    "9.11.: Der paraguayische Präsident Pedro Alliana ernannte den Wirtschaftsminister Jorge Schreiner zum Leiter der Zentralbank, nachdem der Senat seine Ernennung genehmigt hatte. Dies folgt dem Zusammenbruch der Ueno Bank.",
    "6.11.: Der Paraguayische Senat entthronte Santiago Peña wegen angeblicher Konflikte von Interessen, die mit dem Bankkonzern Ueno Bank zusammenhängen, dessen Konten der Zentralbank eingefroren wurden. Das Parlament verzögert die Berücksichtigung von Peñas Rücktritt, um die Verurteilungsverfahren zu ermöglichen."
   ]
  },
  "ZAF": {
   "now": [
    "16.11.: Neun Menschen sterben bei einem Massenmord in einem Hüttenlager in der Nähe von Pretoria, Südafrika.",
    "16.11.: Acht Menschen werden in einem Wagen in der Msunduzi Local Municipality, KwaZulu-Natal, südafrikanisch, erschossen und getötet."
   ]
  },
  "GMB": {
   "now": [
    "16.11.: Das Gambische Wahlkomitee bestätigt die Kandidatur von Präsident Adama Barrow für eine dritte Amtszeit im Dezemberwahlen, da die Verfassung keine Grenzen für Präsidentenmandate vorsieht."
   ]
  },
  "MDA": {
   "now": [
    "15.11.: Die Gagauzer in Moldawien wählten einen Gouverneur und 35 Mitglieder des Volksausschusses. Dies ist ein Teil der allgemeinen Wahlen in Gagauz.",
    "15.11.: Die Gagauzer in Moldawien wählen einen Gouverneur und 35 Mitglieder des Volksausschusses. Der Abgeordnete Alexandr Stoianoglo und er erreichen den zweiten Wahlgang, nachdem kein Kandidat die Mehrheit der Stimmen erhalten hat."
   ]
  },
  "NGA": {
   "now": [
    "15.11.: In Rabah, Sokoto State, werden drei Menschen getötet und mehrere andere entführt in einem Viehraub.",
    "7.11.: Ein Angriff mit Arson tötet ein Familienmitglied von zwölf in Maradun, Zamfara State, Nigeria. Sieben weitere Menschen werden entführt."
   ]
  },
  "BEL": {
   "now": [
    "15.11.: Ein Verdacht auf Gasexplosion und Feuer bei einem Weihnachtsmarkt verursacht fünf Verletzte, davon drei schwer.",
    "6.11.: König Philipp von Belgien lehnte die Rücktrittsanträge von Bart De Wever ab und forderte ihn auf, mit den Haushaltsverhandlungen fortzufahren."
   ]
  },
  "AUS": {
   "now": [
    "15.11.: Australien und die Philippinen haben in Manila ein Abkommen zur Verteidigungskooperation unterzeichnet, das die Verfahren für gemeinsame Militämanöver vereinfacht und die Maritimüberwachung, die Informationensteilung, die Ausbildung und die Katastrophenhilfe erweitert.",
    "6.11.: Australien schickt ein C-130 Hercules-Flugzeug, ein Cessna Citation-Flugzeug und 20 Personal zur Bekämpfung von Wildfeuern in Ost-Kalimantan, Indonesien."
   ]
  },
  "EST": {
   "now": [
    "15.11.: Estland hat seine drei Grenzübergänge mit Russland ab Dezember 1 schliessen lassen, nachdem acht Verdächtige wegen eines versuchten Brandanschlags auf die Drohnenfabrik Threod Systems festgenommen wurden. Die estnische Geheimdienst zugeschriebene Tat wird Russlands GRU zugeschrieben."
   ]
  },
  "JOR": {
   "now": [
    "15.11.: Die jordanische Staatsicherheitskammer hat drei Männer wegen eines Schiessereins am 23. Oktober in einer griechisch-orthodoxen Kirche im Karak-Gouvernement zum Tode verurteilt, bei dem neun Menschen getötet und 25 Verletzte wurden. Zwei Mitverschwörer erhielten jeweils sechs Jahre Haftstrafe."
   ]
  },
  "SDN": {
   "now": [
    "14.11.: Ahmed Abdallah Bishr, der Generaalchef der Gathering of Sudan Liberation Forces (GSLF), wurde in einem Drohnenangriff auf seinem Haus in Nyala im sudanesischen Südarabischen Dafur getroffen.",
    "14.11.: Ahmed Abdallah Bishr, der allgemeine Chef des Generalstabs der Versammlung der Befreiungssoldaten des Sudan (GSLF), stirbt an den Wunden, die er bei einem Anschlag durch Drohne in seiner Heimatstadt Nyala, Südarabisch, erlitten hat, einen Monat zuvor.",
    "11.11.: Der kenianische Präsident William Ruto unterzeichnet einen Vertrag, der es Sudan ermöglicht, wieder Importe von Tee aus Kenia zu tätigen, nachdem es seit 20 Monaten solche Importe verboten hatte.",
    "8.11.: Der ehemalige National Congress Party Politiker Ahmed Haroun, der vom Internationalen Strafgerichtshof wegen Völkermords im Sudan in der Region Dafur verfolgt wird, wird von der sudanesischen Armee verhaftet."
   ]
  },
  "NLD": {
   "now": [
    "14.11.: Die Slagdijkstermolen in Friesland, Niederlande, brennt nieder.",
    "8.11.: Mehr als 200'000 Menschen marschieren in Amsterdam, Niederlande, gegen das angebliche Genozid Israels im Gazastreifen und die Unterstützung des israelischen Militärs durch die niederländische Regierung."
   ]
  },
  "GTM": {
   "now": [
    "14.11.: Die guatemaläische Armee beginnt, ein Bataillon in die Departements Zacapa, Izabal und Chiquimula zu entsenden, nach einem Angriff am Vortag im Departement Zacapa, der fünf Menschen tötete.",
    "13.11.: Das US-Aussenministerium klassifiziert drei guatemaltekische kriminelle Gruppen als fremde terroristische Organisationen, da sie materielle Unterstützung für mexikanische Drogenkartellen liefern.",
    "6.11.: Der Politiker Julio Portillo und drei Polizisten werden in Rio Hondo, Zacapa Department, Guatemala, von unbekannten Schützen in einem Mordanschlag getötet.",
    "6.11.: Der Politiker Julio Portillo und drei Polizeibeamte werden in Río Hondo, Zacapa Department, Guatemala, von unbekannten Schützen getötet."
   ]
  },
  "SDS": {
   "now": [
    "14.11.: Das südsudanische Wahlkomitee verschiebt die ersten Präsidenten- und Parlamentswahlen seit der Unabhängigkeit 2011 um mehr als drei Monate, von 22. Dezember 2026 auf 11. Februar 2027, aufgrund politischer Spannungen und weiterer Gewalt."
   ]
  },
  "KEN": {
   "now": [
    "13.11.: Sechs Menschen sterben und fünf weitere werden verletzt, nachdem ein noch im Bau befindliches Gebäude in Nairobi, Kenia teilweise zusammenbricht.",
    "13.11.: In Nairobi, Kenia, sterben sechs Menschen und fünf weitere werden verletzt, nachdem ein noch im Bau befindliches Gebäude teilweise einstürzt.",
    "11.11.: Die kenianische Gesundheitsministerin meldet, dass der letzte Ebola-Fall in Nairobi aus dem Krankenhaus entlassen wurde. Falls bis zum 23. Dezember niemand weitere Symptome zeigt, wird Kenia Ebola-frei erklärt.",
    "11.11.: Der kenianische Präsident William Ruto unterzeichnet einen Vertrag, der es Sudan ermöglicht, wieder Importe von Tee aus Kenia zu tätigen, nachdem es seit 20 Monaten solche Importe verboten hatte."
   ]
  },
  "TUR": {
   "now": [
    "13.11.: Katar und Turkey unterzeichnen ein Verteidigungsabkommen in Istanbul.",
    "12.11.: Ein militärischer Helikopter stürzt in Malatya, Türkei, und trifft auf vier Tote.",
    "9.11.: Ein Explosionsschlag bei einer Fabrik in Aliağa, Türkei, fordert 17 Tote und 12 Verletzte.",
    "7.11.: Neun Menschen sterben und fünf weitere werden verletzt, als ein Lastwagen mit einem Minibus in Özalp, Van-Provinz, Türkei, in einen Unfall verwickelt wird."
   ]
  },
  "HUN": {
   "now": [
    "13.11.: Die Ungarische National Asset Recovery and Protection Office ermittelt in einem Korruptionsskandal um Miklós Seszták, ehemaligen Minister für nationale Entwicklung, und beschlagnahmt rund 19,5 Millionen US-Dollar, darunter 5 Milliarden Ft, in verschiedenen Orten des Landes."
   ]
  },
  "NPL": {
   "now": [
    "12.11.: Ein Bus fährt ab in der Bergstrasse von Bhimphedi, Nepal, und trifft auf zehn Tote und fünf Verletzte."
   ]
  },
  "PRT": {
   "now": [
    "11.11.: Portugal schliesst etwa 8'000 Schulen und stoppt nicht notwendige öffentliche Dienstleistungen, da der Sturm Charles sich nähert. Auch der zweite Tag des Web Summit in Lissabon wird abgesagt."
   ]
  },
  "DEU": {
   "now": [
    "11.11.: Das deutsche Verteidigungsministerium verkündet, dass die Bundeswehr chinesisch-fertige Drohnen für militärische Ausbildung und Übungen aufgeben und stattdessen deutsche oder andere europäische Modelle einsetzen wird, um Sicherheitsbesorgnisse zu adressieren.",
    "11.11.: Das deutsche Kabinett billigt einen Entwurf für eine strategische Erdgasreservierung von 24 Terawattheures, was etwa 10% der nationalen Lagervorgänge entspricht, um Erdgasversorgungen in Krisenzeiten zu sichern."
   ]
  },
  "OMN": {
   "now": [
    "11.11.: Iran attackiert Schiffsnavigationsysteme auf der Insel Didamar, Oman. Unbekannter Schaden entstand."
   ]
  },
  "COD": {
   "now": [
    "11.11.: Islamic State-zugehörige Rebellen Allied Democratic Forces töteten mindestens 22 Menschen in acht Orten im Territorium Mambasa, Provinz Ituri, Demokratische Republik Kongo.",
    "11.11.: In der Demokratischen Republik Kongo übertreffen die bestätigten Ebola-Fälle die 11'000, mit mindestens 5'387 Todesfällen. Acht der 26 Provinzen des Landes sind betroffen.",
    "10.11.: Im Militärgericht in Goma, Nord-Kivu, Demokratische Republik Kongo, werden 66 Soldaten wegen Mangel an Mut, Mordverschwörung und Verweigerung der Befehle zum Tode verurteilt. Sie wurden nach Kämpfen mit Rebellen der Front für die Wiedergeburt des Volkes verhaftet.",
    "10.11.: Ein Militärgericht in Goma, Nord-Kivu, Demokratische Republik Kongo, verurteilt 66 Soldaten zum Tode wegen Mangel an Tapferkeit, Mordversuch und Verweigerung von Befehlen. Sie wurden nach Kämpfen mit Rebellen des Front für die Wiederaufbaunation verhaftet."
   ]
  },
  "ARG": {
   "now": [
    "11.11.: Iran nennt die argentinische Marine- und Luftwaffe terroristische Organisationen, in Reaktion auf Argentiniens Anklage des IRGC im März als terroristische Organisation.",
    "11.11.: Leonardo Bertulazzi, ein ehemaliger Mitglied der Roten Brigaden, entkam während seiner Haft im Haus in Buenos Aires, Argentinien, und wurde von argentinischen Sicherheitskräften gesucht, da er ausgeliefert werden soll, um eine 27-jährige Haftstrafe für Entführung und Mitgliedschaft in einer bewaffneten Gruppe in Italien zu absolvieren."
   ]
  },
  "BRA": {
   "now": [
    "11.11.: Der brasilianische Oberste Wahlgerichtshof verhängt eine Strafe von 7,5 Millionen Reais (1,34 Millionen US-Dollar) gegen Meta Platforms, weil sie nicht den Gerichtsbeschluss zur 2026-Präsidentschaftswahl befolgt hat, während es keine Beweise für bewusste Wahlmischbehandlung findet."
   ]
  },
  "IDN": {
   "now": [
    "11.11.: Der indonesische Vizepräsident Gibran Rakabuming Raka legt sein Amt nieder, während Fragen zu seinen Bildungsqualifikationen aufgeworfen werden. Der Präsident Prabowo Subianto hat die Resignation angenommen, obwohl es noch keine offizielle Bestätigung gibt.",
    "10.11.: Die indonesische Polizei verhaftet 154 Menschen nach Kämpfen mit Protestanten in Yogyakarta, Java. Der Yogyakarta Legal Aid Institute meldet, dass zwei Menschen verletzt und 13 weiterhin fehlenden sind.",
    "6.11.: Australien schickt ein C-130 Hercules-Flugzeug, ein Cessna Citation-Flugzeug und 20 Personal zur Bekämpfung von Wildfeuern in Ost-Kalimantan, Indonesien."
   ]
  },
  "BGR": {
   "now": [
    "10.11.: Ein Mehrfachunfall auf der Autobahnauffahrt Trakia (A1) in Yambol, Bulgarien, führte zu 11 Tote und 48 Verletzten.",
    "10.11.: Zwölf Menschen sterben und mindestens 48 weitere werden verletzt in einem Mehrfach-Unfall mit über 50 Lastwagen und Autos auf der Trakia-Hochstrasse in Yambol, Bulgarien.",
    "10.11.: Ein Mehrfachverkehrsunfall auf der Trakia A1-Motorwegenung bei Jambol, Bulgarien, fordert elf Tote und mindestens 51 schwer verletzte Personen.",
    "10.11.: In einem Unfall mit mehr als 50 Lastwagen und Autos auf der Trakia A1 nahe Jambol, Bulgarien, sterben 12 Menschen und mindestens 46 werden schwer verletzt."
   ]
  },
  "TTO": {
   "now": [
    "10.11.: Die britische Gerichtskommission des Privy Council bestätigt die Rechte der LGBTQ-Community in Trinidad und Tobago, indem sie Bestimmungen, die zwingende Strafbarkeit von erwachsenen, zustimmender gleichgeschlechtlichen sexuellen Handlungen verordnen, für unverfassungsmässig erklärt.",
    "10.11.: Die Gerichtskommission des Privy Council hat kolonialzeitliche Bestimmungen, die zustimmungsfreie sexuelle Handlungen zwischen Erwachsenen gleicher Geschlechter in Trinidad und Tobago strafbar machen, für unverfasslich erklärt, nach einem Rechtsstreit von Aktivist Jason Jones.",
    "9.11.: Mindestens fünf Menschen sind nach dem Kollidieren zweier Boote vor der Küste Trinidad vermisst. Such- und Rettungskräfte der trinidadianschen Küstenschutztruppe sind in Aktion."
   ]
  },
  "VEN": {
   "now": [
    "10.11.: Die venezolanische Nationalversammlung verabschiedet ein Gesetzesreform, die es privaten Unternehmen und Koalitionen erlaubt, im nationalisierten Energiensektor zu investieren, den das Regime seit 2007 kontrolliert.",
    "6.11.: Kolumbien vertriebt 80 venezolanische Staatsbürger, die verdächtigt werden, an kriminellen Taten wie Diebstahl, Drogenhandel und Erpressung beteiligt zu sein.",
    "6.11.: Die kolumbianische Grenzbehörde verjagt 80 venezolanische Staatsbürger, die verdächtigt werden, an kriminellen Taten wie Diebstahl, Drogenhandel und Erpressung beteiligt zu sein."
   ]
  },
  "SGP": {
   "now": [
    "10.11.: Die Währungsbehörde Singaپors startet einen Goldreservendienst für ausländische Zentralbanken, internationale Finanzinstitute und souveräne Entitäten und erweitert Steuerbefreiungen für Grosshandelsgolddienstleistungen."
   ]
  },
  "KHM": {
   "now": [
    "10.11.: Fünf Schulmädchen und 21 weitere Personen sterben, als ein Schulbus in ein Teich in der Provinz Kandal, Kambodscha, stürzt."
   ]
  },
  "ESP": {
   "now": [
    "10.11.: Ein Sprengsatz tötet einen Polizeibeamten und seinen K9-Hund und verletzt einen weiteren Beamten in Oviedo, Asturias, während sie auf einen Schusswechsel reagierten.",
    "8.11.: Die Behörden auf El Hierro in den kanarischen Inseln Spaniens erkläre einen Ausnahmezustand, nachdem in diesem Monat mehr als 3'300 Migranten und Flüchtlinge auf die Insel eingetroffen sind.",
    "8.11.: Die Behörden der Kanarischen Insel El Hierro deklarieren einen Notstand im Anschluss an eine Erhöhung der Ankunft von über 3'300 Migranten und Flüchtlingen auf der Insel im aktuellen Monat."
   ]
  },
  "KOR": {
   "now": [
    "9.11.: Die südkoreanische Wettbewerbskommission verhängt Fines von 331,1 Milliarden South-Koreanischen Won (247 Millionen US-Dollar) für Woowa Brothers und 300,8 Milliarden South-Koreanischen Won (222 Millionen US-Dollar) für Coupang, da diese ihre Lebensmittel-Verkehrsplattformen durch die Verpflichtung von Restaurants, die Wettbewerbsbedingungen der Konkurrenz zu erfüllen, als Wettbewerbsbeschränkung erkannt haben."
   ]
  },
  "CYP": {
   "now": [
    "9.11.: Der cyprische Präsident Nikos Christodoulides und der Präsident der nördlichen Zypern, Tufan Erhürman, vereinbaren die Errichtung von zwei zusätzlichen Übergängen durch die Vereinten Nationen-Sicherheitszone in Zypern und die Durchführung weiterer Friedensverhandlungen."
   ]
  },
  "CYN": {
   "now": [
    "9.11.: Der cyprische Präsident Nikos Christodoulides und der Präsident der nördlichen Zypern, Tufan Erhürman, vereinbaren die Errichtung von zwei zusätzlichen Übergängen durch die Vereinten Nationen-Sicherheitszone in Zypern und die Durchführung weiterer Friedensverhandlungen."
   ]
  },
  "JPN": {
   "now": [
    "8.11.: Ein Erdbeben mit der Stärke 5,7 ereilt das Zentrum Japans, mit dem Epizentrum im Präfektur Shizuoka. Die Regionen Aichi, Gifu, Nagano und Yamanashi werden ebenfalls stark betroffen. 22 Menschen wurden verletzt.",
    "8.11.: Ein Erdbeben mit dem Epizentrum in der Präfektur Shizuoka trifft Japan, wobei auch die Präfekturen Aichi, Gifu, Nagano und Yamanashi betroffen sind. Zumindest 22 Menschen wurden verletzt."
   ]
  },
  "EGY": {
   "now": [
    "8.11.: Ein Zug stürzte bei Giza, Ägypten, in der Nähe des Pyramidenkomplexes, in den Bahnsteig und tötete vier Menschen, verletzten 88 weitere.",
    "8.11.: Ein Zug derrailte in der Nähe von Giza, Ägypten, bei dem sieben Menschen ums Leben kamen und über 100 weitere verletzt wurden.",
    "8.11.: Ein Zug kollidierte in der Nähe von El Ayyat, Giza Governorate, Ägypten, bei sieben Toten und 125 Verletzten."
   ]
  },
  "IRQ": {
   "now": [
    "8.11.: Die Produktion am Gasfeld Khor Mor in der irakischen Kurdestan ist vorübergehend eingestellt worden, nachdem eine Flaschentankanlage durch eine Drohne getroffen wurde. Keine Gruppe hat die Attacke verantwortlicht.",
    "8.11.: In Erbil, Kürdischer Region, Irak, sterben drei Menschen und mehr als 300 andere werden von schweren Überschwemmungen gerettet."
   ]
  },
  "HRV": {
   "now": [
    "8.11.: Ein Bus, der in Richtung Zagreb, Kroatien, unterwegs war, kippt auf der A3 Autobahn. Zumindest zwei Menschen sterben und 20 weitere werden verletzt.",
    "8.11.: Ein Bus, der in Richtung Zagreb fährt, kippt auf der A3 Autobahn in Kroatien, bei dem zwei Menschen getötet und 20 weitere verletzt werden."
   ]
  },
  "MLT": {
   "now": [
    "8.11.: Das maltesische Zivilgericht befiehlt vier Investmentgesellschaften, darunter zwei aus Malta und zwei aus Luxemburg, dem Vatikanbank 24,1 Millionen Euro Schadensersatz zu zahlen, was sich auf einen Deal im Jahr 2013 bezieht, der mit dem Kappa-Fonds in Verbindung steht."
   ]
  },
  "LUX": {
   "now": [
    "8.11.: Das maltesische Zivilgericht befiehlt vier Investmentgesellschaften, darunter zwei aus Malta und zwei aus Luxemburg, dem Vatikanbank 24,1 Millionen Euro Schadensersatz zu zahlen, was sich auf einen Deal im Jahr 2013 bezieht, der mit dem Kappa-Fonds in Verbindung steht."
   ]
  },
  "ATA": {
   "now": [
    "6.11.: Das Staatsrat der Nationalen Volkskonferenz Chinas verabschiedet eine Gesetzgebung zur Regulierung chinesischer Forschungs-, Touristen- und Seereisen in Antarktis, die Umweltschutzmassnahmen, Abfallmanagement und Sicherheitsbedingungen für Genehmigungen vorsieht."
   ]
  },
  "MAC": {
   "now": [
    "6.11.: Au Kam San, ein ehemaliger pro-Demokratie Abgeordneter von Macau, wird in einem geheimen Verfahren wegen Staatsverrats verurteilt und zu 12 Jahren und 6 Monaten Gefängnis verurteilt. Es ist der erste Verurteilungsspruch unter der Macau-National-Sicherheitsgesetz, das im Jahr 2023 erweitert wurde."
   ]
  },
  "TZA": {
   "now": [
    "6.11.: Der Chef der Chadema, Tundu Lissu, wird vom Hochgericht in Tansania wegen Hochverrats freigesprochen, wird aber wegen Erregung zum Aufstand zu vier Jahren Gefängnis verurteilt, die er wegen seiner Aussagen gegen die 2025-Wahlergebnisse abgegeben hat."
   ]
  },
  "COG": {
   "now": [
    "6.11.: Ein Angriff gestern durch verdächtigte Angehörige der Alliierten Demokratischen Forces auf mehrere Dörfer in Nord-Kivu, Ost-Konstantinopel, hat 33 Tote verursacht.",
    "6.11.: Der Todeszahlenbericht über einen Angriff gestern von verdächtigen Rebellen der Allied Democratic Forces auf mehrere Dörfer in Nord-Kivu, Ost-Konstantinopel, steigt auf 33."
   ]
  }
 },
 "swiss": {
  "news": [
   {
    "tag": "BUNDESRAT",
    "text": "Ticket für Bundesratswahl: Wer kommt aufs SVP‑Ticket? Jetzt laufen die Beratungen",
    "src": "https://www.srf.ch/news/schweiz/ticket-fuer-bundesratswahl-wer-kommt-aufs-svp-ticket-jetzt-laufen-die-beratungen"
   },
   {
    "tag": "BUNDESRAT",
    "text": "LIVE-TICKER - Wen nominiert die SVP für den Bundesrat? Jetzt wird gewählt",
    "src": "https://www.nzz.ch/schweiz/wen-nominiert-die-svp-fuer-den-bundesrat-alle-entwicklungen-im-ticker-ld.10069881"
   },
   {
    "tag": "BUNDESRAT",
    "text": "Tag der Entscheidung für die SVP: Wie die Fraktion im Bundeshaus ihre Kandidaten für die Nachfolge von Guy Parmelin kürt",
    "src": "https://www.nzz.ch/schweiz/tag-der-entscheidung-fuer-die-svp-wie-die-fraktion-im-bundeshaus-ihre-kandidaten-fuer-die-nachfolge-von-guy-parmelin-kuert-ld.10069832"
   },
   {
    "tag": "BUNDESRAT",
    "text": "Nachfolge von Guy Parmelin: Die SVP präsentiert ihr Bundesratsticket – die Ausgangslage",
    "src": "https://www.srf.ch/news/schweiz/nachfolge-von-guy-parmelin-die-svp-praesentiert-ihr-bundesratsticket-die-ausgangslage"
   },
   {
    "tag": "WIRTSCHAFT",
    "text": "Landwirtschaft: Die grosse Unsicherheit der PFAS-betroffenen Bauernfamilien",
    "src": "https://www.srf.ch/news/schweiz/landwirtschaft-die-grosse-unsicherheit-der-pfas-betroffenen-bauernfamilien"
   },
   {
    "tag": "ABSTIMMUNG",
    "text": "Zwei Krankenkassenprämien pro Jahr gratis: Linke und Gewerkschaften wollen mit Initiative den Mittelstand entlasten",
    "src": "https://www.nzz.ch/schweiz/zwei-krankenkassenpraemien-pro-jahr-gratis-linke-und-gewerkschaften-wollen-mit-initiative-den-mittelstand-entlasten-ld.10068774"
   },
   {
    "tag": "EU",
    "text": "Die EU fremdelte mit dem Begriff der Bilateralen III. Nun übernimmt sie die Wortwahl: und drängt die Schweiz zur Eile",
    "src": "https://www.nzz.ch/schweiz/die-eu-fremdelte-mit-dem-begriff-der-bilateralen-iii-nun-uebernimmt-sie-die-wortwahl-und-draengt-die-schweiz-zur-eile-ld.10068419"
   },
   {
    "tag": "PARLAMENT",
    "text": "MELDUNGEN SCHWEIZ - Die Grüne Maya Graf verzichtet 2027 auf erneute Ständeratskandidatur",
    "src": "https://www.nzz.ch/schweiz/schweiz-die-neuesten-meldungen-ld.10054175"
   },
   {
    "tag": "PARLAMENT",
    "text": "Vor dem Showdown im Nationalrat: Aussenpolitiker halten EU-Vertragspaket auf Kurs",
    "src": "https://www.nzz.ch/schweiz/vor-dem-showdown-im-nationalrat-aussenpolitiker-halten-eu-vertragspaket-auf-kurs-ld.10067749"
   },
   {
    "tag": "BUNDESRAT",
    "text": "Wer kann Thomas Aeschi bei der kommenden Bundesratswahl gefährlich werden? Am Freitag fällt die Vorentscheidung",
    "src": "https://www.nzz.ch/schweiz/wer-kann-thomas-aeschi-bei-der-kommenden-bundesratswahl-gefaehrlich-werden-am-freitag-faellt-die-vorentscheidung-ld.10067408"
   }
  ],
  "stand": "20.11.2026"
 },
 "chImpact": {}
};
