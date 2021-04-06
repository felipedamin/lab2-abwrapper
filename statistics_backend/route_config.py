from flask import Flask, jsonify, make_response
import pandas as pd
from utils import get_config
import psycopg2
from datetime import datetime

# app reference
app = Flask(__name__)

SQL_FULL_AGG = '''
    SELECT 
        *
    FROM public.agg_stock_daily_events;
'''

SQL_SERIES_GROUP = '''
    SELECT
        bucket_date,
        event_name,
        test_group,
        n_events
    FROM public.agg_stock_daily_events
    WHERE test_group = '{group_name}'
            AND event_name = 'positive';
'''


@app.route('/api/aggs')
def get_aggs():
    conf = get_config()
    with psycopg2.connect(**conf) as conn:
        df = pd.read_sql(SQL_FULL_AGG, conn)
    return str(df)


@app.route('/api/series/group/a')
def get_positive_series_a():
    conf = get_config()
    with psycopg2.connect(**conf) as conn:
        df = pd.read_sql(SQL_SERIES_GROUP.format(group_name='A'), conn)

    response = {
            'labels': list(x.strftime('%Y-%m-%d') for x in df['bucket_date'].values),
            'series': [list(int(x) for x in df['n_events'].values)]
        }

    response = make_response(jsonify(response), 200)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route('/api/series/group/b')
def get_positive_series_b():
    conf = get_config()
    with psycopg2.connect(**conf) as conn:
        df = pd.read_sql(SQL_SERIES_GROUP.format(group_name='B'), conn)

    response = {
            'labels': list(x.strftime('%Y-%m-%d') for x in df['bucket_date'].values),
            'series': [list(int(x) for x in df['n_events'].values)]
        }


    response = make_response(jsonify(response), 200)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response