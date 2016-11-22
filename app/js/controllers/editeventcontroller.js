"use strict"

eventsApp.controller("editEventController",
    function ($scope,eventData) {
        $scope.saveEvent = function (event, newEventForm) {

            if (newEventForm.$valid) {
                //window.alert("event " + event.Name + " saved");
                eventData.save(event).
                $promise.then(
                    function (response) {
                        console.log(reponse);
                    }
                ).catch(
                    function (response) {
                        console.log(response);
                    }
                )

            }
        };

        $scope.cancelEdit = function () {
            window.location = "/eventdetails.html";
        };
    });