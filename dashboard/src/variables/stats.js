import { 
    getAllEventsByName
 } from "../apis/stats"

// ##############################
// // // javascript library for creating charts
// #############################
var Chartist = require("chartist");

// ##############################
// // // variables used to create animation on charts
// #############################
var delays = 80,
  durations = 500;
// var delays2 = 80,
//   durations2 = 500;

export async function getTotalEventsChartByName(name) {

    const allEvents = await getAllEventsByName(name);
    const chartData = {
        labels: [],
        series: [[]]
    };
    
    const totalPerGroup = {};

    allEvents.forEach(row => {
        const label = row.test_group;
        if (totalPerGroup[label]) {
            totalPerGroup[label] = totalPerGroup[label] + 1;
        } else {
            totalPerGroup[label] = 1;
        }
    });

    Object.keys(totalPerGroup).forEach(groupLabel => {
        chartData.labels.push(groupLabel);
        chartData.series[0].push(totalPerGroup[groupLabel])
    });

    return {
      data: chartData,
      options: {
        lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
        }),
        low: 0,
        high: allEvents.length, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      animation: {
        draw: function(data) {
          if (data.type === "line" || data.type === "area") {
            data.element.animate({
              d: {
                begin: 600,
                dur: 700,
                from: data.path
                  .clone()
                  .scale(1, 0)
                  .translate(0, data.chartRect.height())
                  .stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint
              }
            });
          } else if (data.type === "point") {
            data.element.animate({
              opacity: {
                begin: (data.index + 1) * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: "ease"
              }
            });
          }
        }
      }
    };
  };
