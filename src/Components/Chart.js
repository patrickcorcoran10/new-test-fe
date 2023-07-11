
// import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useQuery } from "@apollo/client";
import { Column } from "@ant-design/plots";

import { GET_MEAL_BY_USERNAME_AND_DATE } from "../utils/queries";
import { getUsernameFromToken, 
  // getFormattedDate 
} from "../utils/helpers";

const getTotalCalories = (data) => {
  let total = 0;
  data?.getMealsByUsernameAndDate?.forEach((meal) => {
    total = total + meal.calories;
  });
  return total;
}

const DemoColumn = () => {
  const mondayDate = dayjs().startOf("week").add(1, "day");
  const tuesdayDate = mondayDate.add("1", "day");
  const wednesdayDate = mondayDate.add("2", "day");
  const thursdayDate = mondayDate.add("3", "day");
  const fridayDate = mondayDate.add("4", "day");
  const saturdayDate = mondayDate.add("5", "day");
  const sundayDate = mondayDate.add("6", "day");
  

  //////////////////

  const { data: mondayData } = useQuery(GET_MEAL_BY_USERNAME_AND_DATE, {
    variables: {
      username: getUsernameFromToken(),
      date: mondayDate.format("YYYYMMDD")
    },
  });

  const { data: tuesdayData } = useQuery(GET_MEAL_BY_USERNAME_AND_DATE, {
    variables: {
      username: getUsernameFromToken(),
      date: tuesdayDate.format("YYYYMMDD")
    },
  });
  const { data: wednesdayData } = useQuery(GET_MEAL_BY_USERNAME_AND_DATE, {
    variables: {
      username: getUsernameFromToken(),
      date: wednesdayDate.format("YYYYMMDD")
    },
  });
  const { data: thursdayData } = useQuery(GET_MEAL_BY_USERNAME_AND_DATE, {
    variables: {
      username: getUsernameFromToken(),
      date: thursdayDate.format("YYYYMMDD")
    },
  });
  const { data: fridayData } = useQuery(GET_MEAL_BY_USERNAME_AND_DATE, {
    variables: {
      username: getUsernameFromToken(),
      date: fridayDate.format("YYYYMMDD")
    },
  });
  const { data: saturdayData } = useQuery(GET_MEAL_BY_USERNAME_AND_DATE, {
    variables: {
      username: getUsernameFromToken(),
      date: saturdayDate.format("YYYYMMDD")
    },
  });
  const { data: sundayData } = useQuery(GET_MEAL_BY_USERNAME_AND_DATE, {
    variables: {
      username: getUsernameFromToken(),
      date: sundayDate.format("YYYYMMDD")
    },
  });


  /////////////////

  const mondayCalories = getTotalCalories(mondayData);
  const tuesdayCalories = getTotalCalories(tuesdayData);
  const wednesdayCalories = getTotalCalories(wednesdayData);
  const thursdayCalories = getTotalCalories(thursdayData);
  const fridayCalories = getTotalCalories(fridayData);
  const saturdayCalories = getTotalCalories(saturdayData);
  const sundayCalories = getTotalCalories(sundayData);

  /////////////

  console.log(mondayCalories)
  console.log(tuesdayCalories)
  console.log(wednesdayCalories)
  console.log(thursdayCalories)
  console.log(fridayCalories)
  console.log(saturdayCalories)
  console.log(sundayCalories)

  const dummyData = [
    {
      type: "Monday",
      value: mondayCalories,
    },
    {
      type: "Tuesday",
      value: tuesdayCalories,
    },
    {
      type: "Wednesday",
      value: wednesdayCalories,
    },
    {
      type: "Thursday",
      value: thursdayCalories,
    },
    {
      type: "Friday",
      value: fridayCalories,
    },
    {
      type: "Saturday",
      value: saturdayCalories,
    },
    {
      type: "Sunday",
      value: sundayCalories,
    },
  ];

  const paletteSemanticRed = "#F4664A";
  const brandColor = "#5B8FF9";
  const config = {
    data: dummyData,
    xField: "type",
    yField: "value",
    seriesField: "",
    color: ({ type }) => {
      if (type === "10-30分" || type === "30+分") {


        return paletteSemanticRed;
      }

      return brandColor;
    },
    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);

        if (val < 0.05) {

          return (val * 100).toFixed(1) + "%";

        }
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
