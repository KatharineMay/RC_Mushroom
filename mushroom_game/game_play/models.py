from django.db import models
from django.contrib.auth import get_user_model

"""
3-step guide to changing models
Change your models (in models.py).
Run python manage.py makemigrations to create migrations for those changes
Run python manage.py migrate to apply those changes to the database.
"""
# Create your models here.

User = get_user_model()


# customer User
class UserProfile(models.Model):
    user = models.OneToOneField(User, models.CASCADE)











"""class Mushroom_image(models.Model):
    
    def __str__(self):
        return self.question_text
    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.pub_date <= now
    datetime.timedelta(days=1)
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    
    FileField"""

"""
class Choice(models.Model):
    def __str__(self):
        return self.choice_text
    question = models.ForeignKey(Mushroom_image, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    #choice = (want to be able to store the selected choice??)
"""
#class Login(models.Model):


#Flash-card
    #Mushroom picture

    #Multiple choice options

#Maze-game
    #Game screen 

    #Controls

#Future:
    #Information page
        #List of mushrooms within game
            # Information about each mushroom


