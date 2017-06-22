# -*- coding: utf-8 -*-

from django.views.decorators.http import require_http_methods
from django.shortcuts import render


@require_http_methods(["GET", "POST"])
def sfs_homepage(request):
    return render(request, 'sfs/homepage.html', {})


@require_http_methods(["GET", "POST"])
def sfs_company_message(request):
    return render(request,'sfs/company_message.html', {})


@require_http_methods(["GET", "POST"])
def sfs_company_idea(request):
    return render(request,'sfs/company_idea.html', {})


@require_http_methods(["GET", "POST"])
def sfs_company_business(request):
    return render(request,'sfs/company_business.html', {})


@require_http_methods(["GET", "POST"])
def sfs_company_employment(request):
    return render(request,'sfs/company_employment.html', {})
