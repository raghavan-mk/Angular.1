"use strict";

eventsApp.controller("eventController", function ($scope) {
    $scope.snippet="<span style=\"color:red\">ng-bind-html example</span>";
    $scope.myStyle= {color:"red"};
    $scope.myClass="blue";
    $scope.boolValue = true;
    $scope.btnDisabled = true;
    $scope.sortOrder = "name";
    $scope.event = {
        name: "Angular PoC",
        date: "1/1/2001",
        time: "10:30 PM",
        location: {
            address: "Infosys Campus",
            city: "Bangalore",
            state: "KA"
        },
        imageUrl: "/img/angularjs-logo.png",
        sessions: [{
            name: "Directive Masterclass",
            creatorName: "RMK",
            duration: 1,
            level: "Advanced",
            abstract: "In this session you will learn ins and outs of directives",
            upVoteCount: 0
        }, {
            name: "Scope for fun and profit",
            creatorName: "RMK",
            duration: 2,
            level: "Introductory",
            abstract: "In this session you will learn ins and outs of scopes",
            upVoteCount: 0
        }, {
            name: "Well behaved controller",
            creatorName: "RMK",
            duration: 3,
            level: "Intermediate",
            abstract: "In this session you will learn ins and outs of controllers",
            upVoteCount: 0
        }]
    }

    $scope.upVoteSession = function (session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function (session) {
        if(session.upVoteCount > 0)
        session.upVoteCount--;
    };
});