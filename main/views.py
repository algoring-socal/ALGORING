import json
import os

from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

from algoring import settings


def main_page(request):

    context = {}
    app_base_path = '/static/algoring_react/build'
    # Add context for static files
    # Parse asset-manifest to get files generated from react build
    path_manifest = 'algoring/main/static/algoring_react/build/asset-manifest.json'
    path = os.path.join(os.path.dirname(settings.BASE_DIR), path_manifest)

    with open(path, 'r') as f:
        assets = json.load(f)

        context['main_js'] = app_base_path + assets['files']['main.js']
        context['main_css'] = app_base_path + assets['files']['main.css']

    return render(request, 'algoring_template/main.html', context)
