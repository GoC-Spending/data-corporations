# Data Corporations

## Install

NodeJS is required

```bash
$ npm install
```

## Run Scraper

```bash
$ npm run scraper

Login | retrieve new CookieJar
Get details | offset: 34475
Parsing links | total: 51709
Found links: 25
Get corporations: 24
Saving HTML: 293324750000
Saving HTML: 306180290000
Saving HTML: 234567150009
Saving HTML: 234567151960
Saving HTML: 234567067124
```

## Parse Metadata

```bash
$ npm run metadata

  processing [====================] 100% 1054/1054
```

## Datasets

- [corporations.json](https://github.com/GoC-Spending/data-corporations/blob/master/corporations.json)

```
[
{
  "operatingName": "PACE (Providing Assistance Counselling and Education)",
  "telephone": "(780) 539-6692",
  "email": "pacegp@pacegp.ca",
  "yearEstablished": 1981,
  "exporting": "No",
  "mailingAddress": "10031 103rd Ave GRANDE PRAIRIE, Alberta T8V 1B9 ",
  "locationAddress": "10031 103rd Ave GRANDE PRAIRIE, Alberta T8V 1B9 ",
  "primaryIndustry": "624190 - Other Individual and Family Services",
  "primaryIndustryNAICS": 624190,
  "primaryBusinessActivity": "Services",
  "filename": "234567004510.html"
}
]
```