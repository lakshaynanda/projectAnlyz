from django.contrib import admin
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from django.urls import include
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('token-auth/', obtain_jwt_token),   
    path('core/', include('core.urls')),
]
