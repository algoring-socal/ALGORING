# ALGORING :dango:

Local에 설치하기

1. 프론트앤드 노드 패키지 다운받기
~~~
static -> algoring_react 들어가서 yarn install
~~~
2. 가상환경 만들기
~~~
python -m venv [이름]

source ~/...[이름]/bin/activate
~~~
3. 백앤드 패키지 다운받기
~~~
pip install -r requirements.txt

깜빡한 pip install djangorestframework
~~~

3.5 Gitignore 프론트, 백 추가하기

4. 데이터베이스 만들기
~~~
algoring_v1
~~~
5. 데이터베이스에 모델 적용하기
~~~
python manage.py migrate
~~~
6. 서버 돌려보기
~~~
python manage.py runserver --noreload
~~~


*프론트엔드 업데이트 시 빌드!

알고링 화이팅! :dancer:
