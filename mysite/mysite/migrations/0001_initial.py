# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=255, verbose_name='メールアドレス')),
                ('user_name', models.CharField(max_length=100, verbose_name='ユーザー名')),
                ('apply_begin', models.DateField(default=django.utils.timezone.now, verbose_name='適用開始日')),
            ],
            options={
                'db_table': 'm_person',
            },
        ),
    ]
