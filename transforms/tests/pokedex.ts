/// <reference path="tests.ts" />
/// <reference path="../pokedex/globalpokedex.ts" />
module TPP.Transforms.Pokedex {
    var startTime = new Date(2014, 6, 10, 0, 0, 0).valueOf() / 1000;
    var mockDex = ["MissingNo.", "Mew", "Pikachu", "Butterfree", "Jirachi", "Entei", "Mimikyu", "Marill", "Azumarill"];
    var mockRun: Run = {
        ColorPrimary: "white",
        ColorSecondary: "black",
        RunName: "Test",
        HostName: "TestR",
        Duration: "1w",
        StartTime: startTime,
        Events: [
            { Group: "Pokemon", Name: "Marill", Time: "1m" },
            { Group: "Pokemon", Name: "Azumarill", Time: "1d" },
            { Group: "Pokemon", Name: "Pikachu", Time: "2d" },
            { Group: "Pokemon", Name: "Mimikyu", Time: "3d" },
            { Group: "Pokemon", Name: "TriHard", Class: "Entei", Time: "4m" },
            { Group: "Pokemon", Name: "Marill", Time: "5d" },
            { Group: "Pokemon", Name: "MissingNo.", Time: "6d" },
            { Group: "Pokemon", Name: "Dunsparce", Time: "1d5m" },
            <HallOfFame>{
                Time: "5d2h",
                Party: [
                    { Pokemon: "Azumarill", Nickname: "Test4", Level: 100 },
                    { Pokemon: "Entei", Nickname: "Test3", Level: 100 },
                ],
                Image: "First Ribbon"
            },
            <HallOfFame>{
                Time: "6d4h",
                Party: [
                    { Pokemon: "Azumarill", Nickname: "Test4", Level: 100 },
                    { Pokemon: "Entei", Nickname: "Test6", PreviousNick: "Test3", Level: 100 },
                    { Pokemon: "Mimikyu", Nickname: "Test2", Level: 100 },
                    { Pokemon: "Mimikyu", Nickname: "Test3", Level: 100 },
                ],
                Image: "Second Ribbon"
            }
        ]
    }
    var mockPrequel: Run = {
        ColorPrimary: "blue",
        ColorSecondary: "yellow",
        RunName: "Test2",
        HostName: "Tester",
        Duration: "2d",
        StartTime: startTime - 500,
        Events: [
            { Group: "Pokemon", Name: "Mew", Time: "1d" },
            { Group: "Pokemon", Name: "Azumarill", Time: "1d2m" }
        ]
    };
    var mockRevisit: Run = {
        ColorPrimary: "white",
        ColorSecondary: "black",
        RunName: "Test Again",
        HostName: "TestR",
        Duration: "1d",
        StartTime: startTime + 2500,
        Events: [
            { Group: "Pokemon", Name: "Azumarill", Time: "1d" },
            { Group: "Pokemon", Name: "Mew", Time: "1d6h" }
        ],
        Revisit: { Collection: "Testing", Run: "Test" }
    }
    var mockCollection: Collection = {
        Name: "Testing",
        Scale: Scale.Minutes,
        Runs: [mockRun, mockPrequel, mockRevisit]
    };

    var runSummary = new RunSummary(mockRun, mockDex);
    var collectionSummary = new CollectionSummary([mockCollection], mockDex);

    describe("Pokedex.RunSummary", () => {
        it("Should count Azumarill as being owned on 2014/6/11 00:00:00", () => assert.equal(runSummary.OwnedDict["Azumarill"], startTime + (24 * 60 * 60)));
        it("Should count Marill as being owned on 2014/6/10 00:01:00 ", () => assert.equal(runSummary.OwnedDict["Marill"], startTime + 60));
        it("Should count Entei as being owned on 2014/6/10 00:04:00 ", () => assert.equal(runSummary.OwnedDict["Entei"], startTime + (4 * 60)));
        it("Should not count Mew as owned", () => assert.equal(runSummary.OwnedDict["Mew"], false));
        it("Should not know about Dunsparce", () => assert.equal(runSummary.OwnedDict["Dunsparce"], undefined));
        it("Should have 6 Pokémon in Hall of Fame", () => assert.equal(runSummary.HallOfFame.length, 6));
        it("Should be the second run in CollectionSummary", () => assert.equal(runSummary.Run == collectionSummary.Summary[1].Run, true));
    });

    describe("Pokedex.CollectionSummary", () => {
        it("Should have 3 run summaries", () => assert.equal(collectionSummary.Summary.length, 3));
        it("Should have 4 unique Hall of Fame entries", () => assert.equal(collectionSummary.HallOfFame.length, 4));
    });

    var azuEntry = new DexEntry("Azumarill", 184, collectionSummary);
    var mewEntry = new DexEntry("Mew", 151, collectionSummary);
    var dugEntry = new DexEntry("Dugtrio", 51, collectionSummary);

    describe("Pokedex.DexEntry", () => {
        it("Azumarill should be Owned", () => assert.equal(azuEntry.IsOwned, true));
        it("Azumarill should be owned by 2 hosts", () => assert.equal(azuEntry.Owners.length, 2));
        it("Azumarill should have a single Hall of Fame ribbon", () => assert.equal(azuEntry.HallOfFame.length, 1));
        it("Mew should be owned by 2 hosts", () => assert.equal(mewEntry.Owners.length, 2));
        it("Dugtrio should not be Owned", () => assert.equal(dugEntry.IsOwned, false));
    });

    var dex = new GlobalDex(collectionSummary, mockDex);

    describe("Pokedex.GlobalDex", () => {
        it("Owned count should be 6.", () => assert.equal(dex.TotalOwned, 6));
        it("Total count should be 8.", () => assert.equal(dex.TotalInDex, 8));
        it("MissingNo. should be first with default sorting.", () => assert.equal(dex.Entries[0].Pokemon, "MissingNo."));
        it("MissingNo. should be Owned.", () => assert.equal(dex.Entries[0].IsOwned, true));
    });
}