from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

# Create your views here.
def home(request):
    return render(request, "game_play/home.html", {})

def welcome(request):
    return render(request, "game_play/welcome.html", {})

@login_required
def protected(request):
    return render(request, "game_play/protected.html", {"user": request.user})

# is @login_required required for all log pages past log in?
def game(request):
    return render(request, "game_play/game.html") # , {"user": request.user} ?
""""
def my_view(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        # Redirect to a success page.
        ...
    else:
        # Return an 'invalid login' error message.
        ...
"""

def logout_view(request):
    logout(request)
    return redirect("/welcome")

    
    # Redirect to a success page.

#Welcome page

#User log-in 
    #Sessions (built-in - invisible but django is doing it)
    #csrf token
    #Forms
    #^ all in docs (what settings need to be changed to turn on)
    #protect your views (only show to authenticated users)

#Progress page 

#Flash-card

#Maze-game

#Mushroom information


