var app = angular.module('redditApp', []);

app.controller('globalController', function($scope){
    $scope.visible = false;
    $scope.toggle = function(){
        $scope.visible = (!$scope.visible)? true: false;
    }

    $scope.showCommentsVisible = false;
    $scope.toggleVisibleComments = function(){
        $scope.showCommentsVisible = (!$scope.showCommentsVisible)? true:false;
    }

    $scope.postArray = [];
    $scope.showComments = false;
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

    $scope.commentArray = [];
    $scope.moveCommentObject = function(comment){
        console.log('this function hits')
        console.log(comment, 'coment in teh coment function')
        comment.amount = Number(0);
        $scope.commentArray.push(comment);
        $scope.comment = {};
    }
});

