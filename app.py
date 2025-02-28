from flask import Flask, jsonify, send_from_directory
import pandas as pd
import os

app = Flask(__name__, static_folder=".")

df = pd.read_csv("dump.csv")
df.columns = df.columns.str.strip() 

def format_data():
    companies = df['index_name'].unique().tolist()
    data = {company: df[df['index_name'] == company][['index_date', 'closing_index_value']].to_dict(orient='records') for company in companies}
    return companies, data

companies, stock_data = format_data()

@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

@app.route('/style.css')
def serve_css():
    return send_from_directory('.', 'style.css')

@app.route('/script.js')
def serve_js():
    return send_from_directory('.', 'script.js')

@app.route('/companies')
def get_companies():
    return jsonify(companies)

@app.route('/data/<company>')
def get_company_data(company):
    return jsonify(stock_data.get(company, []))

if __name__ == '__main__':
    app.run(debug=True)
