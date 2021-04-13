from flask import render_template, Blueprint, redirect, url_for, flash, request, jsonify, make_response
from application.forms import login_form
from application.models import Users
from application import db, app
from flask_login import login_user, login_required, logout_user, current_user

core = Blueprint('core', __name__, template_folder = 'templates/core')

@core.route('/')
def index():
  return app.send_static_file("index.html")

@core.route('/<string:path>')
def catch_all(path):
  return app.send_static_file("index.html")