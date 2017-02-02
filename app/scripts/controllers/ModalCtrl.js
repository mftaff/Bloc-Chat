(function () {
    function ModalCtrl(Room) {
        this.saveRoom = function(roomName) {
            Room.saveRoom(roomName);
            Room.closeModal(Room.modalInstance);
        };
    }
    
    angular 
        .module('blocChat')
        .controller('ModalCtrl', ['Room', ModalCtrl]);
})();