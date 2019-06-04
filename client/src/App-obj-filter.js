var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: 'undefined' }
];
var displayThreePromoted = [
    {
        index: 0,
        id: 1,
        cover: "./images/hb.jpeg",
        title: "First title",
        caption: "First caption",
        faved: false,
        clicked: false
    },
    {
        index: 1,
        id: 2,
        cover: "./images/ks.jpeg",
        title: "Second title",
        caption: "Second caption",
        faved: false,
        clicked: false
    },
    {
        index: 2,
        id: 3,
        cover: "./images/yp.jpeg",
        title: "Third title",
        caption: "Third caption",
        faved: false,
        clicked: false
    }
]
var invalidEntries = 0;

function isNumber(obj) {
    return obj !== undefined && typeof (obj) === 'number' && !isNaN(obj);
}

function filterByID(item) {
    if (isNumber(item.id) && item.id !== 0) {
        return true;
    }
    invalidEntries++;
    return false;
}

var arrByID = displayThreePromoted.filter(filterByID);

console.log('Filtered Array\n', arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries);
  // Number of Invalid Entries = 5
