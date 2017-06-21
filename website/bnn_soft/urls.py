"""bnn_soft URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin

from bnn_soft.views import *

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^homepage/', bnn_homepage, name='bnn_soft.bnn_homepage'),
    url(r'^company/', bnn_company, name='bnn_soft.bnn_company'),
    url(r'^aaaa/', aaaa, name='bnn_soft.aaaa'),
    url(r'^bbbb/', bbbb, name='bnn_soft.bbbb'),
    url(r'^cccc/', cccc, name='bnn_soft.cccc'),
]
