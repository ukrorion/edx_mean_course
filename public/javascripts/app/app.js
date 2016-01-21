angular.module('edx-app',[
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
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

  });
