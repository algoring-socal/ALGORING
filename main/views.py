import json
import os

from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView

from algoring import settings
from main.controller.url_submit_controller import UrlSubmitController
from main.serializers import LogReportSerializer


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


class UrlSubmit(APIView):
    """
    An API View that returns a Log Report on an url submission.
    """
    def post(self, request):
        """
        POST request to initiate, validate, save a log of url submission.
        """
        url_submit_controller = UrlSubmitController(
            url_submitted=request.data.get('url_input')
        )

        res = url_submit_controller.validate()

        if res['success']:
            log_report = res['log_report']
            serializer = LogReportSerializer(log_report)
            return Response({
                'meta': {'code': 200},
                'data': serializer.data
            })
        else:
            log_report = res['log_report']
            serializer = LogReportSerializer(log_report)
            return Response({
                'meta': {'code': 404},
                'data': serializer.data
            })
