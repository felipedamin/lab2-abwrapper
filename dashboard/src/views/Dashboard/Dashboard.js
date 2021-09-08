// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Accessibility from "@material-ui/icons/Accessibility";
import AccessTime from "@material-ui/icons/AccessTime";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import DateRange from "@material-ui/icons/DateRange";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Update from "@material-ui/icons/Update";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import GridContainer from "components/Grid/GridContainer.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  eventPositiveSeriesGroupChart,
  eventNegativeSeriesGroupChart,
  eventPositiveDistroChart
} from "../../variables/charts.js";
import { getTotalEventsChartByName } from "variables/stats.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();

  // Time series data
  // Positive series
  //A
  let [getEventPositiveSeriesGroupChartA, setPositiveEventSeriesA] = React.useState({});
  async function fetchPositiveSeriesA() {
    const positiveEventSeriesA = await eventPositiveSeriesGroupChart("a");
    setPositiveEventSeriesA(positiveEventSeriesA);
  }

  //B
  let [getEventPositiveSeriesGroupChartB, setPositiveEventSeriesB] = React.useState({});
  async function fetchPositiveSeriesB() {
    const positiveEventSeriesB = await eventPositiveSeriesGroupChart("b");
    setPositiveEventSeriesB(positiveEventSeriesB);
  }

  // Negative series
  //A
  let [getEventNegativeSeriesGroupChartA, setNegativeEventSeriesA] = React.useState({});
  async function fetchNegativeSeriesA() {
    const negativeEventSeriesA = await eventNegativeSeriesGroupChart("a");
    setNegativeEventSeriesA(negativeEventSeriesA);
  }

  //B
  let [getEventNegativeSeriesGroupChartB, setNegativeEventSeriesB] = React.useState({});
  async function fetchNegativeSeriesB() {
    const positiveEventSeriesB = await eventNegativeSeriesGroupChart("b");
    setNegativeEventSeriesB(positiveEventSeriesB);
  }

  // Positive events distribution
  let [getPositiveDistro, setPositiveDistro] = React.useState({});
  async function fetchPositiveDistro() {
    const positiveDistro = await eventPositiveDistroChart();
    setPositiveDistro(positiveDistro);
  }


  // Get chart data for the "retry" event
  let [totalEventsByNameChart, setTotalEventsByNameChart] = React.useState({});
  React.useEffect(() => {
    fetchTotalEventsByNameChart();
    fetchPositiveSeriesA();
    fetchPositiveSeriesB();
    fetchNegativeSeriesA();
    fetchNegativeSeriesB();
    fetchPositiveDistro()

  }, [])
  async function fetchTotalEventsByNameChart() {
    const totalEventsChartByName = await getTotalEventsChartByName("retry");
    setTotalEventsByNameChart(totalEventsChartByName);
  }


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last Month
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        { <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={getEventNegativeSeriesGroupChartA?.data}
                type="Line"
                options={getEventNegativeSeriesGroupChartA.options}
                listener={getEventNegativeSeriesGroupChartA.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Eventos negativos no Grupo A</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem> }
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={getEventPositiveSeriesGroupChartA?.data}
                type="Line"
                options={getEventPositiveSeriesGroupChartA?.options}
                responsiveOptions={getEventPositiveSeriesGroupChartA?.responsiveOptions}
                listener={getEventPositiveSeriesGroupChartA?.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Eventos positivos no Grupo A</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={totalEventsByNameChart?.data}
                type="Bar"
                options={totalEventsByNameChart?.options}
                listener={totalEventsByNameChart?.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Total de "retry"</h4>
              <p className={classes.cardCategory}>Total de "retry" por grupo</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        { <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={getEventNegativeSeriesGroupChartB.data}
                type="Line"
                options={getEventNegativeSeriesGroupChartB.options}
                listener={getEventNegativeSeriesGroupChartB.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Eventos negativos no Grupo B</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem> }
        { <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={getEventPositiveSeriesGroupChartB?.data}
                type="Line"
                options={getEventPositiveSeriesGroupChartB?.options}
                responsiveOptions={getEventPositiveSeriesGroupChartB?.responsiveOptions}
                listener={getEventPositiveSeriesGroupChartB?.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Eventos positivos no Grupo B</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem> }
        { <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={getPositiveDistro?.data}
                type="Bar"
                options={getPositiveDistro?.options}
                listener={getPositiveDistro?.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Total eventos positivos</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem> }
      </GridContainer>
      <GridContainer>
        {/* <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Total Group A</h4>
              <p className={classes.cardCategoryWhite}>
                Total Group A - February, 2021
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableHead={["Name", "Average Value", "Country"]}
                tableData={[
                  ["Dakota Rice", "$738", "Niger"],
                  ["Minerva Hooper", "$789", "Curaçao"],
                  ["Sage Rodriguez", "$142", "Netherlands"],
                  ["Philip Chaney", "$735", "Korea, South"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Total Group B</h4>
              <p className={classes.cardCategoryWhite}>
                Total Group B - February, 2021
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableHead={["Name", "Average Value", "Country"]}
                tableData={[
                  ["Dakota Rice", "$738", "Niger"],
                  ["Minerva Hooper", "$789", "Curaçao"],
                  ["Sage Rodriguez", "$142", "Netherlands"],
                  ["Philip Chaney", "$735", "Korea, South"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem> */}
      </GridContainer>
    </div>
  );
}
