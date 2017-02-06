(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child('rooms');
        var rooms = $firebaseArray(ref);
        
        return {
            all: rooms,
            newRoom: function($uibModal) {
                this.modalInstance = $uibModal.open({
                    templateUrl: "/templates/modals/newRoomModal.html", 
                    controller: 'ModalCtrl as modal'
                });
            },
            confirmDelete: function($uibModal, roomToDelete) {
                this.roomToDelete = roomToDelete;
                this.modalInstance = $uibModal.open({
                    templateUrl: "/templates/modals/delRoomModal.html", 
                    controller: 'ModalCtrl as modal'
                });
            },
            setUser: function($uibModal) {
                this.modalInstance = $uibModal.open({
                templateUrl: "/templates/modals/usernameModal.html", 
                controller: 'ModalCtrl as modal' ,
                backdrop: 'static',
                keyboard: 'false'
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
                if (username === "") return true;
                if (/\S/.test(username)) return false;
                return true;
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
