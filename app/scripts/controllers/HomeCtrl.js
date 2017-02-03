(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        this.roomModal = function() {
            Room.newRoom($uibModal);
        };
        this.deleteModal = function(roomToDelete) {
            Room.confirmDelete($uibModal, roomToDelete);
        };
//        this.openModal = function() {
//            $uibModal.open({
//                templateUrl: "/templates/modal.html", 
//                controller: 'ModalCtrl as modal'
//            });
//        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
