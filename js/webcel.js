var sumAges = 0;
var avgAge = 0;
var totalPersons = 0;
var ages = [];

function mini(nums) {
    var min = nums[0];
    for (var i = 1; i < nums.length; i++) {
        var el = nums[i];
        if (min > el) {
            min = el;
        }
    }
    return min;
}

function maxi(nums) {
    var max = nums[0];
    for (var i = 1; i < nums.length; i++) {
        var el = nums[i];
        if (max < el) {
            max = el;
        }
    }
    return max;
}



function main() { // function definition

    var nameEl = document.getElementById("name");
    var ageEl = document.getElementById("age");

    var countTxt = "Persons in base: ";
    var averageTxt = "Average age of persons in base: ";
    var minTxt = "Youngest person have: ";
    var maxTxt = "Oldest person have: ";

    var name = nameEl.value;
    var age = parseInt(ageEl.value);

    var table = document.getElementById("mytable");
    var row = table.insertRow(table.rows.length);
    var cellId = row.insertCell(0);
    var cellName = row.insertCell(1);
    var cellAge = row.insertCell(2);

    var id = table.rows.length - 1;

    cellId.innerHTML = id;
    cellName.innerHTML = name;
    cellAge.innerHTML = age;

    ages.push(age);

    sumAges = (sumAges + age);
    totalPersons = id++;

    document.getElementById("count").innerHTML = (countTxt + " " + parseInt(totalPersons));
    document.getElementById("average").innerHTML = (averageTxt + " " + parseFloat(sumAges / totalPersons));
    document.getElementById("min").innerHTML = (minTxt + " " + mini(ages));
    document.getElementById("max").innerHTML = (maxTxt + " " + maxi(ages));
}

function addToTable() {

    main();

}
