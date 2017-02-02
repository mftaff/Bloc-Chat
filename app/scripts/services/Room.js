(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child('rooms');
        var rooms = $firebaseArray(ref);
        
        this.modalInstance = undefined;
        
        return {
            all: rooms,
            newRoom: function($uibModal) {
                this.modalInstance = $uibModal.open({
                    templateUrl: "/templates/modal.html", 
                    controller: 'ModalCtrl as modal'
                });
            },
            saveRoom: function(roomName) {
                rooms.$add( {name: roomName} );
            },
            closeModal: function(modalInstance) {
                modalInstance.close();
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
