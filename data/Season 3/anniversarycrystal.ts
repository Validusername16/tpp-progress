/// <reference path="../tpp-data.ts" />
Season3.Runs.push(
    {
        RunName: "Anniversary Crystal",
        StartDate: "2016-02-14T21:00:00Z",
        Duration: "30d 4h 34m",
        EndDate: "31d",
        ColorPrimary: "#008bff",
        ColorSecondary: "#0021b4",
        HostImage: "img/hosts/evan.png",
        HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/46elnh/evan_sprites/",
        // HostImage: "img/hosts/evan.gif",
        // HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/46f9vw/evan_our_lethargic_protagonist_animated/",
        HostName: "EVAN",
        Region: "Kanto",
        AdditionalRegions: [
            { Name: "Johto", Time: "1d 3h 21m" },
            { Name: "Kanto", Time: "12d 6h 36m" }
        ],
        DexTotal: 251,
        // Scraper: {
        //     url: "http://twitchplayspokemon.org/ac/",
        //     runtime: true,
        //     parts: [],
        //     pokemon: true
        // },
        TPPOrgLink: "http://twitchplayspokemon.org/ac/",
        Events: [
            {
                Group: "Champions",
                Name: "AZURE",
                Image: "img/trainers/crystal/azure.png",
                // Image: "img/trainers/crystal/azure.gif",
                // ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/46gsoo/azure_our_perky_exrival_animated/",
                Time: "12d 4h 25m",
                Attempts: 2
            },
            {
                Group: "Champions",
                Name: "AZURE",
                Image: "img/trainers/crystal/rematch/azure.png",
                // Image: "img/trainers/crystal/rematch/azure.gif",
                // ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/46gsoo/azure_our_perky_exrival_animated/",
                Time: "30d 1h 14m",
                Attempts: 1
            },
            {
                Group: "Champions",
                Name: "Professor Oak",
                Image: "img/trainers/crystal/oak.png",
                Time: "26d 17h 22m",
                Attempts: 1
            },
            {
                Group: "Champions",
                Name: "Professor Elm",
                Image: "img/trainers/crystal/elm.png",
                Time: "30d 4h 34m",
                Attempts: 1
            },
            <TPP.HallOfFame>{
                Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "12d 4h 27m", Attempts: 47, IDNo: "58192", Party: [
                    { Number: 142, Pokemon: "Aerodactyl", Gender: "Male", Nickname: "JHH", Level: 88, IDNo: "58192" },
                    { Number: 135, Pokemon: "Jolteon", Gender: "Male", Nickname: "FOX,/!!!)u", Level: 83, IDNo: "58192" },
                    { Number: 230, Pokemon: "Kingdra", Gender: "Female", Nickname: "---sxjxKKK", Level: 84, IDNo: "58192" },
                    { Number: 241, Pokemon: "Miltank", Gender: "Female", Nickname: "!L", Level: 78, IDNo: "58192" },
                    { Number: 164, Pokemon: "Noctowl", Gender: "Female", Nickname: "KENYA", Level: 96, IDNo: "01001" },
                    { Number: 3, Pokemon: "Venusaur", Gender: "Male", Nickname: "ul:::utx", Level: 96, IDNo: "58192" }
                ],
                Image: "img/ribbons/champion.png"
            },
            <TPP.HallOfFame>{
                Group: "Hall of Fame", Name: "Hall of Fame #2", Time: "17d 20h 18m", Attempts: 1, IDNo: "58192", Party: [
                    { Number: 241, Pokemon: "Miltank", Gender: "Female", Nickname: "!L", Level: 100, IDNo: "58192" },
                    { Number: 135, Pokemon: "Jolteon", Gender: "Male", Nickname: "FOX,/!!!)u", Level: 100, IDNo: "58192" },
                    { Number: 230, Pokemon: "Kingdra", Gender: "Female", Nickname: "---sxjxKKK", Level: 100, IDNo: "58192" },
                    { Number: 164, Pokemon: "Noctowl", Gender: "Female", Nickname: "KENYA", Level: 100, IDNo: "01001" },
                    { Number: 142, Pokemon: "Aerodactyl", Gender: "Male", Nickname: "JHH", Level: 100, IDNo: "58192" },
                    { Number: 3, Pokemon: "Venusaur", Gender: "Male", Nickname: "ul:::utx", Level: 100, IDNo: "58192" },
                ],
                Image: "img/ribbons/champion.png"
            },
            <TPP.HallOfFame>{
                Group: "Hall of Fame", Name: "Hall of Fame #3", Time: "24d 3h 31m", Attempts: 2, IDNo: "58192", Party: [
                    { Number: 3, Pokemon: "Venusaur", Gender: "Male", Nickname: "ul:::utx", Level: 100, IDNo: "58192" },
                    { Number: 230, Pokemon: "Kingdra", Gender: "Female", Nickname: "---sxjxKKK", Level: 100, IDNo: "58192" },
                    { Number: 135, Pokemon: "Jolteon", Gender: "Male", Nickname: "FOX,/!!!)u", Level: 100, IDNo: "58192" },
                    { Number: 241, Pokemon: "Miltank", Gender: "Female", Nickname: "!L", Level: 100, IDNo: "58192" },
                    { Number: 164, Pokemon: "Noctowl", Gender: "Female", Nickname: "KENYA", Level: 100, IDNo: "01001" },
                    { Number: 142, Pokemon: "Aerodactyl", Gender: "Male", Nickname: "JHH", Level: 100, IDNo: "58192" },
                ],
                Image: "img/ribbons/champion.png"
            },
            <TPP.HallOfFame>{
                Group: "Hall of Fame", Name: "Hall of Fame #4", Time: "30d 1h 16m", Attempts: 11, IDNo: "58192", Party: [
                    { Number: 164, Pokemon: "Noctowl", Gender: "Female", Nickname: "KENYA", Level: 100, IDNo: "01001" },
                    { Number: 142, Pokemon: "Aerodactyl", Gender: "Male", Nickname: "JHH", Level: 100, IDNo: "58192" },
                    { Number: 241, Pokemon: "Miltank", Gender: "Female", Nickname: "!L", Level: 100, IDNo: "58192" },
                    { Number: 230, Pokemon: "Kingdra", Gender: "Female", Nickname: "---sxjxKKK", Level: 100, IDNo: "58192" },
                    { Number: 3, Pokemon: "Venusaur", Gender: "Male", Nickname: "ul:::utx", Level: 100, IDNo: "58192" },
                    { Number: 135, Pokemon: "Jolteon", Gender: "Male", Nickname: "FOX,/!!!)u", Level: 100, IDNo: "58192" },
                ],
                Image: "img/ribbons/champion.png"
            },
            { "Group": "Badges", "Image": "img/badges/boulder.png", "Name": "Boulder Badge", "Time": "0d 8h 28m", "Attempts": 5 },
            { "Group": "Badges", "Image": "img/badges/cascade.png", "Name": "Cascade Badge", "Time": "0d 17h 47m", "Attempts": 2 },
            { "Group": "Past Hosts", "Image": "img/hosts/baba.png", "Name": "Dream BABA", "Time": "15d 0h 53m", "Attempts": 2 },
            { "Group": "Past Hosts", "Name": "AJDNNW", "Image": "img/hosts/ajdnnw.png", "Time": "18d 19h 11m" },
            { "Group": "Past Hosts", "Name": "RED", "Image": "img/hosts/red.png", "Time": "30d 2h 29m", "Attempts": 1 },
            { "Group": "Past Hosts", "Name": "AIIIAAB", "Image": "img/hosts/aiiiaab.png", "Time": "30d 3h 23m", "Attempts": 1 },
            { "Group": "Badges", "Name": "Boulder Badge", "Time": "14d 1h 30m", "Attempts": 1, "Image": "img/badges/boulder.png" },
            { "Group": "Badges", "Name": "Cascade Badge", "Time": "12d 21h 32m", "Attempts": 2, "Image": "img/badges/cascade.png" },
            { "Group": "Badges", "Name": "Thunder Badge", "Time": "12d 8h 10m", "Attempts": 2, "Image": "img/badges/thunder.png" },
            { "Group": "Badges", "Name": "Rainbow Badge", "Time": "12d 10h 38m", "Attempts": 1, "Image": "img/badges/rainbow.png" },
            { "Group": "Badges", "Name": "Soul Badge", "Time": "12d 14h 4m", "Attempts": 2, "Image": "img/badges/soul.png" },
            { "Group": "Badges", "Name": "Marsh Badge", "Time": "12d 9h 51m", "Attempts": 2, "Image": "img/badges/marsh.png" },
            { "Group": "Badges", "Name": "Volcano Badge", "Time": "14d 7h 32m", "Attempts": 1, "Image": "img/badges/volcano.png" },
            { "Group": "Badges", "Name": "Earth Badge", "Time": "14d 11h 29m", "Attempts": 1, "Image": "img/badges/earth.png" },
            { "Group": "Rematch Badges", "Name": "Boulder Badge", "Time": "15d 3h 1m", "Attempts": 3, "Image": "img/badges/rematch/boulder.png" },
            { "Group": "Rematch Badges", "Name": "Cascade Badge", "Time": "14d 18h 27m", "Attempts": 2, "Image": "img/badges/rematch/cascade.png" },
            { "Group": "Rematch Badges", "Name": "Thunder Badge", "Time": "16d 7h 58m", "Attempts": 3, "Image": "img/badges/rematch/thunder.png" },
            { "Group": "Rematch Badges", "Name": "Rainbow Badge", "Time": "16d 9h 50m", "Attempts": 1, "Image": "img/badges/rematch/rainbow.png" },
            { "Group": "Rematch Badges", "Name": "Soul Badge", "Time": "16d 14h 48m", "Attempts": 3, "Image": "img/badges/rematch/soul.png" },
            { "Group": "Rematch Badges", "Name": "Marsh Badge", "Time": "20d 14h 57m", "Attempts": 5, "Image": "img/badges/rematch/marsh.png" },
            { "Group": "Rematch Badges", "Name": "Volcano Badge", "Time": "18d 18h 0m", "Attempts": 1, "Image": "img/badges/rematch/volcano.png" },
            { "Group": "Rematch Badges", "Name": "Earth Badge", "Time": "22d 14h 0m", "Attempts": 3, "Image": "img/badges/rematch/earth.png" },
            { "Group": "Badges", "Name": "Zephyr Badge", "Time": "1d 9h 39m", "Attempts": 1, "Image": "img/badges/zephyr.png" },
            { "Group": "Badges", "Name": "Hive Badge", "Time": "2d 5h 1m", "Attempts": 2, "Image": "img/badges/hive.png" },
            { "Group": "Badges", "Name": "Plain Badge", "Time": "2d 18h 37m", "Attempts": 2, "Image": "img/badges/plain.png" },
            { "Group": "Badges", "Name": "Fog Badge", "Time": "3d 16h 37m", "Attempts": 1, "Image": "img/badges/fog.png" },
            { "Group": "Badges", "Name": "Mineral Badge", "Time": "6d 7h 48m", "Attempts": 3, "Image": "img/badges/mineral.png" },
            { "Group": "Badges", "Name": "Storm Badge", "Time": "7d 14h 43m", "Attempts": 6, "Image": "img/badges/storm.png" },
            { "Group": "Badges", "Name": "Glacier Badge", "Time": "5d 16h 39m", "Attempts": 3, "Image": "img/badges/glacier.png" },
            { "Group": "Badges", "Name": "Rising Badge", "Time": "9d 0h 55m", "Attempts": 2, "Image": "img/badges/rising.png" },
            { "Group": "Rematch Badges", "Name": "Zephyr Badge", "Time": "26d 15h 40m", "Attempts": 1, "Image": "img/badges/rematch/zephyr.png" },
            { "Group": "Rematch Badges", "Name": "Hive Badge", "Time": "15d 14h 50m", "Attempts": 4, "Image": "img/badges/rematch/hive.png" },
            { "Group": "Rematch Badges", "Name": "Plain Badge", "Time": "15d 10h 51m", "Attempts": 5, "Image": "img/badges/rematch/plain.png" },
            { "Group": "Rematch Badges", "Name": "Fog Badge", "Time": "24d 19h 27m", "Attempts": 2, "Image": "img/badges/rematch/fog.png" },
            { "Group": "Rematch Badges", "Name": "Mineral Badge", "Time": "16d 5h 39m", "Attempts": 1, "Image": "img/badges/rematch/mineral.png" },
            { "Group": "Rematch Badges", "Name": "Glacier Badge", "Time": "15d 18h 8m", "Attempts": 2, "Image": "img/badges/rematch/glacier.png" },
            { "Group": "Rematch Badges", "Name": "Storm Badge", "Time": "16d 1h 43m", "Attempts": 2, "Image": "img/badges/rematch/storm.png" },
            { "Group": "Rematch Badges", "Name": "Rising Badge", "Time": "18d 23h 0m", "Attempts": 1, "Image": "img/badges/rematch/rising.png" },
            { "Group": "Elite Four", "Name": "Will", "Time": "10d 9h 58m", "Attempts": 2, "Image": "img/trainers/crystal/will.png" },
            { "Group": "Elite Four", "Name": "Koga", "Time": "10d 12h 33m", "Attempts": 6, "Image": "img/trainers/crystal/koga.png" },
            { "Group": "Elite Four", "Name": "Bruno", "Time": "11d 1h 19m", "Attempts": 8, "Image": "img/trainers/crystal/bruno.png" },
            { "Group": "Elite Four", "Name": "Karen", "Time": "11d 11h 58m", "Attempts": 2, "Image": "img/trainers/crystal/karen.png" },
            { "Group": "Elite Four", "Name": "Lance", "Time": "11d 23h 14m", "Attempts": 5, "Image": "img/trainers/crystal/lance.png" },
            { "Group": "Elite Four Rematch", "Name": "Will", "Time": "26d 18h 39m", "Attempts": 1, "Image": "img/trainers/crystal/rematch/will.png" },
            { "Group": "Elite Four Rematch", "Name": "Koga", "Time": "29d 23h 22m", "Attempts": 4, "Image": "img/trainers/crystal/rematch/koga.png" },
            { "Group": "Elite Four Rematch", "Name": "Bruno", "Time": "30d 0h 26m", "Attempts": 2, "Image": "img/trainers/crystal/rematch/bruno.png" },
            { "Group": "Elite Four Rematch", "Name": "Karen", "Time": "30d 0h 47m", "Attempts": 1, "Image": "img/trainers/crystal/rematch/karen.png" },
            { "Group": "Elite Four Rematch", "Name": "Lance", "Time": "30d 1h 5m", "Attempts": 1, "Image": "img/trainers/crystal/rematch/lance.png" },
            { "Name": "Yanma", "Time": "17d 1h 38m", "Group": "Pokemon" },
            { "Name": "Scizor", "Time": "17d 1h 43m", "Group": "Pokemon" },
            { "Name": "Metapod", "Time": "17d 2h 5m", "Group": "Pokemon" },
            { "Name": "Heracross", "Time": "17d 3h 1m", "Group": "Pokemon" },
            { "Name": "Venomoth", "Time": "17d 5h 59m", "Group": "Pokemon" },
            { "Name": "Butterfree", "Time": "17d 6h 4m", "Group": "Pokemon" },
            { "Name": "Pinsir", "Time": "17d 6h 26m", "Group": "Pokemon" },
            { "Name": "Ledian", "Time": "17d 6h 48m", "Group": "Pokemon" },
            { "Name": "Paras", "Time": "4d 15h 11m", "Group": "Pokemon" },
            { "Name": "Ledyba", "Time": "4d 15h 41m", "Group": "Pokemon" },
            { "Group": "Pokemon", "Name": "Spinarak", "Time": "1d 3h 49m" },
            { "Group": "Pokemon", "Name": "Delibird", "Time": "29d 10h 9m" },
            { "Group": "Pokemon", "Name": "Dratini", "Time": "29d 8h 47m" },
            { "Group": "Pokemon", "Name": "Bellossom", "Time": "29d 8h 9m" },
            { "Group": "Pokemon", "Name": "Forretress", "Time": "29d 5h 36m" },
            { "Group": "Pokemon", "Name": "Pineco", "Time": "3d 2h 36m" },
            { "Group": "Pokemon", "Name": "Aipom", "Time": "29d 2h 0m" },
            { "Group": "Pokemon", "Name": "Hoothoot", "Time": "1d 6h 57m" },
            { "Group": "Pokemon", "Name": "Spearow", "Time": "28d 8h 31m" },
            { "Group": "Pokemon", "Name": "Exeggcute", "Time": "28d 23h 7m" },
            { "Group": "Pokemon", "Name": "Pikachu", "Time": "28d 23h 1m" },
            { "Group": "Pokemon", "Name": "Sandshrew", "Time": "28d 19h 26m" },
            { "Group": "Pokemon", "Name": "Tangela", "Time": "28d 19h 2m" },
            { "Group": "Pokemon", "Name": "Jynx", "Time": "28d 18h 6m" },
            { "Group": "Pokemon", "Name": "Beedrill", "Time": "4d 15h 52m" },
            { "Group": "Pokemon", "Name": "Pidgeot", "Time": "28d 15h 39m" },
            { "Group": "Pokemon", "Name": "Blastoise", "Time": "28d 14h 11m" },
            { "Group": "Pokemon", "Name": "Charizard", "Time": "28d 13h 27m" },
            { "Group": "Pokemon", "Name": "Machamp", "Time": "28d 13h 14m" },
            { "Group": "Pokemon", "Name": "Dragonair", "Time": "28d 10h 53m" },
            { "Group": "Pokemon", "Name": "Poliwag", "Time": "19d 16h 38m" },
            { "Group": "Pokemon", "Name": "Croconaw", "Time": "28d 9h 26m" },
            { "Group": "Pokemon", "Name": "Poliwhirl", "Time": "19d 16h 30m" },
            { "Group": "Pokemon", "Name": "Abra", "Time": "28d 8h 47m" },
            { "Group": "Pokemon", "Name": "Machop", "Time": "28d 8h 35m" },
            { "Group": "Pokemon", "Name": "Grimer", "Time": "28d 7h 36m" },
            { "Group": "Pokemon", "Name": "Bellsprout", "Time": "18d 6h 38m" },
            { "Group": "Pokemon", "Name": "Muk", "Time": "28d 5h 40m" },
            { "Group": "Pokemon", "Name": "Sunflora", "Time": "21d 8h 46m" },
            { "Group": "Pokemon", "Name": "Skiploom", "Time": "20d 10h 22m" },
            { "Group": "Pokemon", "Name": "Sunkern", "Time": "23d 20h 2m" },
            { "Group": "Pokemon", "Name": "Togepi", "Time": "1d 20h 10m" },
            { "Group": "Pokemon", "Name": "Igglybuff", "Time": "27d 22h 36m" },
            { "Group": "Pokemon", "Name": "Girafarig", "Time": "15d 15h 28m" },
            { "Group": "Pokemon", "Name": "Pidgeotto", "Time": "16d 18h 5m" },
            { "Group": "Pokemon", "Name": "Stantler", "Time": "19d 8h 31m" },
            { "Group": "Pokemon", "Name": "Noctowl", "Time": "2d 16h 49m" },
            { "Group": "Pokemon", "Name": "Tyrogue", "Time": "23d 20h 20m" },
            { "Group": "Pokemon", "Name": "Gloom", "Time": "19d 11h 39m" },
            { "Group": "Pokemon", "Name": "Kangaskhan", "Time": "27d 20h 11m" },
            { "Group": "Pokemon", "Name": "Tyranitar", "Time": "27d 19h 27m" },
            { "Group": "Pokemon", "Name": "Exeggutor", "Time": "27d 18h 46m" },
            { "Group": "Pokemon", "Name": "Swinub", "Time": "1d 12h 5m" },
            { "Group": "Pokemon", "Name": "Slowpoke", "Time": "0d 18h 58m" },
            { "Group": "Pokemon", "Name": "Slowking", "Time": "27d 15h 40m" },
            { "Group": "Pokemon", "Name": "Wooper", "Time": "1d 21h 28m" },
            { "Group": "Pokemon", "Name": "Slowbro", "Time": "27d 14h 50m" },
            { "Group": "Pokemon", "Name": "Lapras", "Time": "27d 13h 16m" },
            { "Group": "Pokemon", "Name": "Hitmonchan", "Time": "27d 12h 42m" },
            { "Group": "Pokemon", "Name": "Slugma", "Time": "16d 3h 12m" },
            { "Group": "Pokemon", "Name": "Unown", "Time": "27d 11h 45m" },
            { "Group": "Pokemon", "Name": "Shuckle", "Time": "16d 3h 16m" },
            { "Group": "Pokemon", "Name": "Houndour", "Time": "3d 3h 39m" },
            { "Group": "Pokemon", "Name": "Azumarill", "Time": "17d 10h 43m" },
            { "Group": "Pokemon", "Name": "Xatu", "Time": "27d 1h 24m" },
            { "Group": "Pokemon", "Name": "Dunsparce", "Time": "27d 1h 3m" },
            { "Group": "Pokemon", "Name": "Ariados", "Time": "3d 6h 5m" },
            { "Group": "Pokemon", "Name": "Phanpy", "Time": "26d 23h 59m" },
            { "Group": "Pokemon", "Name": "Steelix", "Time": "24d 0h 42m" },
            { "Group": "Pokemon", "Name": "Graveler", "Time": "16d 3h 24m" },
            { "Group": "Pokemon", "Name": "Koffing", "Time": "21d 16h 45m" },
            { "Group": "Pokemon", "Name": "Mankey", "Time": "16d 17h 45m" },
            { "Group": "Pokemon", "Name": "Pidgey", "Time": "0d 21h 8m" },
            { "Group": "Pokemon", "Name": "Quagsire", "Time": "17d 10h 39m" },
            { "Group": "Pokemon", "Name": "Growlithe", "Time": "18d 14h 37m" },
            { "Group": "Pokemon", "Name": "Arcanine", "Time": "26d 14h 12m" },
            { "Group": "Pokemon", "Name": "Moltres", "Time": "26d 14h 6m" },
            { "Group": "Pokemon", "Name": "Magcargo", "Time": "26d 11h 58m" },
            { "Group": "Pokemon", "Name": "Flareon", "Time": "26d 11h 40m" },
            { "Group": "Pokemon", "Name": "Dragonite", "Time": "26d 10h 13m" },
            { "Group": "Pokemon", "Name": "Ditto", "Time": "26d 9h 29m" },
            { "Group": "Pokemon", "Name": "Golem", "Time": "26d 8h 59m" },
            { "Group": "Pokemon", "Name": "Granbull", "Time": "22d 8h 31m" },
            { "Group": "Pokemon", "Name": "Mr. Mime", "Time": "19d 11h 47m" },
            { "Group": "Pokemon", "Name": "Arbok", "Time": "16d 9h 8m" },
            { "Group": "Pokemon", "Name": "Ekans", "Time": "26d 1h 13m" },
            { "Group": "Pokemon", "Name": "Snubbull", "Time": "3d 2h 33m" },
            { "Group": "Pokemon", "Name": "Cleffa", "Time": "25d 23h 29m" },
            { "Group": "Pokemon", "Name": "Clefable", "Time": "25d 23h 17m" },
            { "Group": "Pokemon", "Name": "Marowak", "Time": "24d 1h 0m" },
            { "Group": "Pokemon", "Name": "Geodude", "Time": "23d 22h 28m" },
            { "Group": "Pokemon", "Name": "Onix", "Time": "19d 18h 3m" },
            { "Group": "Pokemon", "Name": "Clefairy", "Time": "25d 22h 5m" },
            { "Group": "Pokemon", "Name": "Drowzee", "Time": "25d 22h 26m" },
            { "Group": "Pokemon", "Name": "Zubat", "Time": "23d 22h 31m" },
            { "Group": "Pokemon", "Name": "Cubone", "Time": "25d 21h 55m" },
            { "Group": "Pokemon", "Name": "Jigglypuff", "Time": "25d 21h 19m" },
            { "Group": "Pokemon", "Name": "Weepinbell", "Time": "16d 18h 7m" },
            { "Group": "Pokemon", "Name": "Articuno", "Time": "25d 18h 4m" },
            { "Group": "Pokemon", "Name": "Shellder", "Time": "25d 15h 55m" },
            { "Group": "Pokemon", "Name": "Mewtwo", "Time": "25d 8h 52m" },
            { "Group": "Pokemon", "Name": "Magmar", "Time": "18d 12h 53m" },
            { "Group": "Pokemon", "Name": "Ninetales", "Time": "18d 12h 48m" },
            { "Group": "Pokemon", "Name": "Vulpix", "Time": "20d 22h 25m" },
            { "Group": "Pokemon", "Name": "Weezing", "Time": "18d 12h 44m" },
            { "Group": "Pokemon", "Name": "Rhyhorn", "Time": "17d 10h 50m" },
            { "Group": "Pokemon", "Name": "Rapidash", "Time": "18d 13h 6m" },
            { "Group": "Pokemon", "Name": "Houndoom", "Time": "25d 4h 1m" },
            { "Group": "Pokemon", "Name": "Tentacool", "Time": "18d 11h 31m" },
            { "Group": "Pokemon", "Name": "NidoranF", "Time": "25d 1h 55m" },
            { "Group": "Pokemon", "Name": "NidoranM", "Time": "20d 22h 20m" },
            { "Group": "Pokemon", "Name": "Diglett", "Time": "1d 0h 39m" },
            { "Group": "Pokemon", "Name": "Ho-Oh", "Time": "24d 10h 25m" },
            { "Group": "Pokemon", "Name": "Raikou", "Time": "24d 5h 17m" },
            { "Group": "Pokemon", "Name": "Magby", "Time": "24d 3h 59m" },
            { "Group": "Pokemon", "Name": "Quilava", "Time": "24d 0h 46m" },
            { "Group": "Pokemon", "Name": "Machoke", "Time": "24d 1h 19m" },
            { "Group": "Pokemon", "Name": "Sandslash", "Time": "20d 17h 32m" },
            { "Group": "Pokemon", "Name": "Dodrio", "Time": "23d 23h 24m" },
            { "Group": "Pokemon", "Name": "Blissey", "Time": "23d 22h 55m" },
            { "Group": "Pokemon", "Name": "Wartortle", "Time": "23d 22h 37m" },
            { "Group": "Pokemon", "Name": "Suicune", "Time": "23d 22h 9m" },
            { "Group": "Pokemon", "Name": "Golduck", "Time": "18d 11h 59m" },
            { "Group": "Pokemon", "Name": "Sentret", "Time": "23d 21h 46m" },
            { "Group": "Pokemon", "Name": "Hoppip", "Time": "23d 21h 44m" },
            { "Group": "Pokemon", "Name": "Mareep", "Time": "3d 2h 30m" },
            { "Group": "Pokemon", "Name": "Mew", "Time": "23d 8h 28m" },
            { "Group": "Pokemon", "Name": "Donphan", "Time": "20d 10h 23m" },
            { "Group": "Pokemon", "Name": "Rhydon", "Time": "21d 18h 13m" },
            { "Group": "Pokemon", "Name": "Gyarados", "Time": "19d 21h 0m" },
            { "Group": "Pokemon", "Name": "Ursaring", "Time": "22d 15h 44m" },
            { "Group": "Pokemon", "Name": "Corsola", "Time": "19d 17h 38m" },
            { "Group": "Pokemon", "Name": "Krabby", "Time": "18d 10h 53m" },
            { "Group": "Pokemon", "Name": "Hypno", "Time": "22d 15h 41m" },
            { "Group": "Pokemon", "Name": "Charmander", "Time": "18d 12h 59m" },
            { "Group": "Pokemon", "Name": "Dugtrio", "Time": "22d 10h 7m" },
            { "Group": "Pokemon", "Name": "Wigglytuff", "Time": "16d 17h 38m" },
            { "Group": "Pokemon", "Name": "Nidoking", "Time": "22d 8h 29m" },
            { "Group": "Pokemon", "Name": "Gengar", "Time": "22d 8h 1m" },
            { "Group": "Pokemon", "Name": "Omastar", "Time": "22d 7h 11m" },
            { "Group": "Pokemon", "Name": "Sudowoodo", "Time": "21d 19h 41m" },
            { "Group": "Pokemon", "Name": "Omanyte", "Time": "1d 17h 58m" },
            { "Group": "Pokemon", "Name": "Nidoqueen", "Time": "21d 18h 48m" },
            { "Group": "Pokemon", "Name": "Doduo", "Time": "20d 15h 35m" },
            { "Group": "Pokemon", "Name": "Magneton", "Time": "21d 8h 35m" },
            { "Group": "Pokemon", "Name": "Goldeen", "Time": "16d 2h 40m" },
            { "Group": "Pokemon", "Name": "Starmie", "Time": "21d 18h 2m" },
            { "Group": "Pokemon", "Name": "Lanturn", "Time": "21d 17h 33m" },
            { "Group": "Pokemon", "Name": "Chinchou", "Time": "21d 17h 32m" },
            { "Group": "Pokemon", "Name": "Electrode", "Time": "21d 17h 2m" },
            { "Group": "Pokemon", "Name": "Zapdos", "Time": "21d 16h 17m" },
            { "Group": "Pokemon", "Name": "Voltorb", "Time": "21d 13h 20m" },
            { "Group": "Pokemon", "Name": "Electabuzz", "Time": "21d 14h 36m" },
            { "Group": "Pokemon", "Name": "Elekid", "Time": "21d 13h 13m" },
            { "Group": "Pokemon", "Name": "Raichu", "Time": "21d 11h 57m" },
            { "Group": "Pokemon", "Name": "Flaaffy", "Time": "3d 6h 13m" },
            { "Group": "Pokemon", "Name": "Furret", "Time": "21d 8h 28m" },
            { "Group": "Pokemon", "Name": "Eevee", "Time": "3d 6h 33m" },
            { "Group": "Pokemon", "Name": "Alakazam", "Time": "20d 17h 17m" },
            { "Group": "Pokemon", "Name": "Haunter", "Time": "20d 17h 2m" },
            { "Group": "Pokemon", "Name": "Persian", "Time": "20d 15h 41m" },
            { "Group": "Pokemon", "Name": "Nidorino", "Time": "20d 15h 39m" },
            { "Group": "Pokemon", "Name": "Nidorina", "Time": "20d 15h 33m" },
            { "Group": "Pokemon", "Name": "Entei", "Time": "20d 14h 12m" },
            { "Group": "Pokemon", "Name": "Qwilfish", "Time": "20d 11h 18m" },
            { "Group": "Pokemon", "Name": "Horsea", "Time": "5d 20h 48m" },
            { "Group": "Pokemon", "Name": "Octillery", "Time": "19d 20h 10m" },
            { "Group": "Pokemon", "Name": "Larvitar", "Time": "19d 17h 50m" },
            { "Group": "Pokemon", "Name": "Teddiursa", "Time": "3d 2h 37m" },
            { "Group": "Pokemon", "Name": "Gligar", "Time": "20d 10h 17m" },
            { "Group": "Pokemon", "Name": "Piloswine", "Time": "19d 17h 0m" },
            { "Group": "Pokemon", "Name": "Murkrow", "Time": "19d 19h 46m" },
            { "Group": "Pokemon", "Name": "Politoed", "Time": "20d 7h 39m" },
            { "Group": "Pokemon", "Name": "Togetic", "Time": "16d 2h 50m" },
            { "Group": "Pokemon", "Name": "Seaking", "Time": "20d 5h 1m" },
            { "Group": "Pokemon", "Name": "Espeon", "Time": "20d 4h 49m" },
            { "Group": "Pokemon", "Name": "Feraligatr", "Time": "19d 21h 10m" },
            { "Group": "Pokemon", "Name": "Magikarp", "Time": "0d 11h 10m" },
            { "Group": "Pokemon", "Name": "Totodile", "Time": "19d 20h 50m" },
            { "Group": "Pokemon", "Name": "Marill", "Time": "16d 2h 53m" },
            { "Group": "Pokemon", "Name": "Staryu", "Time": "19d 20h 31m" },
            { "Group": "Pokemon", "Name": "Sneasel", "Time": "19d 19h 35m" },
            { "Group": "Pokemon", "Name": "Typhlosion", "Time": "19d 19h 13m" },
            { "Group": "Pokemon", "Name": "Hitmonlee", "Time": "19d 18h 36m" },
            { "Group": "Pokemon", "Name": "Pupitar", "Time": "19d 16h 57m" },
            { "Group": "Pokemon", "Name": "Crobat", "Time": "19d 16h 49m" },
            { "Group": "Pokemon", "Name": "Mantine", "Time": "19d 16h 32m" },
            { "Group": "Pokemon", "Name": "Kadabra", "Time": "16d 17h 39m" },
            { "Group": "Pokemon", "Name": "Raticate", "Time": "19d 11h 42m" },
            { "Group": "Pokemon", "Name": "Vileplume", "Time": "19d 11h 58m" },
            { "Group": "Pokemon", "Name": "Oddish", "Time": "0d 18h 45m" },
            { "Group": "Pokemon", "Name": "Lickitung", "Time": "19d 9h 41m" },
            { "Group": "Pokemon", "Name": "Kabutops", "Time": "19d 9h 34m" },
            { "Group": "Pokemon", "Name": "Kabuto", "Time": "19d 9h 27m" },
            { "Group": "Pokemon", "Name": "Seel", "Time": "18d 5h 48m" },
            { "Group": "Pokemon", "Name": "Seadra", "Time": "5d 21h 24m" },
            { "Group": "Pokemon", "Name": "Parasect", "Time": "19d 8h 9m" },
            { "Group": "Pokemon", "Name": "Victreebel", "Time": "19d 8h 23m" },
            { "Group": "Pokemon", "Name": "Charmeleon", "Time": "18d 13h 10m" },
            { "Group": "Pokemon", "Name": "Cloyster", "Time": "18d 11h 41m" },
            { "Group": "Pokemon", "Name": "Kingler", "Time": "18d 11h 28m" },
            { "Group": "Pokemon", "Name": "Tentacruel", "Time": "18d 11h 11m" },
            { "Group": "Pokemon", "Name": "Dewgong", "Time": "18d 11h 6m" },
            { "Group": "Pokemon", "Name": "Ponyta", "Time": "18d 6h 45m" },
            { "Group": "Pokemon", "Name": "Poliwrath", "Time": "18d 6h 43m" },
            { "Group": "Pokemon", "Name": "Porygon", "Time": "18d 5h 41m" },
            { "Group": "Pokemon", "Name": "Misdreavus", "Time": "17d 21h 37m" },
            { "Group": "Pokemon", "Name": "Smoochum", "Time": "17d 21h 2m" },
            { "Group": "Pokemon", "Name": "Psyduck", "Time": "17d 10h 32m" },
            { "Group": "Pokemon", "Name": "Lugia", "Time": "17d 10h 30m" },
            { "Group": "Pokemon", "Name": "Primeape", "Time": "16d 17h 40m" },
            { "Group": "Pokemon", "Name": "Snorlax", "Time": "16d 17h 33m" },
            { "Group": "Pokemon", "Name": "Porygon2", "Time": "16d 8h 42m" },
            { "Group": "Pokemon", "Name": "Wobbuffet", "Time": "16d 3h 8m" },
            { "Group": "Pokemon", "Name": "Golbat", "Time": "16d 2h 59m" },
            { "Group": "Pokemon", "Name": "Hitmontop", "Time": "15d 23h 46m" },
            { "Group": "Pokemon", "Name": "Tauros", "Time": "15d 21h 32m" },
            { "Group": "Pokemon", "Name": "Smeargle", "Time": "15d 15h 36m" },
            { "Group": "Pokemon", "Name": "Celebi", "Time": "15d 12h 52m" },
            { "Group": "Pokemon", "Name": "Kingdra", "Time": "10d 0h 35m" },
            { "Group": "Pokemon", "Name": "Skarmory", "Time": "7d 17h 21m" },
            { "Group": "Pokemon", "Name": "Caterpie", "Time": "6d 17h 16m" },
            { "Group": "Pokemon", "Name": "Venonat", "Time": "0d 18h 41m" },
            { "Group": "Pokemon", "Name": "Weedle", "Time": "2d 20h 39m" },
            { "Group": "Pokemon", "Name": "Jolteon", "Time": "6d 1h 45m" },
            { "Group": "Pokemon", "Name": "Remoraid", "Time": "5d 20h 45m" },
            { "Group": "Pokemon", "Name": "Aerodactyl", "Time": "4d 17h 8m" },
            { "Group": "Pokemon", "Name": "Bayleef", "Time": "4d 15h 58m" },
            { "Group": "Pokemon", "Name": "Chansey", "Time": "4d 8h 42m" },
            { "Group": "Pokemon", "Name": "Scyther", "Time": "4d 8h 40m" },
            { "Group": "Pokemon", "Name": "Natu", "Time": "4d 8h 35m" },
            { "Group": "Pokemon", "Name": "Fearow", "Time": "4d 7h 27m" },
            { "Group": "Pokemon", "Name": "Vaporeon", "Time": "4d 1h 42m" },
            { "Group": "Pokemon", "Name": "Squirtle", "Time": "3d 13h 22m" },
            { "Group": "Pokemon", "Name": "Ampharos", "Time": "3d 10h 29m" },
            { "Group": "Pokemon", "Name": "Egg", "Time": "1d 15h 6m" },
            { "Group": "Pokemon", "Name": "Miltank", "Time": "3d 6h 29m" },
            { "Group": "Pokemon", "Name": "Umbreon", "Time": "3d 6h 11m" },
            { "Group": "Pokemon", "Name": "Pichu", "Time": "3d 0h 39m" },
            { "Group": "Pokemon", "Name": "Venusaur", "Time": "1d 10h 23m" },
            { "Group": "Pokemon", "Name": "Cyndaquil", "Time": "1d 3h 56m" },
            { "Group": "Pokemon", "Name": "Gastly", "Time": "0d 22h 6m" },
            { "Group": "Pokemon", "Name": "Meowth", "Time": "0d 20h 48m" },
            { "Group": "Pokemon", "Name": "Magnemite", "Time": "0d 20h 46m" },
            { "Group": "Pokemon", "Name": "Kakuna", "Time": "0d 18h 51m" },
            { "Group": "Pokemon", "Name": "Farfetch'd", "Time": "0d 16h 56m" },
            { "Group": "Pokemon", "Name": "Ivysaur", "Time": "0d 9h 1m" },
            { "Group": "Pokemon", "Name": "Rattata", "Time": "0d 1h 30m" },
            { "Group": "Pokemon", "Name": "Bulbasaur", "Time": "0d 0h 9m" },
            { "Group": "Pokemon", "Name": "Jumpluff", "Time": "29d 14h 22m" },
            { "Group": "Pokemon", "Name": "Chikorita", "Time": "29d 16h 18m" },
            { "Group": "Pokemon", "Name": "Meganium", "Time": "29d 15h 51m" }
        ]
    }
);