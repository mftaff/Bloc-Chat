(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        
        return {
            getByRoomId: function (roomId) {
                return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
            },
            timeDate: function() {
                var currentdate = new Date(); 

                var time = function() {
                    var hour = undefined;
                    var minute = undefined;
                    var amPm = undefined;

                    var hr = currentdate.getHours();
                    var min = currentdate.getMinutes()

                    if (hr === 0) {
                        hour = 12;
                    } else if (hr < 13) {
                        hour = hr;
                    } else if (hr <= 23) {
                        hour = hr - 12;
                    }

                    if (hr <= 11) {
                        amPm = " am";
                    } else {
                        amPm = " pm";
                    }

                    if (min < 10) {
                        minute = "0" + min;
                    } else {
                        minute = min;
                    }

                    return hour + ":" + minute + amPm; 
                };

                var datetime = time() + '\n'
                    + currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear()  

                return datetime;        
            },
            send: function(message, user, roomId) {
                messages.$add({
                    content: message,
                    roomId: roomId,
                    sentAt: this.timeDate(),
                    username: user
                });
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();