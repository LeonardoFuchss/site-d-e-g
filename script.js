const imgs = document.getElementById("img"); /* pegando o id image */
const img = document.querySelectorAll("#img img");
const imgWidth = 280;
let idx = 0;


function carrossel() {
    idx++;
    if(idx >= img.length) {  /* quando o idx for ultrapassar o tamanho de imagens, voltará para 0 */
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * imgWidth - 1}px)`;
    imgs.style.transition = "transform 0.8s ease-in-out";
}
setInterval(carrossel, 1200);
