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
        this.viewRoom = function(room) {
            this.currentRoomId = room.$id;
            this.openRoom = Room.viewRoom(room.name);
            this.messages = Message.getByRoomId(room.$id);
        };
        this.sendMessage = function(message) {
            Message.send(message, Room.getCurrentUser(), this.currentRoomId);
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
