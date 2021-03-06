/**
 * Exodus Model View View-Model
 *
 * This file is for modeling the basic View Model as well as any extra
 * Knockout based calculation functionality
 */

var ExodusMVVM = {
    TYPE_LIST : ko.observableArray([""]),
    ATK_TYPE_LIST: ko.observableArray(["Typeless"]),
    NATURE_LIST: ko.observableArray([""]),

    initiative : ko.observableArray([
        {
            name: ko.observable("Character Name"),
            image: '/img/pokemon-profiles/133.png',
            species: "133 - Eevee", //TODO: create computed observable
            pokedex: ko.observable("133"),
            health: ko.observable(29).extend({ numeric: 0 }),
            injuries: ko.observable(0).extend({ numeric: 0 }),
            maxHealth: 0,
            injuredHealth: 0,
            maxHealthDisplay: 0,
            tick: 0,
            afflictions: ko.observableArray(["Poisoned"]),
            captureRate: 0,
            isShiny: ko.observable(false),
            level: ko.observable(12).extend({ numeric: 0 }),
            type1: ko.observable("Normal"),
            type2: ko.observable(""),
            nature: "Hardy",
            gender: "Male",
            hp: {
                base: ko.observable(6).extend({ numeric: 0 }),
                lvlup: ko.observable(2).extend({ numeric: 0 }),
                total: 0
            },
            atk: {
                base: ko.observable(6).extend({ numeric: 0 }),
                lvlup: ko.observable(2).extend({ numeric: 0 }),
                total: 0,
                cs: ko.observable(0).extend({ numeric: 0 }),
                final: 0
            },
            def: {
                base: ko.observable(5).extend({ numeric: 0 }),
                lvlup: ko.observable(2).extend({ numeric: 0 }),
                total: 0,
                cs: ko.observable(0).extend({ numeric: 0 }),
                final: 0
            },
            satk: {
                base: ko.observable(5).extend({ numeric: 0 }),
                lvlup: ko.observable(2).extend({ numeric: 0 }),
                total: 0,
                cs: ko.observable(0).extend({ numeric: 0 }),
                final: 0
            },
            sdef: {
                base: ko.observable(7).extend({ numeric: 0 }),
                lvlup: ko.observable(2).extend({ numeric: 0 }),
                total: 0,
                cs: ko.observable(0).extend({ numeric: 0 }),
                final: 0
            },
            spd: {
                base: ko.observable(6).extend({ numeric: 0 }),
                lvlup: ko.observable(2).extend({ numeric: 0 }),
                total: 0,
                cs: ko.observable(0).extend({ numeric: 0 }),
                final: 0
            },
            capabilities: {},
            moves: ko.observableArray([]),
            abilities: ko.observableArray([]),
            onDexLoad: function() {
                this.onDexLoadObservable(!this.onDexLoadObservable());
            },
            onDexLoadObservable: ko.observable(0)
        },
        {
            name: ko.observable("Character Two"),
            image: '/img/pokemon-profiles/001.png',
            species: "001 - Bulbasaur", //TODO: create computed observable
            pokedex: ko.observable("001"),
            health: ko.observable(29).extend({ numeric: 0 }),
            injuries: ko.observable(0).extend({ numeric: 0 }),
            maxHealth: 0,
            injuredHealth: 0,
            maxHealthDisplay: 0,
            tick: 0,
            afflictions: ko.observableArray([]),
            captureRate: 0,
            isShiny: ko.observable(false),
            level: ko.observable(12).extend({ numeric: 0 }),
            type1: ko.observable("Grass"),
            type2: ko.observable(""),
            nature: "Cuddly",
            gender: "Female",
            hp: {
                base: ko.observable(6).extend({ numeric: 0 }),
                lvlup: ko.observable(2).extend({ numeric: 0 }),
                total: 0,
                cs: ko.observable(0).extend({ numeric: 0 }),
                final: 0
            },
            atk: {
                base: ko.observable(6).extend({ numeric: 0 }),
                lvlup: ko.observable(2).extend({ numeric: 0 }),
                total: 0,
                cs: ko.observable(0).extend({ numeric: 0 }),
                final: 0
            },
            def: {
                base: ko.observable(5).extend({ numeric: 0 }),
                lvlup: ko.observable(2).extend({ numeric: 0 }),
                total: 0,
                cs: ko.observable(0).extend({ numeric: 0 }),
                final: 0
            },
            satk: {
                base: ko.observable(5).extend({ numeric: 0 }),
                lvlup: ko.observable(2).extend({ numeric: 0 }),
                total: 0,
                cs: ko.observable(0).extend({ numeric: 0 }),
                final: 0
            },
            sdef: {
                base: ko.observable(7).extend({ numeric: 0 }),
                lvlup: ko.observable(2).extend({ numeric: 0 }),
                total: 0,
                cs: ko.observable(0).extend({ numeric: 0 }),
                final: 0
            },
            spd: {
                base: ko.observable(6).extend({ numeric: 0 }),
                lvlup: ko.observable(2).extend({ numeric: 0 }),
                total: 0,
                cs: ko.observable(0).extend({ numeric: 0 }),
                final: 0
            },
            capabilities: {},
            moves: ko.observableArray([]),
            abilities: ko.observableArray([]),
            onDexLoad: function() {
                this.onDexLoadObservable(!this.onDexLoadObservable());
            },
            onDexLoadObservable: ko.observable(0)
        }
    ]),

    currentChar: ko.observable(0),
    currentMove: ko.observable(0),

    onClickSelectChar: function (char) {
        ExodusMVVM.currentChar(ExodusMVVM.initiative.indexOf(char));
    },

    onClickSelectMove: function (move) {
        ExodusMVVM.currentMove(ExodusMVVM.getCurrentChar().moves().indexOf(move));
        $("#moveModal").modal('show');
    },

    createNewCharacter: function() {
        var newChar = {
            name: ko.observable("New Character"),
            image: '',
            species: ko.observable(""),
            pokedex: ko.observable(""),
            health: ko.observable(1).extend({ numeric: 0 }),
            injuries: ko.observable(0).extend({ numeric: 0 }),
            maxHealth: 0,
            injuredHealth: 0,
            maxHealthDisplay: 0,
            tick: 0,
            afflictions: ko.observableArray([]),
            captureRate: 0,
            isShiny: ko.observable(false),
            level: ko.observable(1).extend({ numeric: 0 }),
            type1: ko.observable(""),
            type2: ko.observable(""),
            nature: "Hardy",
            gender: "Male",
            hp: {
                base: ko.observable(10).extend({ numeric: 0 }),
                lvlup: ko.observable(0).extend({ numeric: 0 }),
                total: 0,
                cs: ko.observable(0).extend({ numeric: 0 }),
                final: 0
            },
            atk: {
                base: ko.observable(5).extend({ numeric: 0 }),
                lvlup: ko.observable(0).extend({ numeric: 0 }),
                total: 0,
                cs: ko.observable(0).extend({ numeric: 0 }),
                final: 0
            },
            def: {
                base: ko.observable(5).extend({ numeric: 0 }),
                lvlup: ko.observable(0).extend({ numeric: 0 }),
                total: 0,
                cs: ko.observable(0).extend({ numeric: 0 }),
                final: 0
            },
            satk: {
                base: ko.observable(5).extend({ numeric: 0 }),
                lvlup: ko.observable(0).extend({ numeric: 0 }),
                total: 0,
                cs: ko.observable(0).extend({ numeric: 0 }),
                final: 0
            },
            sdef: {
                base: ko.observable(5).extend({ numeric: 0 }),
                lvlup: ko.observable(0).extend({ numeric: 0 }),
                total: 0,
                cs: ko.observable(0).extend({ numeric: 0 }),
                final: 0
            },
            spd: {
                base: ko.observable(5).extend({ numeric: 0 }),
                lvlup: ko.observable(0).extend({ numeric: 0 }),
                total: 0,
                cs: ko.observable(0).extend({ numeric: 0 }),
                final: 0
            },
            capabilities: {},
            moves: ko.observableArray([]),
            abilities: ko.observableArray([]),
            onDexLoad: function() {
                this.onDexLoadObservable(!this.onDexLoadObservable());
            },
            onDexLoadObservable: ko.observable(false)
        };

        createCharComputed(0, newChar);

        return newChar;
    },

    onClickRemoveAffliction: onClickRemoveAffliction
};

function loadComputed() {
    ExodusMVVM.getCurrentChar = ko.computed(function() {
        return ExodusMVVM.initiative()[ExodusMVVM.currentChar()];
    }, ExodusMVVM);

    ExodusMVVM.getCurrentMove = ko.computed(function() {
        return ExodusMVVM.initiative()[ExodusMVVM.currentChar()].moves()[ExodusMVVM.currentMove()];
    }, ExodusMVVM);

    $.each(ExodusMVVM.initiative(), createCharComputed);
}

function createCharComputed(index, character) {
    // Scene Stats
    character.maxHealth = ko.pureComputed(function() {
        return this.level() + this.hp.total() * 3 + 10;
    }, character);
    character.injuredHealth = ko.pureComputed(function() {
        return Math.trunc(this.maxHealth() * (1 - this.injuries() / 10));
    }, character);
    character.maxHealthDisplay = ko.pureComputed(function() {
        return this.injuredHealth() + "/" + this.maxHealth();
    }, character);
    character.tick = ko.pureComputed(function() {
        return Math.trunc(this.maxHealth() / 10);
    }, character);
    character.captureRate = ko.pureComputed(function () {
        // Starting rate is 100 subtracted by twice their level
        var rate = 100 - this.level() * 2;
        var health = this.health() / this.maxHealth();

        // Add health based bonus
        if (this.health() === 1) {
            rate += 30;
        } else if (health > .75) {
            rate -= 30;
        } else if (health <= .75 && health >= .5) {
            rate -= 15;
        } else if (health <= .25) {
            rate += 15
        }

        // Add Shiny bonus
        if (this.isShiny()) {
            rate -= 10;
        }

        // Add affliction bonus
        $.each(this.afflictions(), function (k, v) {
            if (v === "Burned" || v === "Frozen" || v === "Paralysis" || v === "Poisoned" || v === "Badly Poisoned" || v === "Stuck") {
                rate += 10;
            } else if (v === "Bad Sleep" || v === "Confused" || v === "Cursed" || v === "Disabled" || v === "Rage" ||
                        v === "Flinch" || v === "Infatuation" || v === "Sleep" || v === "Suppressed" || v === "Temporary Hit Points" || v === "Slowed") {
                rate += 5;
            }
        });

        // Add injury bonus
        rate += this.injuries() * 5;

        // Pokedex related info
        if (this.pokedex() in PokedexCache) {
            var dexData = PokedexCache[this.pokedex()];
            var currentStage = 0, maxStage = 0;

            // Pokemon Evolution Stage
            $.each(dexData['EvolutionStages'], function (k, v) {
                if (v['Species'] === dexData['Species']) {
                    currentStage = v['Stage'];
                }
                if (v['Stage'] > maxStage) {
                    maxStage = v['Stage'];
                }
            });

            if (maxStage === currentStage) {
                rate -= 10;
            } else if (maxStage - currentStage >= 2) {
                rate += 10;
            }

            //TODO: Legendary (must be added to API)
        } else {
            loadPokedexDataForCharacter(this);
        }

        // Subscribe to Pokedex Async Observable
        this.onDexLoadObservable();

        return rate;
    }, character);

    // Non-Combat Totals
    character.hp.total = ko.pureComputed(function() {
        return this.base() + this.lvlup();
    }, character.hp);
    character.atk.total = ko.pureComputed(function() {
        return this.base() + this.lvlup();
    }, character.atk);
    character.def.total = ko.pureComputed(function() {
        return this.base() + this.lvlup();
    }, character.def);
    character.satk.total = ko.pureComputed(function() {
        return this.base() + this.lvlup();
    }, character.satk);
    character.sdef.total = ko.pureComputed(function() {
        return this.base() + this.lvlup();
    }, character.sdef);
    character.spd.total = ko.pureComputed(function() {
        return this.base() + this.lvlup();
    }, character.spd);

    // Final Adjusted Totals
    character.atk.final = ko.pureComputed(function() {
        return Math.ceil(this.total() * this.cs() * 0.1 + this.total());
    }, character.atk);
    character.def.final = ko.pureComputed(function() {
        return Math.ceil(this.total() * this.cs() * 0.1 + this.total());
    }, character.def);
    character.satk.final = ko.pureComputed(function() {
        return Math.ceil(this.total() * this.cs() * 0.1 + this.total());
    }, character.satk);
    character.sdef.final = ko.pureComputed(function() {
        return Math.ceil(this.total() * this.cs() * 0.1 + this.total());
    }, character.sdef);
    character.spd.final = ko.pureComputed(function() {
        return Math.ceil(this.total() * this.cs() * 0.1 + this.total());
    }, character.spd);
}

function fetchMovesFromList(char, moves) {
    var url = "http://ptu.will-step.com/api/v1/moves/?names=" + encodeURI(JSON.stringify(moves));
    $.getJSON(url, function (json) {
        createNewMovesFromAPIReturn(char, json);
    });
}

function createNewMovesFromAPIReturn(char, json) {
    $.each(json, function (name, data) {
        data["Name"] = name;
        data["Class"] = ko.observable(data["Class"]);
        data["Type"] = ko.observable(data["Type"]);

        if (!data["Effect"])
            data["Effect"] = "";

        char.moves.push(data);
    });
}


// Initialize Type list
$.getJSON("http://ptu.will-step.com/api/v1/types", function (json) {
    $.each(json, function (k, v) {
        ExodusMVVM.TYPE_LIST.push(k.charAt(0).toUpperCase() + k.slice(1));
        ExodusMVVM.ATK_TYPE_LIST.push(k.charAt(0).toUpperCase() + k.slice(1));
    });
    TypeEffectivity = json;
});

// Initialize Natures list
$.getJSON("http://ptu.will-step.com/api/v1/natures", function (json) {
    $.each(json, function (k, v) {
        ExodusMVVM.NATURE_LIST.push(k);
    });
    Natures = json;
});


loadComputed();