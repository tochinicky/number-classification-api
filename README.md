# Number Classification API

## Description

A simple API that classifies a number based on its mathematical properties and provides a fun fact.

## Features

- Determines if a number is prime or perfect.
- Checks if a number is Armstrong.
- Returns sum of digits.
- Fetches a fun fact using Numbers API.

## API Endpoint

**GET** `/api/classify-number?number=371`

### Response Example

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```
