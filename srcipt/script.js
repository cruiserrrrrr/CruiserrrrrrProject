

// 1 item

    // open
    document.getElementById('base__btn').onclick = function() {
    document.getElementById('skills__item__1').classList.add('base__act');
    document.getElementById('closed__btn__1').classList.add('skills__item__1c');

    document.getElementById('skills__item__2').classList.add('comm__none');
    document.getElementById('skills__item__3').classList.add('exp__none');
    }

    // close
    document.getElementById('closed__btn__1').onclick = function() {
    document.getElementById('skills__item__1').classList.remove("base__act");

    document.getElementById('skills__item__2').classList.remove('comm__none');
    document.getElementById('skills__item__3').classList.remove('exp__none');

    document.getElementById('closed__btn__1').classList.remove('skills__item__1c');



    }

   
// 2 item

    // open
    document.getElementById('comm__btn').onclick = function() {
    document.getElementById('skills__item__2').classList.add('comm__act');
    document.getElementById('closed__btn__2').classList.add('skills__item__2c');

    document.getElementById('skills__item__1').classList.add('base__none');
    document.getElementById('skills__item__3').classList.add('exp__none');
    }

    // close
    document.getElementById('closed__btn__2').onclick = function() {
    document.getElementById('skills__item__2').classList.remove("comm__act");

    document.getElementById('skills__item__1').classList.remove('base__none');
    document.getElementById('skills__item__3').classList.remove('exp__none');

    document.getElementById('closed__btn__2').classList.remove('skills__item__2c');

    }


// 3 item

    // open
    document.getElementById('exp__btn').onclick = function() {
    document.getElementById('skills__item__3').classList.add('exp__act');
    document.getElementById('closed__btn__3').classList.add('skills__item__3c');

    document.getElementById('skills__item__1').classList.add('base__none');
    document.getElementById('skills__item__2').classList.add('comm__none');
    }

    // close
    document.getElementById('closed__btn__3').onclick = function() {
    document.getElementById('skills__item__3').classList.remove("exp__act");

    document.getElementById('skills__item__1').classList.remove('base__none');
    document.getElementById('skills__item__2').classList.remove('comm__none');

    document.getElementById('closed__btn__3').classList.remove('skills__item__3c');

    }








// items nft

    // open
    document.getElementById('bbw').onclick = function() {
    document.getElementById('item_op').classList.remove("item__open_none");
    document.getElementById('prewie').classList.add('prewie__none');
    }
    // close
    document.getElementById('close__btn__item').onclick = function() {
    document.getElementById('item_op').classList.add('item__open_none');
    document.getElementById('prewie').classList.remove('prewie__none');

    }

// items solo

    // open
    document.getElementById('bbo').onclick = function() {
    document.getElementById('item__psolo').classList.remove("item__psolo__none");
    document.getElementById('prewie').classList.add('prewie__none');
    }
    // close
    document.getElementById('close__btn__item__psolo').onclick = function() {
    document.getElementById('item__psolo').classList.add('item__psolo__none');
    document.getElementById('prewie').classList.remove('prewie__none');

    }