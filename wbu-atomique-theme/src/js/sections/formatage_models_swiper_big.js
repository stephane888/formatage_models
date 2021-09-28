// import Swiper JS
// import Swiper from "swiper/bundle";
//--
import Swiper, { Navigation, Pagination, Parallax, Autoplay } from "swiper";
// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Parallax, Autoplay]);
// import Swiper styles
import "swiper/css/bundle";

//custom style
import "../../scss/sections/formatage_models_swiper_big.scss";
/**
 * --
 */
var mySwiper = new Swiper(".swiper", {
  loop: true,
  pagination: { el: ".swiper-pagination", type: "bullets", clickable: true },
  //grabCursor: true,
  speed: 1000,
  parallax: true,
  //effect: "slide",
  //mousewheelControl: 1,
  autoplay: {
    delay: 8000,
  },
});
