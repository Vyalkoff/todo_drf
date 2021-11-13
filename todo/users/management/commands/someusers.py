from django.core.management.base import BaseCommand
from users.models import Users
from names import get_first_name, get_last_name


class Command(BaseCommand):

    def handle(self, *args, **options):
        Users.objects.all().delete()
        Users.objects.create_superuser('vlad', 'vlad@mail.ru', '1')
        for i in range(8):
            random_first = get_first_name()
            random_last = get_last_name()
            Users.objects.create(first_name=random_first, last_name=random_last,
                                 username=random_first[:-2],
                                 email=f'{random_first[:-2]}@mail.ru')
