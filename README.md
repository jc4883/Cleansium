# README

Cleansium is a calendar web application to challenges users to build healthier dietary habits over four weeks. It is created using **React**, **Redux**, **Ruby on Rails**, **PostgreSQL**, and **Google Cloud Storage**.

Check out the live version [here](https://cleansium.herokuapp.com/).

## Inspiration

In the United States today, nearly 40% of adults over the age of 20 are obese. Everyone know the consequences of obesity, including increased risk to cancer, heart failure, or diabetes, but it's difficult to make the commitment to eating healthy. Personally, living alone in New York City, I've found that it's so much easier to eat junk food—advertisements and stores for it are everywhere. Cleansium works to start the process of practicing a better diet.

## Features

### Calendar Interface

Cleansium displays an index of all of the days in the four weeks. Each day is color coded by the rating the user has given on how much they craved fast foods that day. The hope is that there will be more green colored days (less fast food craving) as the challenge progresses.

This is what the calendar interface looks like:

![](days_index_demo.gif)

A technical achievement in implementing the calendar was only creating day entries to the database where a user has logged her progress. This meant creating a day index item regardless of whether an entry in the database existed, and populating a day only if the data existed in the backend for it. Here is a code snippet of the function used to populate an array of all the day index items:

```JavaScript 
  showDays() {
    let dayList = [];
    for (let i = 1; i <= 28; i++) {
      let found = false;
      let dayVals = Object.values(this.props.days);
      for (let j = 0; j < dayVals.length; j++) {
        if (i === dayVals[j].day_index) {
          let comment = dayVals[j].comment;
          let rating = dayVals[j].rating;
          let dayIndex = dayVals[j].day_index;
          let dayId = dayVals[j].id;
          dayList.push(
            <DayIndexItem
              comment={comment}
              rating={rating}
              dayIndex={dayIndex}
              submitted="true"
              dayId = {dayId}
            />
          );
          found = true;
          break;
        }
      }
      if (found === false) {
        dayList.push(<DayIndexItem dayIndex={i} submitted="false" />);
      }
    }

    return dayList;
  }
```

Using the array of DOM elements in `dayList`, I used a simple `.map()` to display each element of the array.

### Google Cloud Storage

Cleansium deploys Google Cloud Storage using FormData API to allow users to post what they ate each day. Utilizing Google Cloud Storage reduces the server load and allows users to upload and view large image files. Here is what that looks like:

![](photo_upload_demo.gif)

I implemented Google Cloud Storage using the google-cloud-storage Rails gem. The real trick to the implementation was to connect Rails' Active Storage to an external cloud storage service by changing the storage.yml configurations as follows:

```Ruby
google:
  service: GCS
  project: cleansium
  credentials: <%= ENV['GOOGLE_APPLICATION_CREDENTIALS'].as_json %>
  bucket: cleansium-bucket
google_dev:
  service: GCS
  project: cleansium
  credentials: <%= Rails.root.join("config/secrets/cleansium.json") %>
  bucket: cleansium-bucket
```

This allows files to be saved on Google servers rather than locally.

## In Conclusion

Thanks for checking out Cleansium! I'm passionate about keeping your body and mind healthy, which is why I had so much fun building this project in particular.

To see more of my projects, checkout my [portfolio](https://jc4883.github.io/), and make sure to look around my [Github](https://github.com/jc4883) as well.

Finally, go to my [LinkedIn](https://www.linkedin.com/in/peterchoi24/) to learn more about me.
    
