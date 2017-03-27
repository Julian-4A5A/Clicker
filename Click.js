var sol = {
    name: 'sol',
    total: 0
};
var wood = {
    name: 'wood',
    total: 0
};
var food = {
    name: 'wood',
    total: 0
};
var stone = {
    name: 'stone',
    total: 5
};
barn = {
    total: 0,
    require: {
        food: 0,
        wood: 100,
        stone: 0,
        skins: 0,
        herbs: 0,
        ore: 0
    }
};
woodstock = {
    total: 0,
    require: {
        food: 0,
        wood: 100,
        stone: 0,
        skins: 0,
        herbs: 0,
        ore: 0
    }
};
stonestock = {
    total: 0,
    require: {
        food: 0,
        wood: 100,
        stone: 0,
        skins: 0,
        herbs: 0,
        ore: 0
    }
};

var herbs = 0;
var ore = 0;
var skins = 0;
update();
// production
function Food(number) {
    var x = Math.random();
    food.total = food.total + number;

    if (x < 0.1) {
        skins = skins + number;
    }
    if (food.total > 199 + (barn.total * 200)) {
        food.total = 200 + (barn.total * 200);
    }
    update();
}

function Wood(number) {
    var x = Math.random();
    wood.total = wood.total + number;

    if (x < 0.1) {
        herbs = herbs + number;

    }
    if (wood.total > 199 + (woodstock.total * 200)) {
        wood.total = 200 + (woodstock.total * 200);
    }
    update();
}

function Sol(number) {
    sol.total = sol.total + number
    document.getElementById("sol").innerHTML = sol.total;
}

function Stone(number) {
    var x = Math.random();
    stone.total = stone.total + number;

    if (x < 0.1) {
        ore = ore + number;

    }
    if (stone.total > 199 + (stonestock.total * 200)) {
        stone.total = 200 + (stonestock.total * 200);
    }
    update();
}

//ugrades
function createBuilding(building, number) {
    //First check the building requirements
    if (food.total >= (building.require.food * number) &&
        wood.total >= (building.require.wood * number) &&
        stone.total >= (building.require.stone * number) &&
        skins.total >= (building.require.skins * number) &&
        herbs.total >= (building.require.herbs * number) &&
        ore.total >= (building.require.ore * number)) {
        food.total = food.total - (building.require.food * number);
        wood.total = wood.total - (building.require.wood * number);
        stone.total = stone.total - (building.require.stone * number);
        skins.total = skins.total - (building.require.skins * number);
        herbs.total = herbs.total - (building.require.herbs * number);
        ore.total = ore.total - (building.require.ore * number);
        building.total = building.total + (1 * number);
        update();
    } else {
        alert("Bouwt niet");
    }
}


function update() {
    document.getElementById('maxfood').innerHTML = (200 + (200 * barn.total));
    document.getElementById('maxwood').innerHTML = (200 + (200 * woodstock.total));
    document.getElementById('maxstone').innerHTML = (200 + (200 * stonestock.total));
    document.getElementById('food').innerHTML = (Math.floor(food.total));
    document.getElementById('wood').innerHTML = (Math.floor(wood.total));
    document.getElementById('stone').innerHTML = (Math.floor(stone.total));
    document.getElementById('skin').innerHTML = (Math.floor(skins));
    document.getElementById('herb').innerHTML = (Math.floor(herbs));
    document.getElementById('ore').innerHTML = (Math.floor(ore));
}