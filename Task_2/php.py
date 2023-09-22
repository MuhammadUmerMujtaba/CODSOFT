from flask import Flask, make_response

app = Flask(__name__)

@app.route('/')
def set_cookie():
    resp = make_response("Setting SameSite=None and Secure cookie")
    resp.set_cookie('myCookie', 'myValue', samesite='None', secure=True)
    return resp

if __name__ == '__main__':
    app.run()