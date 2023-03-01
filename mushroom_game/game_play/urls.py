from django.urls import path

from . import views

urlpatterns = [
    path("home", views.home),
    path("pro", views.protected),
    path("logout", views.logout_view, name="logout"),
    path("welcome", views.welcome),
    path("game", views.game)
]




    # ex: /polls/5/
    #path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    # ex: /polls/5/results/
    #path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
    # ex: /polls/5/vote/
    #path('<int:question_id>/vote/', views.vote, name='vote'),

