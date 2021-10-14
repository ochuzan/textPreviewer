const fonts = [
    'Arial', 
    'Arial Black', 
    'Verdana', 
    'Tahoma', 
    'Trebuchet MS', 
    'Impact', 
    'Times New Roman', 
    'Didot', 
    'Georgia', 
    'American Typewriter', 
    'Andalé Mono', 
    'Courier', 
    'Lucida Console', 
    'Monaco', 
    'Bradley Hand', 
    'Brush Script MT', 
    'Luminari', 
    'Comic Sans MS',
    'Fantasy'
];
const colors = [
    'AliceBlue',
    'AntiqueWhite',
    'Aqua',
    'Aquamarine',
    'Azure',
    'Beige',
    'Bisque',
    'Black',
    'BlanchedAlmond',
    'Blue',
    'BlueViolet',
    'Brown',
    'BurlyWood',
    'CadetBlue',
    'Chartreuse',
    'Chocolate',
    'Coral',
    'CornflowerBlue',
    'Cornsilk',
    'Crimson',
    'Cyan',
    'DarkBlue',
    'DarkCyan',
    'DarkGoldenRod',
    'DarkGray',
    'DarkGrey',
    'DarkGreen',
    'DarkKhaki',
    'DarkMagenta',
    'DarkOliveGreen',
    'DarkOrange',
    'DarkOrchid',
    'DarkRed',
    'DarkSalmon',
    'DarkSeaGreen',
    'DarkSlateBlue',
    'DarkSlateGray',
    'DarkSlateGrey',
    'DarkTurquoise',
    'DarkViolet',
    'DeepPink',
    'DeepSkyBlue',
    'DimGray',
    'DimGrey',
    'DodgerBlue',
    'FireBrick',
    'FloralWhite',
    'ForestGreen',
    'Fuchsia',
    'Gainsboro',
    'GhostWhite',
    'Gold',
    'GoldenRod',
    'Gray',
    'Grey',
    'Green',
    'GreenYellow',
    'HoneyDew',
    'HotPink',
    'IndianRed',
    'Indigo',
    'Ivory',
    'Khaki',
    'Lavender',
    'LavenderBlush',
    'LawnGreen',
    'LemonChiffon',
    'LightBlue',
    'LightCoral',
    'LightCyan',
    'LightGoldenRodYellow',
    'LightGray',
    'LightGrey',
    'LightGreen',
    'LightPink',
    'LightSalmon',
    'LightSeaGreen',
    'LightSkyBlue',
    'LightSlateGray',
    'LightSlateGrey',
    'LightSteelBlue',
    'LightYellow',
    'Lime',
    'LimeGreen',
    'Linen',
    'Magenta',
    'Maroon',
    'MediumAquaMarine',
    'MediumBlue',
    'MediumOrchid',
    'MediumPurple',
    'MediumSeaGreen',
    'MediumSlateBlue',
    'MediumSpringGreen',
    'MediumTurquoise',
    'MediumVioletRed',
    'MidnightBlue',
    'MintCream',
    'MistyRose',
    'Moccasin',
    'NavajoWhite',
    'Navy',
    'OldLace',
    'Olive',
    'OliveDrab',
    'Orange',
    'OrangeRed',
    'Orchid',
    'PaleGoldenRod',
    'PaleGreen',
    'PaleTurquoise',
    'PaleVioletRed',
    'PapayaWhip',
    'PeachPuff',
    'Peru',
    'Pink',
    'Plum',
    'PowderBlue',
    'Purple',
    'RebeccaPurple',
    'Red',
    'RosyBrown',
    'RoyalBlue',
    'SaddleBrown',
    'Salmon',
    'SandyBrown',
    'SeaGreen',
    'SeaShell',
    'Sienna',
    'Silver',
    'SkyBlue',
    'SlateBlue',
    'SlateGray',
    'SlateGrey',
    'Snow',
    'SpringGreen',
    'SteelBlue',
    'Tan',
    'Teal',
    'Thistle',
    'Tomato',
    'Turquoise',
    'Violet',
    'Wheat',
    'White',
    'WhiteSmoke',
    'Yellow',
    'YellowGreen',
];

// Random Color API
// https://www.colourlovers.com/api/colors/random&format=json

// Add Javascript Here

let fontSelection = document.querySelector('#font-selection');

// for (let font of fonts) {
//     let option = document.createElement('option');
//     option.value = font;
//     option.textContent = font;
//     fontSelection.append(option);
// }

fonts.forEach(font => {
    let option = document.createElement('option');
    option.value = font;
    option.textContent = font;
    option.setAttribute('style', `font-family: ${font.toLowerCase()}`);
    fontSelection.append(option);
});

let colorSelection = document.querySelector('#color-selection');

// for (let color of colors) {
//     let option = document.createElement('option');
//     option.value = color;
//     option.textContent = color;
//     colorSelection.append(option);
// }

colors.forEach(color => {
    let option = document.createElement('option');
    option.value = color;
    option.textContent = color;
    colorSelection.append(option);
});

let textInput = document.querySelector('#text-input');
let previewPlaceholder = document.querySelector('#preview-placeholder');

textInput.addEventListener('input', (e)=> {
    previewPlaceholder.textContent = e.target.value;
});

fontSelection.addEventListener('change', (e)=>{
    previewPlaceholder.style.fontFamily = e.target.value;
});

colorSelection.addEventListener('change', (e)=>{
    previewPlaceholder.style.color = e.target.value;
});

let saveButton = document.querySelector('#save-button');

// // My way
saveButton.addEventListener('click', ()=> {
    let li = document.createElement('li');
    li.textContent = previewPlaceholder.textContent;
    li.style.fontFamily = fontSelection.value
    li.style.color = colorSelection.value

    let list = document.querySelector('#saved-list ul');
    ul.append(li);
})

// // Greg's way
// saveButton.addEventListener('click', ()=> {
//     let li = document.createElement('li');
//     let list = document.querySelector('ul');
//     li.textContent = textInput.textContent;
//     li.style.fontFamily = fontSelection.value
//     li.style.color = colorSelection.value

//     list.append(li);
// })

let starWars = document.querySelector('#star-wars');

fetch('https://swapi.dev/api/people/')
    .then((res) => res.json())
    .then((data) => {
        let characterList = data.results;

        for (let character of characterList) {
            let div = document.createElement('div');
            div.textContent = character.name;
            starWars.append(div);
        }
    })