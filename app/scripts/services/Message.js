(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        return {
            all: messages,
            getByRoomId: function (roomId) {
                var roomMessages = [];
                
                messages.forEach(function(message) {
                     if (message.roomId === roomId) {
                         roomMessages.push(message);
                     }                    
                });
                
                return roomMessages;
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();