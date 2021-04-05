from flask import Flask
# app reference
app = Flask(__name__)

@app.route('/api/students')
def get_students_list():
    return "Student list[GET]"

