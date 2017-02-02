(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;
//        this.openModal = function() {
//            Room.newRoom($uibModal);
//        };
        this.openModal = function() {
            $uibModal.open({
                templateUrl: "/templates/modal.html", 
                controller: 'ModalCtrl as modal'
            });
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
