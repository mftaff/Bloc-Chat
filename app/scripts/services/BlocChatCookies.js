(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: "/templates/modals/usernameModal.html", 
                controller: 'ModalCtrl as modal',
                backdrop: 'static',
                keyboard: false
                });
//                .result.then(function(newUsername) {
//                    console.log(newUsername);
//                    $cookies.put("blocChatCurrentUser", newUsername);
//                });
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();