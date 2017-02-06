(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child('rooms');
        var rooms = $firebaseArray(ref);
        
        return {
            all: rooms,
            newRoom: function($uibModal) {
                $uibModal.open({
                    templateUrl: "/templates/modals/newRoomModal.html", 
                    controller: 'ModalCtrl as modal'
                });
            },
            confirmDelete: function($uibModal, roomToDelete) {
                this.roomToDelete = roomToDelete;
                $uibModal.open({
                    templateUrl: "/templates/modals/delRoomModal.html", 
                    controller: 'ModalCtrl as modal'
                });
            },
            saveRoom: function(roomName) {
                rooms.$add( {name: roomName} );
            },
            deleteRoom: function(toDelete) {
                rooms.$remove(toDelete);
            },
            closeModal: function(modalInstance) {
                modalInstance.close();
            },
            viewRoom: function(newRoom) {
                return newRoom;
            },
            checkUser: function(username) {
                if (username === "" || username === undefined) {
                    return true;
                } else if (/\S/.test(username)) {
                    return false;
                } else {
                    return true;
                }
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
