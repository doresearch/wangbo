# -*- coding: utf-8 -*-

from django.views.decorators.http import require_http_methods
from django.shortcuts import render

@require_http_methods(["GET", "POST"])
def aaaaa(request):
    return render(request, 'main/aaaaa.html', {})