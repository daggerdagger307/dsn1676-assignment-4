var blue = {
    name: 'Blueberries',
    species: 'Vaccinium corymbosum',
    growth: 'Yes',
    energy: '240 kj',
    carbohydrates: '14.49 g',
    protein: '0.74 g'
};
console.log(blue);

var grapes = {
    name: 'Grapes',
    species: 'Vitis vinifer',
    growth: 'No',
    energy: '288 kj',
    carbon: '18.1 g',
    protein: '0.72 g'
};
console.log(grapes);

var red = {
    name: 'Red currant',
    species: 'Ribes rubrum',
    growth: 'Yes',
    energy: '234 kj',
    carbon: '13.8 g',
    protein: '1.4 g'
};
console.log(red);


var writeBerry = function (fruit) {
    document.write('<div class="unit unit-s-1-2 unit-m-1-3 unit-l-1-3">');
    
    document.write('<h2>' + fruit.name + '</h2>');
    
    document.write('<dl>');
    
    document.write('<dt>Species:</dt>');
    document.write('<dd>' + fruit.species + '</dd>')
    
    document.write('<dt>Growth:</dt>');
    document.write('<dd>' + fruit.growth + '</dd>')
    
    document.write('<dt>Energy:</dt>');
    document.write('<dd>' + fruit.energy + '</dd>')
    
    document.write('<dt>Carbohydrates:</dt>');
    document.write('<dd>' + fruit.carbon + '</dd>')
    
    document.write('<dt>Protein:</dt>');
    document.write('<dd>' + fruit.protein + '</dd>')
    
    document.write('</dl>');
    
    document.write('</div>');
    
};

var allFruit = [blue, grapes, red];

document.write('<div class="grid">');
allFruit.forEach(writeBerry);
document.write('</div>');

