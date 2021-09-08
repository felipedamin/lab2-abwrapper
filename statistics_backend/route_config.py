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

SQL_POS_SERIES_GROUP = '''
    SELECT
        bucket_date,
        event_name,
        test_group,
        n_events
    FROM public.agg_stock_daily_events
    WHERE test_group = '{group_name}'
            AND event_name = 'positive';
'''

SQL_NEG_SERIES_GROUP = '''
    SELECT
        bucket_date,
        event_name,
        test_group,
        n_events
    FROM public.agg_stock_daily_events
    WHERE test_group = '{group_name}'
            AND event_name = 'negative';
'''

SQL_TOTAL_POS = '''
    SELECT
        test_group,
        COUNT(id)
    FROM public.events
    WHERE test_group = 'A' OR test_group = 'B'
    GROUP BY test_group;
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
        df = pd.read_sql(SQL_POS_SERIES_GROUP.format(group_name='A'), conn).sort_values(by='bucket_date')

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
        df = pd.read_sql(SQL_POS_SERIES_GROUP.format(group_name='B'), conn).sort_values(by='bucket_date')

    response = {
        'labels': list(x.strftime('%Y-%m-%d') for x in df['bucket_date'].values),
        'series': [list(int(x) for x in df['n_events'].values)]
    }

    response = make_response(jsonify(response), 200)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.route('/api/series/group/an')
def get_negative_series_a():
    conf = get_config()
    with psycopg2.connect(**conf) as conn:
        df = pd.read_sql(SQL_NEG_SERIES_GROUP.format(group_name='A'), conn).sort_values(by='bucket_date')

    response = {
        'labels': list(x.strftime('%Y-%m-%d') for x in df['bucket_date'].values),
        'series': [list(int(x) for x in df['n_events'].values)]
    }

    response = make_response(jsonify(response), 200)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.route('/api/series/group/bn')
def get_negative_series_b():
    conf = get_config()
    with psycopg2.connect(**conf) as conn:
        df = pd.read_sql(SQL_NEG_SERIES_GROUP.format(group_name='B'), conn).sort_values(by='bucket_date')

    response = {
        'labels': list(x.strftime('%Y-%m-%d') for x in df['bucket_date'].values),
        'series': [list(int(x) for x in df['n_events'].values)]
    }

    response = make_response(jsonify(response), 200)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.route('/api/distros/pos')
def get_positive_distros():
    conf = get_config()
    with psycopg2.connect(**conf) as conn:
        df = pd.read_sql(SQL_TOTAL_POS, conn)

    response = {
        'labels': list(str(x) for x in df['test_group'].values),
        'series': [list(int(x) for x in df['count'].values)]
    }
    response = make_response(jsonify(response), 200)
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response