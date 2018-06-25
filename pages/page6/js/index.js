//设备箱
$(document).ready(function() {

    $('#calendar').fullCalendar({
      header: {
        right: 'prev,next today',
        left: 'title',
        // right: 'month,basicWeek,basicDay'
      },
      //defaultDate: '2018-03-12',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: '30',
          start: '2018-06-01'
        },
        {
          title: '50',
          start: '2018-06-04',
          //end: '2018-03-10'
        },
        {
          id: 999,
          title: '18',
          start: '2018-06-09'
        },
        {
          id: 999,
          title: '49',
          start: '2018-06-23'
        },
        {
          title: '34',
          start: '2018-06-11',
        },
        {
          title: '100',
          start: '2018-06-12',
        }
      ]
    });

  });
