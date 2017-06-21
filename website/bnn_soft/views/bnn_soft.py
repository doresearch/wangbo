# -*- coding: utf-8 -*-

from django.views.decorators.http import require_http_methods
from django.shortcuts import render

@require_http_methods(["GET", "POST"])
def bnn_homepage(request):
    return render(request, 'bnn_soft/homepage.html', {})


@require_http_methods(["GET", "POST"])
def bnn_company(request):
    return render(request,'bnn_soft/company.html', {})


@require_http_methods(["GET", "POST"])
def aaaa(request):
    return render(request,'bnn_soft/aaaa.html', {})


@require_http_methods(["GET", "POST"])
def bbbb(request):
    return render(request,'bnn_soft/bbbb.html', {})


@require_http_methods(["GET", "POST"])
def cccc(request):
    return render(request,'bnn_soft/cccc.html', {})