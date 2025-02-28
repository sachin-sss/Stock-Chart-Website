# Stock Chart Website
This is a simple web application that displays stock data for different companies using Flask, Pandas, Chart.js, HTML, CSS, and JavaScript.

### Features

- **Dropdown List of Companies**: Select a company from a dropdown.

- **Stock Chart Display**: When you click submit, the stock chart is displayed.

- **Flask Backend**: Serves API endpoints to fetch company names and stock data.

- **CSV Data Processing**: Reads stock data from dump.csv and processes it dynamically.

- **Interactive UI**: Uses Bootstrap for styling and Chart.js for data visualization.


### Installation and Setup

1. Install Dependencies

Ensure you have Python installed, then install Flask and Pandas:

```pip install flask pandas```

2. Place Required Files in the Same Directory

Ensure app.py, dump.csv, index.html, style.css, and script.js are all in the same folder.

3. Run the Flask App

```python app.py```

4. Open the Web Application

Once the server is running, open your browser and visit:

```http://127.0.0.1:5000/```


## Technologies Used

- **Backend**: Flask, Pandas

- **Frontend**: HTML, CSS (Bootstrap), JavaScript

- **Visualization**: Chart.js
