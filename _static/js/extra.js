window.getmode = () => __md_get("__palette").color.scheme === "slate" ? "dark_dimmed" : "light";

window.setcolor = function () {
  var p = localStorage.getItem("data-md-color-primary-" + getmode ());
  if (p) {
    document.body.setAttribute('data-md-color-primary', p);
  }
  var a = localStorage.getItem('data-md-color-accent');
  if (a) {
    document.body.setAttribute('data-md-color-accent', a);
  }
  // console.log ("SET COLOR");
};

window.setcomment = function () {
  var palette = __md_get("__palette");
  if (palette && typeof palette.color === "object") {
    var theme = getmode ();

    var setgis = () => {
      if (
        !document.querySelector(".giscus-frame")
      ) {
        setTimeout (setcomment, 1000); return;
      }

      /* Instruct Giscus to change theme */
      var frame = document.querySelector(".giscus-frame");
      frame.contentWindow.postMessage(
        { giscus: { setConfig: { theme } } },
        "https://giscus.app"
      );
    }

    setgis ();
  }

  setcolor ();
};

window.addEventListener('load', setcolor, false);