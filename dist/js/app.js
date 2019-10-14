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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyaXZpYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCgnLmNhcm91c2VsJykuY2Fyb3VzZWwoe1xyXG4gICAgcmlkZTogZmFsc2UsXHJcbiAgICB0b3VjaDp0cnVlXHJcbiAgfSk7XHJcblxyXG4gIHZhciBtPVsnMDEnLCcwMicsJzAzJywnMDQnLCcwNScsJzA2JywnMDcnLCcwOCcsJzA5JywnMTAnLCcxMScsJzEyJ107XHJcbiAgdmFyIGkgPSBtWzRdO1xyXG4gIHZhciBsYXN0X2k9aTtcclxuKGZ1bmN0aW9uKCkge1xyXG4gICQoJ2RpdiNjYXJvdXNlbE1vbnRoU2VsJykuYmluZCgnc2xpZGUnLCBmdW5jdGlvbihlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImUuZGlyZWN0aW9uID0gXCIgKyBlLmRpcmVjdGlvbik7XHJcbiAgfSk7XHJcbiAvKiAkKCdkaXYjY2Fyb3VzZWxNb250aFNlbCcpLm9uKCdzbGlkZS5icy5jYXJvdXNlbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjYWxlbmRhckN5Y2xlKGksMSknKTtcclxuICB9KTsqL1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gY2FsZW5kYXJDeWNsZShpLGRpcil7XHJcbiAgY29uc29sZS5sb2coJyNtJyttW2xhc3RfaV0pO1xyXG4gIGlmIChkaXI9PTEpe1xyXG4gICAgaWYgKGk8bS5sZW5ndGgtMSl7XHJcbiAgICAgIGkrKztcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGk9MDtcclxuICAgIH1cclxuICB9ZWxzZXtcclxuICAgIGlmIChpPjApe1xyXG4gICAgICBpLS07XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBpPW0ubGVuZ3RoLTE7XHJcbiAgICB9XHJcbiAgfVxyXG4gICQoJyNjYXJvdXNlbE1vbnRoU2VsJykuY2Fyb3VzZWwoaSk7XHJcbiAgJCgnI20nK21baV0pLnRhYignc2hvdycpO1xyXG4gICQoJyNtJyttW2xhc3RfaV0pLnJlbW92ZUNsYXNzKCcuYWN0aXZlLnNob3cnKTtcclxuICBjb25zb2xlLmxvZygnI20nK21baV0pO1xyXG4gIGxhc3RfaT1pO1xyXG4gIHJldHVybiBpO1xyXG59XHJcbiAgLy9pPWNhbGVuZGFyQ3ljbGUoaSk7Il19
