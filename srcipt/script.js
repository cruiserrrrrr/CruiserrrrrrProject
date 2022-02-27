

// 1 item
    document.getElementById('base__btn').onclick = function() {
    document.getElementById('skills__item__1').classList.add('base__act');
    document.getElementById('closed__btn__1').classList.add('skills__item__1c');
    }


    document.getElementById('closed__btn__1').onclick = function() {
    document.getElementById('skills__item__1').classList.remove("base__act");
    document.getElementById('closed__btn__1').classList.remove('skills__item__1c');

    }

   
// 2 item
    document.getElementById('comm__btn').onclick = function() {
    document.getElementById('skills__item__2').classList.add('comm__act');
    document.getElementById('closed__btn__2').classList.add('skills__item__2c');
    }


    document.getElementById('closed__btn__2').onclick = function() {
    document.getElementById('skills__item__2').classList.remove("comm__act");
    document.getElementById('closed__btn__2').classList.remove('skills__item__2c');

    }


// 3 item
    document.getElementById('exp__btn').onclick = function() {
    document.getElementById('skills__item__3').classList.add('exp__act');
    document.getElementById('closed__btn__3').classList.add('skills__item__3c');
    }


    document.getElementById('closed__btn__3').onclick = function() {
    document.getElementById('skills__item__3').classList.remove("exp__act");
    document.getElementById('closed__btn__3').classList.remove('skills__item__3c');

    }