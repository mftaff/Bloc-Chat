(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        return {
            all: messages,
            getByRoomId: function (roomId) {
            // Filter the messages by their room ID.
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();