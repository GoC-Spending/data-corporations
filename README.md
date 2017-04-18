# Detailed Canadian Companies

> Find companies that can supply your organization with the goods, services and technology it needs.

## Install

[NodeJS](https://nodejs.org/en/) is required.

```bash
$ npm install
```

## Download Data

- Download `html` from [Canadian Company Capabilities](https://www.ic.gc.ca/app/ccc/srch/).

```bash
$ npm run download

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

## Process Data

- Process HTML data to JSON
- Convert JSON to CSV

```bash
$ npm run start

> data-corporations@0.1.0 start /Users/mac/Github/data-corporations
> npm run metadata && npm run json2csv


> data-corporations@0.1.0 metadata /Users/mac/Github/data-corporations
> node metadata.js

  processing [====================] 100% 51709/51709

> data-corporations@0.1.0 json2csv /Users/mac/Github/data-corporations
> json2csv -i data/corporations.json > data/corporations.csv
```

## Datasets

- [corporations.json](https://github.com/GoC-Spending/data-corporations/blob/master/data/corporations.json)
- [corporations.csv](https://github.com/GoC-Spending/data-corporations/blob/master/data/corporations.csv)

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