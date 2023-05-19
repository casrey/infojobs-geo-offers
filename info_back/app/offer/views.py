from rest_framework.decorators import api_view
from rest_framework.response import Response
from .helpers import make_external_request
from .models import Offer


@api_view(['GET'])
def index(request):
    keyword = request.GET.get('keyword')
    response = make_external_request(f'https://api.infojobs.net/api/9/offer?country={keyword}')
    return Response(response)
