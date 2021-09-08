import os
from route_config import *
from utils import get_config
import psycopg2

from flask_apscheduler import APScheduler

def update_aggs():
    conf = get_config()
    conn = psycopg2.connect(**conf)
    cur = conn.cursor()
    cur.execute('call db_event_store.update_aggs();')
    conn.commit()
    cur.close()
    conn.close()

app.debug = True
host = os.environ.get('IP', '0.0.0.0')
port = int(os.environ.get('PORT', 8080))

# Scheduler
scheduler = APScheduler()
scheduler.add_job(func=update_aggs, trigger='interval', id='job', seconds=60*10)
scheduler.start()

app.run(host=host, port=port)