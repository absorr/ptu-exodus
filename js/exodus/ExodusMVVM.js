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
            pokedex: "133",
            health: ko.observable(29).extend({ numeric: 0 }),
            injuries: ko.observable(0).extend({ numeric: 0 }),
            maxHealth: 0,
            injuredHealth: 0,
            maxHealthDisplay: 0,
            tick: 0,
            afflictions: ko.observableArray(["Poisoned"]),
            level: ko.observable(12).extend({ numeric: 0 }),
            type1: ko.observable("Normal"),
            type2: ko.observable(""),
            nature: "Hardy",
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
            }
        },
        {
            name: ko.observable("Character Two"),
            image: '/img/pokemon-profiles/001.png',
            species: "001 - Bulbasaur", //TODO: create computed observable
            pokedex: "001",
            health: ko.observable(29).extend({ numeric: 0 }),
            injuries: ko.observable(0).extend({ numeric: 0 }),
            maxHealth: 0,
            injuredHealth: 0,
            maxHealthDisplay: 0,
            tick: 0,
            afflictions: ko.observableArray([]),
            level: ko.observable(12).extend({ numeric: 0 }),
            type1: ko.observable("Grass"),
            type2: ko.observable(""),
            nature: "Cuddly",
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
            }
        }
    ]),

    currentChar: ko.observable(0),

    onClickChangeChar: function (char) {
        ExodusMVVM.currentChar(ExodusMVVM.initiative.indexOf(char));
    },

    createNewCharacter: function() {
        var newChar = {
            name: ko.observable("New Character"),
            image: '',
            species: "",
            pokedex: "",
            health: ko.observable(1).extend({ numeric: 0 }),
            injuries: ko.observable(0).extend({ numeric: 0 }),
            maxHealth: 0,
            injuredHealth: 0,
            maxHealthDisplay: 0,
            tick: 0,
            afflictions: ko.observableArray([]),
            level: ko.observable(1).extend({ numeric: 0 }),
            type1: ko.observable(""),
            type2: ko.observable(""),
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
            }
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