const breakpoint_sp = 768;
const side_padding = 0;
const head_padding = 0;
const side_padding_sp = 0;
const head_padding_sp = 0;
const __on = "on";
const __speed = 500;
const __root = this;
const getSize = function () {
  let w = window.innerWidth || document.documentElement.clientWidth || 0;
  let h = window.innerHeight || document.documentElement.clientHeight || 0;
  return [w, h];
};
const uimap = new Map();
const $S = {
  screen: {
    width: getSize()[0],
    height: getSize()[1]
  },
  //デバイス判定
  device: function () {
    if (this.screen.width < breakpoint_sp) {
      return "sp";
    } else {
      return "pc";
    }
  },
  //on Classの付与・削除
  switch: function (button, classname) {
    button.on("click", function () {
      $(this).toggleClass(classname);
    });
  },
  //マウスアクション簡易操作関数（クリック時に指定要素のクラス変更）
  addMenuEvent: function ($trigger, $target, $classname, $closeElements) {
    uimap.set($trigger.get(0), {
      target: $target,
      classname: $classname,
      self: $trigger
    });
    $trigger.on("click", function (e) {
      var target = uimap.get(this).target;
      var classname = uimap.get(this).classname;

      if (!$(this).hasClass(classname)) {
        $(this).toggleClass(classname);
        $(target).toggleClass(classname);
      } else {
        $S.closeMenu();
      }
    });
    if ($closeElements) {
      $closeElements.on("click", function (e) {
        $S.closeMenu();
      });
    }
  },
  closeMenu: function () {
    uimap.forEach(function (value, key, map) {
      var map = map.get(key);
      var target = map.target;
      var trigger = map.self;
      var classname = map.classname;
      $(target).removeClass(classname);
      $(trigger).removeClass(classname);
    });
    return true;
  },
  //画面フィット
  fitScreen: function (target) {
    var $target = target;
    var $this = this;
    $(window).on("resize", function (e) {
      console.log($this.device());
      if ($this.device() == "sp") {
        $($target).width($this.screen.width - side_padding_sp);
        $($target).height($this.screen.height - head_padding_sp);
      } else {
        $($target).width($this.screen.width - side_padding);
        $($target).height($this.screen.height - head_padding);
      }
    });
    $(window).trigger("resize");
  },
  switchScroll: function (cue, target, name) {
    if (!cue) cue = 1;
    if (!target) target = body;
    if (!name) name = __on;
    $(window).on("scroll", function (e) {
      var ty = $(window).scrollTop();
      if (ty > cue) {
        $(target).addClass(name);
      } else {
        $(target).removeClass(name);
      }
    });
  },
  //初期化
  init: function () {
    this.screen.width;
    this.screen.height;
    //リサイズ時に画面サイズを取得
    var target = this;
    window.onresize = function () {
      target.screen.width = getSize()[0];
      target.screen.height = getSize()[1];
    };
    return true;
  }
};

