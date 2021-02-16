# Local environment setup

### Prerequisite
```
git clone git@github.com:yoshi0701/metaweather-app.git
cd metaweather-app

touch .env
```

Within .env file you need to add proxy url for avoid [CORS issue](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
```
REACT_APP_PROXY_URL="your hosting proxy url"
```

### run app locally
```
npm install
npm start
```
This is a test application using [external API](https://www.metaweather.com/api/) 
