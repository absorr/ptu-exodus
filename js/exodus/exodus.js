const AFFLICTIONS = [
    "Burned", "Frozen", "Paralysis", "Poisoned", "Bad Sleep", "Confused",
    "Cursed", "Disabled", "Rage", "Flinch", "Infatuation", "Sleep", "Suppressed", "Temporary Hit Points",
    "Fainted", "Blindness", "Total Blindness", "Slowed", "Stuck", "Trapped", "Tripped", "Vulnerable"
];

var PokedexCache = {};

var TypeEffectivity = {};
var Natures = {};

// Bind model to Knockout
$(function () {
    ko.applyBindings(ExodusMVVM);

    ko.bindingHandlers.bgColorByType = {
        update: function(element, valueAccessor, allBindings) {
            var value = ko.unwrap(valueAccessor()).toLowerCase();
            var elem = $(element);

            var classes = ["bg-t-normal","bg-t-fire","bg-t-fighting","bg-t-flying","bg-t-poison","bg-t-ground","bg-t-rock",
                "bg-t-bug","bg-t-ghost","bg-t-steel","bg-t-water","bg-t-grass","bg-t-electric","bg-t-psychic","bg-t-ice",
                "bg-t-dragon","bg-t-dark","bg-t-fairy","bg-t-none"];

            $.each(classes, function (k, className) {
                if (className.includes(value)) {
                    elem.addClass(className);
                } else {
                    elem.removeClass(className);
                }
            });
        }
    };

    ko.bindingHandlers.bgGradientByType = {
        update: function(element, valueAccessor, allBindings) {
            var value = ko.unwrap(valueAccessor()).toLowerCase();
            var elem = $(element);

            var classes = ["bg-t-normal-gradient","bg-t-fire-gradient","bg-t-fighting-gradient","bg-t-flying-gradient",
                "bg-t-poison-gradient","bg-t-ground-gradient","bg-t-rock-gradient","bg-t-bug-gradient","bg-t-ghost-gradient",
                "bg-t-steel-gradient","bg-t-water-gradient","bg-t-grass-gradient","bg-t-electric-gradient","bg-t-psychic-gradient",
                "bg-t-ice-gradient","bg-t-dragon-gradient","bg-t-dark-gradient","bg-t-fairy-gradient","bg-t-none-gradient"];

            $.each(classes, function (k, className) {
                if (className.includes(value)) {
                    elem.addClass(className);
                } else {
                    elem.removeClass(className);
                }
            });
        }
    };
});

ko.extenders.numeric = function(target, precision) {
    //create a writable computed observable to intercept writes to our observable
    var result = ko.pureComputed({
        read: target,  //always return the original observables value
        write: function(newValue) {
            var current = target(),
                roundingMultiplier = Math.pow(10, precision),
                newValueAsNum = isNaN(newValue) ? 0 : +newValue,
                valueToWrite = Math.round(newValueAsNum * roundingMultiplier) / roundingMultiplier;

            //only write if it changed
            if (valueToWrite !== current) {
                target(valueToWrite);
            } else {
                //if the rounded value is the same, but a different value was written, force a notification for the current field
                if (newValue !== current) {
                    target.notifySubscribers(valueToWrite);
                }
            }
        }
    }).extend({ notify: 'always' });

    //initialize with current value to make sure it is rounded appropriately
    result(target());

    //return the new computed observable
    return result;
};

function onBattleFormLoad() {
    $('#battle-char-afflict-name').autocomplete({
        minLength: 0,
        source: AFFLICTIONS
    }).focus(function() {
        var val = $(this).val();
        $(this).autocomplete('search', val);
    });
}

function onClickAddNewCharacter() {


    ExodusMVVM.initiative.push(newChar);
}

function onClickDamage() {
    var character = ExodusMVVM.getCurrentChar();
    var parDamage = $("#battle-char-deal-amt").val();
    var parAction = $("#battle-char-deal-act").val();
    var parType = $("#battle-char-deal-type").val();

    doDamage(character, parDamage, parAction, parType);
}

function onClickAddAffliction() {
    var elem = $("#battle-char-afflict-name");
    var val = elem.val();

    // VALIDATION

    // Affliction must be valid entry from enumerator
    if (!AFFLICTIONS.includes(val)) {
        displayMessage("Invalid affliction. Please select a value from the dropdown.", "warning");
        return;
    }

    // Affliction must not already be added (but don't throw an error to the user if it is)
    if (ExodusMVVM.getCurrentChar().afflictions.indexOf(val) >= 0) return;

    //TODO: Add CS or other effects if applicable

    ExodusMVVM.getCurrentChar().afflictions.push(val);

    elem.val("");
}

function onClickRemoveAffliction(affliction) {
    //TODO: Remove any CS (or other similar effects) given by affliction

    ExodusMVVM.getCurrentChar().afflictions.remove(affliction);
}

function displayMessage(message, type) {
    // TODO
}

function doDamage(character, amt, action, type) {
    var currentHealth = character.health();
    var defense = 0;
    var typeEffect = 1;

    if (type !== "Typeless" && character.type1() !== "") {
        typeEffect = getTypeEffectivity(type, character.type1());
        if (character.type2() !== "") {
            typeEffect *= getTypeEffectivity(type, character.type2());
        }
    }

    if (action !== "True") {
        defense = action === "Physical" ? character.def.final() : character.sdef.final();
    }

    var damageTotal = (amt * typeEffect) - defense;

    if (damageTotal <= 0)
        damageTotal = 1;

    if (typeEffect === 0)
        damageTotal = 0;

    character.health(currentHealth - damageTotal);
}

function getTypeEffectivity(attackType, defendType) {
    return TypeEffectivity[attackType.toLowerCase()][defendType.toLowerCase()];
}

function loadPokedexDataForCharacter(character) {
    if (!$.isEmptyObject(findPokedexDataByCode(character.pokedex()))) {
        character.onDexLoad();
    }
}

function findPokedexDataByCode(dexCode) {
    if (dexCode in PokedexCache) {
        return PokedexCache[dexCode];
    } else {
        $.getJSON("http://ptu.will-step.com/api/v1/pokemon/" + dexCode, function (json) {
            var currentChar = ExodusMVVM.getCurrentChar();
            PokedexCache[dexCode] = json;

            if (dexCode === currentChar.pokedex()) {
                currentChar.onDexLoad();
            }
        });
        return {};
    }
}

// TESTING DATA
$.getJSON("http://ptu.will-step.com/api/v1/moves/?names=[%22Ember%22,%22Struggle%22,%22Reflect%22]", function (json) {
    createNewMovesFromAPIReturn(ExodusMVVM.initiative()[0], json);
});
$.getJSON("http://ptu.will-step.com/api/v1/moves/?names=[%22Confide%22,%22Bullet%20Seed%22,%22Facade%22,%22Sleep%20Powder%22,%22Take%20Down%22,%22Poison%20Powder%22]", function (json) {
    createNewMovesFromAPIReturn(ExodusMVVM.initiative()[1], json);
});