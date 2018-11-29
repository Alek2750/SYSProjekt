function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  
  console.log(randomDate(new Date(2018, 11, 27), new Date()));