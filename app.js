var app = angular.module('redditApp', []);

app.controller('globalController', function($scope){
    $scope.postArray = [];
    $scope.movePostObject = function(post){
        post.votes = Number(0);
        $scope.postArray.push(post);
        $scope.post = {};
    }
    $scope.upVote = function(post){
       this.post.votes++
    }
    $scope.downVote = function(post){
        this.post.votes--
    }
});

app.controller('commentController', function($scope){
    $scope.commentArray = [];
    $scope.moveCommentObject = function(comment){
        console.log('this function hits')
        comment.amount = Number(0);
        $scope.commentArray.push(comment);
        $scope.comment = {};
        this.comment.amount++
    }
});
