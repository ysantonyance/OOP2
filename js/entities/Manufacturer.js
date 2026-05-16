export class Manufacturer {
  id;
  name;
  logoUrl; // or pfp
  rating;
  openingDate;
  schedule = [];
  workingTime = [];

  constructor(id, name, logoUrl, rating, openingDate, schedule, workingTime) {
    this.id = id;
    this.name = name;
    this.logoUrl = logoUrl;
    this.rating = rating;
    this.openingDate = openingDate;
    this.schedule = schedule;
    this.workingTime = workingTime;
  }

  info() {
    console.log(`id: ${this.id}`);
    console.log(`name: ${this.name}`);
    console.log(`logoUrl: ${this.logoUrl}`);
    console.log(`rating: ${this.rating}`);
    console.log(`openingDate: ${this.openingDate}`);
    console.log(`schedule: ${this.schedule}`);
    console.log(`workingTime: from: ${this.workingTime[0]} to ${this.workingTime[1]}`);
  }
}
