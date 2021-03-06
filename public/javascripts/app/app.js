angular.module('edx-app',[
  'ngRoute',
  'ngStorage'
]).
  config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: '/javascripts/app/views/articles.html',
        controller: 'articles_controller'
      })
      .when('/blogs',{
        templateUrl: '/javascripts/app/views/blogs.html',
        controller: 'blogs_controller'
      })
      .when('/news',{
        templateUrl: '/javascripts/app/views/news.html',
        controller: 'news_controller'
      })
      .when('/sing_up',{
        templateUrl: 'javascripts/app/views/sign_up.html',
        controller: 'sign_up_controller'
      })

  });
