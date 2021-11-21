from .serializers import ContactSerializer, CategorySerializer, ProductSerializer, BannerSerializer
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Contact, Category, Product, Banner
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Q

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '=> Get All Routes',
        'http://localhost:8000/api/',
        '-------------------------------------------------------',
        '=> Get All Categories',
        'http://localhost:8000/api/category/',
        '-------------------------------------------------------',
        '=> Get All Products',
        'http://localhost:8000/api/products/',
        '-------------------------------------------------------',
    ]
    return Response(routes)

@api_view(['GET'])
def getCategorys(request):
    categorys = Category.objects.all()
    serializer = CategorySerializer(categorys, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('q')
    if(query == None):
        query=''
    
    words = query.split(" ")
    q_filters = Q()
    for word in words:
        q_filters |= Q(Title__icontains=word)

    products = Product.objects.filter(q_filters).order_by('-id')

    page = request.query_params.get('page')
    paginator = Paginator(products, 8)

    try:
        products = paginator.page(page)
    except PageNotAnInteger:
        products = paginator.page(1)
    except EmptyPage:
        products = paginator.page(paginator.num_pages)

    number = products.number

    page_rangeStart = products.paginator.page_range.start
    if (int(page_rangeStart) < int(number) - 3):
        page_rangeStart = number - 3

    page_rangeEnd = products.paginator.page_range.stop
    if (int(page_rangeEnd) > int(number) + 3):
        page_rangeEnd = number + 4

    serializer = ProductSerializer(products, many=True)
    return Response({
        'products': serializer.data,
        "num_pages": paginator.num_pages,
        "has_previous": products.has_previous(),
        "has_next": products.has_next(),
        "page_rangeStart": page_rangeStart,
        "page_rangeEnd": page_rangeEnd,
        'page': number
    })
    
@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createContact(request):
    data = request.data

    print(data)
    
    item = Contact(
        name=data['name'], 
        company=data['company'], 
        email=data['email'], 
        message=data['message']
    )
    item.save()

    serializer = ContactSerializer(item, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getBanner(request):
    banner = Banner.objects.last()
    serializer = BannerSerializer(banner, many=False)
    return Response(serializer.data)