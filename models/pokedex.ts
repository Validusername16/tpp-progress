/// <reference path="collection.ts" />
module TPP.Pokedex {

    export interface HofEntry {
        Pokemon: string;
        Ribbon: string;
        RunName: string;
        HostName: string;
        Nickname: string;
        UnmodifiedNick: string;
        PreviousNick: string;
        Time: number;
    }

    export class RunSummaryBase {
        public OwnedDict: { [key: string]: false | number } = {};
        public HallOfFame: TPP.Pokedex.HofEntry[] = [];
        public Run: Run;
    }

    export class CollectionSummaryBase {
        Summary: RunSummaryBase[] = [];
        HallOfFame: HofEntry[] = [];
    }

    export class DexEntryBase {
        Number: number;
        Pokemon: string;
        Owners: {
            Run: Run;
            CaughtOn: number;
        }[] = [];
        HallOfFame: HofEntry[] = [];
        get IsOwned() {
            return this.Owners && this.Owners.length > 0;
        }
        get FirstOwnedRun() {
            return this.IsOwned ? this.Owners[0].Run : <Run>{};
        }
        get FirstCaughtDate() {
            return this.IsOwned ? this.Owners[0].CaughtOn : false;
        }
    }

    export enum DexSorting {
        "Pokédex Number",
        "Alphabetical",
        "First Owned"
    }

    export class GlobalDexBase {
        Entries: DexEntryBase[] = [];

        private get NoGlitchMon() {
            return this.Entries.filter(e => !(e.Number == 0 && e.Pokemon == "MissingNo."));
        }

        public get TotalOwned() {
            return this.NoGlitchMon.filter(e => e.IsOwned).length;
        }

        public get TotalInDex() {
            return this.NoGlitchMon.length;
        }

        public get OwnedPercentage() {
            return (this.TotalOwned / this.TotalInDex) * 100;
        }


        public SortDex(sortBy: DexSorting | string = 0) {
            switch (sortBy) {
                case 0:
                case DexSorting[0]:
                default:
                    this.Entries = this.Entries.sort((e1, e2) => e1.Number - e2.Number);
                    break;

                case 1:
                case DexSorting[1]:
                    this.Entries = this.Entries.sort((e1, e2) => e1.Pokemon.localeCompare(e2.Pokemon));
                    break;

                case 2:
                case DexSorting[2]:
                    this.Entries = this.Entries.sort((e1, e2) => (e1.FirstCaughtDate || Date.now()) - (e2.FirstCaughtDate || Date.now()));
                    break;
            }
        }

        public FilterDexToOwned() {
            this.Entries = this.Entries.filter(e => e.IsOwned);
        }

        public FilterDexToUnowned() {
            this.Entries = this.Entries.filter(e => !e.IsOwned);
        }

        public FilterDexRuns(runList: (string | Run)[]) {
            var runs = runList.map(r => typeof r === "string" ? r.toLowerCase().trim() : r);
            this.Entries = this.Entries.filter(e => e.Owners.filter(o => runs.filter(r => {
                if (typeof r === "string")
                    return o.Run.RunName.toLowerCase().indexOf(r) >= 0;
                return o.Run.RunName == r.RunName;
            }).length > 0).length > 0);
        }

        public FilterDexPokemon(pokeList: string[]) {
            pokeList = pokeList.map(p => p.toLowerCase().trim());
            this.Entries = this.Entries.filter(e => pokeList.indexOf(e.Pokemon.toLowerCase()) >= 0);
        }

        public FilterDexToHallOfFame() {
            this.Entries = this.Entries.filter(e => e.HallOfFame.length > 0);
        }

    }

}