//--------------TYPES---------------
//--------------FUNCTIONS---------------
//--------------LOCAL STORAGE FUNCTION-------
var goOnStorage = function () {
    var fullLocalStorage = JSON.parse(localStorage.getItem('full-storage'));
    if (!fullLocalStorage) {
        fullLocalStorage = {
            categories: [{ id: 1, name: "Comida", slug: "comida" }, { id: 2, name: "Servicios", slug: "servicios" },
                { id: 3, name: "Salidas", slug: "salidas" },
                { id: 4, name: "Educación", slug: "educación" }, { id: 5, name: "Transporte", slug: "transporte" },
                { id: 6, name: "Trabajo", slug: "trabajo" }],
            newoperation: []
        };
    }
    ;
    return fullLocalStorage;
};
//--------- FILTERS: SELECT CATEGORY-------------------
var loadFilterCategory = function () {
    var storage = goOnStorage();
    var selectCategories = document.getElementById('category');
    for (var _i = 0, _a = storage.categories; _i < _a.length; _i++) {
        var category = _a[_i];
        var elem = document.createElement('option');
        elem.innerText = category.name;
        elem.value = category.slug;
        selectCategories.appendChild(elem);
    }
    ;
};
