"use strict";

const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

const imageConatiner = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");

    img.src = imgPath;

    img.addEventListener("load", function () {
        imageConatiner.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error(`Unable to Load Image`));
    });
  });
};



const loanNpause = async function () {
  try {
    let img = await createImage(`img/img-1.jpg`);

    console.log(`Image 1 loaded`);

    await wait(2);
    img.style.display = "none";

    img = await createImage(`img/img-2.jpg`);

    console.log(`Image 2 loaded`);

    await wait(2);

    img.style.display = 'none';
  } catch (error) {
    console.log(error);
}
};



const loadAll = async function(imgArr) {
    try {
        const imgs = imgArr.map(async img => await createImage(img));

        const images = await Promise.all(imgs);

        images.forEach((img) => img.classList.add('parallel'));
    } catch (error) {
        
    }
}

loadAll([`img/img-1.jpg`,`img/img-2.jpg`,`img/img-3.jpg`])