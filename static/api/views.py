from django.shortcuts import render
from django.http import JsonResponse


# Create your views here.
def test(request):
    if request.method == "GET":
        return JsonResponse({"data": "blah blah blah blah oh for sure"}, safe=False)