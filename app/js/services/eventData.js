// eventsApp.factory("eventData", function () {
//     return {
//         event: {
//             name: "Angular PoC",
//             date: "1/1/2001",
//             time: "10:30 PM",
//             location: {
//                 address: "Infosys Campus",
//                 city: "Bangalore",
//                 state: "KA"
//             },
//             imageUrl: "/img/angularjs-logo.png",
//             sessions: [{
//                 name: "Directive Masterclass",
//                 creatorName: "RMK",
//                 duration: 1,
//                 level: "Advanced",
//                 abstract: "In this session you will learn ins and outs of directives",
//                 upVoteCount: 0
//             }, {
//                 name: "Scope for fun and profit",
//                 creatorName: "RMK",
//                 duration: 2,
//                 level: "Introductory",
//                 abstract: "In this session you will learn ins and outs of scopes",
//                 upVoteCount: 0
//             }, {
//                 name: "Well behaved controller",
//                 creatorName: "RMK",
//                 duration: 3,
//                 level: "Intermediate",
//                 abstract: "In this session you will learn ins and outs of controllers",
//                 upVoteCount: 0
//             }]
//         }
//     };
// });

eventsApp.factory("eventData", function ($http, $log, $resource) {
    var resource = $resource("/data/event/:id", {id: "@id"});
    return {
        getEvent: function () {
            //return $http({method:"GET",url:"/data/event/1"});
            return resource.get({
                id: 100
            });
            // success(function(data,status,headers,config)
            // {
            //     success(data);
            // }).error(function(data,status,headers,config)
            // {
            //     $log.warn(data,status,headers,config);
            // });

        },
        save:function(event){
            event.id =100;
            return resource.save(event);
        }
    }
})