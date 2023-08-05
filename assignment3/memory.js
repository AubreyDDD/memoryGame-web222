function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const cell = Array.from({ length: 25 });
const selected = [];

function assigncell() {
    let image = ['monster1.png', 'monster2.png', 'monster3.png', 'monster4.png',
        'monster5.png', 'monster6.png', 'monster7.png', 'monster8.png'];
    let assigned = 0;
    let i = 0;
    do {
        let randomindex = getRandomNumber(0, 24);
        if (cell[randomindex] == undefined) {
            cell[randomindex] = image[i];
            assigned++;
            if ((assigned % 3) == 0)
                i++;
        }
    } while (assigned < 24);
    for (let i = 0; i < 25; i++) {
        if (cell[i] === undefined) {
            document.getElementById(i).src = 'reset.png';
        }
    }
}

function removeAction() {
    for (let j = 0; j < selected.length; j++) {
        const index = selected[j];
        document.getElementById(index).removeEventListener('click', replaceImage);
    }
    setTimeout(() => {
        for (let j = 0; j < selected.length; j++) {
            const index = selected[j];
            document.getElementById(index).src = 'default.png';
        }
        selected.length = 0;
        const defaultImages = document.getElementsByClassName('default');
        for (let i = 0; i < defaultImages.length; i++) {
            defaultImages[i].addEventListener('click', replaceImage);
        }
    }, 2000);
}

function replaceImage(event) {
    const clickedImage = event.target;
    const index = parseInt(clickedImage.id);
    if (cell[index] !== undefined) {

        if (selected.length < 3) {


            selected.push(index);
            clickedImage.src = cell[index];

        }
    }
    else location.reload();

    if (selected.length === 3) {
        const image1 = cell[selected[0]];
        const image2 = cell[selected[1]];
        const image3 = cell[selected[2]];
        if (image1 != image2 || image2 != image3 || image1 != image3)
            removeAction();
        else
            selected.length = 0;
    }
}

function fonload() {
    const defaultImages = document.getElementsByClassName('default');
    assigncell();
    for (let i = 0; i < defaultImages.length; i++) {
        defaultImages[i].addEventListener('click', replaceImage);
    }
}

























