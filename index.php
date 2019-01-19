<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>PTU Exodus</title>

    <!-- Favicon -->
    <link href="/img/pokeball-ico.png" rel="icon" type="image/png">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">

    <!-- Icons -->
    <link href="/vendor/nucleo/css/nucleo.css" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <link rel="stylesheet" href="//cdn.materialdesignicons.com/3.0.39/css/materialdesignicons.min.css">

    <!-- Argon CSS -->
    <link type="text/css" href="/css/argon.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link type="text/css" href="/css/exodus.css" rel="stylesheet">
</head>
<body class="bg-danger text-dark">

<nav class="navbar navbar-expand-lg navbar-dark bg-default" id="nav-top">
    <div class="container">
        <span class="navbar-brand">PTU Exodus</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-default">
            <div class="navbar-collapse-header">
                <div class="row">
                    <div class="col-6 collapse-brand">
                        <a href="#">
                            <img src="/img/brand/blue.png">
                        </a>
                    </div>
                    <div class="col-6 collapse-close">
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>

            <ul class="navbar-nav ml-lg-auto">
                <li class="nav-item active">
                    <a class="nav-link nav-link-icon" href="#">Battle</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="#">Manage</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link nav-link-icon" href="#" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="ni ni-settings-gear-65"></i>
                        <span class="nav-link-inner--text d-lg-none">Settings</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</nav>

<div class="container" id="container-main">
    <div class="row battle">
        <div class="col-md-3 outline border-default">
            <h1 class="display-4 text-center">Initiative</h1>
            <ul class="nav flex-column nav-pills nav-fill flex-column" role="tablist"
                data-bind="foreach: initiative">
                <li class="nav-item">
                    <a class="nav-link card battle-init-item text-white"
                        data-bind="click: $root.onClickSelectChar,
                                   css: {
                                    'active': $root.currentChar() == $index(),
                                    'bg-default': $root.currentChar() != $index()
                                   }">
                        <img class="card-img-top battle-init-img" src="/img/pokemon-profiles/133.png" alt="Character Name"
                             data-bind="attr: { src: image, alt: name }">
                        <div class="card-body">
                            <p class="card-text" data-bind="text: name">Character Name</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="col-md-9">
            <form class="battle-char" data-bind="with: getCurrentChar" onchange="onBattleFormLoad()">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control form-control-alternative form-control-lg"
                               id="battle-char-name"
                               data-bind="value: name"
                               placeholder="Name"
                               required/>
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control form-control-alternative form-control-lg"
                               id="battle-char-species"
                               data-bind="value: species"
                               data-list="species"
                               placeholder="Species" />
                    </div>
                </div>
                <div class="form-row">
                    <a class="section-collapse text-default" data-toggle="collapse" href="#battle-char-scene" role="button" aria-expanded="true" aria-controls="battle-char-scene">
                        <i class="mdi mdi-chevron-down"></i> Scene
                    </a>
                </div>
                <section class="collapse" id="battle-char-scene">
                    <div class="form-row">
                        <div class="form-group col-6 col-md-3">
                            <label for="battle-char-hp">Hit Points</label>
                            <input type="number" class="form-control form-control-alternative"
                                   id="battle-char-hp"
                                   data-bind="value: health"/>
                        </div>
                        <div class="form-group col-6 col-md-3">
                            <label for="battle-char-injuries">Injuries</label>
                            <input type="number" class="form-control form-control-alternative"
                                   id="battle-char-injuries"
                                   data-bind="value: injuries"/>
                        </div>
                        <div class="form-group col-6 col-md-3">
                            <label for="battle-char-maxhp">Injured/Max HP</label>
                            <input type="text" class="form-control form-control-alternative"
                                   id="battle-char-maxhp"
                                   data-bind="value: maxHealthDisplay"
                                   disabled/>
                        </div>
                        <div class="form-group col-6 col-md-3">
                            <label for="battle-char-tick">Tick</label>
                            <input type="number" class="form-control form-control-alternative"
                                   id="battle-char-tick"
                                   data-bind="value: tick"
                                   disabled/>
                        </div>
                    </div>
                    <div class="form-row outline border-default">
                        <span class="text-default col-12">Deal Damage</span>
                        <div class="form-group col-6 col-md-3">
                            <label for="battle-char-deal-amt">Amount</label>
                            <input type="number" class="form-control form-control-alternative"
                                    id="battle-char-deal-amt"/>
                        </div>
                        <div class="form-group col-6 col-md-3">
                            <label for="battle-char-deal-act">Action</label>
                            <select class="form-control form-control-alternative"
                                    id="battle-char-deal-act">
                                <option>Physical</option>
                                <option>Special</option>
                                <option>True</option>
                            </select>
                        </div>
                        <div class="form-group col-6 col-md-3">
                            <label for="battle-char-deal-type">Type</label>
                            <select type="text" class="form-control form-control-alternative"
                                    id="battle-char-deal-type"
                                    data-bind="options: $root.ATK_TYPE_LIST">
                                <option>Typeless</option>
                            </select>
                        </div>
                        <div class="form-group col-6 col-md-3">
                            <button type="button" class="btn btn-outline-primary btn-form" onclick="onClickDamage()">Damage</button>
                        </div>
                    </div>
                    <div class="form-row outline border-default">
                        <span class="text-default col-12">Afflictions</span>
                        <div class="col-12" data-bind="foreach: afflictions">
                            <div class="btn-group btn-group-sm" role="group" aria-label="Affliction">
                                <button type="button" class="btn btn-outline-default btn-sm" data-bind="text:$data">Affliction</button>
                                <button type="button" class="btn btn-outline-default btn-sm"><i class="mdi mdi-play"></i></button>
                                <button type="button" class="btn btn-outline-default btn-sm" data-bind="click: $root.onClickRemoveAffliction"><i class="mdi mdi-close"></i></button>
                            </div>
                        </div>
                        <div class="form-group col-6">
                            <label for="battle-char-afflict-name">Add Affliction</label>
                            <input type="text" class="form-control form-control-alternative" id="battle-char-afflict-name"/>
                        </div>
                        <div class="form-group col-6">
                            <button type="button" class="btn btn-outline-primary btn-form" onclick="onClickAddAffliction()">Add Affliction</button>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="battle-char-capturerate">Capture Rate</label>
                            <input type="number" class="form-control form-control-alternative"
                                   id="battle-char-capturerate"
                                   data-bind="value: captureRate"
                                   disabled/>
                        </div>
                    </div>
                </section>
                <div class="form-row">
                    <a class="section-collapse text-default" data-toggle="collapse" href="#battle-char-generalinfo" role="button" aria-expanded="false" aria-controls="battle-char-generalinfo">
                        <i class="mdi mdi-chevron-down"></i> General Info
                    </a>
                </div>
                <section class="collapse" id="battle-char-generalinfo">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="battle-char-level">Level</label>
                            <input type="number" class="form-control form-control-alternative"
                                   id="battle-char-level"
                                   data-bind="value: level"
                                   placeholder="Level"
                                   min="1"
                                   required/>
                        </div>
                        <div class="form-group col-6 col-md-3">
                            <label for="battle-char-type1">Type 1</label>
                            <select type="text" class="form-control form-control-alternative"
                                   id="battle-char-type1"
                                   data-bind="options: $root.TYPE_LIST,
                                              value: type1">
                                <option value="">--</option>
                            </select>
                        </div>
                        <div class="form-group col-6 col-md-3">
                            <label for="battle-char-type2">Type 2</label>
                            <select type="text" class="form-control form-control-alternative"
                                   id="battle-char-type2"
                                    data-bind="options: $root.TYPE_LIST,
                                               value: type2">
                                <option value="">--</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="battle-char-gender">Gender</label>
                            <select type="text" class="form-control form-control-alternative"
                                    id="battle-char-gender"
                                    data-bind="value: gender">
                                <option></option>
                                <option>Genderless</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="battle-char-nature">Nature</label>
                            <select type="text" class="form-control form-control-alternative"
                                   id="battle-char-nature"
                                    data-bind="options: $root.NATURE_LIST,
                                               value: nature">
                                <option value="">--</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row outline border-default">
                        <span class="text-default col-12">Stats</span>
                        <div class="stats-overflow">
                            <table class="table table-bordered border-dark table-numbers">
                                <thead class="bg-default text-white">
                                <tr>
                                    <th scope="col">Stat</th>
                                    <th scope="col">Base</th>
                                    <th scope="col">Added</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Stage</th>
                                    <th scope="col">Adjusted</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">HP</th>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-hp-base"
                                               placeholder=" "
                                               data-bind="value: hp.base"
                                               min="1"
                                               required/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-hp-lvlup"
                                               placeholder=" "
                                               data-bind="value: hp.lvlup"
                                               min="0"
                                               required/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-hp-total"
                                               placeholder=" "
                                               data-bind="value: hp.total"
                                               disabled/>
                                    </td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">ATK</th>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-atk-base"
                                               placeholder=" "
                                               data-bind="value: atk.base"
                                               min="1"
                                               required/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-atk-lvlup"
                                               placeholder=" "
                                               data-bind="value: atk.lvlup"
                                               min="0"
                                               required/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-atk-total"
                                               placeholder=" "
                                               data-bind="value: atk.total"
                                               disabled/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-atk-stage"
                                               placeholder=" "
                                               data-bind="value: atk.cs"
                                               value="0"
                                               min="-6"
                                               max="6"/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-atk-adj"
                                               placeholder=" "
                                               data-bind="value: atk.final"
                                               disabled/>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">DEF</th>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-def-base"
                                               placeholder=" "
                                               data-bind="value: def.base"
                                               min="1"
                                               required/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-def-lvlup"
                                               placeholder=" "
                                               data-bind="value: def.lvlup"
                                               min="0"
                                               required/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-def-total"
                                               placeholder=" "
                                               data-bind="value: def.total"
                                               disabled/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-def-stage"
                                               placeholder=" "
                                               data-bind="value: def.cs"
                                               value="0"
                                               min="-6"
                                               max="6"/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-def-adj"
                                               placeholder=" "
                                               data-bind="value: def.final"
                                               disabled/>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">SATK</th>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-satk-base"
                                               placeholder=" "
                                               data-bind="value: satk.base"
                                               min="1"
                                               required/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-satk-lvlup"
                                               placeholder=" "
                                               data-bind="value: satk.lvlup"
                                               min="0"
                                               required/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-satk-total"
                                               placeholder=" "
                                               data-bind="value: satk.total"
                                               disabled/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-satk-stage"
                                               placeholder=" "
                                               data-bind="value: satk.cs"
                                               value="0"
                                               min="-6"
                                               max="6"/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-satk-adj"
                                               placeholder=" "
                                               data-bind="value: satk.final"
                                               disabled/>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">SDEF</th>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-sdef-base"
                                               placeholder=" "
                                               data-bind="value: sdef.base"
                                               min="1"
                                               required/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-sdef-lvlup"
                                               placeholder=" "
                                               data-bind="value: sdef.lvlup"
                                               min="0"
                                               required/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-sdef-total"
                                               placeholder=" "
                                               data-bind="value: sdef.total"
                                               disabled/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-sdef-stage"
                                               placeholder=" "
                                               data-bind="value: sdef.cs"
                                               value="0"
                                               min="-6"
                                               max="6"/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-sdef-adj"
                                               placeholder=" "
                                               data-bind="value: sdef.final"
                                               disabled/>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">SPD</th>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-spd-base"
                                               placeholder=" "
                                               data-bind="value: spd.base"
                                               min="1"
                                               required/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-spd-lvlup"
                                               placeholder=" "
                                               data-bind="value: spd.lvlup"
                                               min="0"
                                               required/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-spd-total"
                                               placeholder=" "
                                               data-bind="value: spd.total"
                                               disabled/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-spd-stage"
                                               placeholder=" "
                                               data-bind="value: spd.cs"
                                               value="0"
                                               min="-6"
                                               max="6"/>
                                    </td>
                                    <td>
                                        <input type="number" class="form-control form-control-alternative"
                                               id="battle-char-spd-adj"
                                               placeholder=" "
                                               data-bind="value: spd.final"
                                               disabled/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <div class="form-row text-default">
                    <a class="section-collapse text-default" data-toggle="collapse" href="#battle-char-actions" role="button" aria-expanded="true" aria-controls="battle-char-actions">
                        <i class="mdi mdi-chevron-down"></i> Moves &amp; Abilities
                    </a>
                </div>
                <section class="collapse" id="battle-char-actions">
                    <div class="form-row">
                        <div class="col-md-6">
                            <span class="text-default col-12">Moves</span>
                            <div data-bind="foreach: moves">
                                <a class="btn btn-default card battle-init-item" data-bind="click: $root.onClickSelectMove">
                                    <div class="card-body">
                                        <p class="card-text" data-bind="text: Name">Move Name</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    </div>
</div>

<div class="modal fade" id="moveModal" tabindex="-1" role="dialog" aria-labelledby="moveModalLabel" aria-hidden="true">
    <div class="modal-dialog modal- modal-dialog-centered" role="document">
        <div class="modal-content" data-bind="with: getCurrentMove">
            <div class="modal-body p-0">


                <div class="card bg-secondary shadow border-0">
                    <div class="card-header bg-gradient-orange text-white pb-5">
                        <h5 class="modal-title text-center text-white" id="moveModalLabel" data-bind="text: Name"></h5>
                        <p class="lead text-center" data-bind="if: $data.Effect"><span data-bind="text: Effect"></span></p>
                    </div>
                    <div class="card-body px-lg-5 py-lg-5">
                        <form role="form">
                            <div class="form-row mb-3">
                                <div class="form-group col-6">
                                    <label for="move-type">Type</label>
                                    <select class="form-control" id="move-type"
                                        data-bind="options: $root.TYPE_LIST, value: Type">
                                        <option></option>
                                    </select>
                                </div>
                                <div class="form-group col-6">
                                    <label for="move-class">Class</label>
                                    <select class="form-control" id="move-class" data-bind="value: Class">
                                        <option>Physical</option>
                                        <option>Special</option>
                                        <option>Status</option>
                                    </select>
                                </div>
                            </div>
                            <div data-bind="if: $data.DB || $data['Crits On'], css: {'form-row mb-3': $data.DB || $data['Crits On']}">
                                <div class="form-group col-6" data-bind="if: $data.DB">
                                    <label for="move-db">Damage Base</label>
                                    <input class="form-control" type="number" id="move-db" value="4" min="1" max="20" data-bind="value: DB" />
                                </div>
                                <div class="form-group col-6" data-bind="if: $data['Crits On']">
                                    <label for="move-crit">Crits On/Above</label>
                                    <input class="form-control" type="number" id="move-crit" value="20" min="1" max="20" data-bind="value: $data['Crits On']" />
                                </div>
                            </div>
                            <div class="form-row mb-3">
                                <div data-bind="if: $data.AC, css: {'form-group col-6': $data.AC}">
                                    <label for="move-ac">Accuracy Check</label>
                                    <input class="form-control" type="number" id="move-ac" value="0" min="0" max="20" data-bind="value: AC" />
                                </div>
                                <div class="form-group col-6">
                                    <label for="move-range">Range</label>
                                    <input class="form-control" type="text" id="move-range" value="5, 1 Target" data-bind="value: Range" />
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="button" class="btn btn-primary my-4">Go</button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    </div>
</div>

<!-- Core -->
<script src="http://ajax.aspnetcdn.com/ajax/knockout/knockout-3.4.2.js"></script>
<script src="/vendor/jquery/jquery.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<script src="/vendor/jqueryui/jquery-ui.min.js"></script>
<link href="/vendor/jqueryui/jquery-ui.min.css" rel="stylesheet" type="text/css" />
<script>
    //Remove JQuery UI conflicts with Bootstrap
    $.widget.bridge('uibutton', $.ui.button);
    $.widget.bridge('uitooltip', $.ui.tooltip);
</script>
<script src="/vendor/popper/popper.min.js"></script>
<script src="/vendor/bootstrap/bootstrap.min.js"></script>

<!-- Theme JS -->
<script src="/js/argon.js"></script>

<!-- Custom JS -->
<!--<script src="/js/exodus.min.js"></script>-->
<script src="js/exodus/exodus.js"></script>
<script src="js/exodus/ExodusMVVM.js"></script>
</body>
</html>