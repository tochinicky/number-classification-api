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

Installation & Running Locally 🚀

1. Clone the Repository

```bash
git clone https://github.com/your-username/number-classification-api.git
cd number-classification-api
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env File
   Add a .env file in the root directory and define:

```bash
PORT=3000
```

4. Running the Server

```bash
npm start
```

or use nodemon (if installed globally):

```bash
npm run dev
```

5. Test the API

```bash
curl http://localhost:3000/api/classify-number?number=371
```

API Endpoint

GET /api/classify-number?number=371

Response Example

```bash
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

Deployment 🌍

To Deploy on Azure (Using ACR & App Service)

1. Build and tag the Docker image:

```bash
docker build -t number-classification-api .
docker tag number-classification-api myregistry.azurecr.io/number-classification-api:v1
```

2. Log in to Azure and push the image:

```bash
az login
az acr login --name myregistry
docker push myregistry.azurecr.io/number-classification-api:v1
```

3. Deploy to Azure App Service (Container):

```bash
az webapp create --resource-group MyResourceGroup \
    --plan MyAppServicePlan \
    --name MyWebApp \
    --deployment-container-image-name myregistry.azurecr.io/number-classification-api:v1
```

4. Set environment variables (if needed):

```bash
az webapp config appsettings set --resource-group MyResourceGroup \
    --name MyWebApp \
    --settings NODE_ENV=production PORT=3000
```

5. Restart the App Service:

```bash
az webapp restart --name MyWebApp --resource-group MyResourceGroup
```

Contributing 🤝

Want to contribute? Feel free to fork the repo, create a new branch, and open a pull request!

License 📜

This project is licensed under the MIT License.
