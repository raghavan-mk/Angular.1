"use strict";

eventsApp.controller("eventController", function ($scope, $log, eventData) {
    $scope.snippet = "<span style=\"color:red\">ng-bind-html example</span>";
    $scope.myStyle = {
        color: "red"
    };
    $scope.myClass = "blue";
    $scope.boolValue = true;
    $scope.btnDisabled = true;
    $scope.sortOrder = "name";
    // eventData.getEvent(function (event) {
    //     //console.log(eventData.event);
    //     $scope.event = event;
    // });

    // eventData.getEvent().
    // success(function (event) {
    //     $scope.event = event;
    // }).
    // error(function (data, status, header, config) {
    //     $log.warn(data, status, header, config);
    // });

    // $scope.event = eventData.getEvent();

    eventData.getEvent().
    $promise.then(
        function (event) {
            $scope.event = event;
            console.log(event)
        }).catch(
        function (response) {
            $log.warn(response);
        }
    );

    $scope.upVoteSession = function (session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function (session) {
        if (session.upVoteCount > 0)
            session.upVoteCount--;
    };
});