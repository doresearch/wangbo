"""sfs URL Configuration

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
from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin

from sfs.views import *

urlpatterns = [

    # django_admin
    url(r'^admin/', admin.site.urls),

    # sfs
    url(r'^homepage/',           sfs_homepage,           name='sfs.homepage'),
    url(r'^company_message/',    sfs_company_message,    name='sfs.company_message'),
    url(r'^company_idea/',       sfs_company_idea,       name='sfs.company_idea'),
    url(r'^comoany_business/',   sfs_company_business,   name='sfs.company_business'),
    url(r'^comoany_employment/', sfs_company_employment, name='sfs.company_employment'),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
