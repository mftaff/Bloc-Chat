(function() {
    function HomeCtrl(Room, Message, $uibModal) {
        this.rooms = Room.all;
        this.openRoom = "[Click on a Room to display]";
        this.roomModal = function() {
            Room.newRoom($uibModal);
        };
        this.deleteModal = function(roomToDelete) {
            Room.confirmDelete($uibModal, roomToDelete);
        };
        this.viewRoom = function(newRoom) {
            this.openRoom = Room.viewRoom(newRoom);  
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
