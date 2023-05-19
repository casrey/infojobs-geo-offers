import requests
import environ

env = environ.Env()

INFOJOBS_TOKEN = env('INFOJOBS_TOKEN')

header = {
    "Authorization": f"Basic {INFOJOBS_TOKEN}"}


def make_external_request(endpoint):
    response = requests.get(endpoint, headers=header)
    data = response.json()
    return data
