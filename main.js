$(document).ready(() => {
  $("body").append(
    '<div class="moon"><img class="light" src="moon-outline.svg" /><img class="dark" src="moon.svg" /></div>'
  );
  $(".moon").on("click", () => {
    $("body").toggleClass("dark");
  });
});

class TxtRotate {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  }
  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    this.txt = this.isDeleting
      ? fullTxt.substring(0, this.txt.length - 1)
      : fullTxt.substring(0, this.txt.length + 1);

    this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

    const that = this;
    let delta = 300 - Math.random() * 100;

    if (this.isDeleting) delta /= 2;

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt.length === 0) {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  }
}

window.onload = () => {
  const elements = document.getElementsByClassName("txt-rotate");
  for (const element of elements) {
    const toRotate = element.getAttribute("data-rotate");
    const period = element.getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(element, JSON.parse(toRotate), period);
    }
  }
  const css = document.createElement("style");
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
