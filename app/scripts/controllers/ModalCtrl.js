(function () {
    function ModalCtrl(Room) {
        this.saveRoom = function(roomName) {
            Room.saveRoom(roomName);
//            Room.closeModal(Room.newRoom;
        };
    }
    
    angular 
        .module('blocChat')
        .controller('ModalCtrl', ['Room', ModalCtrl]);
})();