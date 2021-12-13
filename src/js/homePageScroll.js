let listPosition = {
  rightListScroll: null,
  leftListScroll: null,
};
let top = null;
let bottom = null;

export function getScrollProductPosition(instance) {
  top = instance.offsetTop;
  bottom = top + instance.clientHeight;

  // scrollProductPosition.top = top;
  // scrollProductPosition.bottom = bottom;
}
export function setListPosition(instance) {
  let { rightListScroll, leftListScroll } = instance;
  listPosition = { rightListScroll, leftListScroll };
}

let oldPosition = null;
let direction = null;
export function handleScroll(e) {
  direction = detectDirectionScroll(e);
  // 範圍落在 scrollProduct 元件內
  if (document.documentElement.scrollTop > top && document.documentElement.scrollTop < bottom) {
    // 滾動尚未結束
    if (
      (listPosition.rightListScroll.value <= 0 && direction == "up") ||
      (listPosition.rightListScroll.value >= -100 && direction == "down")
    ) {
      e.preventDefault();
      addNewEventListenerScrollMethod();
      window.removeEventListener("scroll", handleScroll);
    }
  }

  function addNewEventListenerScrollMethod() {
    if (screen.width < 992) return; //防止螢幕大小變動而誤起函式
    window.scrollTo(0, top);
    window.addEventListener("wheel", handleListScroll, { passive: false });

    function handleListScroll(e) {
      e.preventDefault();
      window.scrollTo(0, top);

      direction = detectDirectionWheel(e);
      if (direction == "down") {
        listPosition.rightListScroll.value;
        if (listPosition.rightListScroll.value < -100) {
          window.removeEventListener("wheel", handleListScroll);
          window.addEventListener("scroll", handleScroll);
          return;
        }
        listPosition.rightListScroll.value -= 5;
        listPosition.leftListScroll.value += 5;
      } else if (direction == "up") {
        if (listPosition.rightListScroll.value > 0) {
          window.removeEventListener("wheel", handleListScroll);
          window.addEventListener("scroll", handleScroll);
          return;
        }
        listPosition.rightListScroll.value += 5;
        listPosition.leftListScroll.value -= 5;
      }
    }
  }
  function detectDirectionWheel(e) {
    if (e.deltaY < 0) {
      return "up";
    } else if (e.deltaY > 0) {
      return "down";
    }
  }
  function detectDirectionScroll(e) {
    let newPosition = window.pageYOffset;
    if (oldPosition - newPosition < 0) {
      oldPosition = newPosition;
      return "down";
    } else if (oldPosition - newPosition > 0) {
      oldPosition = newPosition;
      return "up";
    }
  }
}
