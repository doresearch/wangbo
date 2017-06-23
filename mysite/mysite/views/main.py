# -*- coding: utf-8 -*-

from django.views.decorators.http import require_http_methods
from django.shortcuts import render

from mysite.models import Person

@require_http_methods(["GET", "POST"])
def aaaaa(request):
    person = Person.objects.filter().first()
    return render(request, 'main/aaaaa.html', {
        'one': person,
        })