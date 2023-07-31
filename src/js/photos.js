import img1 from "../images/pic-gd/img1.jpg";
import img2 from "../images/pic-gd/img2.jpg";
import img3 from "../images/pic-gd/img3.jpg";
import img4 from "../images/pic-gd/img4.jpg";
import img5 from "../images/pic-gd/img5.jpg";
import img6 from "../images/pic-gd/img6.jpg";
import img7 from "../images/pic-gd/img7.jpg";
import img8 from "../images/pic-gd/img8.jpg";
import img9 from "../images/pic-gd/img9.jpg";
import img10 from "../images/pic-gd/img10.jpg";
import img11 from "../images/pic-gd/img11.jpg";
let aff = "sec";
const scrambleImages = function () {
  const arr = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  const imgAc = document.querySelectorAll(".gd-img-" + aff);
  console.log(aff === "sec" ? "fir" : "sec");
  const imgNAc = document.querySelectorAll(
    `.gd-img-${aff === "sec" ? "fir" : "sec"}`
  );
  imgAc.forEach((img, i) => {
    img.src = arr[i];
    imgNAc[i].style.opacity = "0";
    img.style.opacity = "1";
  });
  aff = aff === "sec" ? "fir" : "sec";
};
export default scrambleImages;
