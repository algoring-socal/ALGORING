from django.urls import re_path

from main import views

urlpatterns = [
    # API: url submit
    re_path(r'^api/v1/url_submit/?$', views.UrlSubmit.as_view(), name='url_submit'),

    # todo: inventory get API
    # todo: characters data should be saved as default
    # todo: characters display should match 3 when complete

    # Render App
    re_path('^.*$', views.main_page, name="main_page"),
]
