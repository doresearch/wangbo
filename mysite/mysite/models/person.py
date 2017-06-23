# -*- coding: utf-8 -*-

from django.utils.translation import ugettext_lazy as _
from django.utils import timezone
from django.db import models

class Person(models.Model):

    email       = models.EmailField(_(u'メールアドレス'), max_length=255, null=False, blank=False)
    user_name   = models.CharField(_(u'ユーザー名'), max_length=100, null=False, blank=False)
    apply_begin = models.DateField(_(u'適用開始日'), null=False, blank=False, default=timezone.now)

    class Meta:
        app_label = 'mysite'
        db_table  = 'm_person'
