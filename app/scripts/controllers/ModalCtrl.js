(function () {
    function ModalCtrl(Room) {
        this.saveRoom = function(roomName) {
            Room.saveRoom(roomName);
            this.closeModal();
        };
        this.deleteRoom = function() {
            Room.deleteRoom(Room.roomToDelete);
            this.closeModal();
        };
        this.closeModal = function() {
            Room.closeModal(Room.modalInstance);
        };
    }
    
    angular 
        .module('blocChat')
        .controller('ModalCtrl', ['Room', ModalCtrl]);
})();