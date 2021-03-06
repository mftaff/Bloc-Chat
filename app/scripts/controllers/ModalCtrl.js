(function () {
    function ModalCtrl(Room, $uibModalInstance) {
        this.saveRoom = function(roomName) {
            Room.saveRoom(roomName);
            this.closeModal();
        };
        this.deleteRoom = function() {
            Room.deleteRoom(Room.roomToDelete);
            this.closeModal();
        };
        this.closeModal = function() {
            Room.closeModal($uibModalInstance);
        };
        this.checkUser = function(newUsername) {
            return Room.checkUser(newUsername);
        };
        this.setUser = function(user) {
            Room.setUser(user);
            this.closeModal();
        };
    }
    
    angular 
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();