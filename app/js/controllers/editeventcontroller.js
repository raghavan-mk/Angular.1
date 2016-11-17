"use strict"

eventsApp.controller("editEventController",
    function ($scope) {
        $scope.saveEvent = function (event,newEventForm) {
           
            if(newEventForm.$valid)
            {
                window.alert("event " + event.Name +" saved");               

            }
        };

        $scope.cancelEdit = function () {
            window.location ="/eventdetails.html";
        };
    });