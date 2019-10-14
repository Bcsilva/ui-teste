$('.carousel').carousel({
    ride: false,
    touch:true
  });

  var m=['01','02','03','04','05','06','07','08','09','10','11','12'];
  var i = m[4];
  var last_i=i;
(function() {
  $('div#carouselMonthSel').bind('slide', function(e) {
    console.log("e.direction = " + e.direction);
  });
 /* $('div#carouselMonthSel').on('slide.bs.carousel', function () {
    console.log('calendarCycle(i,1)');
  });*/
})();

function calendarCycle(i,dir){
  console.log('#m'+m[last_i]);
  if (dir==1){
    if (i<m.length-1){
      i++;
    }else{
        i=0;
    }
  }else{
    if (i>0){
      i--;
    }else{
        i=m.length-1;
    }
  }
  $('#carouselMonthSel').carousel(i);
  $('#m'+m[i]).tab('show');
  $('#m'+m[last_i]).removeClass('.active.show');
  console.log('#m'+m[i]);
  last_i=i;
  return i;
}
  //i=calendarCycle(i);