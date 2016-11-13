var dexClean = function (d) { return d.replace(/[^A-Z0-9]/ig, '').toLowerCase(); };
var pokemon = ["MissingNo.", "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "NidoranF", "Nidorina", "Nidoqueen", "NidoranM", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew", "Chikorita", "Bayleef", "Meganium", "Cyndaquil", "Quilava", "Typhlosion", "Totodile", "Croconaw", "Feraligatr", "Sentret", "Furret", "Hoothoot", "Noctowl", "Ledyba", "Ledian", "Spinarak", "Ariados", "Crobat", "Chinchou", "Lanturn", "Pichu", "Cleffa", "Igglybuff", "Togepi", "Togetic", "Natu", "Xatu", "Mareep", "Flaaffy", "Ampharos", "Bellossom", "Marill", "Azumarill", "Sudowoodo", "Politoed", "Hoppip", "Skiploom", "Jumpluff", "Aipom", "Sunkern", "Sunflora", "Yanma", "Wooper", "Quagsire", "Espeon", "Umbreon", "Murkrow", "Slowking", "Misdreavus", "Unown", "Wobbuffet", "Girafarig", "Pineco", "Forretress", "Dunsparce", "Gligar", "Steelix", "Snubbull", "Granbull", "Qwilfish", "Scizor", "Shuckle", "Heracross", "Sneasel", "Teddiursa", "Ursaring", "Slugma", "Magcargo", "Swinub", "Piloswine", "Corsola", "Remoraid", "Octillery", "Delibird", "Mantine", "Skarmory", "Houndour", "Houndoom", "Kingdra", "Phanpy", "Donphan", "Porygon2", "Stantler", "Smeargle", "Tyrogue", "Hitmontop", "Smoochum", "Elekid", "Magby", "Miltank", "Blissey", "Raikou", "Entei", "Suicune", "Larvitar", "Pupitar", "Tyranitar", "Lugia", "Ho-Oh", "Celebi", "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp", "Swampert", "Poochyena", "Mightyena", "Zigzagoon", "Linoone", "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox", "Lotad", "Lombre", "Ludicolo", "Seedot", "Nuzleaf", "Shiftry", "Taillow", "Swellow", "Wingull", "Pelipper", "Ralts", "Kirlia", "Gardevoir", "Surskit", "Masquerain", "Shroomish", "Breloom", "Slakoth", "Vigoroth", "Slaking", "Nincada", "Ninjask", "Shedinja", "Whismur", "Loudred", "Exploud", "Makuhita", "Hariyama", "Azurill", "Nosepass", "Skitty", "Delcatty", "Sableye", "Mawile", "Aron", "Lairon", "Aggron", "Meditite", "Medicham", "Electrike", "Manectric", "Plusle", "Minun", "Volbeat", "Illumise", "Roselia", "Gulpin", "Swalot", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Numel", "Camerupt", "Torkoal", "Spoink", "Grumpig", "Spinda", "Trapinch", "Vibrava", "Flygon", "Cacnea", "Cacturne", "Swablu", "Altaria", "Zangoose", "Seviper", "Lunatone", "Solrock", "Barboach", "Whiscash", "Corphish", "Crawdaunt", "Baltoy", "Claydol", "Lileep", "Cradily", "Anorith", "Armaldo", "Feebas", "Milotic", "Castform", "Kecleon", "Shuppet", "Banette", "Duskull", "Dusclops", "Tropius", "Chimecho", "Absol", "Wynaut", "Snorunt", "Glalie", "Spheal", "Sealeo", "Walrein", "Clamperl", "Huntail", "Gorebyss", "Relicanth", "Luvdisc", "Bagon", "Shelgon", "Salamence", "Beldum", "Metang", "Metagross", "Regirock", "Regice", "Registeel", "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys", "Turtwig", "Grotle", "Torterra", "Chimchar", "Monferno", "Infernape", "Piplup", "Prinplup", "Empoleon", "Starly", "Staravia", "Staraptor", "Bidoof", "Bibarel", "Kricketot", "Kricketune", "Shinx", "Luxio", "Luxray", "Budew", "Roserade", "Cranidos", "Rampardos", "Shieldon", "Bastiodon", "Burmy", "Wormadam", "Mothim", "Combee", "Vespiquen", "Pachirisu", "Buizel", "Floatzel", "Cherubi", "Cherrim", "Shellos", "Gastrodon", "Ambipom", "Drifloon", "Drifblim", "Buneary", "Lopunny", "Mismagius", "Honchkrow", "Glameow", "Purugly", "Chingling", "Stunky", "Skuntank", "Bronzor", "Bronzong", "Bonsly", "Mime Jr.", "Happiny", "Chatot", "Spiritomb", "Gible", "Gabite", "Garchomp", "Munchlax", "Riolu", "Lucario", "Hippopotas", "Hippowdon", "Skorupi", "Drapion", "Croagunk", "Toxicroak", "Carnivine", "Finneon", "Lumineon", "Mantyke", "Snover", "Abomasnow", "Weavile", "Magnezone", "Lickilicky", "Rhyperior", "Tangrowth", "Electivire", "Magmortar", "Togekiss", "Yanmega", "Leafeon", "Glaceon", "Gliscor", "Mamoswine", "Porygon-Z", "Gallade", "Probopass", "Dusknoir", "Froslass", "Rotom", "Uxie", "Mesprit", "Azelf", "Dialga", "Palkia", "Heatran", "Regigigas", "Giratina", "Cresselia", "Phione", "Manaphy", "Darkrai", "Shaymin", "Arceus", "Victini", "Snivy", "Servine", "Serperior", "Tepig", "Pignite", "Emboar", "Oshawott", "Dewott", "Samurott", "Patrat", "Watchog", "Lillipup", "Herdier", "Stoutland", "Purrloin", "Liepard", "Pansage", "Simisage", "Pansear", "Simisear", "Panpour", "Simipour", "Munna", "Musharna", "Pidove", "Tranquill", "Unfezant", "Blitzle", "Zebstrika", "Roggenrola", "Boldore", "Gigalith", "Woobat", "Swoobat", "Drilbur", "Excadrill", "Audino", "Timburr", "Gurdurr", "Conkeldurr", "Tympole", "Palpitoad", "Seismitoad", "Throh", "Sawk", "Sewaddle", "Swadloon", "Leavanny", "Venipede", "Whirlipede", "Scolipede", "Cottonee", "Whimsicott", "Petilil", "Lilligant", "Basculin", "Sandile", "Krokorok", "Krookodile", "Darumaka", "Darmanitan", "Maractus", "Dwebble", "Crustle", "Scraggy", "Scrafty", "Sigilyph", "Yamask", "Cofagrigus", "Tirtouga", "Carracosta", "Archen", "Archeops", "Trubbish", "Garbodor", "Zorua", "Zoroark", "Minccino", "Cinccino", "Gothita", "Gothorita", "Gothitelle", "Solosis", "Duosion", "Reuniclus", "Ducklett", "Swanna", "Vanillite", "Vanillish", "Vanilluxe", "Deerling", "Sawsbuck", "Emolga", "Karrablast", "Escavalier", "Foongus", "Amoonguss", "Frillish", "Jellicent", "Alomomola", "Joltik", "Galvantula", "Ferroseed", "Ferrothorn", "Klink", "Klang", "Klinklang", "Tynamo", "Eelektrik", "Eelektross", "Elgyem", "Beheeyem", "Litwick", "Lampent", "Chandelure", "Axew", "Fraxure", "Haxorus", "Cubchoo", "Beartic", "Cryogonal", "Shelmet", "Accelgor", "Stunfisk", "Mienfoo", "Mienshao", "Druddigon", "Golett", "Golurk", "Pawniard", "Bisharp", "Bouffalant", "Rufflet", "Braviary", "Vullaby", "Mandibuzz", "Heatmor", "Durant", "Deino", "Zweilous", "Hydreigon", "Larvesta", "Volcarona", "Cobalion", "Terrakion", "Virizion", "Tornadus", "Thundurus", "Reshiram", "Zekrom", "Landorus", "Kyurem", "Keldeo", "Meloetta", "Genesect", "Chespin", "Quilladin", "Chesnaught", "Fennekin", "Braixen", "Delphox", "Froakie", "Frogadier", "Greninja", "Bunnelby", "Diggersby", "Fletchling", "Fletchinder", "Talonflame", "Scatterbug", "Spewpa", "Vivillon", "Litleo", "Pyroar", "Flabébé", "Floette", "Florges", "Skiddo", "Gogoat", "Pancham", "Pangoro", "Furfrou", "Espurr", "Meowstic", "Honedge", "Doublade", "Aegislash", "Spritzee", "Aromatisse", "Swirlix", "Slurpuff", "Inkay", "Malamar", "Binacle", "Barbaracle", "Skrelp", "Dragalge", "Clauncher", "Clawitzer", "Helioptile", "Heliolisk", "Tyrunt", "Tyrantrum", "Amaura", "Aurorus", "Sylveon", "Hawlucha", "Dedenne", "Carbink", "Goomy", "Sliggoo", "Goodra", "Klefki", "Phantump", "Trevenant", "Pumpkaboo", "Gourgeist", "Bergmite", "Avalugg", "Noibat", "Noivern", "Xerneas", "Yveltal", "Zygarde", "Diancie", "Hoopa", "Volcanion", "Rowlet", "Dartrix", "Decidueye", "Litten", "Torracat", "Incineroar", "Popplio", "Brionne", "Primarina", "Pikipek", "Trumbeak", "Toucannon", "Yungoos", "Gumshoos", "Grubbin", "Charjabug", "Vikavolt", "Crabrawler", "Crabominable", "Oricorio", "Cutiefly", "Ribombee", "Rockruff", "Lycanroc", "Wishiwashi", "Mareanie", "Toxapex", "Mudbray", "Mudsdale", "Dewpider", "Araquanid", "Fomantis", "Lurantis", "Morelull", "Shiinotic", "Salandit", "Salazzle", "Stufful", "Bewear", "Bounsweet", "Steenee", "Tsareena", "Comfey", "Oranguru", "Passimian", "Wimpod", "Golisopod", "Sandygast", "Palossand", "Pyukumuku", "Type: Null", "Silvally", "Minior", "Komala", "Turtonator", "Togedemaru", "Mimikyu", "Bruxish", "Drampa", "Dhelmise", "Jangmo-o", "Hakamo-o", "Kommo-o", "Tapu Koko", "Tapu Lele", "Tapu Bulu", "Tapu Fini", "Cosmog", "Cosmoem", "Solgaleo", "Lunala", "Nihilego", "Buzzwole", "Pheromosa", "Xurktree", "Celesteela", "Kartana", "Guzzlord", "Necrozma", "Magearna", "Marshadow"];
document.write("<style>");
pokemon.forEach(function (p, i) { return document.write(".pokesprite." + dexClean(p) + " img { background-position: 0px -" + i + "em!important; }\n"); });
document.write("</style>");
var alolan = ["Rattata", "Raticate", "Raichu", "Sandshrew", "Sandslash", "Vulpix", "Ninetales", "Diglett", "Dugtrio", "Meowth", "Persian", "Geodude", "Graveler", "Golem", "Grimer", "Muk", "Exeggutor", "Marowak"];
document.write("<style>");
alolan.forEach(function (p, i) { return document.write(".alolan .dexEntry .pokesprite." + dexClean(p) + " img, .alolan .large.pokesprite." + dexClean(p) + " img { background-image:url('../img/pokemon-alola-large.png'); background-position: 0px -" + i + "em!important; }\n"); });
document.write("</style>");
var boneka = ["MissingNo.", "CSanae", "Sanae", "CAlice", "Alice", "CReisen", "Reisen", "CLilyWhite", "LilyWhite", "CLilyBlack", "LilyBlack", "CMomiji", "Momiji", "CShizuha", "Shizuha", "CMedicine", "Medicine", "CKoakuma", "Koakuma", "CNazrin", "Nazrin", "CTokiko", "Tokiko", "CRemilia", "Remilia", "CCirno", "Cirno", "CRumia", "Rumia", "Shanghai", "CFlandre", "Flandre", "Hourai", "CYoumu", "Youmu", "CYukari", "Yukari", "CSuika", "Suika", "CMystia", "Mystia", "CMinoriko", "Minoriko", "CKeine", "Keine", "AKeine", "CIku", "Iku", "CKoishi", "Koishi", "CYamame", "Yamame", "CChen", "Chen", "CYorihime", "Yorihime", "CKaguya", "Kaguya", "CMokou", "Mokou", "CHatate", "Hatate", "CLetty", "Letty", "CPatchouli", "Patchouli", "CYuugi", "Yuugi", "CTenshi", "Tenshi", "CParsee", "Parsee", "CMurasa", "Murasa", "CKisume", "Kisume", "CKogasa", "Kogasa", "CSatori", "Satori", "CEirin", "Eirin", "CRan", "Ran", "Yousei", "Daiyousei", "CNitori", "Nitori", "CHina", "Hina", "CKomachi", "Komachi", "CYuyuko", "Yuyuko", "CMeiling", "Meiling", "CSakuya", "Sakuya", "CLunasa", "Lunasa", "CMerlin", "Merlin", "CLyrica", "Lyrica", "CLayla", "Layla", "CKanako", "Kanako", "CRin", "Rin", "CUtsuho", "Utsuho", "CIchirin", "Ichirin", "CSunny", "Sunny", "CLuna", "Luna", "CStar", "Star", "CYuka", "Yuka", "CAya", "Aya", "CShikieiki", "Shikieiki", "CShou", "Shou", "CWriggle", "Wriggle", "CTewi", "Tewi", "Kedama", "CNue", "Nue", "CSuwako", "Suwako", "Reisen II", "CMarisa", "Marisa", "CReimu", "Reimu", "CByakuren", "Byakuren", "Kongala", "Kikuri", "Yuugenma", "CToyohime", "Toyohime", "Goliath", "Sariel", "Satsuki", "Akyuu", "Genji", "Tori", "GreatCatfish", "CElly", "Elly", "COrange", "Orange", "Youki", "CChiyuri", "Chiyuri", "CYumemi", "Yumemi", "CEllen", "Ellen", "CYuuka", "Yuuka", "CMeira", "Meira", "CSara", "Sara", "CLuize", "Luize", "CArisu", "Arisu", "CKana", "Kana", "CHakurei", "Hakurei", "CKirisame", "Kirisame", "CKotohime", "Kotohime", "CYumeko", "Yumeko", "CShinki", "Shinki", "Mimi-chan", "Rukoto", "CRika", "Rika", "CMugetsu", "Mugetsu", "CGengetsu", "Gengetsu", "CKurumi", "Kurumi", "CRikako", "Rikako", "Rinnosuke", "CYuki", "Yuki", "CMai", "Mai", "DSunny", "TLuna", "HStar", "ANitori", "TNitori", "AMokou", "DMokou", "DReisen", "TReisen", "TSakuya", "HSakuya", "ARumia", "SRumia", "HMystia", "AMystia", "AChen", "TChen", "DYoumu", "SYoumu", "AYuka", "TYuka", "SAya", "TAya", "ATenshi", "DTenshi", "DParsee", "TParsee", "AKoishi", "SKoishi", "DByakuren", "TByakuren", "DIchirin", "TIchirin", "AKanako", "DKanako", "AKaguya", "DKaguya", "Shingyoku (Orb)", "Shingyoku (Priest)", "Shingyoku (Priestess)", "AUtsuho", "SUtsuho", "DMomiji", "Ellis", "Mima", "Isami", "SKomachi", "AKomachi", "AEirin", "HEirin", "DYukari", "TYukari", "AAlice", "TAlice", "AReimu", "DReimu", "SCirno", "TCirno", "DYuyuko", "AYuyuko", "HLunasa", "HMerlin", "HLyrica", "ARan", "HRan", "AMedicine", "TMedicine", "AHina", "DHina", "SShizuha", "HShizuha", "ASuwako", "DSuwako", "SYamame", "TYamame", "TSatori", "DSatori", "SKogasa", "TKogasa", "AShou", "TShou", "TNazrin", "HNazrin", "TKisume", "SRin", "ARin", "Zombie", "DIku", "TIku", "AMinoriko", "DMinoriko", "TSuika", "ASuika", "SWriggle", "DWriggle", "DMeiling", "SMeiling", "DPatchouli", "APatchouli", "SMarisa", "AMarisa", "DLetty", "HLetty", "ASanae", "TSanae", "ANue", "TNue", "DMurasa", "AMurasa", "DYuugi", "AYuugi", "HKeine", "DKeine", "ARemilia", "DRemilia", "SFlandre", "AFlandre", "ADaiyousei", "HKoakuma", "HLilyWhite", "SLilyBlack", "ATokiko", "DTewi", "ATewi", "DShikieiki", "AShikieiki", "TToyohime", "SYorihime", "CShingyoku", "CKikuri", "CMima", "CKongala", "CYuugenma", "CEllis", "CSariel", "THatate", "DHatate", "ASunny", "ALuna", "AStar", "AYuuka", "SMedicine", "DDaiyousei", "AkiSisters", "DLayla", "Fairy", "Tensoku", "SSariel", "ALilyWhite", "ALilyBlack", "CKasen", "Kasen", "CVIVIT", "VIVIT", "A-VIVIT", "CKyouko", "CMiyako", "CSeiga", "CTojiko", "CFuto", "CMiko", "CMamizou", "Cirno-A", "Reisen-A", "Meiling-A", "Mystia-A", "Letty-A", "Tewi-A", "Marisa-A", "Alice-A", "Mokou-A", "Yukari-A", "Ran-A", "Chen-A", "Marisa-Ex", "ALICE", "CTenma", "Tenma", "CSendai", "Sendai", "Ayakashi", "Kyouko", "Miyako", "Seiga", "Tojiko", "Futo", "Miko", "Mamizou", "Prismriver", "MP-Suika", "SG-Sanae", "Tensoku-G", "Youmu-A", "Yuyuko-A", "Eirin-A", "STenma", "TSendai", "Unown"];
document.write("<style>");
boneka.forEach(function (b, i) { return document.write(".touhoumon .pokesprite." + dexClean(b) + " img { background-position: 0px -" + i + "em!important; }\n"); });
document.write("</style>");
var denjuu = [{ "image": 1, "name": "Tsunonasu", "bootleg": "Zinunas" }, { "image": 2, "name": "Kochia", "bootleg": "Kokia" }, { "image": 3, "name": "Oshe", "bootleg": "Osie" }, { "image": 4, "name": "Keshi", "bootleg": "Kesi" }, { "image": 5, "name": "Crypto", "bootleg": "Kuribute" }, { "image": 6, "name": "Monstera", "bootleg": "Manstla" }, { "image": 7, "name": "Fungus", "bootleg": "Fanges" }, { "image": 8, "name": "Hiougi", "bootleg": "Hiougi" }, { "image": 9, "name": "Punica", "bootleg": "Punika" }, { "image": 10, "name": "Gumi", "bootleg": "Gumi" }, { "image": 11, "name": "Suguri", "bootleg": "Sukori" }, { "image": 12, "name": "Ganraikou", "bootleg": "Tampala" }, { "image": 13, "name": "Byakubu", "bootleg": "Baibu" }, { "image": 14, "name": "Telopea", "bootleg": "Teropea" }, { "image": 15, "name": "Mantea", "bootleg": "Mantea" }, { "image": 16, "name": "Ixora", "bootleg": "Ikusora" }, { "image": 17, "name": "Myrtus", "bootleg": "Mierths" }, { "image": 18, "name": "Lychnis", "bootleg": "Liknis" }, { "image": 19, "name": "Lapeirousia", "bootleg": "Luyigia" }, { "image": 20, "name": "Bubaria", "bootleg": "Bubaria" }, { "image": 21, "name": "Angios", "bootleg": "Anjiosi" }, { "image": 22, "name": "Gymnos", "bootleg": "Jimunosi" }, { "image": 23, "name": "Liriope", "bootleg": "Liliaobe" }, { "image": 24, "name": "Waratah", "bootleg": "Warata" }, { "image": 25, "name": "Sorghum", "bootleg": "Surugem" }, { "image": 26, "name": "Eryngo", "bootleg": "Erinko" }, { "image": 27, "name": "Noriutsugi", "bootleg": "Noriwuts" }, { "image": 28, "name": "Pampas", "bootleg": "Banles" }, { "image": 29, "name": "Rhodanthe", "bootleg": "Rodansa" }, { "image": 30, "name": "Licorice", "bootleg": "Rikoris" }, { "image": 31, "name": "Viburnum", "bootleg": "Bibanam" }, { "image": 32, "name": "Funnel", "bootleg": "Phanel" }, { "image": 33, "name": "Vanda", "bootleg": "Banda" }, { "image": 34, "name": "Uikyou", "bootleg": "Wuikyo" }, { "image": 35, "name": "Obana", "bootleg": "Obana" }, { "image": 12, "name": "Firekokko", "bootleg": "Faikke" }, { "image": 2, "name": "Raygoten", "bootleg": "Rigoden" }, { "image": 3, "name": "Drilarmor", "bootleg": "Doria" }, { "image": 4, "name": "Chamelan", "bootleg": "Kameran" }, { "image": 5, "name": "Cryptoarm", "bootleg": "Kuribute" }, { "image": 6, "name": "Shellstera", "bootleg": "Sherstla" }, { "image": 7, "name": "Fungeist", "bootleg": "Fangist" }, { "image": 8, "name": "Balltamus", "bootleg": "Borutama" }, { "image": 9, "name": "Burenica", "bootleg": "Branika" }, { "image": 10, "name": "Geron", "bootleg": "Geron" }, { "image": 36, "name": "Berzelia", "bootleg": "Bazeria" }, { "image": 37, "name": "Nigella", "bootleg": "Nigera" }, { "image": 38, "name": "Musa", "bootleg": "Musa" }, { "image": 39, "name": "Netaro", "bootleg": "Netaro" }, { "image": 40, "name": "Nejiro", "bootleg": "Nejiro" }, { "image": 41, "name": "Godetia", "bootleg": "Gedejia" }, { "image": 42, "name": "Curcuma", "bootleg": "Kukuma" }, { "image": 43, "name": "Tessen", "bootleg": "Rasen" }, { "image": 44, "name": "Heliopsis", "bootleg": "Heriops" }, { "image": 45, "name": "Hagumanoki", "bootleg": "Sumac" }, { "image": 1, "name": "Gilerth", "bootleg": "Jieas" }, { "image": 2, "name": "Raygirth", "bootleg": "Larjias" }, { "image": 3, "name": "Armaru", "bootleg": "Armory" }, { "image": 4, "name": "Chameraid", "bootleg": "Icecream" }, { "image": 5, "name": "Cryptoride", "bootleg": "Kuripute" }, { "image": 6, "name": "Wormiterala", "bootleg": "Wamitera" }, { "image": 7, "name": "Fungblade", "bootleg": "Fenbuled" }, { "image": 8, "name": "Bulltamus", "bootleg": "Burtamas" }, { "image": 9, "name": "Puneedle", "bootleg": "Bunider" }, { "image": 10, "name": "Kerorin", "bootleg": "Gerlin" }, { "image": 11, "name": "Sugulai", "bootleg": "Sigeray" }, { "image": 12, "name": "Cortos", "bootleg": "Kaotes" }, { "image": 13, "name": "Gaiurus", "bootleg": "Geiwurus" }, { "image": 14, "name": "Midotor", "bootleg": "Medter" }, { "image": 15, "name": "Octor", "bootleg": "Aokuteru" }, { "image": 16, "name": "Hitodeight", "bootleg": "Hitodei" }, { "image": 17, "name": "Ghosboar", "bootleg": "Gaosboya" }, { "image": 46, "name": "Rasenmai", "bootleg": "Rasenmai" }, { "image": 19, "name": "Scorpil", "bootleg": "Skirpeal" }, { "image": 20, "name": "Armcrab", "bootleg": "Armkurab" }, { "image": 21, "name": "Angiorn", "bootleg": "Anjioen" }, { "image": 22, "name": "Gymrace", "bootleg": "Jimures" }, { "image": 23, "name": "Lirionpu", "bootleg": "Ririonpu" }, { "image": 24, "name": "Whitah", "bootleg": "Waita" }, { "image": 25, "name": "Potzal", "bootleg": "Bozuaru" }, { "image": 26, "name": "Araneida", "bootleg": "Aranita" }, { "image": 27, "name": "Gadhoro", "bootleg": "Jiadhelo" }, { "image": 28, "name": "Cliogera", "bootleg": "Kliaoger" }, { "image": 29, "name": "Gust", "bootleg": "Gust" }, { "image": 30, "name": "Reige", "bootleg": "Reige" }, { "image": 31, "name": "Togeruka", "bootleg": "Tegerka" }, { "image": 32, "name": "Raigaleon", "bootleg": "Raigarin" }, { "image": 33, "name": "Gadorkuma", "bootleg": "Gadoruk" }, { "image": 34, "name": "Abiras", "bootleg": "Agilis" }, { "image": 35, "name": "Alphagos", "bootleg": "Arfages" }, { "image": 31, "name": "Kiyoruka", "bootleg": "Kyoruka" }, { "image": 22, "name": "Gymgarth", "bootleg": "Jimges" }, { "image": 23, "name": "Baionpu", "bootleg": "Baionpu" }, { "image": 24, "name": "Warutah", "bootleg": "Warta" }, { "image": 25, "name": "Guntzatl", "bootleg": "Gantsu" }, { "image": 47, "name": "Arakuida", "bootleg": "Arakuita" }, { "image": 27, "name": "Badhoro", "bootleg": "Badhelo" }, { "image": 28, "name": "Lampgera", "bootleg": "Ranbrage" }, { "image": 29, "name": "Tempest", "bootleg": "Storm" }, { "image": 30, "name": "Zudoon", "bootleg": "Stone" }, { "image": 48, "name": "Hiyu", "bootleg": "Amaranth" }, { "image": 49, "name": "Gamazumi", "bootleg": "Biburnum" }, { "image": 50, "name": "Papaver", "bootleg": "Babarwur" }, { "image": 51, "name": "Gamuru", "bootleg": "Jiarm" }, { "image": 52, "name": "Bouvardi", "bootleg": "Bubarti" }, { "image": 53, "name": "Gaultheria", "bootleg": "Goteria" }, { "image": 54, "name": "Dipsacus", "bootleg": "Dipusaks" }, { "image": 55, "name": "Kaya", "bootleg": "Kaya" }, { "image": 56, "name": "Denfare", "bootleg": "Danver" }, { "image": 21, "name": "Angieon", "bootleg": "Andion" }, { "image": 57, "name": "Easydog", "bootleg": "Hat" }, { "image": 3, "name": "Tricerarmor", "bootleg": "Toriker" }, { "image": 5, "name": "Cryptosnipe", "bootleg": "Kuriputo" }, { "image": 7, "name": "Fungboost", "bootleg": "Fanbus" }, { "image": 9, "name": "Veenica", "bootleg": "Buinika" }, { "image": 11, "name": "Saiguliger", "bootleg": "Sagrika" }, { "image": 13, "name": "Armedurus", "bootleg": "Amdourus" }, { "image": 15, "name": "Octorifle", "bootleg": "Octobre" }, { "image": 17, "name": "Eraserboar", "bootleg": "Ireizab" }, { "image": 19, "name": "Spearneedle", "bootleg": "Spianid" }, { "image": 1, "name": "Gilgierth", "bootleg": "Girugias" }, { "image": 3, "name": "Uniarmor", "bootleg": "Uniama" }, { "image": 5, "name": "Cryptoburn", "bootleg": "Kuribute" }, { "image": 7, "name": "Fungmachine", "bootleg": "Gameboy" }, { "image": 9, "name": "Punisto", "bootleg": "Punisuto" }, { "image": 11, "name": "Suguline", "bootleg": "Sugurain" }, { "image": 13, "name": "Machurus", "bootleg": "Maharus" }, { "image": 15, "name": "Octagun", "bootleg": "Okutagan" }, { "image": 17, "name": "Mummyboar", "bootleg": "Amiboa" }, { "image": 19, "name": "Kingpin", "bootleg": "Kingpin" }, { "image": 57, "name": "Beebalm", "bootleg": "Beavermu" }, { "image": 58, "name": "Salal", "bootleg": "Sarae" }, { "image": 59, "name": "Enishida", "bootleg": "Genista" }, { "image": 60, "name": "Tulbaghia", "bootleg": "Tsurubak" }, { "image": 61, "name": "Kiringiku", "bootleg": "Chrysant" }, { "image": 21, "name": "Angilance", "bootleg": "Andirans" }, { "image": 22, "name": "Gymganon", "bootleg": "Gimugan" }, { "image": 23, "name": "Saiope", "bootleg": "Saiope" }, { "image": 24, "name": "Wattah", "bootleg": "Watta" }, { "image": 25, "name": "Quetzaking", "bootleg": "Kessarin" }, { "image": 26, "name": "Arakudabaran", "bootleg": "Arakudab" }, { "image": 27, "name": "Punkhoro", "bootleg": "Bangupal" }, { "image": 28, "name": "Vikingurin", "bootleg": "Baikingu" }, { "image": 29, "name": "Storm", "bootleg": "Storm" }, { "image": 30, "name": "Mutoom", "bootleg": "Mutomu" }, { "image": 62, "name": "Gypsophi", "bootleg": "Gipusofi" }, { "image": 63, "name": "Ruscus", "bootleg": "Husukasu" }, { "image": 64, "name": "Maoran", "bootleg": "Meolan" }, { "image": 65, "name": "Zea", "bootleg": "Zea" }, { "image": 66, "name": "Gonum", "bootleg": "Gonomu" }, { "image": 21, "name": "Angipower", "bootleg": "Angipao" }, { "image": 22, "name": "Gymzyrus", "bootleg": "Gimuzai" }, { "image": 23, "name": "Canonope", "bootleg": "Kanonope" }, { "image": 29, "name": "Calm", "bootleg": "Calm" }, { "image": 63, "name": "Ryuuguu", "bootleg": "Ryugu" }, { "image": 1, "name": "Gigagigerth", "bootleg": "Gigagigas" }, { "image": 3, "name": "Barriarm", "bootleg": "Barimu" }, { "image": 5, "name": "Cryptoknight", "bootleg": "Kuriput" }, { "image": 7, "name": "Fungwar", "bootleg": "Fanguo" }, { "image": 63, "name": "Bashou", "bootleg": "Bargier" }, { "image": 21, "name": "Angigorgo", "bootleg": "Angigogo" }, { "image": 22, "name": "Gymbaron", "bootleg": "Gimubar" }, { "image": 23, "name": "Lirimonarch", "bootleg": "Ririmona" }, { "image": 24, "name": "Enteioh", "bootleg": "Entio" }, { "image": 67, "name": "Golaking", "bootleg": "Gawerk" }, { "image": 68, "name": "Kanzou", "bootleg": "Lily" }, { "image": 69, "name": "Ornithogalum", "bootleg": "Ornith" }, { "image": 70, "name": "Gentiana", "bootleg": "Dragon" }, { "image": 71, "name": "Yarrow", "bootleg": "Chap" }, { "image": 21, "name": "Angioros", "bootleg": "Angioros" }, { "image": 22, "name": "Gymzatan", "bootleg": "Gimuzata" }, { "image": 71, "name": "Doomsday", "bootleg": "Domesday" }, { "image": 72, "name": "Dendel", "bootleg": "Dandel" }, { "image": 73, "name": "Teletel", "bootleg": "Tlaitlu" }];
document.write("<style>");
denjuu.forEach(function (d, i) {
    document.write(".telefang .pokesprite." + dexClean(d.name) + " img, ");
    document.write(".telefang .pokesprite." + dexClean(d.bootleg) + " img ");
    document.write(" { background-position: 0px -" + i + "em!important; } \n");
});
document.write("</style>");
document.write("<style>");
denjuu.forEach(function (d) {
    document.write(".telefang .pokemon.pokesprite." + dexClean(d.name) + " img, ");
    document.write(".telefang .pokemon.pokesprite." + dexClean(d.bootleg) + " img ");
    document.write(" { background-position: 0px -" + d.image + "em!important; } \n");
});
document.write("</style>");
var animorphs = ["Dog", "Mouse", "Goat", "Raccoon"];
document.write("<style>");
animorphs.forEach(function (a, i) { return document.write(".animorphs .pokemon.pokesprite." + dexClean(a) + " img { background-position: 0px -" + i + "em!important; }\n"); });
document.write("</style>");
var robopon = ["Rocker", "Sunny", "Ramjet", "Molbot", "Digger", "Cookey", "Boomer", "Coball", "Unix", "Timzup", "Romby", "Ramby", "Zap", "Dotcom", "Dosbot", "Punchy", "K.O.", "Brute", "Card", "Viggy", "HogBot", "Teabot", "Gidget", "Betty", "Granny", "Gramps", "B-Bot", "Signor", "Crowle", "Unibot", "Cycool", "Speedy", "Tread", "Dollby", "Moabot", "Topaz", "Sputer", "Rotor", "Topbot", "Sammi", "Muri", "Sumito", "Sumo", "Yokomo", "Q. B.", "Vic", "Ralph", "Screwy", "Skulby", "Pirate", "Rex", "Fetch", "Gidyup", "Pegs", "Medbot", "Meddy", "Docbot", "Snipes", "Deemo", "Cadet", "Pss't", "Major", "Toona", "Ping", "Hydro", "Leachy", "Boobot", "Jackey", "Virus", "Hexbot", "Chimp", "Sandy", "Whacky", "Filrup", "Batty", "Wolfe", "Bolton", "Boiler", "Urchy", "SubRio", "SumiSu", "Loopy", "Chubba", "Boom", "Kaboom", "Chomps", "Digit", "B-Cell", "C-Cell", "Robby", "Rob-O", "Bella", "Charm", "Egger", "Quak'D", "Cluck", "Razor", "Rootix", "Rooter", "Ribbot", "Palmer", "Spike", "Woody", "Zappa", "Viper", "Detno", "Paws", "Heylow", "Angie", "Uggy", "Scorch", "Crysty", "Beaker", "Granit", "Snorks", "Peach", "Apebot", "Orbit", "Smacks", "Peedo", "Zeppi", "Splat", "Johnny", "Slots", "Checks", "Mack", "Honey", "Seabee", "Puff", "Draco", "Gigo", "S-Bot", "SV-Bot", "SSTbot", "G-Bot", "GY-Bot", "GGTbot", "Stimy", "Hyme", "Chills", "Stinky", "Inviso", "Mochi", "Tacbot", "Gello", "Ticker", "Recyco", "Zombot", "Rudy", "Jesto", "Buddy", "Nobone", "Scar", "Flyboy", "Xerkon", "Jonah", "Zariga", "V-Zarg", "YonArm", "HexArm", "Cloudy", "Cutesy", "Micro", "Macro", "Necro", "Musher", "Saucer", "Volco"];
var roboxPos = function (i) {
    var n = i % 6;
    if (i >= 84)
        n += 6;
    switch (n) {
        case 0: return 20;
        case 1: return 90;
        case 2: return 162;
        case 3: return 234;
        case 4: return 298;
        case 5: return 362;
        case 6: return 491;
        case 7: return 558;
        case 8: return 622;
        case 9: return 690;
        case 10: return 760;
        case 11: return 831;
    }
};
var roboyPos = function (i) { return Math.floor((i % 84) / 6) * 80; };
document.write("<style>");
robopon.forEach(function (r, i) { return document.write(".robopon .pokemon.pokesprite." + dexClean(r) + " img { background-position: -" + roboxPos(i) + "px -" + roboyPos(i) + "px!important; }\n"); });
document.write("</style>");
var fakemon = ["Unidentified", "Prizmeon", "Phancero", "Raiwato", "Varaneous", "Fambaco", "Libabeel"];
document.write("<style>");
fakemon.forEach(function (f) {
    var clean = dexClean(f);
    document.write(".pokesprite." + clean + " img ");
    document.write(" { background-image:url(\"img/fakemon/" + clean + ".png\")!important; } \n");
});
document.write(fakemon.map(function (f) { return ".event.pokemon.pokesprite." + dexClean(f) + " img"; }).join(",\n"));
document.write("\n{ background-size: 50%!important; background-position: center!important; }");
document.write("</style>");
