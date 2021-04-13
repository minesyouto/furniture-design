$(function() {
  /* ハンバーガーメニュー */
  // ハンバーガーメニューのクリックイベント

  ＄('.toggle_btn').on('click', function() {
    // #headerにopenクラスが存在する場合
    //つまり、ハンバーガーメニューが空いている状態
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
      //openクラスを削除
      //openクラスが削除されるとcssが外れるため、メニューが非表示になる
    } else {
      //#headerにopenクラスがない場合
      $('#header').addClass('open');
    }
  });

  //メニューが表示されているときに画面がクリックされた場合
  $('#mask').on('click',function() {
    //openクラスを削除してメニューを閉じる

    $('#header').removaClass('open');
  });
});