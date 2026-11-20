// Swiss Strategic Center – Länderdossiers EUROPA (Stand: 25.10.2026)
// Felder: r = Lagerisiko 1–5 · x = Relevanz für die Schweiz 1–5 · geo/str = Geografie · hist/hc = Geschichte
// sys/head/gov/dom/for = Politik · now = aktuell wichtig · ch = Schweiz-Perspektive · tags = Schweiz-Bezüge
window.COUNTRIES = window.COUNTRIES || {};
(function (C) {
C.DEU = { r: 2, x: 5,
  geo: 'Norddeutsches Tiefland, Mittelgebirgsschwelle, Alpenvorland und Alpen; Küsten an Nord- und Ostsee; Rhein als wichtigste Wasserstrasse Europas.',
  str: 'Industrielles Kraftzentrum der EU, logistische Drehscheibe der NATO (Truppenverlegung an die Ostflanke), Energie-Transitland. Grösster Nachbar und Handelspartner der Schweiz.',
  hist: 'Reichsgründung 1871, Weltkriege, Teilung 1949–1990, Wiedervereinigung 1990. Gründungsmitglied von EWG/EU, NATO-Mitglied seit 1955.',
  hc: ['Erster und Zweiter Weltkrieg', 'Kalter Krieg & Teilung', '«Zeitenwende» nach Russlands Invasion 2022'],
  sys: 'Parlamentarische Bundesrepublik (16 Länder)', head: 'Bundespräsident Frank-Walter Steinmeier', gov: 'Bundeskanzler Friedrich Merz (CDU/CSU–SPD)',
  dom: 'Schwache Konjunktur, hohe Energiepreise durch Hormus-Krise, Erstarken der AfD (Sieg bei Landtagswahl Sachsen-Anhalt, Sept. 2026), Infrastruktur- und Verteidigungsinvestitionen.',
  for: 'Aufrüstung der Bundeswehr, Ukraine-Unterstützung, erste Aussenministergespräche mit Lawrow seit 2022 (Sept. 2026). Russische hybride Angriffe als Kernbedrohung.',
  now: ['Drohnenangriffe auf Flughafen Leipzig/Halle (1.–2.9.) Russland zugeschrieben – Gefährdungsstufe «hoch», russisches Konsulat Bonn geschlossen', 'Ex-BND-Chef August Hanning wegen Landesverrats verhaftet (6.10.)', 'Prozess wegen Nord-Stream-Sabotage in Hamburg eröffnet (14.10.)', 'AfD-Wahlsieg in Sachsen-Anhalt (6.9.), Proteste in ~20 Städten'],
  ch: 'Wichtigster Handelspartner (rund ein Fünftel des Schweizer Aussenhandels), über 90 000 Auslandschweizer, täglich zehntausende Grenzgänger aus Baden-Württemberg. Zentral für Stromversorgung (Netzverbund), Rheinschifffahrt und das EU-Paket. Hybride Bedrohungen in Deutschland sind ein Frühwarnsignal für die Schweiz.',
  tags: ['Nachbar', 'Top-Handelspartner', 'Grenzgänger', 'EU-Paket'] };

C.FRA = { r: 3, x: 5,
  geo: 'Vielgestaltig: Pariser Becken, Zentralmassiv, Alpen, Pyrenäen, Jura; Atlantik-, Ärmelkanal- und Mittelmeerküste; Überseegebiete auf allen Ozeanen.',
  str: 'Einzige EU-Atommacht, ständiges Mitglied im UNO-Sicherheitsrat, zweitgrösste Volkswirtschaft der EU. Militärische Präsenz in Golfregion (Einsatz zum Schutz von Yanbu, Saudi-Arabien).',
  hist: 'Revolution 1789, Kolonialreich, Fünfte Republik seit 1958; Motor der europäischen Integration.',
  hc: ['Weltkriege', 'Algerienkrieg 1954–62', 'Sahel-Einsätze bis 2022', 'Gelbwesten-Proteste 2018/19'],
  sys: 'Semipräsidentielle Republik', head: 'Präsident Emmanuel Macron', gov: 'Premierminister Sébastien Lecornu (Minderheitsregierung)',
  dom: 'Schwerste Unruhen seit Jahren: Schüler- und Studentenproteste seit Mitte September, landesweite Grossdemonstrationen gegen Lebenskosten, Plünderungen und Brandanschläge auf Rathäuser. Budgetkrise und politische Blockade im Vorfeld der Präsidentschaftswahl 2027.',
  for: 'Strategische Autonomie Europas, Truppen und Luftabwehr zum Schutz Saudi-Arabiens (Yanbu), Aufruf mit Katar zur Öffnung der Strasse von Hormus.',
  now: ['Unruhen: 17.10. über 500 000 Demonstrierende, Rathaus Limoges in Brand, Rathaus Lille gestürmt, Plünderungen an der Place de la République (Paris)', '24.10. «zweite Welle» der Gelbwesten: rund 410 000 Teilnehmende, über 1000 Festnahmen, Tränengas und Wasserwerfer in Paris', 'Mélenchon droht mit Generalstreik im November', 'Unwetter «Adam» mit Toten in Bouches-du-Rhône (22.10.)', 'Ebola: 1 bestätigter, genesener Fall'],
  ch: 'Zweitwichtigster Nachbar: grösste Auslandschweizer-Gemeinde weltweit (rund 200 000), über 200 000 Grenzgänger nach Genf, Waadt, Basel, Jura. Unruhen und Streiks betreffen Pendlerverkehr, Tourismus und Logistik (Basel, Genf). Genfer Flughafen und CERN als gemeinsame Infrastrukturen.',
  tags: ['Nachbar', 'Grenzgänger', 'Grösste Auslandschweizer-Gemeinde', 'Unruhen'] };

C.ITA = { r: 2, x: 5,
  geo: 'Stiefelförmige Halbinsel mit Alpenbogen, Poebene und Apennin; Sizilien und Sardinien; hohe Erdbeben- und Vulkanaktivität.',
  str: 'Mittelmeermacht, Tor für Migration aus Nordafrika, Energiekorridore (Algerien, Libyen). Südlicher Zugang zur Schweiz (Gotthard/Lötschberg-Achse, Hafen Genua).',
  hist: 'Einigung 1861, Faschismus, Republik seit 1946; EWG-Gründungsmitglied.',
  hc: ['Weltkriege', '«Anni di piombo» (Terror der 1970er)'],
  sys: 'Parlamentarische Republik', head: 'Präsident Sergio Mattarella', gov: 'Premierministerin Giorgia Meloni (Fratelli d’Italia, rechtskonservative Koalition) – längste Regierung der Nachkriegszeit',
  dom: 'Proteste von Lastwagenfahrern und Bauern wegen Treibstoffpreisen, landesweite Demonstrationen mit Zusammenstössen (Bologna, Turin, Rom, Florenz, 24.10.). Restriktive Migrations- und Bildungspolitik.',
  for: 'Schengen-Grenzkontrollen zu Spanien nach Ceuta-Krise, enge Abstimmung mit USA, Mittelmeer-Migrationspolitik.',
  now: ['Landesweite Proteste und Strassenschlachten (24.10.)', 'Hartes Vorgehen gegen Strassenblockaden wegen Treibstoffpreisen (21.10.)', 'Grenzkontrollen zu Spanien verlängert'],
  ch: 'Drittwichtigster Handelspartner, rund 50 000 Auslandschweizer, 90 000 Grenzgänger ins Tessin. Wichtig für Nord-Süd-Transit (NEAT), Stromimporte und das Tessin. Treibstoff-Proteste können den Güterverkehr über die Alpen stören.',
  tags: ['Nachbar', 'Grenzgänger Tessin', 'Alpentransit'] };

C.AUT = { r: 1, x: 5,
  geo: 'Alpenland (Ostalpen ~60 %), Donautal und Wiener Becken im Osten.',
  str: 'Neutraler EU-Staat, Ost-West-Drehscheibe, Sitz von OSZE, IAEA und OPEC in Wien – direkter «Konkurrent» und Partner Genfs als Diplomatieplatz.',
  hist: 'Habsburgermonarchie, Erste Republik, Anschluss 1938, Staatsvertrag und Neutralität 1955, EU-Beitritt 1995.',
  hc: ['Erster Weltkrieg (Auslöser in Sarajevo)', 'Anschluss 1938'],
  sys: 'Parlamentarische Bundesrepublik, immerwährend neutral', head: 'Bundespräsident Alexander Van der Bellen', gov: 'Bundeskanzler Christian Stocker (ÖVP–SPÖ–NEOS)',
  dom: 'Budgetsanierung, Teuerung, starke FPÖ in Umfragen.',
  for: 'Neutralitätsdebatte analog zur Schweiz, Sky Shield, Gasversorgung nach Ende russischer Transitlieferungen.',
  now: ['Schweizer Autofahrer tanken wegen tieferer Preise in Österreich (Okt. 2026)', 'Neutralität vs. europäische Sicherheitskooperation'],
  ch: 'Engster «Neutralitäts-Partner»: gemeinsame Interessen bei Sky Shield, Wien und Genf als komplementäre Diplomatieplätze. Wichtiger Handels- und Tourismuspartner, Grenzregion Vorarlberg–St. Gallen/Graubünden.',
  tags: ['Nachbar', 'Neutraler Staat', 'Sky Shield'] };

C.LIE = { r: 1, x: 5,
  geo: 'Kleinstaat im Rheintal zwischen Schweiz und Österreich, Alpenanteil im Osten.',
  str: 'Finanz- und Industriestandort (Hilti), Mitglied von EWR und EFTA.',
  hist: 'Fürstentum seit 1719, Souveränität 1806; Zoll- und Währungsunion mit der Schweiz seit 1923/1924.',
  hc: ['Keine Kriegsbeteiligung seit 1866'],
  sys: 'Konstitutionelle Erbmonarchie mit direktdemokratischen Elementen', head: 'Fürst Hans-Adam II., Regent Erbprinz Alois', gov: 'Regierungschefin Brigitte Haas',
  dom: 'Stabil; Diskussion über Finanzplatz und Fachkräfte.', for: 'EWR-Mitglied, enge Anbindung an die Schweiz (CHF, Zollvertrag).',
  now: ['Abhängigkeit vom Ausgang des Pakets Schweiz–EU (Zollvertrag)'],
  ch: 'Engster Partner der Schweiz: Zoll- und Währungsunion, gemeinsamer Wirtschaftsraum, Schweizer Vertretung im Ausland. Dauernd neutral wie die Schweiz.',
  tags: ['Zollunion', 'CHF-Raum', 'Neutral'] };

C.GBR = { r: 2, x: 4,
  geo: 'Inselstaat: schottisches Hochland, englisches Tiefland, Wales; Nordirland auf der irischen Insel.',
  str: 'Nuklearmacht, ständiges UNSC-Mitglied, Finanzplatz London, Five-Eyes-Kern. Typhoons zum Schutz Saudi-Arabiens entsandt.',
  hist: 'Weltreich, Weltkriege, EU-Beitritt 1973 und Austritt 2020.',
  hc: ['Weltkriege', 'Falklandkrieg 1982', 'Nordirlandkonflikt'],
  sys: 'Parlamentarische Monarchie', head: 'König Charles III.', gov: 'Premierminister Andy Burnham (Labour)',
  dom: 'Regierungswechsel von Starmer zu Burnham, Ermittlungen gegen Reform UK wegen Auslandsfinanzierung, Unabhängigkeitsdruck aus Schottland und Wales, Dürre im Süden Englands.',
  for: 'Lieferung von Storm-Shadow-Bauplänen an die Ukraine, RAF-Typhoons und Luftbetankung für Saudi-Arabien, Annäherung an die EU.',
  now: ['RAF-Typhoons zur Verteidigung Saudi-Arabiens (20.10.)', 'Terrorermittlungen RAF Fairford; US-B-1-Bomber abgezogen (5.10.)', 'Neues Zentrum gegen Desinformation (Sept.)'],
  ch: 'Wichtiger Finanz- und Dienstleistungspartner (Abkommen über Finanzdienstleistungen «Berne Financial Services Agreement»), rund 40 000 Auslandschweizer. Gemeinsame Interessen als Nicht-EU-Staaten gegenüber Brüssel.',
  tags: ['Finanzplatz-Partner', 'Nicht-EU'] };

C.IRL = { r: 1, x: 3,
  geo: 'Grüne Insel mit Küstengebirgen und zentraler Ebene.', str: 'EU-Hub für US-Tech- und Pharmakonzerne, militärisch neutral.',
  hist: 'Unabhängigkeit 1922, Republik 1949, EU seit 1973.', hc: ['Irischer Unabhängigkeitskrieg', 'Nordirland-Troubles'],
  sys: 'Parlamentarische Republik', head: 'Präsidentin Catherine Connolly', gov: 'Taoiseach Micheál Martin',
  dom: 'Erster Generalstreik seit 2009 (14.10.), Wohnungskrise.', for: 'Neutralität: Parlament erlaubt Friedenseinsätze ohne UNO-Mandat (21.10.).',
  now: ['Generalstreik im öffentlichen Sektor (14.10.)', 'Lockerung der «Triple Lock»-Neutralitätsregel'],
  ch: 'Neutraler Partner mit ähnlichen Debatten; Konkurrent bei Pharma- und Konzernstandorten (Mindeststeuer).',
  tags: ['Neutral', 'Pharma-Konkurrent'] };

C.ESP = { r: 2, x: 3,
  geo: 'Iberische Halbinsel mit Meseta-Hochland, Pyrenäen; Balearen, Kanaren, Exklaven Ceuta und Melilla.', str: 'Brücke zu Nordafrika und Lateinamerika; Migrationsdruck an den Exklaven.',
  hist: 'Bürgerkrieg 1936–39, Franco-Diktatur, Demokratie seit 1978.', hc: ['Spanischer Bürgerkrieg', 'ETA-Terror'],
  sys: 'Parlamentarische Monarchie', head: 'König Felipe VI.', gov: 'Ministerpräsident Pedro Sánchez (PSOE)',
  dom: 'Vorgezogene Neuwahlen am 29.11.2026; Wohnungskrise, Studentenproteste in Barcelona mit Ausschreitungen (24.10.).', for: 'Ceuta-Migrationskrise mit über 100 Toten (Aug.), Streit mit Italien um Grenzkontrollen.',
  now: ['Neuwahlen 29.11.2026', 'Krawalle in Barcelona (24.10.)', 'Ceuta-Krise: Tausende Migranten'],
  ch: 'Beliebtes Ziel und Wohnort von rund 25 000 Auslandschweizern; Tourismus- und Handelspartner.', tags: ['Wahl 29.11.'] };

C.PRT = { r: 1, x: 3, geo: 'Atlantikküste Iberiens, Azoren und Madeira.', str: 'Atlantische Brücke, NATO-Stützpunkt Lajes (Azoren).',
  hist: 'Seefahrernation, Nelkenrevolution 1974.', hc: ['Kolonialkriege in Afrika 1961–74'],
  sys: 'Semipräsidentielle Republik', head: 'Präsident António José Seguro', gov: 'Premierminister Luís Montenegro',
  dom: 'Wohnungsmangel, Zuwanderungsdebatte.', for: 'Atlantik- und EU-Orientierung.', now: ['Neuer Präsident Seguro seit 2026'],
  ch: 'Grosse portugiesische Gemeinschaft in der Schweiz (über 250 000 Personen) – enge menschliche Verbindungen.', tags: ['Diaspora in CH'] };

C.BEL = { r: 2, x: 3, geo: 'Flaches Küsten- und Hügelland, Ardennen im Süden.', str: 'Sitz von EU und NATO in Brüssel.', hist: 'Unabhängig 1830, Schauplatz beider Weltkriege.', hc: ['Weltkriege', 'Kongo-Kolonialzeit'],
  sys: 'Föderale parlamentarische Monarchie', head: 'König Philippe', gov: 'Premierminister Bart De Wever', dom: 'Sprachstreit, Haushalt; Studentenkrawalle in Lüttich (6.–7.10.).', for: 'Wiederaufnahme der Beziehungen zu Ruanda (Sept.).',
  now: ['Krawalle in Lüttich, über 100 Festnahmen', 'Diplomatische Beziehungen zu Ruanda wiederhergestellt'],
  ch: 'Verhandlungsort für das EU-Paket (Brüssel); wichtig für Schweizer Lobbying bei EU-Institutionen.', tags: ['EU-Sitz'] };

C.NLD = { r: 1, x: 3, geo: 'Tiefland, grossteils unter Meeresspiegel, Rhein-Maas-Delta.', str: 'Rotterdam: grösster Hafen Europas – Endpunkt der Rheinschifffahrt ab Basel.',
  hist: 'Republik seit 1581, Kolonialmacht, EWG-Gründer.', hc: ['Achtzigjähriger Krieg', 'Zweiter Weltkrieg'],
  sys: 'Parlamentarische Monarchie', head: 'König Willem-Alexander', gov: 'Premierminister Rob Jetten (D66)', dom: 'Sabotage am Bahnnetz (Sept.), Migrationspolitik.', for: 'Unterstützung der Ukraine.',
  now: ['Bahnsabotage im Norden und Zentrum (15.9.)'], ch: 'Rheinschiene Basel–Rotterdam ist Lebensader für Schweizer Importe (Treibstoffe, Rohstoffe).', tags: ['Rheinschifffahrt'] };

C.LUX = { r: 1, x: 3, geo: 'Ardennen (Ösling) und Gutland.', str: 'Finanzplatz, EU-Institutionen.', hist: 'Grossherzogtum seit 1815.', hc: ['Besetzung im Zweiten Weltkrieg'],
  sys: 'Parlamentarische Monarchie', head: 'Grossherzog Guillaume V.', gov: 'Premierminister Luc Frieden', dom: 'Stabil.', for: 'EU-Integration.', now: ['Neuer Grossherzog Guillaume V.'],
  ch: 'Konkurrent und Partner im Fondsgeschäft.', tags: ['Finanzplatz'] };

C.DNK = { r: 1, x: 2, geo: 'Halbinsel Jütland und Inseln; Grönland und Färöer autonom.', str: 'Kontrolle der Ostseezugänge; Grönland als arktische Schlüsselregion.',
  hist: 'Alte Seemacht, NATO-Gründer.', hc: ['Besetzung 1940–45'], sys: 'Parlamentarische Monarchie', head: 'König Frederik X.', gov: 'Ministerpräsidentin Mette Frederiksen',
  dom: 'Aufarbeitung der Zwangsverhütung bei Grönländerinnen.', for: 'Neues Verteidigungsabkommen mit USA und Grönland (22.9.); russische Provokationen in der Ostsee.',
  now: ['Abkommen USA–Dänemark–Grönland erweitert US-Militärzugang (22.9.)', 'Russisches Kriegsschiff feuert Leuchtraketen auf dänischen Helikopter (15.9.)'],
  ch: 'Partner in Pharma (Novo Nordisk vs. Roche/Novartis) und Windenergie.', tags: [] };

C.SWE = { r: 1, x: 2, geo: 'Skandinavisches Gebirge, Seenplatten, lange Ostseeküste.', str: 'NATO-Mitglied seit 2024, Rüstungsindustrie (Saab).',
  hist: '200 Jahre Bündnisfreiheit bis 2024.', hc: ['Grosser Nordischer Krieg'], sys: 'Parlamentarische Monarchie', head: 'König Carl XVI. Gustaf', gov: 'Geschäftsführender PM Ulf Kristersson',
  dom: 'Regierungsbildung blockiert: Wahl 13.9. knapp für Mitte-links, Riksdag lehnt Magdalena Andersson ab (15.10.).', for: 'NATO-Integration, Ostseesicherheit.',
  now: ['Regierungskrise nach Parlamentswahl'], ch: 'Ehemals neutraler Staat – Beispiel für die Neutralitätsdebatte in der Schweiz.', tags: ['Ex-neutral'] };

C.NOR = { r: 1, x: 2, geo: 'Fjordküste, skandinavisches Gebirge, Svalbard.', str: 'Grösster Gaslieferant Europas, arktische Flanke der NATO.',
  hist: 'Unabhängig 1905, NATO-Gründer.', hc: ['Besetzung 1940–45'], sys: 'Parlamentarische Monarchie', head: 'König Haakon VIII. (seit Ende Aug. 2026)', gov: 'Ministerpräsident Jonas Gahr Støre',
  dom: 'Thronwechsel nach dem Tod von Harald V. (28.8.).', for: 'Beschlagnahmung des russischen Schiffs «Professor Molchanov» (3.9.).',
  now: ['Neuer König Haakon VIII.', 'Gasexporte wichtiger denn je wegen Hormus-Krise'], ch: 'EFTA-Partner der Schweiz – gemeinsame Freihandelsabkommen (z. B. neu mit Vietnam).', tags: ['EFTA'] };

C.ISL = { r: 1, x: 2, geo: 'Vulkaninsel im Nordatlantik.', str: 'GIUK-Lücke, NATO-Mitglied ohne Armee.', hist: 'Unabhängig 1944.', hc: ['Kabeljaukriege mit GB'],
  sys: 'Parlamentarische Republik', head: 'Präsidentin Halla Tómasdóttir', gov: 'Premierministerin Kristrún Frostadóttir', dom: 'Volk lehnt Wiederaufnahme von EU-Beitrittsgesprächen ab (Ende Aug.).', for: 'EFTA/EWR.',
  now: ['Nein zu EU-Beitrittsverhandlungen'], ch: 'EFTA-Partner; das isländische Nein stärkt die EFTA als Plattform der Schweiz.', tags: ['EFTA'] };

C.FIN = { r: 2, x: 2, geo: 'Seen- und Waldland, 1340 km Grenze zu Russland.', str: 'NATO-Ostflanke seit 2023.', hist: 'Unabhängig 1917, Winterkrieg 1939/40.', hc: ['Winterkrieg', 'Fortsetzungskrieg'],
  sys: 'Parlamentarische Republik', head: 'Präsident Alexander Stubb', gov: 'Premierminister Petteri Orpo', dom: 'Wirtschaftsschwäche.', for: 'Grenzschliessung zu Russland, NATO-Integration.',
  now: ['Weltweit erstes Endlager für Atommüll (Onkalo) lizenziert (22.10.)'], ch: 'Vorbild bei Zivilschutz und Gesamtverteidigung; Onkalo als Referenz für die Schweizer Tiefenlager-Planung (Nördlich Lägern).', tags: ['Endlager-Referenz'] };

C.EST = { r: 2, x: 1, geo: 'Flaches Küsten- und Waldland.', str: 'NATO-Grenzstaat zu Russland (Narva).', hist: 'Unabhängig 1918/1991.', hc: ['Sowjetische Besetzung'],
  sys: 'Parlamentarische Republik', head: 'Präsidentin Ülle Madise (seit 12.10.)', gov: 'Premierminister Kristen Michal', dom: 'Digitalstaat, Sparhaushalt.', for: 'Abschreckung Russlands.', now: ['Neue Präsidentin Madise'], ch: 'Cyber-Kompetenz (NATO-Zentrum Tallinn).', tags: [] };
C.LVA = { r: 2, x: 1, geo: 'Flachland an der Ostsee.', str: 'NATO-Ostflanke.', hist: 'Unabhängig 1918/1991.', hc: ['Sowjetische Besetzung'],
  sys: 'Parlamentarische Republik', head: 'Präsident Edgars Rinkēvičs', gov: 'Premierminister Andris Kulbergs (Vereinigte Liste, Wahlsieger 3.10.)', dom: 'Regierungsbildung nach Wahl.', for: 'Sanktionshardliner gegenüber Russland.', now: ['Parlamentswahl 3.10.: Vereinigte Liste stärkste Kraft'], ch: 'Geringe direkte Bezüge.', tags: [] };
C.LTU = { r: 2, x: 1, geo: 'Flach, Seen, Ostseeküste.', str: 'Suwałki-Lücke zwischen Belarus und Kaliningrad.', hist: 'Grossfürstentum, Unabhängigkeit 1990.', hc: ['Sowjetische Besetzung'],
  sys: 'Semipräsidentielle Republik', head: 'Präsident Gitanas Nausėda', gov: 'Premierminister Mindaugas Sinkevičius', dom: 'Sicherheitspolitik dominiert.', for: 'Bundeswehr-Brigade stationiert.', now: ['NATO-Jet schiesst Drohne aus Belarus ab (15.9.)'], ch: 'Geringe direkte Bezüge.', tags: [] };
C.POL = { r: 2, x: 3, geo: 'Norddeutsch-polnisches Tiefland, Karpaten im Süden.', str: 'Militärisches Rückgrat der NATO-Ostflanke, Logistikhub für die Ukraine (Rzeszów).',
  hist: 'Teilungen, Weltkriege, Solidarność, EU 2004.', hc: ['Zweiter Weltkrieg', 'Kriegsrecht 1981'], sys: 'Parlamentarische Republik', head: 'Präsident Karol Nawrocki', gov: 'Premierminister Donald Tusk',
  dom: 'Kohabitation Tusk–Nawrocki; Serie von Messerangriffen an Schulen.', for: 'Beitritt zur Anti-Ballistic-Missile-Koalition, erste Gespräche mit Belarus seit zehn Jahren.',
  now: ['Russischer Helikopter verletzt Luftraum bei Braniewo (23.9.)', 'Rekord-Verteidigungsausgaben (~4,5 % BIP)'], ch: 'Schweizer Erweiterungsbeitrag (Kohäsion) mit Projekten in Polen; wachsender Markt für Schweizer Industrie.', tags: ['Kohäsionsbeitrag'] };
C.CZE = { r: 1, x: 2, geo: 'Böhmisches Becken, Mittelgebirge.', str: 'Industrie- und Rüstungsstandort.', hist: 'Samtene Revolution 1989, Trennung 1993.', hc: ['Prager Frühling 1968'],
  sys: 'Parlamentarische Republik', head: 'Präsident Petr Pavel', gov: 'Premierminister Andrej Babiš (ANO)', dom: 'Opposition gewinnt Senatswahlen deutlich (Okt.).', for: 'Babiš-Regierung skeptischer gegenüber Ukraine-Hilfe.', now: ['Senatswahl: ANO nur Dritte'], ch: 'Industriepartner.', tags: [] };
C.SVK = { r: 2, x: 1, geo: 'Karpaten, Donauebene.', str: 'Grenze zur Ukraine, Automobilbau.', hist: 'Unabhängig 1993.', hc: [], sys: 'Parlamentarische Republik', head: 'Präsident Peter Pellegrini', gov: 'Premierminister Robert Fico',
  dom: 'Proteste gegen Fico-Regierung, Druck auf Medien.', for: 'Russlandfreundlicher Kurs innerhalb der EU.', now: ['Spannungen mit Brüssel'], ch: 'Geringe Bezüge.', tags: [] };
C.HUN = { r: 1, x: 2, geo: 'Pannonisches Becken, Donau, Plattensee.', str: 'Transitland, Energieabhängigkeit von Russland.', hist: 'Aufstand 1956, EU 2004.', hc: ['Ungarnaufstand 1956'],
  sys: 'Parlamentarische Republik', head: 'Präsident András Baka', gov: 'Premierminister Péter Magyar (Tisza)', dom: 'Machtwechsel nach Orbán: Abschaffung des Anti-LGBTQ-Gesetzes, Medienöffnung.', for: 'Neustart mit der Ukraine (16.10.): Ungarn gibt Veto gegen Beitrittsgespräche auf.',
  now: ['Ende der Orbán-Ära; Reset mit EU und Ukraine'], ch: 'Ungarn als Kohäsionsempfänger; politischer Wandel erleichtert EU-Konsens zu Sanktionen.', tags: [] };
C.SVN = { r: 1, x: 1, geo: 'Alpen, Karst, kurze Adriaküste.', str: 'Tor zum Balkan.', hist: 'Unabhängig 1991.', hc: ['Zehntagekrieg 1991'], sys: 'Parlamentarische Republik', head: 'Präsidentin Nataša Pirc Musar', gov: 'Premierminister Janez Janša', dom: 'Polarisierung, Referendum Okt. 2026.', for: 'Israel eröffnet Botschaft in Ljubljana.', now: ['Referendum zum Untersuchungsgesetz (11.10.)'], ch: 'Geringe Bezüge.', tags: [] };
C.HRV = { r: 1, x: 2, geo: 'Adriaküste mit über 1000 Inseln, Pannonische Ebene.', str: 'Schengen- und Euro-Mitglied, LNG-Terminal Krk.', hist: 'Unabhängig 1991.', hc: ['Kroatienkrieg 1991–95'],
  sys: 'Parlamentarische Republik', head: 'Präsident Zoran Milanović', gov: 'Premierminister Andrej Plenković', dom: 'Proteste wegen Giftmüll (Gospić).', for: 'Auslieferung eines Nord-Stream-Verdächtigen an Deutschland.', now: ['Beitritt zu Artemis Accords'], ch: 'Grosse kroatische Gemeinschaft in der Schweiz.', tags: ['Diaspora in CH'] };
C.BIH = { r: 2, x: 3, geo: 'Gebirgig (Dinariden), kurzer Adriazugang.', str: 'Fragiler Staat nach Dayton; Spannungen Republika Srpska.', hist: 'Bosnienkrieg 1992–95, Völkermord von Srebrenica.', hc: ['Bosnienkrieg 1992–95'],
  sys: 'Föderaler Staat mit kollektivem Präsidium, Hoher Repräsentant', head: 'Präsidium (Vorsitz Denis Bećirović)', gov: 'Ministerratsvorsitzende Borjana Krišto',
  dom: 'Allgemeine Wahlen 4.10.2026; Streit um Mladić-Begräbnis in Belgrad.', for: 'EU-Kandidat; Ausweisung serbischer Diplomaten (Sept.).', now: ['Wahlen 4.10.', 'Spannungen mit Serbien nach Mladić-Staatsbegräbnis'],
  ch: 'DEZA-Schwerpunktland; grosse Diaspora (~60 000) in der Schweiz; Schweizer Soldaten bei EUFOR Althea (Swisscoy-Pendant).', tags: ['DEZA', 'Diaspora', 'Friedensförderung'] };
C.SRB = { r: 2, x: 3, geo: 'Pannonische Ebene im Norden, Bergland im Süden.', str: 'Grösster Westbalkanstaat, Balance zwischen EU, Russland und China.', hist: 'Jugoslawienkriege, NATO-Bombardierung 1999.', hc: ['Jugoslawienkriege', 'Kosovokrieg 1999'],
  sys: 'Parlamentarische Republik', head: 'Amtierende Präsidentin Ana Brnabić (Vučić zurückgetreten)', gov: 'Premierminister Đuro Macut; vorgezogene Parlamentswahl 25.10.2026 – Vučić kandidiert als Premier',
  dom: 'Massenproteste seit 2024, Pegasus-Überwachung von Aktivisten, Staatsbegräbnis für Ratko Mladić.', for: 'EU-Annäherung stockt (Kommissarin Kos sagte Besuch ab).', now: ['Parlamentswahl heute (25.10.)', 'Vučić wechselt vom Präsidenten- ins Premierministeramt'],
  ch: 'Wichtige Diaspora in der Schweiz; DEZA-Engagement; Schweizer Interesse an Stabilität im Westbalkan.', tags: ['Wahl heute', 'Diaspora', 'DEZA'] };
C.KOS = { r: 2, x: 4, geo: 'Gebirgsumrahmtes Becken.', str: 'Ethnische Spannungen im Norden (Mitrovica).', hist: 'Kosovokrieg 1998/99, Unabhängigkeit 2008.', hc: ['Kosovokrieg'],
  sys: 'Parlamentarische Republik', head: 'Präsidentin Justina Shiroka Pula', gov: 'Premierminister Albin Kurti', dom: 'Verfassungskrise um Präsidentenwahl, Zusammenstösse in Pristina (5.10.); Ex-Präsident Thaçi verurteilt.', for: 'Normalisierung mit Serbien stockt.',
  now: ['Thaçi vom Sondertribunal verurteilt', 'Präsidentschaftskrise gelöst (Pula)'], ch: 'Schweizer Armee seit 1999 mit der Swisscoy in der KFOR – grösster Auslandeinsatz. Grosse kosovarische Diaspora (~200 000 Personen mit Bezug) – sehr hohe Relevanz.', tags: ['Swisscoy/KFOR', 'Diaspora', 'DEZA'] };
C.ALB = { r: 2, x: 2, geo: 'Gebirgig, Adria- und Ionische Küste.', str: 'NATO-Mitglied, EU-Kandidat.', hist: 'Kommunistische Isolation bis 1991.', hc: ['Lotterieaufstand 1997'],
  sys: 'Parlamentarische Republik', head: 'Präsident Bajram Begaj', gov: 'Premierminister Edi Rama', dom: '«Flamingo-Revolution»: gewaltsame Studentenproteste in Tirana (13.–24.10.).', for: 'EU-Beitrittsverhandlungen.',
  now: ['Unruhen in Tirana, Regierungsgebäude angegriffen'], ch: 'DEZA-Partnerland; Diaspora.', tags: ['DEZA', 'Unruhen'] };
C.MKD = { r: 1, x: 2, geo: 'Binnenstaat, Ohridsee.', str: 'NATO-Mitglied.', hist: 'Namensstreit bis 2019.', hc: ['Konflikt 2001'], sys: 'Parlamentarische Republik', head: 'Präsidentin Gordana Siljanovska-Davkova', gov: 'Premierminister Hristijan Mickoski', dom: 'IS-Razzia in Skopje (Sept.).', for: 'EU-Blockade durch Bulgarien.', now: ['Antiterror-Festnahmen'], ch: 'DEZA-Partner, Diaspora.', tags: ['DEZA'] };
C.MNE = { r: 1, x: 1, geo: 'Adriaküste, Dinarisches Gebirge.', str: 'EU-Spitzenkandidat.', hist: 'Unabhängig 2006.', hc: [], sys: 'Parlamentarische Republik', head: 'Präsident Jakov Milatović', gov: 'Premierminister Milojko Spajić', dom: 'EU-Reformen.', for: 'Ausweisung russischer Propagandisten (9.10.).', now: ['Beitrittsverhandlungen weit fortgeschritten'], ch: 'Tourismus.', tags: [] };
C.GRC = { r: 1, x: 2, geo: 'Halbinsel und über 6000 Inseln.', str: 'Ostmittelmeer, Migrationsroute, Schifffahrtsmacht.', hist: 'Unabhängig 1830, Militärjunta 1967–74.', hc: ['Griechisch-Türkischer Konflikt', 'Bürgerkrieg 1946–49'],
  sys: 'Parlamentarische Republik', head: 'Präsident Konstantinos Tasoulas', gov: 'Premierminister Kyriakos Mitsotakis', dom: 'Social-Media-Verbot für unter 15-Jährige ab 2027; West-Nil-Virus.', for: 'Rüstungsdeal mit Israel (Achilles Shield).', now: ['Migrantenboote vor Lesbos/Samos gekentert (19.10.)'], ch: 'Tourismus, Reedereien mit Bezug zu Genf/Zug.', tags: [] };
C.CYP = { r: 2, x: 2, geo: 'Mittelmeerinsel, geteilt.', str: 'Britische Basis Akrotiri (im Iran-Krieg angegriffen).', hist: 'Teilung seit 1974.', hc: ['Zypernkonflikt 1974'], sys: 'Präsidialrepublik', head: 'Präsident Nikos Christodoulides', gov: '—', dom: 'Wiedervereinigungsgespräche.', for: 'Nahe am Nahost-Kriegsschauplatz.', now: ['RAF Akrotiri im Iran-Krieg Ziel von Angriffen'], ch: 'Genf als Ort früherer UNO-Zypern-Gespräche.', tags: ['Gute Dienste'] };
C.CYN = { r: 2, x: 1, geo: 'Nordteil Zyperns.', str: 'Nur von der Türkei anerkannt.', hist: 'Ausgerufen 1983.', hc: ['Zypernkonflikt'], sys: 'De-facto-Staat', head: 'Präsident (TRNZ)', gov: '—', dom: 'Abhängig von der Türkei.', for: '—', now: ['UNO-Vermittlung'], ch: 'Schweiz unterstützt UNO-Gute-Dienste.', tags: [] };
C.MLT = { r: 1, x: 1, geo: 'Inselgruppe im Mittelmeer.', str: 'Neutral (verfassungsmässig), EU-Mitglied.', hist: 'Unabhängig 1964.', hc: [], sys: 'Parlamentarische Republik', head: 'Präsidentin Myriam Spiteri Debono', gov: 'Premierminister Robert Abela', dom: 'Freispruch Fenech im Fall Caruana Galizia.', for: 'Neutralität.', now: ['Kontroverser Freispruch (2.9.)'], ch: 'Neutralitäts-Gleichgesinnter.', tags: ['Neutral'] };
C.ROU = { r: 3, x: 3,
  geo: 'Karpatenbogen, Siebenbürgen, Donauebene und Donaudelta am Schwarzen Meer.',
  str: 'NATO-Frontstaat am Schwarzen Meer (Basis Mihail Kogălniceanu), Grenze zur Ukraine und Moldau; Getreide-Exportkorridor über Constanța.',
  hist: 'Einigung 1859/1918, Ceaușescu-Diktatur, Revolution 1989, NATO 2004, EU 2007.', hc: ['Weltkriege', 'Revolution 1989'],
  sys: 'Semipräsidentielle Republik', head: 'Präsident Nicușor Dan', gov: 'Premierminister Luca Niculescu (seit 20.10.)',
  dom: 'Neue Regierung, Bauernproteste (Rinderpest-Exportverbot), Sparprogramme.',
  for: 'Direkte Konfrontation mit russischen Drohnen: Rumänien beruft Sondersitzung des Nordatlantikrats zur Schwarzmeer-Sicherheit ein.',
  now: ['17.10.: Rumänische F-16 schiessen zwei russische Geran-4-Düsendrohnen bei Sulina ab – erster Abschuss dieses Typs', '23.10.: Handelsschiff vor der Küste von Drohne getroffen und gekentert – 1 Toter, 3 Vermisste', '15.10.: Tanker vor der Küste in Brand, 7 Vermisste', 'NATO-Sondersitzung zur Schwarzmeer-Sicherheit (20.10.)'],
  ch: 'Schweizer Kohäsionsbeitrag; wachsender Absatzmarkt. Eskalation am Schwarzen Meer erhöht Risiko für NATO-Artikel-5-Fall in Europa und belastet Getreide- und Energiemärkte – relevant für die Schweizer Versorgungssicherheit.',
  tags: ['NATO-Ostflanke', 'Drohnenangriffe', 'Kohäsionsbeitrag'] };
C.BGR = { r: 3, x: 2, geo: 'Balkan, Donauebene, Schwarzmeerküste.', str: 'NATO-Schwarzmeerflanke.', hist: 'Osmanische Herrschaft bis 1878, Kommunismus bis 1989.', hc: ['Balkankriege'],
  sys: 'Parlamentarische Republik', head: 'Präsidentin Iliana Iotova', gov: 'Premierminister Rumen Radev', dom: 'Präsidentschaftswahl 1. Runde heute (25.10.).', for: 'Radev beschuldigt Russland nach Schiffsangriffen.',
  now: ['Drohnen treffen vier Handelsschiffe vor der Küste (6. & 13.10.), zwei gesunken, Dutzende Vermisste', 'Präsidentschaftswahl 25.10.'], ch: 'Kohäsionspartner; Schwarzmeer-Eskalation.', tags: ['Schiffsangriffe'] };
C.MDA = { r: 3, x: 2, geo: 'Hügelland zwischen Prut und Dnister; Transnistrien abtrünnig.', str: 'Pufferstaat zwischen Ukraine und Rumänien; russische Truppen in Transnistrien.',
  hist: 'Unabhängig 1991, Transnistrienkrieg 1992.', hc: ['Transnistrienkrieg 1992'], sys: 'Parlamentarische Republik', head: 'Präsidentin Maia Sandu', gov: 'Premierminister Vasile Tofan',
  dom: 'Energie- und Wassernotstand (Sept.), russische Einflussoperationen.', for: 'EU-Beitrittskurs; Freihandelsabkommen mit der EFTA.', now: ['Russischer Marschflugkörper stürzt in Ștefan Vodă ab (17.8.)', 'Notstand wegen niedriger Flusspegel'],
  ch: 'DEZA-Schwerpunktland, EFTA-Freihandelsabkommen (2024). Schweiz unterstützt Energiesicherheit und Resilienz.', tags: ['DEZA', 'EFTA-FHA'] };
C.UKR = { r: 5, x: 5,
  geo: 'Weite Steppen und Schwarzerdeböden, Karpaten im Westen, Dnipro als Hauptachse, Schwarzmeer- und Asowküste im Süden.',
  str: 'Grösster Flächenstaat Europas nach Russland, Kornkammer, Energie-Transitland. Frontstaat gegen Russland – über ein Fünftel des Territoriums besetzt.',
  hist: 'Kiewer Rus, Holodomor 1932/33, Unabhängigkeit 1991, Euromaidan 2014, russische Vollinvasion seit 24.2.2022.',
  hc: ['Holodomor', 'Annexion der Krim 2014', 'Krieg im Donbas', 'Russische Vollinvasion seit 2022'],
  sys: 'Semipräsidentielle Republik (Kriegsrecht)', head: 'Präsident Wolodymyr Selenskyj', gov: 'Premierminister Serhij Korezkyj',
  dom: 'Kriegsrecht, Mobilisierung, schwere Angriffe auf Energieinfrastruktur vor dem Winter, Spannungen zwischen Geheimdiensten SBU und HUR.',
  for: 'US-vermittelte Gespräche: Witkoff traf Putin (21.10.), trilaterale Gespräche sollen ab ~10.11. weitergehen; Selenskyj offen für Einfrieren der Front. EU-Beitrittsgespräche nach ungarischem Kurswechsel.',
  now: ['Lokale humanitäre Waffenruhe in Oleschky bestätigt (23.10., vermittelt von Melania Trump)', '7.10.: Nordkoreanische KN-23 tötet 20 Menschen in Pryluky', '8.10.: Ballistische Rakete trifft zwei Busse in Kramatorsk – über 30 Tote', '10.10.: Gleitbombe auf Wohnhaus in Saporischschja – 20 Tote', '14.10.: Kiewer Kraftwerk getroffen, über 1000 Gebäude ohne Heizung', '23.10.: 181 Gefechte, Schwerpunkt Kostjantyniwka'],
  ch: 'Schweizer Wiederaufbauprogramm (CHF 5 Mrd. bis 2036, u. a. Minenräumung, Energie, Privatsektor), Ukraine-Konferenz Lugano 2022, Bürgenstock-Gipfel 2024. Zehntausende Schutzsuchende mit Status S. Ein Waffenstillstand eröffnet Chancen für Schweizer Gute Dienste und Firmen im Wiederaufbau.',
  tags: ['Wiederaufbau CHF 5 Mrd.', 'Status S', 'Gute Dienste'] };
C.BLR = { r: 3, x: 1, geo: 'Flaches Wald- und Sumpfland (Polesien).', str: 'Russischer Verbündeter, taktische Atomwaffen stationiert.', hist: 'Lukaschenko seit 1994.', hc: ['Proteste 2020'],
  sys: 'Autoritäre Präsidialrepublik', head: 'Präsident Alexander Lukaschenko', gov: 'Premierminister Alexander Turtschin', dom: 'Repression, sporadische Begnadigungen.', for: 'Aufmarschgebiet Russlands; erste Gespräche mit Polen seit 10 Jahren.',
  now: ['Drohne aus Belarus über Litauen abgeschossen', '15 politische Gefangene begnadigt'], ch: 'Schweiz übernimmt EU-Sanktionen gegen Belarus.', tags: ['Sanktionen'] };
C.RUS = { r: 4, x: 4,
  geo: 'Flächengrösster Staat der Erde: Osteuropäische Ebene, Ural, Sibirien, Ferner Osten, lange Arktisküste.',
  str: 'Nuklearsupermacht, Energie- und Rohstoffexporteur, ständiges UNSC-Mitglied mit Vetorecht; Nordostpassage.',
  hist: 'Zarenreich, Sowjetunion 1922–1991, autoritäre Konsolidierung unter Putin seit 2000.',
  hc: ['Tschetschenienkriege', 'Georgienkrieg 2008', 'Annexion der Krim 2014', 'Vollinvasion der Ukraine seit 2022'],
  sys: 'Föderale Präsidialrepublik (autoritär)', head: 'Präsident Wladimir Putin', gov: 'Premierminister Michail Mischustin',
  dom: 'Kriegswirtschaft, Duma-Wahl Sept. 2026 ohne Jabloko, Zwangsverwaltung westlicher Firmen (Nestlé, Auchan, Metro), ukrainische Drohnenangriffe auf Raffinerien und Moskau.',
  for: 'Gespräche mit US-Gesandtem Witkoff; Allianzen mit Nordkorea, Iran, China; hybride Angriffe auf NATO-Staaten (Drohnen über Rumänien, Polen, Deutschland; Schiffe im Schwarzen Meer).',
  now: ['Witkoff–Putin-Treffen in St. Petersburg (21.10.); Freilassung eines US-Bürgers', 'EU verabschiedet 22. Sanktionspaket (12.10.)', 'Zwangsverwaltung der Nestlé-Russland-Aktiva (18.9.)', 'Lungenpest-Todesfall in Irkutsk (4.10.)'],
  ch: 'Schweiz übernimmt EU-Sanktionen (Russland-Vermögen in der Schweiz eingefroren). Direkter Schaden: Zwangsverwaltung der Nestlé-Aktiva. Schutzmachtmandate Russland–Georgien. Rohstoffhandel (Genf/Zug) unter Druck. Möglicher Verhandlungsort bei Friedensgesprächen.',
  tags: ['Sanktionen', 'Nestlé enteignet', 'Schutzmacht RU–GE'] };
C.GEO = { r: 3, x: 3, geo: 'Grosser und Kleiner Kaukasus, Schwarzmeerküste.', str: 'Transitkorridor Kaspisches Meer–Europa; 20 % von Russland besetzt (Abchasien, Südossetien).',
  hist: 'Unabhängig 1991, Rosenrevolution 2003, Krieg 2008.', hc: ['Georgienkrieg 2008', 'Abchasienkrieg 1992/93'], sys: 'Parlamentarische Republik (zunehmend autoritär)', head: 'Präsident Micheil Kawelaschwili', gov: 'Premierminister Irakli Kobachidse (Georgischer Traum)',
  dom: 'Repression gegen Opposition und Medien, Proteste seit 2024.', for: 'Abkehr vom EU-Kurs.', now: ['Anhaltende Proteste und Repression'],
  ch: 'Die Schweiz ist Schutzmacht für Russland in Georgien und für Georgien in Russland (seit 2009) und Ko-Vorsitz der Genfer Internationalen Gespräche. EFTA-Freihandelsabkommen.', tags: ['Schutzmacht', 'Genfer Gespräche', 'EFTA-FHA'] };
C.ARM = { r: 2, x: 2, geo: 'Gebirgiges Hochland, Sewansee.', str: 'Grenze zu Türkei, Iran, Aserbaidschan; Abkehr von Russland.', hist: 'Völkermord 1915, Unabhängigkeit 1991.', hc: ['Bergkarabach-Kriege 1992–94, 2020, 2023'],
  sys: 'Parlamentarische Republik', head: 'Präsident Wahagn Chatschaturjan', gov: 'Premierminister Nikol Paschinjan', dom: 'Nach Parlamentswahl 2026 Konsolidierung des Westkurses.', for: 'Friedensabkommen mit Aserbaidschan (2025), TRIPP-Korridor.',
  now: ['Umsetzung des Friedens mit Aserbaidschan'], ch: 'DEZA-Partner; grosse Diaspora-Verbindungen; Schweiz vermittelte Protokolle mit der Türkei (2009).', tags: ['DEZA', 'Gute Dienste'] };
C.AZE = { r: 2, x: 2, geo: 'Kaukasus, Kura-Araz-Ebene, Kaspisches Meer.', str: 'Öl/Gas (BTC-Pipeline), Mittlerer Korridor.', hist: 'Unabhängig 1991.', hc: ['Bergkarabach-Kriege'],
  sys: 'Autoritäre Präsidialrepublik', head: 'Präsident Ilham Alijew', gov: 'Premierminister Ali Asadow', dom: 'Autoritär.', for: 'Iran-Krieg: Angriffe auf Nachitschewan.', now: ['Nachitschewan im Iran-Krieg getroffen'], ch: 'Energiepartner Europas; Schweizer Rohstoffhändler aktiv.', tags: [] };
C.TUR = { r: 3, x: 3,
  geo: 'Anatolisches Hochland, Pontisches Gebirge und Taurus; Bosporus und Dardanellen verbinden Schwarzes Meer und Mittelmeer.',
  str: 'Kontrolle der Meerengen (Montreux-Vertrag), zweitgrösste NATO-Armee, Brücke zu Nahost, Kaukasus und Zentralasien.',
  hist: 'Osmanisches Reich, Republik seit 1923 (Vertrag von Lausanne!), NATO seit 1952.',
  hc: ['Unabhängigkeitskrieg 1919–23', 'Zypern 1974', 'PKK-Konflikt seit 1984'],
  sys: 'Präsidialrepublik', head: 'Präsident Recep Tayyip Erdoğan', gov: 'Präsidialsystem (AKP–MHP)',
  dom: 'Hohe Inflation, Druck auf Opposition und Medien (Halk TV übernommen), Fluten in Istanbul.',
  for: 'Mekka-Verteidigungsabkommen mit Saudi-Arabien und Pakistan – türkische Truppen nach Saudi-Arabien; Badr-Abkommen; Haftbefehl gegen Netanjahu; Freihandelsgespräche mit Kanada.',
  now: ['Truppenentsendung nach Saudi-Arabien beschlossen (5.10.)', 'Regierungskritischer Sender Halk TV unter Zwangsverwaltung (14.10.)', 'Interpol-Haftbefehl gegen Netanjahu'],
  ch: 'Der Vertrag von Lausanne (1923) begründete die moderne Türkei. EFTA-Freihandelsabkommen; grosse türkisch-kurdische Diaspora in der Schweiz. Mögliche Vermittlerrolle.', tags: ['Vertrag von Lausanne', 'EFTA-FHA', 'Diaspora'] };
// Kleinstaaten
C.AND = { r: 1, x: 2, geo: 'Pyrenäenstaat.', str: 'Finanz- und Tourismusstandort.', hist: 'Ko-Fürstentum seit 1278.', hc: [], sys: 'Parlamentarisches Ko-Fürstentum', head: 'Ko-Fürsten Emmanuel Macron und Bischof Josep-Lluís Serrano', gov: 'Regierungschef Xavier Espot Zamora', dom: 'Stabil.', for: 'Assoziierungsabkommen mit der EU unterzeichnet (19.10.).', now: ['EU-Assoziierung (19.10.)'], ch: 'Vorbild/Vergleich für den bilateralen Weg der Schweiz.', tags: ['EU-Assoziierung'] };
C.MCO = { r: 1, x: 1, geo: 'Stadtstaat an der Côte d’Azur.', str: 'Finanzplatz.', hist: 'Grimaldi seit 1297.', hc: [], sys: 'Konstitutionelle Monarchie', head: 'Fürst Albert II.', gov: 'Staatsminister Christophe Mirmand', dom: 'Stabil.', for: 'Verhandlungen mit EU.', now: [], ch: 'Vermögensverwaltungs-Konkurrent.', tags: [] };
C.SMR = { r: 1, x: 1, geo: 'Enklave in Italien.', str: '—', hist: 'Älteste Republik der Welt.', hc: [], sys: 'Parlamentarische Republik', head: 'Capitani Reggenti Giovagnoli & Casali', gov: 'Staatssekretär Luca Beccari', dom: 'Stabil.', for: 'EU-Assoziierungsabkommen (19.10.).', now: ['EU-Assoziierung (19.10.)'], ch: 'Parallele zum Schweizer Weg.', tags: [] };
C.VAT = { r: 1, x: 3, geo: 'Stadtstaat in Rom.', str: 'Weltkirche, Diplomatie.', hist: 'Lateranverträge 1929.', hc: [], sys: 'Absolute Wahlmonarchie', head: 'Papst Leo XIV.', gov: 'Governatoratspräsidentin Raffaella Petrini', dom: 'Reformen der Kurie.', for: 'Friedensdiplomatie.', now: ['Kardinal Tagle wird Dekan des Kardinalskollegiums'], ch: 'Die Päpstliche Schweizergarde schützt den Papst seit 1506 – einzigartige Verbindung.', tags: ['Schweizergarde'] };
// Abhängige Gebiete Europas
C.GRL = { r: 2, x: 2, geo: 'Grösste Insel der Welt, zu 80 % eisbedeckt.', str: 'Arktische Schlüsselposition, Seltene Erden, US-Pituffik Space Base.', hist: 'Dänisch seit 1721, Autonomie 1979/2009.', hc: [], sys: 'Autonomes Gebiet Dänemarks', head: 'König Frederik X.', gov: 'Naalakkersuisut (Landesregierung)', dom: 'Wahrheitskommission zur Zwangsverhütung.', for: 'Erweiterter US-Militärzugang (Abkommen 22.9.).', now: ['US-Dänemark-Grönland-Abkommen'], ch: 'Schweizer Polarforschung (Eisbohrkerne, ETH/Uni Bern).', tags: ['Polarforschung'] };
C.FRO = { r: 1, x: 1, geo: 'Inselgruppe im Nordatlantik.', str: 'Fischerei.', hist: 'Autonomie 1948.', hc: [], sys: 'Autonomes Gebiet Dänemarks', head: 'König Frederik X.', gov: 'Landesregierung', dom: '—', for: 'Eigenes FHA mit der Schweiz.', now: [], ch: 'Bilaterales Freihandelsabkommen mit der Schweiz.', tags: ['FHA'] };
C.ALD = { r: 1, x: 1, geo: 'Schären zwischen Schweden und Finnland.', str: 'Demilitarisiert seit 1921.', hist: 'Völkerbundentscheid 1921.', hc: [], sys: 'Autonome Region Finnlands', head: 'Präsident Alexander Stubb', gov: 'Landesregierung', dom: '—', for: 'Demilitarisierung unter Druck.', now: [], ch: 'Völkerbund-Entscheid (Genf) als Modell.', tags: [] };
C.GGY = { r: 1, x: 1, geo: 'Kanalinsel.', str: 'Finanzplatz.', hist: 'Kronbesitz.', hc: [], sys: 'Kronbesitz', head: 'König Charles III.', gov: 'Policy & Resources Committee', dom: '—', for: '—', now: [], ch: 'Offshore-Konkurrent.', tags: [] };
C.JEY = { r: 1, x: 1, geo: 'Kanalinsel.', str: 'Finanzplatz.', hist: 'Kronbesitz.', hc: [], sys: 'Kronbesitz', head: 'König Charles III.', gov: 'Chief Minister', dom: '—', for: '—', now: [], ch: 'Offshore-Konkurrent.', tags: [] };
C.IMN = { r: 1, x: 1, geo: 'Insel in der Irischen See.', str: 'Finanzplatz.', hist: 'Kronbesitz.', hc: [], sys: 'Kronbesitz', head: 'König Charles III.', gov: 'Chief Minister', dom: '—', for: '—', now: [], ch: '—', tags: [] };
})(window.COUNTRIES);
