(function() {
    function HomeCtrl(Room, Message, $uibModal) {
        this.rooms = Room.all;
        this.messages = [];
        this.openRoom = "[Click on a Room to display]";
        this.roomModal = function() {
            Room.newRoom($uibModal);
        };
        this.deleteModal = function(roomToDelete) {
            Room.confirmDelete($uibModal, roomToDelete);
        };
        this.viewRoom = function(room) {
            this.openRoom = Room.viewRoom(room.name);
            this.messages = Message.getByRoomId(room.$id);
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
