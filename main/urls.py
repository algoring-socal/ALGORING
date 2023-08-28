from django.urls import re_path

from main import views

urlpatterns = [
    # API: url submit
    re_path(r'^api/v1/url_submit/?$', views.UrlSubmit.as_view(), name='url_submit'),

    # todo: inventory get API
    # todo: characters display should match 3 when complete

    # characters data should be saved as default
    # 배포할때 디비에 수동으로 캐릭터 추가

    # Render App
    re_path('^.*$', views.main_page, name="main_page"),
]
