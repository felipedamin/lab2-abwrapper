import json


def get_config():
    with open('config.json', 'r') as f:
        conf = json.loads(f.read())
    return conf