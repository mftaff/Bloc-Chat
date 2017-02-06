(function() {
    function BlocChatCookies($cookies, Room, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
//            $uibModal.open({
//                templateUrl: "/templates/modals/usernameModal.html", 
//                controller: 'ModalCtrl as modal' ,
//                backdrop: 'static',
//                keyboard: 'false'
//                });
            Room.setUser($uibModal);
//                .result.then(function(newUser) {
//                $cookies.put("blocChatCurrentUser", newUser);
//            });
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', 'Room', BlocChatCookies]);
})();